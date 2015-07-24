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

We also use two eslint plugins:

* [eslint-plugin-babel] for handling problematic Babel features
* [eslint-plugin-react] for enforcing React-specific rules

Both need to be installed with npm:

```sh
npm install eslint-plugin-babel
npm install eslint-plugin-react
```

If you aren't using React in your project, you can skip installing that plugin
but you'll need to remove `"react"` from the `"plugins"` object in `.eslintrc`,
as well as all of the rules that start with "react/".


# Editor Integration

* [linter-eslint] for Atom's [Linter][atom-linter].


[ESLint]: http://eslint.org
[Babel]: https://babeljs.io/
[linter-eslint]: https://atom.io/packages/linter-eslint
[atom-linter]: https://atom.io/packages/linter
[babel-eslint]: https://github.com/babel/babel-eslint
[eslint-plugin-babel]: https://github.com/babel/eslint-plugin-babel
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
