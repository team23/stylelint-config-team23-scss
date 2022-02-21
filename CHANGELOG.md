# 1.0.0

## Dependencies

- removed `stylelint-scss` dependency
- added `stylelint-config-standard-scss` dependency
- added `stylelint-config-prettier-scss` dependency
- updated `stylelint-config-team23-standard` from version 0.2.1 to version 1.0.0
- updated `stylelint` peer dependency to ^14.4.0, i.e. removed support for older versions

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

- removed duplicate rules as they are provided by `stylelint-config-standard-scss`:

```js
"at-rule-no-unknown": null,
"at-rule-disallowed-list": ["debug"],
'scss/at-rule-no-unknown': true,
'scss/at-extend-no-missing-placeholder': true,
'scss/at-import-no-partial-leading-underscore': true,
'scss/dollar-variable-colon-space-after': 'always',
'scss/dollar-variable-colon-space-before': 'never',
```

# 0.1.0

- Initial release based on stylelint-config-standard. Add stylelint-scss plugin and a set of custom rules.
