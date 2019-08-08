# stylelint-config-team23-scss

> Standard SCSS config for TEAM23

Rules for linting SCSS at TEAM23 with stylelint.  

Extends [`stylelint-config-team23-standard`](https://git.team23.de/mmunz/stylelint-config-team23-standard), which
enables error checking and a lot of stylistic rules based on best practices.

Used plugins:

-   [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss).

## Proposing rule changes

For proposing changes to the ruleset please open either

-   a merge request
-   a ticket

## Installation

```bash
npm install git+https://git.team23.de/mmunz/stylelint-config-team23-scss.git --save-dev
```

## Usage

If you've installed `stylelint-config-team23-scss` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-team23-scss"
}
```

If you've globally installed `stylelint-config-team23-scss` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-team23-scss` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-team23-scss"
}
```

Since [stylelint 9.7.0](https://github.com/stylelint/stylelint/blob/9.7.0/CHANGELOG.md#970), you can simply use the globally installed configuration name instead of the absolute path:

```json
{
  "extends": "stylelint-config-team23-scss"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-team23-scss",
  "rules": {
    "scss/at-extend-no-missing-placeholder": true,
    # ...
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
