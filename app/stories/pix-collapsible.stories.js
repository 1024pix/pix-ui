import { hbs } from 'ember-cli-htmlbars';
import { ICONS } from '../../addon/helpers/icons';

export default {
  title: 'Data display/Collapsible',
  argTypes: {
    iconName: {
      name: 'iconName',
      description: "Ajoute l'icône donnée en paramètre avant le titre du PixCollapsible",
      type: { name: 'string', required: false },
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
    tagContent: {
      name: 'tagContent',
      description: "Contenu du tag qui s'affiche près du chevron",
      type: { name: 'string', required: false },
    },
    tagColor: {
      name: 'tagColor',
      description:
        "Couleur du tag qui s'affiche près du chevron. Doit s'ajouter avec le paramètre tagContent. Voir le composant Pix Tag pour les couleurs disponibles",
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'primary' } },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixCollapsible
  @iconName={{this.iconName}}
  @plainIcon={{this.plainIcon}}
  @tagContent={{this.tagContent}}
  @tagColor={{this.tagColor}}
>
  <:title>
    {{this.title}}
  </:title>
  <:content>
    <div>Contenu du PixCollapsible</div>
  </:content>
</PixCollapsible>`,
    context: args,
  };
};

export const collapsible = Template.bind({});
collapsible.args = {
  title: 'Titre du contenu à dérouler en cliquant',
  iconName: 'users',
};

export const multipleCollapsible = (args) => {
  return {
    template: hbs`<div>
  <PixCollapsible @iconName={{this.iconName}} @plainIcon={{this.plainIcon}}>
    <:title>
      Titre A
    </:title>
    <:content>
      <div>Contenu A</div>
    </:content>
  </PixCollapsible>

  <PixCollapsible @iconName={{this.iconName}} @plainIcon={{this.plainIcon}}>
    <:title>
      Titre B
    </:title>
    <:content>
      <div>Contenu B</div>
    </:content>
  </PixCollapsible>

  <PixCollapsible @iconName={{this.iconName}} @plainIcon={{this.plainIcon}}>
    <:title>
      Titre C
    </:title>
    <:content>
      <div>Contenu C</div>
    </:content>
  </PixCollapsible>
</div>`,
    context: args,
  };
};

export const collapsibleWithTag = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div style='width:800px'>
  {{! template-lint-disable no-inline-styles }}
  <PixCollapsible
    @iconName={{this.iconName}}
    @plainIcon={{this.plainIcon}}
    @tagColor='success'
    @tagContent='tag 1'
  >
    <:title>
      Titre A
    </:title>
    <:content>
      <div>Contenu A</div>
    </:content>
  </PixCollapsible>

  <PixCollapsible
    @iconName={{this.iconName}}
    @plainIcon={{this.plainIcon}}
    @tagColor='error'
    @tagContent='tag 2'
  >
    <:title>
      Titre B
    </:title>
    <:content>
      <div>Contenu B</div>
    </:content>
  </PixCollapsible>
</div>`,
    context: args,
  };
};
