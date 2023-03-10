const commitTypes = {
    feat: {
        description: 'A new feature',
        title: 'Features',
        emoji: 'โจ',
    },

    fix: {
        description: 'A bug fix',
        title: 'Bug Fixes',
        emoji: '๐',
    },

    docs: {
        description: 'Documentation only changes',
        title: 'Documentation',
        emoji: '๐',
    },

    style: {
        description:
            'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
        title: 'Styles',
        emoji: '๐จ',
    },

    refactor: {
        description: 'A code change that neither fixes a bug nor adds a feature',
        title: 'Code Refactoring',
        emoji: 'โป๏ธ',
    },

    perf: {
        description: 'A code change that improves performance',
        title: 'Performance Improvements',
        emoji: 'โก๏ธ',
    },

    test: {
        description: 'Adding missing tests or correcting existing tests',
        title: 'Tests',
        emoji: '๐งช',
    },

    build: {
        description:
            'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
        title: 'Builds',
        emoji: '๐ ',
    },

    ci: {
        description:
            'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
        title: 'Continuous Integrations',
        emoji: '๐ท',
    },

    chore: {
        description: "Other changes that don't modify src or test files",
        title: 'Chores',
        emoji: 'โป๏ธ',
    },

    revert: {
        description: 'Reverts a previous commit',
        title: 'Reverts',
        emoji: 'โช๏ธ',
    },

    i18n: {
        description: '',
        title: 'Internationalization and localization',
        emoji: '๐',
    },

    init: {
        description: '',
        title: 'Begin a project',
        emoji: '๐',
    },

    typos: {
        description: '',
        title: 'Fix typos',
        emoji: 'โ๏ธ',
    },

    merge: {
        description: '',
        title: 'Merge branches',
        emoji: '๐',
    },

    security: {
        description: 'Fix security issues',
        title: 'Security',
        emoji: '๐๏ธ',
    },
};

module.exports = {
    extends: ['@commitlint/config-conventional'],

    rules: {
        'type-enum': [2, 'always', Object.keys(commitTypes)],
    },

    prompt: {
        settings: {
            scopeEnumSeparator: ',',
        },

        questions: {
            type: {
                description: "Select the type of change that you're committing:",
                enum: commitTypes,
            },
        },
    },
};
