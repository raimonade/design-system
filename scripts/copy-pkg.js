/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const path = require('path');

const pkgData = require(path.resolve(__dirname, '../package.json'));

// Delete scripts
delete pkgData.scripts;
// Delete devDependencies
delete pkgData.devDependencies;

// Set entry points
pkgData.main = 'cjs/index.js';
pkgData.module = 'index.js';
pkgData.types = 'index.d.ts';

// Remove any dependencies starting with "@storybook"
Object.keys(pkgData.dependencies).forEach(key => {
  if (key.startsWith('@storybook')) {
    delete pkgData.dependencies[key];
  }
});

// Overwrite original `package.json` with new data (i.e. minus the specific data).
fs.writeFile('lib/package.json', JSON.stringify(pkgData, null, 2), err => {
  if (err) throw err;
});
