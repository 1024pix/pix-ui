'use strict';

// eslint-disable-next-line no-undef
module.exports = {
  multipass: true, // Enable multipass to optimize multiple times
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: false,
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'fill',
      },
    },
  ],
};
