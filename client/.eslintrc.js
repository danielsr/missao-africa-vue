module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for Vuex mutations
      ]
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
