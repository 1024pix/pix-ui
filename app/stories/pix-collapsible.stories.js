import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Others/Collapsible',
  argTypes: {
    title: {
      name: 'title',
      description: 'Intitulé du contenu du PixCollapsible',
      type: { name: 'string', required: true },
    },
    titleIcon: {
      name: 'titleIcon',
      description: "Ajoute l'icône donnée en paramètre avant le titre du PixCollapsible",
      type: { name: 'string', required: false },
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
    template: hbs`<PixCollapsible @title={{this.title}} @titleIcon={{this.titleIcon}}>
  <div>Contenu du PixCollapsible</div>
</PixCollapsible>`,
    context: args,
  };
};

export const collapsible = Template.bind({});
collapsible.args = {
  title: 'Titre du contenu à dérouler en cliquant',
  titleIcon: 'user',
};

export const collapsibleWithBlockTitle = (args) => {
  return {
    template: hbs`<PixCollapsible @titleIcon={{this.titleIcon}}>
  <:title>
    <span>Titre avec <em>contenu de type block</em></span>
  </:title>
  <:default>
    <div>Contenu du PixCollapsible</div>
  </:default>
</PixCollapsible>`,
    context: args,
  };
};

export const multipleCollapsible = (args) => {
  return {
    template: hbs`<div>
  <PixCollapsible @title='Titre A' @titleIcon={{this.titleIcon}}>
    <div>Contenu A</div>
  </PixCollapsible>

  <PixCollapsible @title='Titre B' @titleIcon={{this.titleIcon}}>
    <div>Contenu B</div>
  </PixCollapsible>

  <PixCollapsible @title='Titre C' @titleIcon={{this.titleIcon}}>
    <div>Contenu C</div>
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
    @title='Titre A'
    @titleIcon={{this.titleIcon}}
    @tagColor='success'
    @tagContent='tag 1'
  >
    <div>Contenu A</div>
  </PixCollapsible>

  <PixCollapsible
    @title='Titre B'
    @titleIcon={{this.titleIcon}}
    @tagColor='error'
    @tagContent='tag 2'
  >
    <div>Contenu B</div>
  </PixCollapsible>
</div>`,
    context: args,
  };
};
