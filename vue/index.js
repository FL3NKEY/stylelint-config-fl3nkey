module.exports = {
    extends: [
        'stylelint-config-recommended-vue',
    ],
    rules: {
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
    },
};
