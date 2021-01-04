import { hbs } from 'ember-cli-htmlbars';

export const defaultBanner = () => {
  return {
    template: hbs`
      <PixBanner>Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les diffuser aux élèves avant la Toussaint.</PixBanner>
    `,
  };
};

export const bannerWithExternalLink = (args) => {
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

export const bannerWithInternalLink = (args) => {
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

export const argsTypes = {
  actionLabel: {
    name: 'actionLabel',
    description: 'Nom de l‘action',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  actionUrl: {
    name: 'actionUrl',
    description: 'Action link',
    type: { name: 'string', required: false },
    defaultValue: null,
  }
};
