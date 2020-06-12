import { addParameters, addDecorator } from '@storybook/ember';
import storybookCustomTheme from './storybook-custom-theme';
import { checkA11y } from '@storybook/addon-a11y';

addParameters({
  options: {
    theme: storybookCustomTheme,
  },
});
addDecorator(checkA11y);
