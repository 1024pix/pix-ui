import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Others/Indicator Card',
  argTypes: {
    title: {
      name: 'Title',
      description: 'Titre de la carte',
    },
    color: {
      name: 'Color',
      description: "Couleur de l'icone",
      table: { defaultValue: { summary: 'grey' } },
      control: { type: 'select' },
      options: ['neutral', 'primary', 'tertiary', 'success', 'warning'],
    },
    icon: {
      name: 'Icon',
      description: "Icone dans l'encart",
    },
    iconPrefix: {
      name: 'IconPrefix',
      description:
        "Préfixe pour l'icone dans l'encart - permet d'utiliser une variation de l'icone font awesome différente de celle par défaut.",
      table: { defaultValue: { summary: 'fas' } },
      control: { type: 'select' },
      options: ['far', 'fas'],
    },
    value: {
      name: 'Value',
      description: 'Contenu principal',
    },
    info: {
      name: 'Info',
      description: "Contenu de la bulle d'info",
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`
    <div style="min-width:300px">
      <PixIndicatorCard
        @title={{this.title}}
        @color={{this.color}}
        @icon={{this.icon}}
        @iconPrefix={{this.iconPrefix}}
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

export const withIconPrefix = Template.bind({});
withIconPrefix.args = {
  ...Default.args,
  iconPrefix: 'far',
};
