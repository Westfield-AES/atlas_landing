.PHONY: install check build run generate-brand

install:
	npm ci

check:
	npm run check

build:
	npm run build

run:
	npm run dev

generate-brand:
	npm run brand:generate
