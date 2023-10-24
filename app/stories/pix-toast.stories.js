import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Notification/Toast',
  render: (args) => ({
    template: hbs`<PixToast @toast={{this.toast}} />`,
    context: args,
  }),
  argTypes: {
    toast: {
      name: 'toast',
      description: 'Un objet notification qui contient un type, un message et un ariaLabel',
      type: { name: 'object', required: true },
    },
  },
};

export const success = {
  args: {
    toast: {
      type: 'success',
      message:
        'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n  dicta sunt explicabo.',
      ariaLabelForCloseButton: 'Fermer',
    },
  },
};
export const error = {
  args: {
    toast: {
      type: 'error',
      message:
        'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n  dicta sunt explicabo.',
      ariaLabelForCloseButton: 'Fermer',
    },
  },
};

export const information = {
  args: {
    toast: {
      type: 'information',
      message:
        'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n  dicta sunt explicabo.',
      ariaLabelForCloseButton: 'Fermer',
    },
  },
};

export const warning = {
  args: {
    toast: {
      type: 'warning',
      message:
        'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n  dicta sunt explicabo.',
      ariaLabelForCloseButton: 'Fermer',
    },
  },
};
