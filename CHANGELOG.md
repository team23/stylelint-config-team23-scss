# 5.0.1

- disable `media-query-no-invalid` rule.

# 5.0.0

- Removed: stylelint less than 16.12.0 from peer dependencies. This introduces the following changes:
   - Only ESM syntax is now supported
   - Removed: 76 rules deprecated in 15.0.0
   - Removed rules which are already configured by `stylint-config-scss-standard`
   - Disabled deprecated rules `scss/at-import-no-partial-leading-underscore` and `scss/at-import-partial-extension-blacklist`
- Updated dep: `stylelint-config-scss` from `11.0.0` to `14.0.0`. This introduces the following changes:
    - Removed: Node.js less than 18.12.0 support.
    - Changed: updated to stylelint-config-standard@36.0.0
    - Changed: updated to stylelint-config-recommended-scss@14.1.0
    - Changed: scss/dollar-variable-colon-space-after from always to always-single-line to be compatible with the default formatting of Prettier.
- Other changes in project:
    - Migrated eslint to latest with flat config setup and usage of eslint-config-team23-standard
    - Removed prettier
    - Updated .editorconfig to use official team23 .editorconfig
    - Removed dependencies @stylelint/remark-preset, cz-conventional-changelog, husky, lint-staged, npm-run-all
        and remark-cli
    - Improved tests for stylint errors

# 4.0.1

-   disable `media-query-no-invalid` rule.

# 4.0.0

-   remove `stylelint` less than `15.10.0` from peer dependencies.
-   update `@team23/stylelint-config-team23-standard` to `4.0.0`
-   update `stylelint-config-standard-scss` to `11.0.0`
-   remove `stylelint-config-prettier-scss`

# 3.0.2

-   allow `!global` annotation
-   update `stylelint-config-standard-scss` to `6.1.0`

# 3.0.1

-   allow `!default` annotation

# 3.0.0

-   removes `stylelint` less than `14.14.0` from peer dependencies.
-   updates `stylelint-config-standard-scss` to `5.0.0`
-   updates `stylelint-config-team23-standard` to `3.0.0`

# 2.0.0

-   removes `stylelint` less than `14.9.0` from peer dependencies.
-   updates `stylelint-config-standard-scss` to `4.0.0`
-   updates `stylelint-config-team23-standard` to `2.0.0`

# 1.0.3

-   fixes package dependencies

# 1.0.2

-   package is now available via npm!
-   updates package name from `stylelint-config-team23-scss` to `@team23/stylelint-config-team23-scss`

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

-   updates `stylelint` to version 14.6.0
-   updates `stylelint-config-team23-standard` to version 1.0.1

# 1.0.0

## Dependencies

-   removed `stylelint-scss` dependency
-   added `stylelint-config-standard-scss` dependency
-   added `stylelint-config-prettier-scss` dependency
-   updated `stylelint-config-team23-standard` from version 0.2.1 to version 1.0.0
-   updated `stylelint` peer dependency to ^14.5.1, i.e. removed support for older versions

## Linting rule changes

-   stylelint config now depends on

```js
"extends": [
  "stylelint-config-standard-scss",
  "stylelint-config-prettier-scss",
  "stylelint-config-team23-standard",
],
```

-   by adding `stylelint-config-standard-scss`, all rules of this repo and of `stylelint-config-recommended-scss` are added.

-   by adding `stylelint-config-prettier-scss`, all rules that might conflict with prettier are disabled.

-   removed duplicate rules as they are provided by an extended config:

```js
"at-rule-disallowed-list": ["debug"],
'scss/at-rule-no-unknown': true,
'scss/at-extend-no-missing-placeholder': true,
'scss/at-import-no-partial-leading-underscore': true,
'scss/dollar-variable-colon-space-after': 'always',
'scss/dollar-variable-colon-space-before': 'never',
```

-   added these rules:

```js
'function-no-unknown': null,
'scss/at-mixin-argumentless-call-parentheses': null,
'scss/no-global-function-names': null,
'scss/at-rule-conditional-no-parentheses': null,
```

# 0.1.0

-   Initial release based on stylelint-config-standard. Add stylelint-scss plugin and a set of custom rules.
