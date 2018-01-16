# Social AngularJS App

full-Stack "Starter" Application developed with Python, Django, DRF Rest Framework and AngularJS Framework



## Requirement

Python 2.7 for django 1.1
Postgresql or Mysql (Default Conf is With postgresql)

Postgres defaults settings.py:

'ENGINE': 'django.db.backends.postgresql',
'NAME': 'social_network',
'USER': 'postgres',
'PASSWORD': 'postgres',


## Back-End Setup

First install the python and Postgres/Mysql enviroment 


Then install Django and all dependencies with pip and virtualenvwrapper

Install all Django dependencies:

Django==1.11
djangorestframework
django-cors-headers
psycopg2


Run `pip install -r requirements.txt`



Now sync the database running migrations:

Run `python manage.py migrate`


Create an Admin Superuser (will ask to enter a password)

Run `python manage.py createsuperuser --email mail@example.com --username admin`
	


## Front-End Setup

Run `npm install && bower install` to install all front-end dependencies


## Serve

Run `python manage.py runserver` for serving the Back-End Application

Run Gulp Tasks `gulp angular` and `gulp bowe` to inject all dependencies

Run Gulp Tasks `gulp webserver` for serving the Front-End Application



### Enjoy!




the app is for demonstration purposes only


For information and support

matteosalvatiproietti@gmail.com

