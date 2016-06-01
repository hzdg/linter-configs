We use [ESLint] to lint our JavaScript code.

Our JavaScript is written using new features that may not be supported in some
(or any) browsers yet and compiled to compatible JavaScript using [Babel].

Copy `.eslintrc` to the root of your JavaScript project.


# Installation

You can install ESLint with npm:

```sh
npm install eslint
```


# Plugins

Because we write forward-compatible JavaScript with Babel, our linter config
specifies the use of the [babel-eslint parser][babel-eslint]. It must be
installed using npm:

```sh
npm install babel-eslint
```

We also use three ESLint plugins:

* [eslint-plugin-babel] for handling problematic Babel features
* [eslint-plugin-react] for enforcing React-specific rules
* [eslint-plugin-jsx-a11y] for ensuring accessibility when writing jsx

They need to be installed with npm:

```sh
npm install eslint-plugin-babel
npm install eslint-plugin-react
npm install eslint-plugin-jsx-a11y
```

# Editor Integration

* [linter-eslint] for Atom's [Linter][atom-linter].


[ESLint]: http://eslint.org
[Babel]: https://babeljs.io/
[linter-eslint]: https://atom.io/packages/linter-eslint
[atom-linter]: https://atom.io/packages/linter
[babel-eslint]: https://github.com/babel/babel-eslint
[eslint-plugin-babel]: https://github.com/babel/eslint-plugin-babel
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
