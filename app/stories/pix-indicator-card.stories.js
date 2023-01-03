import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
    <div style="min-width:300px">
      <PixIndicatorCard
        @title={{this.title}}
        @color={{this.color}}
        @icon={{this.icon}}
        @info={{this.info}}
        @isLoading={{this.isLoading}}
        @loadingMessage={{this.loadingMessage}}
      >
        <:default>{{this.value}}</:default>
        <:sub>
          <span>En cours : 1</span><span>En attente : 2</span><span>Envoyés : 3</span>
        </:sub>
      </PixIndicatorCard>
    </div>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  title: 'Hello Dedans',
  color: 'purple',
  icon: 'circle-question',
  value: '42',
  info: "Coucou la bulle d'infos",
  isLoading: false,
  loadingMessage: 'texte de chargement ScreenReader',
};

export const argTypes = {
  title: {
    name: 'Title',
    description: 'Titre de la carte',
  },
  color: {
    name: 'Color',
    description: "Couleur de l'icone",
  },
  icon: {
    name: 'Icon',
    description: "Icone dans l'encart",
  },
  value: {
    name: 'Value',
    description: 'Contenu principal',
  },
  info: {
    name: 'Info',
    description: "Contenu de la bulle d'info",
  },
};
