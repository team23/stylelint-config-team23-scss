'use strict';

import { beforeEach, describe, expect, it } from 'vitest';
import config from '../index.js';
import fs from 'fs';
import stylelint from 'stylelint';

const validScss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');
const invalidScss = fs.readFileSync('./__tests__/invalid.scss', 'utf-8');

const expectedErrorRules = [
    'scss/at-function-pattern',
    'scss/at-mixin-pattern',
    'scss/dollar-variable-pattern',
    'scss/percent-placeholder-pattern',
    'at-rule-empty-line-before',
    'no-duplicate-selectors',
];

describe('flags no warnings with valid SCSS', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: validScss,
            config,
        });
    });

    it('did not error', () => result.then(
        data => expect(data.errored).toBeFalsy(),
    ));

    it('flags no warnings', () => result.then(
        data => expect(data.results[0].warnings).toHaveLength(0),
    ));
});

describe('flags warnings with invalid SCSS', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidScss,
            config,
        });
    });

    it('should flag as errored', () => result.then(data => {
        expect(data.errored).toBeTruthy();
    }));

    it('should flag the correct number of errors', () => result.then(
        data => {
            const expectedErrorCount = expectedErrorRules.length;
            const actualErrorCount = data.results[0].warnings.filter(w => w.severity === 'error').length;
            expect(actualErrorCount).toBe(expectedErrorCount);
        },
    ));

    it.each(expectedErrorRules)('should contain error for rule: "%s"', async rule => {
        const _result = await result;
        const rules = _result.results[0].warnings.map(warning => warning.rule);
        expect(rules).toContain(rule);
    });
});
