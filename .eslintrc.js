/*
 * Eslint config file
 * Documentation: https://eslint.org/docs/user-guide/configuring/
 * Install the Eslint extension before using this feature.
 */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    wx: true,
    App: true,
    Page: true,
    getCurrentPages: true,
    getApp: true,
    Component: true,
    requirePlugin: true,
    requireMiniProgram: true,
  },
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'],
  plugins: ['prettier', 'import'],
  // extends: 'eslint:recommended',
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Built-in types are first
          'external', // Then the index file
          'internal',
        ],
      },
    ],
    // 非开发模式禁用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 允许调用首字母大写的函数时没有 new 操作符
    'new-cap': 'off',
    // 在工具库中允许变量以下划线开头
    'no-underscore-dangle': 'off',
    // 在工具库中允许参数重新赋值
    'no-param-reassign': 'off',
    'number-leading-zero': 'off',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'import/export': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-dynamic-require': 0,
    'object-shorthand': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'consistent-return': 0,
    'no-return-assign': 0,
    'func-names': 0,
    'class-methods-use-this': 0,
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-undef': 0,
    'no-proto': 0,
  },
};
