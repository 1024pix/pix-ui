export default {
  multipass: true, // Enable multipass to optimize multiple times
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
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
