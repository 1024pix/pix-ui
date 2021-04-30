import { hbs } from 'ember-cli-htmlbars';

export const collapsible = (args) => {
  return {
    template: hbs`
    <PixCollapsible
      @title={{title}}
      @withPlusIcon={{withPlusIcon}}
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
        @withPlusIcon={{withPlusIcon}}
        @titleIcon={{titleIcon}}>
          <div>Contenu A</div>
      </PixCollapsible>

      <PixCollapsible
        @title="Titre B"
        @withPlusIcon={{withPlusIcon}}
        @titleIcon={{titleIcon}}>
          <div>Contenu B</div>
      </PixCollapsible>

      <PixCollapsible
        @title="Titre C"
        @withPlusIcon={{withPlusIcon}}
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
  withPlusIcon: {
    name: 'withPlusIcon',
    description: 'Ajoute l\'icon "plus" si la valeur est mise à "true"',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: { type: 'boolean' },
  },
  titleIcon: {
    name: 'titleIcon',
    description: 'Ajoute l\'icon donnée en paramètre avant le titre du PixCollapsible',
    type: { name: 'string', required: false },
    defaultValue: 'user',
  }
};
