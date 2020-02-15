module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint-config-airbnb-base',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'react-app'
  ],
  plugins: ['react', 'import', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'arrow-parens': 'off',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'constructor-super': 'warn',
    curly: 'off',
    'func-names': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-const-assign': 'warn',
    'no-continue': 'off',
    'no-empty': 'warn',
    'no-extra-semi': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-underscore-dangle': 'off',
    'no-unreachable': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'next',
        ignoreRestSiblings: true,
        varsIgnorePattern: 'debug'
      }
    ],
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react/display-name': 'off',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-multi-comp': 'off',
    'react/prop-types': 'warn',
    'react/require-default-props': 'warn',
    semi: 'off'
  }
}
