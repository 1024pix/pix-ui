import { hbs } from 'ember-cli-htmlbars';

export const collapsible = (args) => {
  return {
    template: hbs`
    <PixCollapsible
      @title={{title}}
      @withIcon={{withIcon}}>
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
      <PixCollapsible @title="Titre A" @withIcon={{withIcon}}>
        <div>Contenu A</div>
      </PixCollapsible>

      <PixCollapsible @title="Titre B" @withIcon={{withIcon}}>
        <div>Contenu B</div>
      </PixCollapsible>

      <PixCollapsible @title="Titre C" @withIcon={{withIcon}}>
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
  withIcon: {
    name: 'withIcon',
    description: 'Ajoute l\'icon "plus" si la valeur est mise à "true"',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: { type: 'boolean' },
  },
};
