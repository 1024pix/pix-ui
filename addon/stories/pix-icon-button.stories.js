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
    context: args
  };
};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  ariaLabel: 'Action du bouton',
  icon: 'arrow-down',
  size: 'small',
  withBackground: true,
};

export const DefaultBig = Template.bind({});
DefaultBig.args = {
  ariaLabel: 'Action du bouton',
  icon: 'times',
  size: 'big',
  withBackground: true,
};

export const withoutBackground = Template.bind({});
withoutBackground.args = {
  ...DefaultSmall.args,
  withBackground: false,
};

export const argTypes = {
  ariaLabel: {
    name: 'ariaLabel',
    description: 'l\'action du bouton, pour l\'accessibilité',
    type: { name: 'string', required: true },
    table: { defaultValue: { summary: 'times' } },
  },
  icon: {
    name: 'icon',
    description: 'icône font-awesome',
    type: { name: 'string', required: true },
    table: { defaultValue: { summary: 'times' } },
  },
  iconPrefix: {
    name: 'iconPrefix',
    description: 'prefix de l\'icône font-awesome',
    type: { name: 'string', required: false },
    control: { type: 'select', options: ['far', 'fas'] },
  },
  triggerAction: {
    name: 'triggerAction',
    description: 'fonction à appeler au clic du bouton',
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
    description: 'size: `small`, `big`',
    type: { name: 'string', required: false },
    control: { type: 'select', options: ['big', 'small'] },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'big' },
    }
  },
  color: {
    name: 'color',
    description: 'Propriété dépréciée. Color: `light-grey`, `dark-grey`',
    type: { name: 'string', required: false },
    control: { type: 'select', options: ['light-grey', 'dark-grey'] },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'light-grey' },
    }
  },
};
