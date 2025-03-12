import { execSync } from 'child_process';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'node:path';

execSync('npx husky-init && npm install', { stdio: 'inherit' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const huskyDir = join(__dirname, '.husky');

fs.writeFileSync(
  path.join(huskyDir, 'pre-commit'),
  `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
`,
  { mode: 0o755 },
);

fs.writeFileSync(
  path.join(huskyDir, 'commit-msg'),
  `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx commitlint --edit "$1"
`,
  { mode: 0o755 },
);

fs.writeFileSync(
  path.join(__dirname, 'commitlint.config.js'),
  `export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['fix', 'feat', 'docs', 'test']],
    'subject-case': [2, 'never', 'sentence-case']
  }
};
`,
);

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

packageJson['lint-staged'] = {
  '**/*.{js,ts,vue}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,md,scss,css}': ['prettier --write'],
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
