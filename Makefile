.PHONY: help build up down test lint migrate provision-hub validate-topology enforce-policies

help:
	@echo "Network Landing Zone Platform - Management Commands"
	@echo "---------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Infrastructure)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "provision-hub      : Provision central hub network infrastructure"
	@echo "validate-topology  : Run validation on current network topology"
	@echo "enforce-policies   : Apply zero-trust network segmentation policies"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/terraform
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

provision-hub:
	docker-compose exec api python scripts/provision/hub_network.py

validate-topology:
	docker-compose exec api python scripts/validate/topology_check.py

enforce-policies:
	docker-compose exec api python scripts/audit/policy_enforcer.py
