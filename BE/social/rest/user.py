from django.conf.urls import url, include
from rest_framework import serializers, viewsets, status
from rest_framework.decorators import detail_route
from rest_framework.fields import SerializerMethodField
from rest_framework.response import Response

from social.models import User, Post

# Serializers define the API representation.
from social.rest.post import PostSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'birth_date',
            'gender',
            'profession',
            'country',
            'city',
            'profile_image',
            'profile_cover',
            'phone_number',
            'followed',
            'followers',
            'username',
            'first_name',
            'last_name',
            'email',
            'is_staff',
            'is_active',
            'date_joined')


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().prefetch_related('followers')
    serializer_class = UserSerializer

    # def filter_queryset(self, queryset):
    #     queryset = queryset.exclude(id=self.request.user.id)
    #     return super(UserViewSet, self).filter_queryset(queryset)

    @detail_route(methods=['get'])
    def posts(self, request, pk):
        posts = Post.objects.filter(author=pk).order_by('-creation_timestamp')
        page = self.paginate_queryset(posts)

        if not page:
            return Response(PostSerializer(posts, many=True).data, status=status.HTTP_200_OK)
        return self.get_paginated_response(PostSerializer(page, many=True).data)


