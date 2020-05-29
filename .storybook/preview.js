import { addParameters, addDecorator } from '@storybook/ember';
import storybookCustomTheme from './storybook-custom-theme';
import centered from '@storybook/addon-centered/ember';

addParameters({
  options: {
    theme: storybookCustomTheme,
  },
});
addDecorator(centered);
