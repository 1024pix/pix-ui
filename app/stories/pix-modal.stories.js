import { hbs } from 'ember-cli-htmlbars';

import { MODAL_VARIANTS } from '../../addon/helpers/variants';

export default {
  title: 'Overlay/Modal',
  render: (args) => ({
    template: hbs`<PixModal
  @showModal={{this.showModal}}
  @title={{this.title}}
  @onCloseButtonClick={{fn (mut this.showModal) (not this.showModal)}}
  @variant={{this.variant}}
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
    {{! template-lint-disable no-inline-styles }}

    <div
      style='display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 16px; margin-bottom: 16px'
    >
      <PixButton
        @variant='secondary'
        @isBorderVisible='true'
        @triggerAction={{fn (mut this.showModal) (not this.showModal)}}
      >Annuler</PixButton>
      <PixButton @triggerAction={{fn (mut this.showModal) (not this.showModal)}}>Valider</PixButton>
    </div>
  </:footer>
</PixModal>
{{! template-lint-disable no-inline-styles }}

<div style='display:flex; justify-content:center; align-items:center; height:105vh;'>
  <PixButton @triggerAction={{fn (mut this.showModal) (not this.showModal)}}>Ouvrir la modale</PixButton>
</div>`,
    context: args,
  }),
  argTypes: {
    title: {
      name: 'title',
      description: 'Titre de la modale',
      type: { name: 'string', required: true },
    },
    onCloseButtonClick: {
      name: 'onCloseButtonClick',
      description: 'Fonction à exécuter à la fermeture de la modale',
      type: { name: 'function', required: true },
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
    variant: {
      name: 'variant',
      description: "Variante du style de la modale selon l'app.",
      options: MODAL_VARIANTS,
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'default' },
      },
      type: { name: MODAL_VARIANTS.join(' | '), required: false },
    },
  },
};

export const Default = {
  args: {
    showModal: true,
    title: "Qu'est-ce qu'une modale ?",
    onCloseButtonClick: () => {},
    variant: 'default',
  },
};
