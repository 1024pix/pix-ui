import { hbs } from 'ember-cli-htmlbars';

export const modal = (args) => {
  return {
    template: hbs`
      <PixModal @title={{this.title}}>
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

export const argTypes = {
  title: {
    name: 'title',
    description: 'Titre de la modale',
    type: { name: 'string', required: false },
    defaultValue: "Qu'est-ce qu'une modale ?",
  },
  onCloseButtonClick: {
    name: 'onCloseButtonClick',
    description: 'Fonction à executer lors du clic sur le bouton de fermeture de la modale',
    type: { name: 'function', required: true },
    defaultValue: null,
  },
};