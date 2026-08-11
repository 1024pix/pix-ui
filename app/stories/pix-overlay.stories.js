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
    labelledBy: {
      name: 'labelledBy',
      description:
        "Identifiant de l'élément qui nomme l'overlay, repris dans son attribut aria-labelledby. Sans lui, l'overlay est annoncé sans nom par les lecteurs d'écran",
      type: { name: 'string', required: true },
      table: { type: { summary: 'string' } },
    },
    describedBy: {
      name: 'describedBy',
      description:
        "Identifiant de l'élément qui décrit l'overlay, repris dans son attribut aria-describedby. À réserver à une description courte : les lecteurs d'écran aplatissent l'élément référencé en une seule chaîne annoncée d'un bloc, ce qui rend illisible un contenu structuré ou interactif",
      type: { name: 'string', required: false },
      table: { type: { summary: 'string' } },
    },
    onClose: {
      name: 'onClose',
      description: "Callback déclenché à la fermeture de l'overlay",
    },
  },
};

export const overlay = (args) => ({
  template: hbs`<PixOverlay
  @isVisible={{this.isVisible}}
  @hasCenteredContent={{this.hasCenteredContent}}
  @labelledBy={{this.labelledBy}}
  @describedBy={{this.describedBy}}
>
  <h1 id='overlay-title'>Titre de l'overlay</h1>
  <p id='overlay-content'>Du contenu dans l'overlay.</p>
</PixOverlay>`,
  context: args,
});

overlay.args = {
  labelledBy: 'overlay-title',
  describedBy: 'overlay-content',
};
