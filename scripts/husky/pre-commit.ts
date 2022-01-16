import { execSync } from 'child_process';

execSync('lint-staged', { stdio: 'inherit' });
