import { addParameters } from '@storybook/ember';
import storybookCustomTheme from './storybook-custom-theme';

addParameters({
  options: {
    theme: storybookCustomTheme,
  },
});
