import { hbs } from 'ember-cli-htmlbars';

export const tag = (args) => {
  return {
    template: hbs`
      <PixTag @color={{color}} @compact={{compact}}>
        Contenu du tag
      </PixTag>
    `,
    context: args,
  };
};

export const compactTag = (args) => {
  return {
    template: hbs`
      <PixTag @color={{color}} @compact={{compact}}>
        Contenu du tag
      </PixTag>
    `,
    context: args,
  };
};
compactTag.args = {
  compact: true,
};

export const argTypes = {
  color: {
    name: 'color',
    description: 'Couleur du tag',
    type: { name: 'number', required: false },
    defaultValue: 'blue',
    control: {
      type: 'select',
      options: [
        'blue',
        'blue-light',
        'purple',
        'purple-light',
        'green',
        'green-light',
        'yellow',
        'yellow-light',
        'grey',
        'grey-light',
      ],
    },
  },
  compact: {
    name: 'compact',
    description: 'Tag compact ou non',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
};
