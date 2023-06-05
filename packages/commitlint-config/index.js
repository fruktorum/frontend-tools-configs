const commitTypes = {
    feat: {
        description: 'A new feature',
        title: 'Features',
        emoji: '✨'
    },

    fix: {
        description: 'A bug fix',
        title: 'Bug Fixes',
        emoji: '🐛'
    },

    docs: {
        description: 'Documentation only changes',
        title: 'Documentation',
        emoji: '📝'
    },

    style: {
        description:
            'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
        title: 'Styles',
        emoji: '🎨'
    },

    refactor: {
        description: 'A code change that neither fixes a bug nor adds a feature',
        title: 'Code Refactoring',
        emoji: '♻️'
    },

    perf: {
        description: 'A code change that improves performance',
        title: 'Performance Improvements',
        emoji: '⚡️'
    },

    test: {
        description: 'Adding missing tests or correcting existing tests',
        title: 'Tests',
        emoji: '🧪'
    },

    build: {
        description:
            'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
        title: 'Builds',
        emoji: '🛠'
    },

    ci: {
        description:
            'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
        title: 'Continuous Integrations',
        emoji: '👷'
    },

    chore: {
        description: "Other changes that don't modify src or test files",
        title: 'Chores',
        emoji: '♻️'
    },

    revert: {
        description: 'Reverts a previous commit',
        title: 'Reverts',
        emoji: '⏪️'
    },

    i18n: {
        description: '',
        title: 'Internationalization and localization',
        emoji: '🌐'
    },

    init: {
        description: '',
        title: 'Begin a project',
        emoji: '🎉'
    },

    typos: {
        description: '',
        title: 'Fix typos',
        emoji: '✏️'
    },

    merge: {
        description: '',
        title: 'Merge branches',
        emoji: '🔀'
    },

    security: {
        description: 'Fix security issues',
        title: 'Security',
        emoji: '🔒️'
    }
}

module.exports = {
    extends: ['@commitlint/config-conventional'],

    rules: {
        'type-enum': [2, 'always', Object.keys(commitTypes)]
    },

    prompt: {
        settings: {
            scopeEnumSeparator: ','
        },

        questions: {
            type: {
                description: "Select the type of change that you're committing:",
                enum: commitTypes
            }
        }
    }
}
