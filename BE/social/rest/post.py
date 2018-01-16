from rest_framework import serializers, viewsets
from social.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


# ViewSets define the view behavior.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def create(self, request, *args, **kwargs):
        request.data['author'] = request.user.id
        return super(PostViewSet, self).create(request, *args, **kwargs)
