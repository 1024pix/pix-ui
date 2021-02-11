import { hbs } from 'ember-cli-htmlbars';

export const actionButton = (args) => {
  return {
    template: hbs`
      <PixActionButton
        @icon={{icon}}
        @iconPrefix={{iconPrefix}}
        @triggerAction={{triggerAction}}
        @withBackground={{withBackground}}
        @size={{size}}
        @color={{color}}
        />
    `,
    context: {
      icon: 'times',
      triggerAction: console.log,
      ...args,
    }
  };
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
  },
  withBackground: {
    name: 'withBackground',
    description: 'Affichage du fond grisé',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
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
