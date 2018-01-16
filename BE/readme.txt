mkvirtualenv "envname"
workon "envname"

inst inside "envname":

pip install ez_setup
pip install django
pip install djangorestframework
pip install django-cors-headers