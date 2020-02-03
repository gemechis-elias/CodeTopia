
activate_env:
	pipenv shell

run: activate_env
	python manage.py runserver 0.0.0.0:8000