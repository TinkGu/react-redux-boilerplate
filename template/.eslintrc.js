// 总是添加一个 .eslintignore
// 来使得某些编辑器（ 如 atom、sublime ）使用下项目下的 eslint dep 的而非全局的 dep

// eslint rules 中
// 0: 'off', 关闭规则
// 1: 'warn', 匹配到不符合规则时，lint cli 仅提示
// 2: 'error', 匹配到不符合规则时，lint cli 退出，可能导致无法提交代码

// 使用 eslint-disable-next-line 进行单例违法
var path = require('path')
var rootDir = path.resolve(__dirname, './')

module.exports = {
    extends: ['airbnb'],
    plugins: [
        // 'react',
        // 'babel',
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
        webextensions: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            classes: true,
            modules: true,
            jsx: true,
        },
    },
    rules: {
        semi: 0,
        indent: [
            1,
            4, {
                SwitchCase: 1,
            },
        ],
        'consistent-return': 0,
        'prefer-rest-params': 0,
        'prefer-template': 0,
        'global-require': 0,
        'comma-dangle': [2, 'only-multiline'],
        'arrow-parens': 0,
        'arrow-body-style': 0, // 取消 「要求箭头函数体使用大括号」
        'max-len': [1, 120],
        'space-infix-ops': 1,
        'prefer-const': 1,
        'array-callback-return': 1,

        'no-prototype-builtins': 0,
        'no-bitwise': 0,
        'no-useless-return': 0,
        'no-plusplus': 0,
        'no-underscore-dangle': 0,
        'no-lonely-if': 0,
        'no-use-before-define': ['error', 'nofunc'],
        'no-confusing-arrow': 0, // 允许 a => a ? 1 : 0
        'no-else-return': 0,
        'no-mixed-operators': 0,
        'no-unused-vars': 1,
        'no-nested-ternary': 1,
        'no-param-reassign': 1,
        'no-unused-expressions': [1, {
            'allowShortCircuit': true,
            'allowTernary': true,
        }],
        'no-console': [1, {
            allow: ['wran', 'error'],
        }],

        'import/no-unresolved': 0, // 否则和 webpack alias 冲突
        'import/no-extraneous-dependencies': 0,
        'import/no-absolute-path': 0,
        'import/extensions': 0,
        'import/first': 0,
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,

        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0, // 可以在任何 html 标签上进行绑定交互事件
        'jsx-a11y/no-noninteractive-tabindex': 0,
        'jsx-a11y/alt-text': 1,

        'react/jsx-indent': 0,
        'react/prefer-stateless-function': 0,
        'react/prop-types': 0, // 临时 disable
        'react/require-default-props': 0, // 临时 disable
        'react/forbid-prop-types': 0,
        'react/no-unused-prop-types': 0,
        'react/no-string-refs': 1,
        'react/no-did-mount-set-state': 1,
        'react/jsx-first-prop-new-line': 1,
        'react/self-closing-comp': [1, {
            'component': true,
            'html': false,
        }],
        'react/no-array-index-key': 1,
        'react/jsx-indent-props': [1, 4],
        'react/jsx-filename-extension': [
            'error', {
                'extensions': ['.js', '.jsx']
            }
        ],
        'react/sort-comp': [1, {
            order: [
                'static-methods',
                'lifecycle',
                'everything-else',
                'render',
            ],
        }],
    },
    globals: {
        // jest
        jest: true,
        describe: true,
        expect: true,
        it: true,
        test: true,
    },
}
