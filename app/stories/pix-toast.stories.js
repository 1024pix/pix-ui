import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Notification/Toast',
  render: (args) => ({
    template: hbs`<PixToast
  @type={{this.type}}
  @showToast={{this.showToast}}
  @ariaLabelForCloseButton='Fermer'
  @onCloseButtonClick={{fn (mut this.showToast) (not this.showToast)}}
>
  ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
  dicta sunt explicabo.
</PixToast>`,
    context: args,
  }),
  argTypes: {
    type: {
      name: 'type',
      description: 'Type de la notification: success, error, information, warning',
      type: { name: 'string', required: true },
    },
    onCloseButtonClick: {
      name: 'onCloseButtonClick',
      description: 'Fonction à exécuter à la fermeture de la notification',
      type: { name: 'function', required: true },
    },
    showToast: {
      name: 'showToast',
      description: "Gérer l'affichage de la notification",
      type: { name: 'boolean', required: true },
    },
    ariaLabelForCloseButton: {
      name: 'ariaLabelForCloseButton',
      description: 'Aria-label pour le bouton de fermeture de la notification',
      type: { name: 'function', required: true },
    },
  },
};

export const success = {
  args: {
    type: 'success',
    showToast: true,
    ariaLabelForCloseButton: 'Fermer',
    onCloseButtonClick: () => {},
  },
};
export const error = {
  args: {
    type: 'error',
    showToast: true,
    ariaLabelForCloseButton: 'Fermer',
    onCloseButtonClick: () => {},
  },
};

export const information = {
  args: {
    type: 'information',
    showToast: true,
    ariaLabelForCloseButton: 'Fermer',
    onCloseButtonClick: () => {},
  },
};

export const warning = {
  args: {
    type: 'warning',
    showToast: true,
    ariaLabelForCloseButton: 'Fermer',
    onCloseButtonClick: () => {},
  },
};
