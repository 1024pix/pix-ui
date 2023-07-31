import { create } from '@storybook/theming/create';

import logo from './logo.svg';

export default create({
  base: 'light', // needed, this is not an optional parameter

  colorPrimary: '#388AFF',
  colorSecondary: '#388AFF',

  // UI
  appBg: '#F4F5F7', // background of the global app
  appContentBg: 'white', // background of the component preview canvas
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors of the left menu
  textColor: 'black',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white', // Selected tab when multiple tabs
  barBg: 'linear-gradient(135deg, #3D68FF 0%, #8845FF 100%)',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'white',
  // inputTextColor: 'white',
  // inputBorderRadius: 4,
  brandTitle: 'Pix',
  brandUrl: 'https://pix.org',
  brandImage: logo,
});
