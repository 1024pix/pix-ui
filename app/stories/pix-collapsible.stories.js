import { hbs } from 'ember-cli-htmlbars';

export const collapsible = (args) => {
  return {
    template: hbs`<PixCollapsible @title={{this.title}} @titleIcon={{this.titleIcon}}>
  <div>Contenu du PixCollapsible</div>
</PixCollapsible>`,
    context: args,
  };
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

export const argTypes = {
  title: {
    name: 'title',
    description: 'Intitulé du contenu du PixCollapsible',
    type: { name: 'string', required: true },
    defaultValue: 'Titre du contenu à dérouler en cliquant',
  },
  titleIcon: {
    name: 'titleIcon',
    description: "Ajoute l'icône donnée en paramètre avant le titre du PixCollapsible",
    type: { name: 'string', required: false },
    defaultValue: 'user',
  },
};
