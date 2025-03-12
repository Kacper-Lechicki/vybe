export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['fix', 'feat', 'docs', 'test']],
    'subject-case': [2, 'never', 'sentence-case'],
  },
};
