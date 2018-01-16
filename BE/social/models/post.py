# coding=utf-8
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    # auto_now_add alla creation
    creation_timestamp = models.DateTimeField(auto_now_add=True)
    # auto_now all update perchè non deve essere aggiunto exnovo
    last_update_timestamp = models.DateTimeField(auto_now=True)
    author = models.ForeignKey('user', related_name="posts")
