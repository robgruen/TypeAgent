# Copyright (c) Microsoft Corporation.
# Licensed under the MIT License.

# This is Guido's Makefile. Please don't make it complicated.

.PHONY: all
all: venv format check test build

.PHONY: format
format: venv
	venv/bin/black typeagent *.py

.PHONY: check
check: venv
	venv/bin/pyright --pythonpath venv/bin/python typeagent

.PHONY: test
test: venv
	venv/bin/python -m typeagent.podcasts testdata/npr.txt

.PHONY: demo
demo: venv
	venv/bin/python -m demo testdata/Episode_53_AdrianTchaikovsky_index

.PHONY: build
build: venv
	venv/bin/python -m build --wheel

# Not phony -- the venv directory is the product of this rule.
venv:
	python3 -m venv venv || (rm -rf venv && exit 1)
	venv/bin/pip -q install -r requirements.txt
	@venv/bin/python --version
	@venv/bin/pyright --version
	@venv/bin/black --version

.PHONY: clean
clean:
	rm -rf build dist venv *.egg-info
	find . -type d -name __pycache__ | xargs rm -rf

.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo "make help   # Help (this message)"
	@echo "make        # Same as 'make all'"
	@echo "make all    # venv, format, check, test, build"
	@echo "make format # Run black"
	@echo "make check  # Run pyright"
	@echo "make test   # Run import_podcast test"
	@echo "make test   # Run the demo of the week"
	@echo "make build  # Build the wheel (under dist/)"
	@echo "make venv   # Create venv/"
	@echo "make clean  # Remove build/, dist/, venv/, *.egg-info/"
