

server:
	python manage.py runserver

compile_sass:
	sass ./static/scss/main.scss ./static/scss/main.css --style=compressed --watch