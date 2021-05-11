import { hbs } from 'ember-cli-htmlbars';

export const defaultBanner = (args) => {
  return {
    template: hbs`
      <PixBanner @type={{type}} >Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les diffuser aux élèves avant la Toussaint.</PixBanner>
    `,
    context: args,
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
    control: { disable: true },
  },
  actionUrl: {
    name: 'actionUrl',
    description: 'Action link',
    type: { name: 'string', required: false },
    control: { disable: true },
  },
  type: {
    name: 'type',
    description: 'Définit le type de bannière',
    type: { name: 'string', required: false },
    defaultValue: { summary: 'information'},
    control: { type: 'select', options: ['information', 'warning', 'error', 'communication', 'communication-orga','communication-certif'] },
  },
};
