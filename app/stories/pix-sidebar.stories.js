import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Basics/Sidebar',
  argTypes: {
    showSidebar: {
      name: 'showSidebar',
      description: 'Visibilité de la sidebar',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    title: {
      name: 'title',
      description: 'Titre de la sidebar',
      type: { name: 'string', required: true },
    },
    onClose: {
      name: 'onClose',
      description: 'Fonction à exécuter à la fermeture de la sidebar',
      type: { name: 'function', required: true },
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export const Template = (args) => {
  return {
    template: hbs`<PixSidebar
  @showSidebar={{this.showSidebar}}
  @title={{this.title}}
  @onClose={{fn (mut this.showSidebar) (not this.showSidebar)}}
>
  <:content>
    <p>
      Une sidebar est, dans une interface graphique, une fenêtre qui prend le contrôle total du
      clavier et de l'écran. Elle est en général associée à du paramétrage d'écran.
    </p>
  </:content>
  <:footer>
    {{! template-lint-disable no-inline-styles }}
    <div style='display: flex; gap: 8px'>
      <PixButton
        @backgroundColor='transparent-light'
        @isBorderVisible='true'
        @triggerAction={{fn (mut this.showSidebar) (not this.showSidebar)}}
      >Annuler</PixButton>
      <PixButton
        @triggerAction={{fn (mut this.showSidebar) (not this.showSidebar)}}
      >Valider</PixButton>
    </div>
  </:footer>
</PixSidebar>
{{! template-lint-disable no-inline-styles }}
<div style='display:flex; justify-content:center; align-items:center; height:105vh;'>
  <PixButton
    @triggerAction={{fn (mut this.showSidebar) (not this.showSidebar)}}
    style='height:45px'
  >Ouvrir la sidebar</PixButton>
</div>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  showSidebar: true,
  title: 'Filtrer',
  onClose: () => {},
};
