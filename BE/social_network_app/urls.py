"""social_network_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
import json

from django.conf.urls import url, include
from django.contrib import admin, auth
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from social.rest.user import UserSerializer as SocialUserSerializer
from django.db import IntegrityError
from django.http import JsonResponse, HttpResponseForbidden
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import serializers, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from social.models.user import User as SocialUser
from social.rest import router


@ensure_csrf_cookie
def get_csrf(request):
    token = request.META.get('CSRF_COOKIE')
    return JsonResponse({'token': token})


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


@api_view(['POST'])
@permission_classes((AllowAny,))
def login(request):
    data = request.data
    username = data.get('username', None)
    password = data.get('password', None)

    assert username is not None and password is not None, 'username o password mancanti'

    user = authenticate(username=username, password=password)

    if user is None:
        return HttpResponseForbidden()

    auth.login(request, user)

    socialuser = SocialUser.objects.filter(id=user.id).first()

    return Response(SocialUserSerializer(socialuser).data, status=status.HTTP_200_OK)


# la request contiene i dati
# che ho inviato tramite POST (user)


# api_view e' un decoratore che permette di ottenere
# direttamente la view di rest-Framework invece di django
@api_view(['POST'])
@permission_classes((AllowAny,))
def signup(request):
    # Salvo su data
    data = request.data
    # mi prendo user dal dict
    user = data.get('user', None)

    assert user is not None, 'user mancante'

    try:
        user = SocialUser.objects.create_user(**user)

    except IntegrityError:
        content = {'errorName': 'UserName Already Exist'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    except:
        content = {'errorName': 'Invalid Data'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    return Response(SocialUserSerializer(user).data, status=status.HTTP_201_CREATED)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^login/', login),
    url(r'^signup/', signup),
    url(r'^rest/', include(router.urls)),
    url(r'^rest-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^get-csrf-token/', get_csrf)
]
