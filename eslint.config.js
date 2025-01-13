import { createJSEslintConfig } from '@team23/eslint-config-team23-standard';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
    includeIgnoreFile(gitignorePath),
    ...createJSEslintConfig(),
    {
        rules: {
            'no-magic-numbers': ['off'],
        },
    },
];
