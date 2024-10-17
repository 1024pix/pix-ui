'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

const safe = embroiderSafe();
const optimized = embroiderOptimized();

module.exports = async function () {
  const pinnedDependencies = {
    '@embroider/core': '3.0.2',
    '@embroider/webpack': '3.0.0',
    '@embroider/compat': '3.0.2',
    '@embroider/test-setup': '3.0.0',
  };

  return {
    scenarios: [
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        ...safe,
        npm: {
          ...safe.npm,
          devDependencies: {
            ...safe.npm.devDependencies,
            ...pinnedDependencies,
          },
        },
      },
      {
        ...optimized,
        npm: {
          ...optimized.npm,
          devDependencies: {
            ...optimized.npm.devDependencies,
            ...pinnedDependencies,
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
