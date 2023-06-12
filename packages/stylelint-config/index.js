module.exports = {
    customSyntax: 'postcss-scss',

    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
        'stylelint-config-recess-order'
    ],

    plugins: [
        'stylelint-order',
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-high-performance-animation',
        'stylelint-no-unsupported-browser-features'
    ],

    overrides: [
        {
            files: ['**/*.vue'],
            customSyntax: 'postcss-html'
        }
    ],

    rules: {
        'plugin/no-unsupported-browser-features': [true, { severity: 'warning' }],
        'plugin/no-low-performance-animation-properties': [true, { severity: 'warning' }],
        'plugin/declaration-block-no-ignored-properties': true,
        'import-notation': null,
        'selector-class-pattern': null,
        'color-named': ['never', { severity: 'warning' }],
        'declaration-no-important': [true, { severity: 'warning' }],
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/at-import-partial-extension': 'always'
    }
}
