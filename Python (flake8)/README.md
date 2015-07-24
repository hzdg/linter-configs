We use [flake8] to lint our Python code. Copy `setup.cfg` to the root of your
Python project.


# Installation

You can install flake8 with pip:

```sh
pip install flake8
```


# Plugins

We use two flake8 plugins:

* [pep8-naming] for enforcing naming conventions
* [flake8-docstrings] for enforcing docstring formatting conventions

Both must be installed with pip and require no additional configuration:

```sh
pip install pep8-naming
pip install flake8-docstrings
```


# Editor Integration

* [linter-flake8] for Atom's [Linter][atom-linter].


[flake8]: https://pypi.python.org/pypi/flake8
[pep8-naming]: https://pypi.python.org/pypi/pep8-naming
[flake8-docstrings]: https://pypi.python.org/pypi/flake8-docstrings
[linter-flake8]: https://atom.io/packages/linter-flake8
[atom-linter]: https://atom.io/packages/linter
