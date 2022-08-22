import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
      <PixBanner
        @type={{type}}
        @actionLabel={{actionLabel}}
        @actionUrl={{actionUrl}}
        @canCloseBanner={{canCloseBanner}}
      >
        Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les diffuser aux élèves avant la Toussaint.
      </PixBanner>
    `,
    context: args,
  };
};

export const Default = Template.bind({});

export const warning = Template.bind({});
warning.args = {
  type: 'warning',
};

export const error = Template.bind({});
error.args = {
  type: 'error',
};

export const communicationPixApp = Template.bind({});
communicationPixApp.args = {
  type: 'communication',
};

export const communicationPixOrga = Template.bind({});
communicationPixOrga.args = {
  type: 'communication-orga',
};

export const communicationPixCertif = Template.bind({});
communicationPixCertif.args = {
  type: 'communication-certif',
};

export const withExternalLink = Template.bind({});
withExternalLink.args = {
  type: 'info',
  actionLabel: 'Voir le nouveau site',
  actionUrl: 'www.test.fr/',
};

export const withInternalLink = Template.bind({});
withInternalLink.args = {
  type: 'info',
  actionLabel: 'Voir la liste des participants',
  actionUrl: 'campaign.list',
};

export const withCloseIcon = Template.bind({});
withCloseIcon.args = {
  type: 'info',
  canCloseBanner: true,
};

export const argsTypes = {
  actionLabel: {
    name: 'actionLabel',
    description: 'Nom de l‘action',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  actionUrl: {
    name: 'actionUrl',
    description: 'Lien de l‘action',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  type: {
    name: 'type',
    description: 'Définit le type de bannière',
    type: { name: 'string', required: false },
    defaultValue: { summary: 'information' },
    control: {
      type: 'select',
      options: [
        'information',
        'warning',
        'error',
        'communication',
        'communication-orga',
        'communication-certif',
      ],
    },
  },
  canCloseBanner: {
    name: 'canCloseBanner',
    description: 'Afficher la croix pour fermer la bannière',
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
};
