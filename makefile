start:
	if [ ! -f .env ]; then cp .env.example .env; fi

compose-build:
	docker-compose build

compose-up:
	docker-compose up -d

compose-down:
	docker-compose down
