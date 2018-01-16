# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from social.models import User, Post


# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    pass
