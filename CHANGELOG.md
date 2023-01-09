# 3.0.1

- allow `!default` annotation

# 3.0.0

- removes `stylelint` less than `14.14.0` from peer dependencies.
- updates `stylelint-config-standard-scss` to `5.0.0`
- updates `stylelint-config-team23-standard` to `3.0.0`

# 2.0.0

- removes `stylelint` less than `14.9.0` from peer dependencies.
- updates `stylelint-config-standard-scss` to `4.0.0`
- updates `stylelint-config-team23-standard` to `2.0.0`

# 1.0.3

- fixes package dependencies

# 1.0.2

- package is now available via npm!
- updates package name from `stylelint-config-team23-scss` to `@team23/stylelint-config-team23-scss`

Note that as the package name changed, instead of

```json
{
  "extends": "stylelint-config-team23-scss"
}
```

in your stylelint config, you have to use

```json
{
  "extends": "@team23/stylelint-config-team23-scss"
}
```

since this version.

# 1.0.1

- updates `stylelint` to version 14.6.0
- updates `stylelint-config-team23-standard` to version 1.0.1

# 1.0.0

## Dependencies

- removed `stylelint-scss` dependency
- added `stylelint-config-standard-scss` dependency
- added `stylelint-config-prettier-scss` dependency
- updated `stylelint-config-team23-standard` from version 0.2.1 to version 1.0.0
- updated `stylelint` peer dependency to ^14.5.1, i.e. removed support for older versions

## Linting rule changes

- stylelint config now depends on

```js
"extends": [
  "stylelint-config-standard-scss",
  "stylelint-config-prettier-scss",
  "stylelint-config-team23-standard",
],
```

- by adding `stylelint-config-standard-scss`, all rules of this repo and of `stylelint-config-recommended-scss` are added.

- by adding `stylelint-config-prettier-scss`, all rules that might conflict with prettier are disabled.

- removed duplicate rules as they are provided by an extended config:

```js
"at-rule-disallowed-list": ["debug"],
'scss/at-rule-no-unknown': true,
'scss/at-extend-no-missing-placeholder': true,
'scss/at-import-no-partial-leading-underscore': true,
'scss/dollar-variable-colon-space-after': 'always',
'scss/dollar-variable-colon-space-before': 'never',
```

- added these rules:

```js
'function-no-unknown': null,
'scss/at-mixin-argumentless-call-parentheses': null,
'scss/no-global-function-names': null,
'scss/at-rule-conditional-no-parentheses': null,
```

# 0.1.0

- Initial release based on stylelint-config-standard. Add stylelint-scss plugin and a set of custom rules.
