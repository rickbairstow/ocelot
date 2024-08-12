module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:storybook/recommended',
        'plugin:vuejs-accessibility/recommended',
        'plugin:jsdoc/recommended',
        '@vue/eslint-config-prettier'
    ],
    plugins: ['vuejs-accessibility', 'jsdoc'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    rules: {
        eqeqeq: ['error', 'always'],
        'vue/eqeqeq': ['error', 'always'],
        'no-unused-vars':
            process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'vue/no-unused-vars':
            process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'vue/attributes-order': [
            'warn',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    ['ATTR_STATIC', 'ATTR_SHORTHAND_BOOL'],
                    'ATTR_DYNAMIC',
                    'EVENTS',
                    'CONTENT'
                ],
                alphabetical: true
            }
        ],
        'vue/html-self-closing': [
            'warn',
            {
                html: { void: 'always', normal: 'always', component: 'always' },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1
                },
                multiline: {
                    max: 1
                }
            }
        ],
        'vue/html-indent': ['error', 4],
        'prettier/prettier': [
            process.env.NODE_ENV === 'production' ? 'error' : 'warn',
            {
                tabWidth: 4,
                singleAttributePerLine: true,
                htmlWhitespaceSensitivity: 'ignore',
                trailingComma: 'none',
                endOfLine: 'lf',
                semi: false,
                singleQuote: true,
                bracketSpacing: true,
                bracketSameLine: false,
                vueIndentScriptAndStyle: false
            }
        ],

        // Enforce JSDoc rules
        'jsdoc/require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: true,
                    FunctionExpression: true
                }
            }
        ]
    },

    overrides: [
        {
            files: ['*.stories.js'],
            rules: {
                'jsdoc/require-jsdoc': 'off'
            }
        }
    ]
}
