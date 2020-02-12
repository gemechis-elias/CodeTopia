

server:
	python manage.py runserver :8000

compile_sass:
	sass ./static/scss/main.scss ./static/scss/main.css --style=compressed --watch