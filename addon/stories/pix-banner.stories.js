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
        @actionLabel= "Voir le nouveau site"
        @actionUrl= "www.test.fr/"
      >Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les diffuser aux élèves avant la Toussaint.</PixBanner>
    `,
    context: args,
  };
};

export const bannerWithInternalLink = (args) => {
  return {
    template: hbs`
      <PixBanner
        @actionLabel= "Voir la liste des participants"
        @actionUrl= "campaign.list"
      >Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les diffuser aux élèves avant la Toussaint.</PixBanner>
    `,
    context: args,
  };
};

export const warningBanner = (args) => {
  return {
    template: hbs`
      <PixBanner
        @type="warning"
      >Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les diffuser aux élèves avant la Toussaint.</PixBanner>
    `,
    context: args,
  };
};

export const errorBanner = (args) => {
  return {
    template: hbs`
      <PixBanner
        @type="error"
      >Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les diffuser aux élèves avant la Toussaint.</PixBanner>
    `,
    context: args,
  };
};

export const communicationBanner = (args) => {
  return {
    template: hbs`
      <PixBanner
        @type="communication"
        @color="blue"
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
  },
  type: {
    name: 'type',
    description: 'Définit le type de bannière',
    type: { name: 'string', required: false },
    defaultValue: 'information',
    control: { type: 'select', options: ['information', 'warning', 'error'] },
  },
  color: {
    name: 'color',
    description: 'Détermine la couleur de la bannière de communication',
    type: { name: 'string', required: false },
    defaultValue: 'blue',
    control: { type: 'select', options: ['blue', 'green', 'yellow', 'purple'] },
  }
};
