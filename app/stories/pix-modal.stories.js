import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`<PixModal
  @showModal={{this.showModal}}
  @title={{this.title}}
  @onClose={{fn (mut this.showModal) (not this.showModal)}}
>
  <:content>
    <p>
      Une fenêtre modale est, dans une interface graphique, une fenêtre qui prend le contrôle total
      du clavier et de l'écran. Elle est en général associée à une question à laquelle il est
      impératif que l'utilisateur réponde avant de poursuivre, ou de modifier quoi que ce soit. La
      fenêtre modale a pour propos : d'obtenir des informations de l'utilisateur (ces informations
      sont nécessaires pour réaliser une opération) ; de fournir une information à l'utilisateur (ce
      dernier doit en prendre connaissance avant de pouvoir continuer à utiliser l'application).
    </p>
  </:content>
  <:footer>
    <div style="display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 16px; margin-bottom: 16px">
      <PixButton @backgroundColor='transparent-light' @isBorderVisible='true' @triggerAction={{fn (mut this.showModal) (not this.showModal)}}>Annuler</PixButton>
      <PixButton @triggerAction={{fn (mut this.showModal) (not this.showModal)}}>Valider</PixButton>
    </div>
  </:footer>
</PixModal>
<div style='display:flex; justify-content:center; align-items:center; height:105vh;'>
  <PixButton @triggerAction={{fn (mut this.showModal) (not this.showModal)}}>Ouvrir la modale</PixButton>
</div>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  showModal: true,
  title: "Qu'est-ce qu'une modale ?",
  onClose: () => {},
};

export const argTypes = {
  title: {
    name: 'title',
    description: 'Titre de la modale',
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  onClose: {
    name: 'onClose',
    description: `
Fonction à exécuter à la fermeture de la modale.
Paramètres de callback :
  1. **event**: Event
  2. **modalElement**: HTMLElement
`,
    type: { name: 'function', required: true },
    defaultValue: null,
  },
  showModal: {
    name: 'showModal',
    description: "Gérer l'ouverture de la modale",
    type: { name: 'boolean', required: true },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
};
