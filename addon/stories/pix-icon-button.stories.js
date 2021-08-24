import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const Template = (args) => {
  return {
    template: hbs`
      <PixIconButton
        @icon={{icon}}
        @iconPrefix={{iconPrefix}}
        @triggerAction={{triggerAction}}
        @withBackground={{withBackground}}
        @size={{size}}
        @color={{color}}
        />
    `,
    context: args
  };
};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  icon: 'arrow-down',
  size: 'small',
  withBackground: true,
};

export const DefaultBig = Template.bind({});
DefaultBig.args = {
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
    description: 'color: `light-grey`, `dark-grey`',
    type: { name: 'string', required: false },
    control: { type: 'select', options: ['light-grey', 'dark-grey'] },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'light-grey' },
    }
  },
};
