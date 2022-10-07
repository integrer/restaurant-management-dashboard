import path from 'path';
import fs from 'fs';
import { IS_DEV } from './common';

if (IS_DEV) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

const packageJsonPath = path.join(process.cwd(), 'package.json');
const rawPackageJson = fs.readFileSync(packageJsonPath).toString();
const pkgMeta: { version: string } = JSON.parse(rawPackageJson);
export const { version: VERSION } = pkgMeta;

export const WEBPACK_PORT = 8085; // For dev environment only
