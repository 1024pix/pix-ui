import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Other/Overlay',
  argTypes: {
    isVisible: {
      name: 'isVisible',
      description: "Visibilité de l'overlay",
      type: { name: 'bool', required: false },
      table: { defaultValue: { summary: true } },
      control: { type: 'radio' },
      options: [true, false],
    },
    hasCenteredContent: {
      name: 'hasCenteredContent',
      description: "Centrer verticalement le contenu de l'overlay",
      type: { name: 'bool', required: false },
      table: { defaultValue: { summary: false } },
      control: { type: 'radio' },
      options: [true, false],
    },
    onClose: {
      name: 'onClose',
      description: "Callback déclenché à la fermeture de l'overlay",
    },
  },
};

export const overlay = (args) => ({
  template: hbs`<PixOverlay @isVisible={{this.isVisible}} @hasCenteredContent={{this.hasCenteredContent}}>
  Du contenu en dessous de l'overlay.
</PixOverlay>`,
  context: args,
});
