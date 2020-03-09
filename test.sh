# Shell script for runing tests  locally

coverage erase
flake8
coverage run manage.py test
coverage report
coverage html