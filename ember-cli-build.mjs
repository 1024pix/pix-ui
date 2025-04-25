import pkg from '@embroider/compat';
import { Webpack } from '@embroider/webpack';
import EmberAddon from 'ember-cli/lib/broccoli/ember-addon.js';

const { compatBuild } = pkg;

const sourceMapConfig = {
  production: 'source-map',
  test: false,
  default: 'eval-source-map',
};

export default function (defaults) {
  const app = new EmberAddon(defaults, {
    // Add options here
  });
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return compatBuild(app, Webpack, {
    packagerOptions: {
      webpackConfig: {
        devtool: sourceMapConfig[process.env.CI ? 'test' : (process.env.NODE_ENV ?? 'default')],
      },
    },
  });
};
