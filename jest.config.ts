import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest/presets/default',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json',
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    testMatch: ['**/__tests__/**/*.test.(ts|tsx)', '**/*.test.(ts|tsx)'],
};

export default config;
