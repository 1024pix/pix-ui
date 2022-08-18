import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixSidebar @showSidebar={{this.showSidebar}} @title={{this.title}} @onClose={{onClose}}>
        <:content>
          <p>
            Une fenêtre modale est, dans une interface graphique, une fenêtre qui prend le contrôle total du clavier et
            de l'écran. Elle est en général associée à une question à laquelle il est impératif que l'utilisateur
            réponde avant de poursuivre, ou de modifier quoi que ce soit. La fenêtre modale a pour propos : d'obtenir
            des informations de l'utilisateur (ces informations sont nécessaires pour réaliser une opération) ; de
            fournir une information à l'utilisateur (ce dernier doit en prendre connaissance avant de pouvoir continuer
            à utiliser l'application).
          </p>
        </:content>
        <:footer>
          <PixButton @backgroundColor="transparent-light" @isBorderVisible="true">Annuler</PixButton>
          <PixButton>Valider</PixButton>
        </:footer>
      </PixModal>
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  showSidebar: true,
  title: 'Filtrer',
  onClose: () => {
    console.log('coucou');
    // alert('Action : fermer sidebar');
  },
};

export const argTypes = {
  showSidebar: {
    name: 'showSidebar',
    description: 'Visibilité de la sidebar',
    type: { name: 'boolean', required: false },
    defaultValue: 'false',
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  title: {
    name: 'title',
    description: 'Titre de la modale',
    type: { name: 'string', required: true },
    defaultValue: null,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    },
  },
  onClose: {
    name: 'onClose',
    description: 'Fonction à exécuter à la fermeture de la sidebar',
    type: { name: 'function', required: true },
    defaultValue: null,
    table: {
      type: { summary: 'function' },
      defaultValue: { summary: null },
    },
  },
};
