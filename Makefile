.PHONY: help build up down test lint migrate simulate-failure failover sync-data

help:
	@echo "Multi-Region Application Patterns - Management Commands"
	@echo "------------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Resilience flows)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations per region"
	@echo "simulate-failure   : Trigger a regional failure scenario"
	@echo "failover           : Manually trigger a regional failover"
	@echo "sync-data          : Run cross-region data synchronization"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/failover tests/replication
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api-region-a alembic upgrade head
	docker-compose exec api-region-b alembic upgrade head

simulate-failure:
	docker-compose exec api-region-a python scripts/simulate-failure/trigger.py --region us-east-1

failover:
	docker-compose exec global-gateway python scripts/failover/orchestrate.py --from us-east-1 --to eu-west-1

sync-data:
	docker-compose exec api-region-a python scripts/sync/geo_replicator.py
