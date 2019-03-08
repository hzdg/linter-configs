# eslint-config-hzdg

We use [ESLint] to lint our JavaScript (and TypeScript) code.

We also use [Prettier] to format our code.

Our config is organized into a set of composable, extendable eslint configs.

This means that you can mix and match our configs. For example, if you
are writing [TypeScript](#typescript), testing with [Jest](#jest),
and using [React](#react), your `.eslintrc`
might look like:

> **`.eslintrc`**
>
> ```json
> {
>   "extends": ["hzdg", "hzdg/jest", "hzdg/react", "hzdg/typescript"]
> }
> ```

read the [Getting Started](#getting-started) and [Configs](#configs) sections
for more info on installing peer dependencies and other configuration details.

## Getting Started

Get up and running using yarn:

```sh
# Add eslint-config-hzdg and base config peer dependencies.
yarn add --dev \
  eslint \
  eslint-config-hzdg \
  eslint-config-prettier \
  eslint-plugin-eslint-comments \
  eslint-plugin-import \
  eslint-plugin-prettier \
  prettier
```

Then configure eslint to use the [Recommended](#recommended) HZDG config
in your `.eslintrc`:

> **`.eslintrc`**
>
> ```json
> {
>   "extends": ["hzdg"]
> }
> ```

Next, read the [Prettier](#prettier) config section for more on
editor integrations and related configurations.

Then, depending on the project you are configuring, you may want to extend
one or more of our other recommended configs, for example [React](#react),
[TypeScript](#typescript), or [Jest](#jest).

## Configs

This package includes a number of composable configs in the conventional form
`"eslint-config-hzdg/<config-name>"`. In an `.eslintrc` file, this can be shortened
to `"hzdg/<config-name>"`. Below are short descriptions of each of these configs
and their project dependencies and integrations.

### Recommended:

> Note: you don't need to explicitly extend `hzdg/recommended` if you are
> already extending `hzdg`.

Our 'base' configuration (detailed [above](#getting-started)) uses this config,
so this and the following `.eslintrc` configs are equivalent:

> **`.eslintrc`**
>
> ```json
> {
>   "extends": ["hzdg"]
> }
> ```

> **`.eslintrc`**
>
> ```json
> {
>   "extends": ["hzdg/recommended"]
> }
> ```

### [Prettier]:

The [Recommended](#recommended) config includes support for [Prettier],
which has its own configuration. While we could configure it to our liking
directly in the `.eslintrc`, it is better to provide a standalone
`prettier.config.js` file which can be used by other tools,
such as [prettier-vscode].

This package ships with a prettier config that you can extend in
your project `prettier.config.js`:

> **`prettier.config.js`**
>
> ```js
> module.exports = require('eslint-config-hzdg/prettier.config.js');
> ```

### [TypeScript]:

Configure eslint to extend the HZDG TypeScript config:

> **`.eslintrc`**
>
> ```json
> {
>   "extends": ["hzdg", "hzdg/typescript"]
> }
> ```

Add the necessary TypesScript peer dependencies:

```sh
yarn add --dev @typescript-eslint/eslint-plugin
```

TypeScript has its own configuration file that is used by the compiler
and other tools, like editor integrations. This project ships with
a `tsconfig.json` that you can extend in your project:

> **`tsconfig.json`**
>
> ```json
> {
>   "extends": "eslint-config-hzdg/tsconfig"
> }
> ```

> **NOTE for VSCode users:**
>
> The [vscode-eslint] extension does not currently lint `.ts` or `.tsx` files
> by default. To get eslint to run on your TypeScript files,
> configure the extension in VSCode project (or global) settings:
>
> **`.vscode/settings.json`**
>
> ```json
> {
>   "eslint.validate": [
>     "javascript",
>     "javascriptreact",
>     "typescript",
>     "typescriptreact"
>   ]
> }
> ```

### [React]:

Configure eslint to extend the HZDG React config:

> **`.eslintrc`**
>
> ```json
> {
>   "extends": ["hzdg", "hzdg/react"]
> }
> ```

Add the necessary React peer dependencies:

```sh
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

### [Jest]:

Configure eslint to extend the HZDG Jest config:

> **`.eslintrc`**
>
> ```json
> {
>   "extends": ["hzdg", "hzdg/jest"]
> }
> ```

Add the necessary Jest peer dependencies:

```sh
yarn add --dev eslint-plugin-jest
```

## Editor Integration

- [vscode-eslint] for VSCode.
- [linter-eslint] for Atom's [Linter][atom-linter].

[eslint]: http://eslint.org
[prettier]: https://prettier.io/
[typescript]: https://www.typescriptlang.org/
[babel]: https://babeljs.io/
[react]: https://reactjs.org/
[jest]: https://jestjs.io/
[linter-eslint]: https://atom.io/packages/linter-eslint
[atom-linter]: https://atom.io/packages/linter
[vscode-eslint]: https://github.com/Microsoft/vscode-eslint
[prettier-vscode]: https://github.com/prettier/prettier-vscode

## Contributing

#### Prerequisites

Install lerna globally with `yarn global add lerna` or `npm install -g lerna`

#### Updating the project

1. Pull down the project.
2. Run `lerna init` in the top level directory.
3. If adding a new package, run `lerna add <package>[@version] [--dev]`.
4. Run tests with `yarn test`.
5. Commit&Push.
