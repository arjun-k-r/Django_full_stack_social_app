from rest_framework import routers
from social.rest.post import PostViewSet
from social.rest.user import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet),
router.register(r'posts', PostViewSet),
