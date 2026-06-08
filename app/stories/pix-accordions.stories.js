import { hbs } from 'ember-cli-htmlbars';

import { ICONS } from '../../addon/helpers/icons';

export default {
  title: 'Data display/Accordions',
  argTypes: {
    isV2Version: {
      name: 'isV2Version',
      description: "Permet d'afficher le nouveau design de PixAccordions",
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    iconName: {
      name: 'iconName',
      description: "Ajoute l'icône donnée en paramètre avant le titre du PixAccordions",
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
    template: hbs`<PixAccordions
  @iconName={{this.iconName}}
  @plainIcon={{this.plainIcon}}
  @tagContent={{this.tagContent}}
  @tagColor={{this.tagColor}}
  @isV2Version={{this.isV2Version}}
>
  <:title>
    {{this.title}}
  </:title>
  <:content>
    <div>Contenu du PixAccordions</div>
  </:content>
</PixAccordions>`,
    context: args,
  };
};

export const accordions = Template.bind({});
accordions.args = {
  title: 'Titre du contenu à dérouler en cliquant',
  iconName: 'users',
  isV2Version: true,
};

export const multipleAccordions = (args) => {
  return {
    template: hbs`<div>
  <PixAccordions @iconName={{this.iconName}} @plainIcon={{this.plainIcon}} @isV2Version={{true}}>
    <:title>
      Titre A
    </:title>
    <:content>
      <div>Contenu A</div>
    </:content>
  </PixAccordions>

  <PixAccordions @iconName={{this.iconName}} @plainIcon={{this.plainIcon}} @isV2Version={{true}}>
    <:title>
      Titre B
    </:title>
    <:content>
      <div>Contenu B</div>
    </:content>
  </PixAccordions>

  <PixAccordions @iconName={{this.iconName}} @plainIcon={{this.plainIcon}} @isV2Version={{true}}>
    <:title>
      Titre C
    </:title>
    <:content>
      <div>Contenu C</div>
    </:content>
  </PixAccordions>
</div>`,
    context: args,
  };
};

export const accordionsWithTag = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div style='width:800px'>
  {{! template-lint-disable no-inline-styles }}
  <PixAccordions
    @iconName={{this.iconName}}
    @plainIcon={{this.plainIcon}}
    @tagColor='success'
    @tagContent='tag 1'
    @isV2Version={{true}}
  >
    <:title>
      Titre A
    </:title>
    <:content>
      <div>Contenu A</div>
    </:content>
  </PixAccordions>

  <PixAccordions
    @iconName={{this.iconName}}
    @plainIcon={{this.plainIcon}}
    @tagColor='error'
    @tagContent='tag 2'
    @isV2Version={{true}}
  >
    <:title>
      Titre B
    </:title>
    <:content>
      <div>Contenu B</div>
    </:content>
  </PixAccordions>
</div>`,
    context: args,
  };
};
