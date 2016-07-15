HZ's ESLint Config (React)
==========================

This is HZ's additional ESLint configuration for use with React projects. It is meant to be used in conjunction with HZ's standard
ESLint config, [eslint-config-hzdg]

Setup
-----
It can be added to `extends` in your `.eslintrc` file.


```
{
  "extends": [
    "eslint-config-hzdg",
    "eslint-config-hzdg-react"
  ],
  "rules": {
    ...
  }
}
```

### Plugins

It uses three ESLint plugins:

* [eslint-plugin-react] for enforcing React-specific rules
* [eslint-plugin-jsx-a11y] for ensuring accessibility when writing jsx

They need to be installed with npm:

```sh
npm install eslint-plugin-react
npm install eslint-plugin-jsx-a11y
```

[eslint-config-hzdg]: https://www.npmjs.com/package/eslint-config-hzdg
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
