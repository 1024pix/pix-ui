import { addons } from '@storybook/manager-api';
import { renderLabel } from 'storybook-addon-tag-badges';

import storybookCustomTheme from './storybook-custom-theme';

addons.setConfig({
  theme: storybookCustomTheme,
  sidebar: {
    showRoots: true,
    renderLabel,
  },
});
