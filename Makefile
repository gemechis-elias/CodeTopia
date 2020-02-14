

server:
	python manage.py runserver

compile_sass:
	sass ./static/scss/main.scss ./static/scss/main.css --style=compressed --watch

compile_ts:
	tsc --outFile ./static/js/main.js ./static/js/main.ts

local_test:
	coverage erase
	flake8
	coverage run manage.py test
	coverage report
	coverage html

travis_test:
	flake8
	python manage.py test