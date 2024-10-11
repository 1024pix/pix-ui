import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Notification/Banner',
  argTypes: {
    actionLabel: {
      name: 'actionLabel',
      description: 'Nom de l‘action',
      type: { name: 'string', required: false },
    },
    closeButtonLabel: {
      name: 'closeButtonLabel',
      description: 'Nom du bouton de fermeture de la banner',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'Fermer' } },
    },
    actionUrl: {
      name: 'actionUrl',
      description: 'Lien de l‘action',
      type: { name: 'string', required: false },
    },
    type: {
      name: 'type',
      description: 'Définit le type de bannière',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'information' } },
      control: {
        type: 'select',
      },
      options: [
        'information',
        'warning',
        'error',
        'communication',
        'communication-orga',
        'communication-certif',
      ],
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
    onCloseBannerTriggerAction: {
      name: 'onCloseBannerTriggerAction',
      description:
        'Fonction à appeler lors de la fermeture de la bannière. Doit être utilisé avec le paramètre canCloseBanner',
      type: { required: false },
      control: { disable: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixBanner
  @type={{this.type}}
  @actionLabel={{this.actionLabel}}
  @closeButtonLabel={{this.closeButtonLabel}}
  @actionUrl={{this.actionUrl}}
  @canCloseBanner={{this.canCloseBanner}}
>
  Parcours de rentrée 2020 : les codes sont disponibles dans l'onglet campagne. N’oubliez pas de les
  diffuser aux élèves avant la Toussaint.
</PixBanner>`,
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
  type: 'information',
  actionLabel: 'Voir le nouveau site',
  actionUrl: 'www.test.fr/',
};

export const withInternalLink = Template.bind({});
withInternalLink.args = {
  type: 'information',
  actionLabel: 'Voir la liste des participants',
  actionUrl: 'campaign.list',
};

export const withCloseIcon = Template.bind({});
withCloseIcon.args = {
  type: 'information',
  canCloseBanner: true,
  closeButtonLabel: 'Fermer',
};
