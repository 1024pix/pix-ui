import compatPkg from '@embroider/compat';
import emberCliStorybookPkg from '@storybook/ember-cli-storybook';
import { Webpack } from '@embroider/webpack';
import EmberAddon from 'ember-cli/lib/broccoli/ember-addon.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const path = dirname(fileURLToPath(import.meta.url));

const { compatBuild } = compatPkg;
const { prerender } = emberCliStorybookPkg;

const sourceMapConfig = {
  production: 'source-map',
  test: false,
  default: 'eval-source-map',
};

export default function (defaults) {
  const app = new EmberAddon(defaults, {
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  });

  const compiledApp = compatBuild(app, Webpack, {
    packagerOptions: {
      webpackConfig: {
        devtool: sourceMapConfig[process.env.CI ? 'test' : (process.env.NODE_ENV ?? 'default')],
        module: {
          rules: [
            {
              test: /\.mdx$/,
              include: [
                join(path, 'app/stories/'),
              ],
            },
            {
              test: /\.stories.js$/,
              include: [
                join(path, 'app/stories/'),
              ],
            },
          ],
        }
      },
    },
  });

  return prerender(app, compiledApp)
};
