import { hbs } from 'ember-cli-htmlbars';

export const actionButton = (args) => {
  return {
    template: hbs`
      <PixActionButton
        @icon={{icon}}
        @triggerAction={{triggerAction}}
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
    description: 'icon fontawesome',
    type: { name: 'string', required: true },
    defaultValue: 'times',
  },
  triggerAction: {
    name: 'triggerAction',
    description: 'fonction à appeler au clic du bouton',
    type: { required: true },
  },
};
