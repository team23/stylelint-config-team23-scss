# stylelint-config-team23-scss

> Standard SCSS linting config for TEAM23

Rules for linting CSS + SCSS at TEAM23 with stylelint.

Extends [`stylelint-config-team23-standard`](https://github.com/team23/stylelint-config-team23-standard), which
enables css error checking based on best practices. So if you want to lint css and scss styles, you just need this configuartion, as it includes the `stylelint-config-team23-standard` configuration.

It further extends [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss) which enables scss error checking plus some style checking rules. the stylechecking rules are disabled by also extending [`stylelint-config-prettier-scss`](https://github.com/prettier/stylelint-config-prettier-scss). Our custom ruleset is defined in the
[`index.js`](./index.js).

## Installation

npm:

```bash
# latest version
npm install --save-dev @team23/stylelint-config-team23-scss

# specific version
npm install --save-dev @team23/stylelint-config-team23-scss@1.0.3
```

or using github (deprecated):

```bash
# latest version
npm install --save-dev github:team23/stylelint-config-team23-scss

# specific version
npm install --save-dev "github:team23/stylelint-config-team23-scss#v1.0.3"
```

## Usage

If you've installed `stylelint-config-team23-scss` locally within your project, just set your `stylelint` config to:

```json
{
    "extends": "@team23/stylelint-config-team23-scss"
}
```

If you use a version prior to v1.0.2, use

```json
{
    "extends": "stylelint-config-team23-standard"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```json
{
  "extends": "@team23/stylelint-config-team23-scss",
  "rules": {
    "scss/at-extend-no-missing-placeholder": true,
    # ...
  }
}
```

## Proposing rule changes

For proposing changes to the ruleset please open either

-   a merge request
-   a ticket

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
