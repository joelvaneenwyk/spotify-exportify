import eslintTypescript from 'typescript-eslint';
import testingLibraryReact from '@testing-library/react';
import eslintJestDom from 'eslint-plugin-jest-dom';
import tsParser from '@typescript-eslint/parser';
import functional from 'eslint-plugin-functional';
import tsPlugin from "@typescript-eslint/eslint-plugin";
import imprt from 'eslint-plugin-import';
import globals from 'globals';

export default eslintTypescript.config(
    {
        // ...eslintTypescript.configs.recommended,
        // ...eslintJestDom.configs.recommended,
        // ...js.configs.recommended,
        plugins: {
            'eslint-plugin-functional': functional,
            'eslint-plugin-import': imprt,
            "@typescript-eslint": tsPlugin,
            'testing-react': testingLibraryReact,
            'eslint-plugin-jest-dom': eslintJestDom
        },
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { modules: true },
                ecmaVersion: 'latest',
                project: './tsconfig.json',
            },
            globals: globals.node,
        },
        plugins: {
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            "no-console": "error",
            "@typescript-eslint/no-explicit-any": "off"
        }
    },
    {
        files: ["test/**/*.ts"],
        languageOptions: {
            globals: globals.mocha,
        },
    }
);
