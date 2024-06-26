install:
	npm ci

build:
	docker build -t docker-example .

run:
	docker-compose up
