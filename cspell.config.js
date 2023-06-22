module.exports = {
    $schema: 'https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json',
    version: '0.2',
    language: 'en',
    useGitignore: true,
    ignorePaths: ['pnpm-lock.yaml'],

    dictionaryDefinitions: [
        {
            name: 'local',
            path: './.cspell/dict.txt',
            addWords: true
        }
    ],

    dictionaries: ['local'],

    import: [
        '@fruktorum/cspell-default-config/cspell-ext.json',
        '@fruktorum/cspell-frontend-config/cspell-ext.json'
    ]
}
