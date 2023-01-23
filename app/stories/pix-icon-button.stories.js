import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const Template = (args) => {
  return {
    template: hbs`<PixIconButton
  @ariaLabel={{this.ariaLabel}}
  @icon={{this.icon}}
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

const triggerAction = () => Promise.resolve();

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Action du bouton',
  icon: 'xmark',
  triggerAction,
};

export const small = Template.bind({});
small.args = {
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

export const argTypes = {
  ariaLabel: {
    name: 'ariaLabel',
    description: "l'action du bouton, pour l'accessibilité",
    type: { name: 'string', required: true },
  },
  icon: {
    name: 'icon',
    description: 'Icône font-awesome',
    type: { name: 'string', required: true },
    table: { defaultValue: { summary: 'plus' } },
  },
  iconPrefix: {
    name: 'iconPrefix',
    description: "Prefix de l'icône font-awesome",
    type: { name: 'string', required: false },
    control: { type: 'select' },
    options: ['far', 'fas'],
  },
  triggerAction: {
    name: 'triggerAction',
    description: 'Fonction à appeler au clic du bouton',
    type: { required: true },
    defaultValue: action('triggerAction'),
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
    description: 'Size: `small`, `big`',
    type: { name: 'string', required: false },
    control: { type: 'select' },
    options: ['big', 'small'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'big' },
    },
  },
  color: {
    name: 'color',
    description: ' ⚠️ **Propriété dépréciée** ⚠️ Color: `light-grey`, `dark-grey`',
    type: { name: 'string', required: false },
    control: { type: 'select' },
    options: ['light-grey', 'dark-grey'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'light-grey' },
    },
  },
};
