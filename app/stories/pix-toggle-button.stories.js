import { action } from '@storybook/addon-actions';
import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Navigation/Toggle Button',
  argTypes: {
    viewAText: {
      name: '<:viewA>',
      description: "Yield où l'on place le texte ou l'icône de la première option",
      type: { required: true },
    },
    viewBText: {
      name: '<:viewB>',
      description: "Yield où l'on place le texte ou l'icône de la deuxième option",
      type: { required: true },
    },
    onChange: {
      name: 'onChange',
      description: "Fonction à appeler quand le PixToggleButton change d'état.",
      type: { required: true },
      control: { disable: true },
    },
    label: {
      name: '<:label>',
      description: "Yield où l'on place le label",
    },
    toggled: {
      name: 'toggled',
      description: 'Détermine si la deuxième option est cochée par défaut',
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixToggleButton @toggled={{this.toggled}} @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewAText}}</:viewA>
  <:viewB>{{this.viewBText}}</:viewB>
</PixToggleButton>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.storyName = 'Défaut';
Default.args = {
  label: 'Mon super label',
  viewAText: 'Option A',
  viewBText: 'Option B',
  onChange: action('onChange'),
};

export const Toggled = Template.bind({});
Toggled.storyName = 'Option 2 par défaut';
Toggled.args = {
  ...Default.args,
  toggled: true,
};
