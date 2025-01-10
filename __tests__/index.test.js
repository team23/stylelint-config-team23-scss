'use strict';

import { beforeEach, describe, expect, it } from 'vitest';
import config from '../index.js';
import fs from 'fs';
import stylelint from 'stylelint';

const validCss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');
const invalidCss = fs.readFileSync('./__tests__/invalid.scss', 'utf-8');

describe('flags no warnings with valid css', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: validCss,
            config,
        });
    });

    it('did not error', async () => result.then(
        data => expect(data.errored).toBeFalsy(),
    ));

    it('flags no warnings', () => result.then(
        data => expect(data.results[0].warnings).toHaveLength(0),
    ));
});

describe('flags warnings with invalid css', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidCss,
            config,
        });
    });

    it('did error', () => result.then(
        data => expect(data.errored).toBeTruthy(),
    ));

    it('flags one warning', () => result.then(
        data => expect(data.results[0].warnings).toHaveLength(2),
    ));

    it('correct rule flagged', () => result.then(
        data => expect(data.results[0].warnings[0].rule).toBe('selector-max-compound-selectors'),
    ));

    it('correct severity flagged', () => result.then(
        data => expect(data.results[0].warnings[0].severity).toBe('error'),
    ));

    it('correct line number', () => result.then(
        data => expect(data.results[0].warnings[0].line).toBe(1),
    ));

    it('correct column number', () => result.then(
        data => expect(data.results[0].warnings[0].column).toBe(1),
    ));
});
