import { create } from '@storybook/theming/create';

export default create({
  base: 'light', // needed, this is not an optional parameter

  colorPrimary: 'linear-gradient(180deg, #FEDC41 0%, #FF9F00 100%)',
  colorSecondary: '#388AFF',

  // UI
  appBg: '#F4F5F7',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: 'linear-gradient(135deg, #388AFF 0%, #985FFF 100%)',

  // Form colors
  inputBg: 'grey',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Pix',
  brandUrl: 'https://pix.fr/',
  brandImage: 'https://images.prismic.io/pix-site/22cba92d-9722-43d5-a27e-7c33832628cf_pix-logo.svg?auto=compress,format',
});