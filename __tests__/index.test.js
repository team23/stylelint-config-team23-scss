'use strict';

import { beforeEach, describe, expect, it } from 'vitest';
import fs from 'fs';
import stylelint from 'stylelint';

const config = require('../');
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

    it('did not error', async () => {
        return result.then((data) => expect(data.errored).toBeFalsy());
    });

    it('flags no warnings', () => {
        return result.then((data) => expect(data.results[0].warnings).toHaveLength(0));
    });
});

describe('flags warnings with invalid css', () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidCss,
            config,
        });
    });

    it('did error', () => {
        return result.then((data) => expect(data.errored).toBeTruthy());
    });

    it('flags one warning', () => {
        return result.then((data) => expect(data.results[0].warnings).toHaveLength(2));
    });

    it('correct warning text', () => {
        return result.then(
            (data) => (
                expect(data.results[0].warnings[0].text).toBe('Unexpected unknown at-rule "@invalid" (scss/at-rule-no-unknown)'),
                expect(data.results[0].warnings[1].text).toBe('Unexpected at-rule "debug" (at-rule-disallowed-list)')
            ),
        );
    });

    it('correct rule flagged', () => {
        return result.then(
            (data) => (
                expect(data.results[0].warnings[0].rule).toBe('scss/at-rule-no-unknown'),
                expect(data.results[0].warnings[1].rule).toBe('at-rule-disallowed-list')
            ),
        );
    });

    it('correct severity flagged', () => {
        return result.then(
            (data) => (
                expect(data.results[0].warnings[0].severity).toBe('error'), expect(data.results[0].warnings[1].severity).toBe('error')
            ),
        );
    });

    it('correct line number', () => {
        return result.then((data) => (expect(data.results[0].warnings[0].line).toBe(1), expect(data.results[0].warnings[1].line).toBe(3)));
    });

    it('correct column number', () => {
        return result.then(
            (data) => (expect(data.results[0].warnings[0].column).toBe(1), expect(data.results[0].warnings[1].column).toBe(1)),
        );
    });
});
