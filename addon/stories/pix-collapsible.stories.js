import { hbs } from 'ember-cli-htmlbars';

export const collapsible = (args) => {
  return {
    template: hbs`
    <PixCollapsible
      @title={{title}}
      @titleIcon={{titleIcon}}>
      <div>Contenu du PixCollapsible</div>
    </PixCollapsible>
    `,
    context: args,
  };
};

export const multipleCollapsible = (args) => {
  return {
    template: hbs`
    <div>
      <PixCollapsible
        @title="Titre A"
        @titleIcon={{titleIcon}}>
          <div>Contenu A</div>
      </PixCollapsible>

      <PixCollapsible
        @title="Titre B"
        @titleIcon={{titleIcon}}>
          <div>Contenu B</div>
      </PixCollapsible>

      <PixCollapsible
        @title="Titre C"
        @titleIcon={{titleIcon}}>
          <div>Contenu C</div>
      </PixCollapsible>
    </div>
    `,
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
    description: 'Ajoute l\'icône donnée en paramètre avant le titre du PixCollapsible',
    type: { name: 'string', required: false },
    defaultValue: 'user',
  }
};
