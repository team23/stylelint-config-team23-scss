'use strict';

module.exports = {
    extends: ['stylelint-config-standard-scss', '@team23/stylelint-config-team23-standard'],
    rules: {
        /**
         * Disallow unknown at-rules.
         */
        'at-rule-no-unknown': null,

        /**
         * Disallow unknown functions.
         */
        'function-no-unknown': null,

        /**
         * Disallow unknown annotations.
         */
        'annotation-no-unknown': [
            true,
            {
                ignoreAnnotations: ['default', 'global'],
            },
        ],

        /**
         * Disallow invalid media queries.
         */
        'media-query-no-invalid': null,

        /**
         * Require or disallow parentheses in argumentless @mixin calls.
         */
        'scss/at-mixin-argumentless-call-parentheses': null,

        /**
         * Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.
         */
        'scss/no-global-function-names': null,

        /**
         * Disallow parentheses in conditional @ rules (if, elsif, while)
         */
        'scss/at-rule-conditional-no-parentheses': null,

        /**
         * This is a rule that checks for situations where users have done a loop using map-keys or map.keys and grabbed the value for that key inside of the loop.
         */
        'scss/at-each-key-value-single-line': true,

        /**
         * Specify a pattern for Sass/SCSS-like function names.
         */
        'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

        /**
         * Disallow leading underscore in partial names in @import.
         */
        'scss/at-import-no-partial-leading-underscore': true,

        /**
         * Specify blacklist of disallowed file extensions for partial names in @import commands.
         */
        'scss/at-import-partial-extension-blacklist': ['scss'],

        /**
         * Specify a pattern for Sass/SCSS-like mixin names.
         */
        'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

        /**
         * Specify a pattern for Sass-like variables.
         */
        'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

        /**
         * Specify a pattern for %-placeholders.
         */
        'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

        /**
         * Disallow redundant nesting selectors (&).
         */
        'scss/selector-no-redundant-nesting-selector': true,
    },
};
