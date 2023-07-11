'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('node_modules/@1024pix/pix-ui-themes/dist/fonts/OpenSans/OpenSans-Medium.ttf', {
    destDir: 'assets/fonts/OpenSans/',
  });
  app.import('node_modules/@1024pix/pix-ui-themes/dist/fonts/Roboto/Roboto-Medium.ttf', {
    destDir: 'assets/fonts/Roboto/',
  });
  app.import('node_modules/@1024pix/pix-ui-themes/dist/fonts/Roboto/Roboto-Regular.ttf', {
    destDir: 'assets/fonts/Roboto/',
  });
  app.import('node_modules/@1024pix/pix-ui-themes/dist/fonts/Roboto/Roboto-Bold.ttf', {
    destDir: 'assets/fonts/Roboto/',
  });
  app.import('node_modules/@1024pix/pix-ui-themes/dist/pix-theme-default.css');

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
