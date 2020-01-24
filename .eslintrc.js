module.exports = {
  root: true,
  extends: [
    '@ravn-dev/eslint-config-ravn/jest',
    '@ravn-dev/eslint-config-ravn/base',
    '@ravn-dev/eslint-config-ravn/typescript',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
  ],
}
