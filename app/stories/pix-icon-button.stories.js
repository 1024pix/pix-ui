import { action } from '@storybook/addon-actions';
import { hbs } from 'ember-cli-htmlbars';

import { ICONS } from '../../addon/helpers/icons';

export default {
  title: 'Actions/Icon button',
  argTypes: {
    ariaLabel: {
      name: 'ariaLabel',
      description: "l'action du bouton, pour l'accessibilité",
      type: { name: 'string', required: true },
    },
    iconName: {
      name: 'iconName',
      description: 'Icône a utiliser sur le bouton',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(ICONS),
    },
    plainIcon: {
      name: 'plainIcon',
      description: "Change le type de l'icône fill/plain",
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    triggerAction: {
      name: 'triggerAction',
      description: 'Fonction à appeler au clic du bouton',
      type: { required: true },
    },
    size: {
      name: 'size',
      description: 'Size: `big`,`small` ou `xsmall`',
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['big', 'small', 'xsmall'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'big' },
      },
    },
    isDisabled: {
      name: 'isDisabled',
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixIconButton
  @ariaLabel={{this.ariaLabel}}
  @iconName={{this.icon}}
  @iconPrefix={{this.iconPrefix}}
  @triggerAction={{this.triggerAction}}
  @size={{this.size}}
  @isDisabled={{this.isDisabled}}
/>`,
    context: args,
  };
};

const triggerAction = action('triggerAction');

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Action du bouton',
  icon: 'close',
  triggerAction,
};

export const size = Template.bind({});
size.args = {
  ...Default.args,
  size: 'small',
  triggerAction,
};

export const disabled = Template.bind({});
disabled.args = {
  ...Default.args,
  isDisabled: true,
  triggerAction,
};
