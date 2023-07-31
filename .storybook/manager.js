import { addons } from '@storybook/manager-api';
import storybookCustomTheme from './storybook-custom-theme';

addons.setConfig({
  theme: storybookCustomTheme,
});
