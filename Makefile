#!make
SHELL:=/bin/bash

NOW:=$(shell date -u +%Y-%m-%dT%H:%M:%S%Z)

# pp - pretty print function
yellow := $(shell tput setaf 3)
normal := $(shell tput sgr0)
define pp
	@printf '$(yellow)$(1)$(normal)\n'
endef

.PHONY: help
help: Makefile
	@echo " Choose a command to run:"
	@sed -n 's/^##//p' $< | column -t -s ':' | sed -e 's/^/ /'

## start: 🟢 run the test, output results
.PHONY: start
start:
	$(call pp,starting api...)
	npm run start
