module.exports = {
  root: true,
  env: {browser: true, es2020: true, es6: true, node: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      modules: true,
      jsx: true
    },
    sourceType: 'module',
  },
  settings: {
    react:
        {
          version: '18.2'
        }
  },
  plugins: ['react-refresh', 'react', 'react-hooks'],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    "react/prop-types": "off",
    "no-unused-vars": ["error", {"varsIgnorePattern": "React"}],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
}
