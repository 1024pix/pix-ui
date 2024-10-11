import { hbs } from 'ember-cli-htmlbars';
import { ICONS } from '../../addon/helpers/icons.js';

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
    iconName: {
      name: 'iconName',
      description: "Icone dans l'encart",
      table: { defaultValue: { summary: 'help' } },
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(ICONS),
    },
    plainIcon: {
      name: 'plainIcon',
      description: "Permet d'utiliser la version pleine de l'icône",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      description: 'Contenu principal',
    },
    info: {
      name: 'info',
      description: "Contenu de la bulle d'info",
    },
    infoLabel: {
      name: 'infoLabel',
      description: "Donne l'information du bouton de la tooltip",
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div style='min-width:300px'>
  <PixIndicatorCard
    @title={{this.title}}
    @color={{this.color}}
    @iconName={{this.iconName}}
    @plainIcon={{this.plainIcon}}
    @info={{this.info}}
    @infoLabel={{this.infoLabel}}
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
  value: '42',
  iconName: 'help',
  info: 'La réponse à presque tout !',
  infoLabel: 'Details du pourquoi 42 ?',
  isLoading: false,
  loadingMessage: 'texte de chargement ScreenReader',
};
