# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@3.1.0...eslint-config-hzdg@4.0.0) (2020-03-31)


### Bug Fixes

* **typescript:** use ts resolver instead of node resolver ([71df13d](https://github.com/hzdg/linter-configs/commit/71df13d))


### Features

* **typescript:** force consistent casing in file names ([95de65f](https://github.com/hzdg/linter-configs/commit/95de65f))
* **typescript:** isolate modules, ues ESNext as default target ([d8f9073](https://github.com/hzdg/linter-configs/commit/d8f9073))


### Performance Improvements

* **typescript:** skip lib checks and ignore dotfiles and dirs ([ca27093](https://github.com/hzdg/linter-configs/commit/ca27093))


### BREAKING CHANGES

* **typescript:** we were already assuming typescript is being used
at author time only (hence the default to `noEmit: true`). This
changes takes that assumption to its logical conclusion, which is
that we want to use the latest language features while writing code.

Additionally, we assume that babel will be responsible for compiling
our fancy bleeding edge code into environment-specific code, so
we turn on `isolateModules` by default. This is because Babel
doesn't do any static analysis across modules when compiling,
so any typescript features that cross module boundaries
(like reexporting types from another module) will cause problems
for Babel.
* **typescript:** The ts resolver uses the tsconfig to inform its
resolving behavior, which allows things like using paths defined
in tsconfig, or resolving @types/* definitions.





# [3.1.0](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@3.0.0...eslint-config-hzdg@3.1.0) (2020-03-27)


### Features

* **react:** use react-hooks/recommended rules ([db6a206](https://github.com/hzdg/linter-configs/commit/db6a206))





# [3.0.0](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@2.1.1...eslint-config-hzdg@3.0.0) (2020-03-25)

**Note:** Version bump only for package eslint-config-hzdg





## [2.1.1](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@2.1.0...eslint-config-hzdg@2.1.1) (2019-11-21)


### Bug Fixes

* **jest:** set jest warnings to errors ([410a4ce](https://github.com/hzdg/linter-configs/commit/410a4ce)), closes [#77](https://github.com/hzdg/linter-configs/issues/77) [#78](https://github.com/hzdg/linter-configs/issues/78) [#79](https://github.com/hzdg/linter-configs/issues/79) [#80](https://github.com/hzdg/linter-configs/issues/80) [#81](https://github.com/hzdg/linter-configs/issues/81) [#82](https://github.com/hzdg/linter-configs/issues/82)





# [2.1.0](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@2.0.0...eslint-config-hzdg@2.1.0) (2019-09-27)


### Bug Fixes

* **typescript:** set @typescript-eslint/no-non-null-assertion: error ([a50407c](https://github.com/hzdg/linter-configs/commit/a50407c)), closes [#75](https://github.com/hzdg/linter-configs/issues/75) [#74](https://github.com/hzdg/linter-configs/issues/74) [#73](https://github.com/hzdg/linter-configs/issues/73) [#72](https://github.com/hzdg/linter-configs/issues/72) [#68](https://github.com/hzdg/linter-configs/issues/68)





# [2.0.0](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@2.0.0-alpha.0...eslint-config-hzdg@2.0.0) (2019-07-01)

* **eslint:** upgrade to version 6.0.1
* **prettier:** upgrade to version 1.18.2
* **typescript:** upgrade to version 3.5.2
* upgrade misc eslint plugins





## [1.2.1](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@1.2.0...eslint-config-hzdg@1.2.1) (2019-04-11)


### Bug Fixes

* **typescript:** relax explicit function return type rule ([463f3ff](https://github.com/hzdg/linter-configs/commit/463f3ff))
* **typescript:** target es module interop by default ([9b77b2f](https://github.com/hzdg/linter-configs/commit/9b77b2f))





# [1.2.0](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@1.1.0...eslint-config-hzdg@1.2.0) (2019-04-10)


### Features

* **react:** enable react-hooks/exhaustive-deps rule ([21f4289](https://github.com/hzdg/linter-configs/commit/21f4289))





# [1.1.0](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@1.0.1...eslint-config-hzdg@1.1.0) (2019-02-06)

**Note:** Version bump only for package eslint-config-hzdg





## [1.0.1](https://github.com/hzdg/linter-configs/compare/eslint-config-hzdg@1.0.0...eslint-config-hzdg@1.0.1) (2019-02-04)


### Bug Fixes

* **typescript:** allow js, don't emit, exclude non-src ([1f0a72b](https://github.com/hzdg/linter-configs/commit/1f0a72b))





# 1.0.0 (2019-02-04)

**Note:** Version bump only for package eslint-config-hzdg
