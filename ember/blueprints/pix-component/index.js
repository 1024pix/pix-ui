'use strict';
const kebabCase = require('lodash/kebabCase');
const insertIntoFile = require('./utilities/insert-into-file');
const EOL = require('os').EOL;

module.exports = {
  description: 'To create a Pix component with default files',

  locals(options) {
    const componentName = options.entity.name;
    const dasherizedName = 'pix-' + kebabCase(componentName);

    importNewStyleInGlobalStyle(dasherizedName);

    return {};
  },
};

async function importNewStyleInGlobalStyle(dasherizedName) {
  const importName = "@import '" + dasherizedName + "';";

  await insertIntoFile('addon/styles/addon.scss', importName, { before: '\nhtml {' + EOL });
  console.log('  update addon/styles/addon.scss');
}
