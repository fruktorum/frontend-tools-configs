module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    requirePragma: false,
    insertPragma: false,
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css',
    vueIndentScriptAndStyle: false,
    embeddedLanguageFormatting: 'auto',
    singleAttributePerLine: false,
    endOfLine: 'lf',

    overrides: [
        {
            files: ['*.json', '*.json5', 'webmanifest', 'yml', 'yaml'],
            options: {
                tabWidth: 2
            }
        }
    ]
}
