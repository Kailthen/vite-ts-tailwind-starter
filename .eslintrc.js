module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint-config-prettier',
        'eslint:recommended', // 使用推荐的eslint
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended', // 使用插件支持vue3
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'moudule',
        parser: '@typescript-eslint/parser',
    },
    plugins: [],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error', 'warn'] }] : 'off', //生产模式不允许使用log
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //生产默认不允许使用debugger
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }], //变量声明未使用
        '@typescript-eslint/no-explicit-any': 'off', // 允许ts使用any
    },
}
