module.exports = {
    extends: [
        'stylelint-config-standard-scss',
    ],
    plugins: [
        'stylelint-order',
        'stylelint-scss',
    ],
    rules: {
        indentation: 4,
        'at-rule-empty-line-before': [
            'always',
            {
                ignore: [
                    'after-comment',
                ],
                except: [
                    'first-nested',
                    'after-same-name',
                ]
            },
        ],
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': true,
        'block-opening-brace-space-before': 'always',
        'color-hex-case': 'upper',
        'comment-whitespace-inside': 'always',
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-empty-line-before': null,
        'font-family-name-quotes': 'always-unless-keyword',
        'font-weight-notation': 'numeric',
        'function-calc-no-unspaced-operator': true,
        'function-comma-space-after': 'always-single-line',
        'max-nesting-depth': 8,
        'media-feature-name-no-vendor-prefix': true,
        'number-leading-zero': 'always',
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-list-comma-newline-after': 'always',
        'selector-no-qualifying-type': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'string-quotes': 'double',
        'order/order': [
            [
                'dollar-variables',
                {
                    type: 'at-rule',
                    name: 'extend',
                },
                {
                    type: 'at-rule',
                    name: 'include',
                },
                {
                    type: 'at-rule',
                    name: 'mixin',
                },
                'custom-properties',
                'declarations',
                {
                    type: 'at-rule',
                    name: 'media',
                    hasBlock: true,
                },
                'rules',
            ],
        ],
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-import-partial-extension': 'never',
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-colon-space-after': 'always',
        'comment-empty-line-before': [
            'always',
            { except: ['first-nested'] },
        ],
    },
};
