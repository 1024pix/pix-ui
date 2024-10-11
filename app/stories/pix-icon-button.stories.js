import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { ICONS } from '../../addon/helpers/icons';

export default {
  title: 'Basics/Icon button',
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
    withBackground: {
      name: 'withBackground',
      description: 'Affichage du fond grisé',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      name: 'size',
      description: 'Size: `small`',
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['small'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'big' },
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
  @withBackground={{this.withBackground}}
  @size={{this.size}}
  disabled={{this.disabled}}
  aria-disabled={{this.disabled}}
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

export const withBackground = Template.bind({});
withBackground.args = {
  ...Default.args,
  withBackground: true,
  triggerAction,
};

export const disabled = Template.bind({});
disabled.args = {
  ...Default.args,
  disabled: true,
  triggerAction,
};
