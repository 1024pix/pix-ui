import { hbs } from 'ember-cli-htmlbars';

export const banner = (args) => {
  return {
    template: hbs`
      <PixBanner
        @actionLabel={{actionLabel}}
        @actionUrl={{actionUrl}}
      >Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les diffuser aux élèves avant la Toussaint.</PixBanner>
    `,
    context: args,
  };
};

export const argTypes = {
  actionLabel: {
    name: 'action label',
    description: 'Nom de l‘action',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  actionUrl: {
    name: 'action url',
    description: 'Action link',
    type: { name: 'string', required: false },
    defaultValue: null,
  }
};
