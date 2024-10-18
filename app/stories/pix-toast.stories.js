import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Notification/Toast',
  render: (args) => ({
    template: hbs`<PixToast @type={{this.type}} @message={{this.message}} @ariaLabelForCloseButton='Fermer' />`,
    context: args,
  }),
  argTypes: {
    type: {
      name: 'type',
      description: 'Type de la notification : success, error, information, warning',
      type: { name: 'string', required: true },
    },
    ariaLabelForCloseButton: {
      name: 'ariaLabelForCloseButton',
      description: 'Aria-label pour le bouton de fermeture de la notification',
      type: { name: 'string', required: true },
    },
    message: {
      name: 'message',
      description: 'Contenu de la notification',
      type: { name: 'message', required: true },
    },
  },
};

export const success = {
  args: {
    type: 'success',
    message:
      'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n  dicta sunt explicabo.',
    ariaLabelForCloseButton: 'Fermer',
  },
};
export const error = {
  args: {
    type: 'error',
    message:
      'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n  dicta sunt explicabo.',
    ariaLabelForCloseButton: 'Fermer',
  },
};

export const information = {
  args: {
    type: 'information',
    message:
      'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n  dicta sunt explicabo.',
    ariaLabelForCloseButton: 'Fermer',
  },
};

export const warning = {
  args: {
    type: 'warning',
    message:
      'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n  dicta sunt explicabo.',
    ariaLabelForCloseButton: 'Fermer',
  },
};
