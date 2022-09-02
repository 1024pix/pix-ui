import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixSidebar @showSidebar={{showSidebar}} @title={{title}} @onClose={{fn (mut showSidebar) (not showSidebar)}}>
        <:content>
          <p>
            Une sidebar est, dans une interface graphique, une fenêtre qui prend le contrôle total du clavier et
            de l'écran. Elle est en général associée à du paramétrage d'écran.
          </p>
        </:content>
        <:footer>
        <div style="display: flex; gap: 8px">
          <PixButton @backgroundColor="transparent-light" @isBorderVisible="true">Annuler</PixButton>
          <PixButton>Valider</PixButton>
          </div>
        </:footer>
      </PixSidebar>
      <PixButton @triggerAction={{fn (mut showSidebar) (not showSidebar)}}>Ouvrir la sidebar</PixButton>
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  showSidebar: true,
  title: 'Filtrer',
  onClose: () => {},
};

export const argTypes = {
  showSidebar: {
    name: 'showSidebar',
    description: 'Visibilité de la sidebar',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  title: {
    name: 'title',
    description: 'Titre de la sidebar',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  onClose: {
    name: 'onClose',
    description: 'Fonction à exécuter à la fermeture de la sidebar',
    type: { name: 'function', required: true },
    table: {
      type: { summary: 'function' },
    },
  },
};