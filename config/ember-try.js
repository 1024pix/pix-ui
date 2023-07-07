'use strict';

const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

const safe = embroiderSafe();
const optimized = embroiderOptimized();

module.exports = async function () {
  const pinnedDependencies = {
    '@embroider/core': `3.0.2`,
    '@embroider/webpack': `3.0.0`,
    '@embroider/compat': `3.0.2`,
  };

  return {
    scenarios: [
      {
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
    ],
  };
};
