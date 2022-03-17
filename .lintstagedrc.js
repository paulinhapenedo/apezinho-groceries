const path = require('path');

module.exports = {
  // Type check TypeScript files, lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx)': (filenames) => [
    'yarn tsc --noEmit',
    `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
