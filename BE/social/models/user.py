from django.contrib.auth.models import User
from django.db import models


class User(User):
    MALE = 'M'
    FEMALE = 'F'
    GENDERS = (
        (MALE, 'MALE'),
        (FEMALE, 'FEMALE'),
    )

    birth_date = models.DateField()
    gender = models.CharField(max_length=255, choices=GENDERS)
    profession = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    profile_image = models.URLField(max_length=1024, null=True, blank=True)
    profile_cover = models.URLField(max_length=1024, null=True, blank=True)
    phone_number = models.CharField(max_length=255, null=True, blank=True)
    # manytomany sulla classe user per gestire chi followa chi ed il suo reverse (related_name)
    followed = models.ManyToManyField('self', related_name="followers", blank=True, symmetrical=False)

