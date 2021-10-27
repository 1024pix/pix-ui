import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const Template = (args) => {
  return {
    template: hbs`
      <PixIconButton
        @ariaLabel={{ariaLabel}}
        @icon={{icon}}
        @iconPrefix={{iconPrefix}}
        @triggerAction={{triggerAction}}
        @withBackground={{withBackground}}
        @size={{size}}
        />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Action du bouton',
  icon: 'times',
  triggerAction: () => {
    return new Promise().resolves();
  },
};

export const small = Template.bind({});
small.args = {
  ...Default.args,
  size: 'small',
};

export const withBackground = Template.bind({});
withBackground.args = {
  ...Default.args,
  withBackground: true,
};

export const argTypes = {
  ariaLabel: {
    name: 'ariaLabel',
    description: "l'action du bouton, pour l'accessibilité",
    type: { name: 'string', required: true },
    table: { defaultValue: { summary: 'times' } },
  },
  icon: {
    name: 'icon',
    description: 'Icône font-awesome',
    type: { name: 'string', required: true },
    table: { defaultValue: { summary: 'times' } },
  },
  iconPrefix: {
    name: 'iconPrefix',
    description: "Prefix de l'icône font-awesome",
    type: { name: 'string', required: false },
    control: { type: 'select', options: ['far', 'fas'] },
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
    control: { type: 'select', options: ['big', 'small'] },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'big' },
    },
  },
  color: {
    name: 'color',
    description: ' ⚠️ **Propriété dépréciée** ⚠️ Color: `light-grey`, `dark-grey`',
    type: { name: 'string', required: false },
    control: { type: 'select', options: ['light-grey', 'dark-grey'] },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'light-grey' },
    },
  },
};
