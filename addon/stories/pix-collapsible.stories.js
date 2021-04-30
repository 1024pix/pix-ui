import { hbs } from 'ember-cli-htmlbars';

export const collapsible = (args) => {
  return {
    template: hbs`
    <PixCollapsible @title="Titre du contenu à dérouler en cliquant">
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
      <PixCollapsible @title="Titre A">
        <div>Contenu A</div>
      </PixCollapsible>

      <PixCollapsible @title="Titre B">
        <div>Contenu B</div>
      </PixCollapsible>

      <PixCollapsible @title="Titre C">
        <div>Contenu C</div>
      </PixCollapsible>
    </div>
    `,
    context: args,
  };
};

export const argTypes = {
  attributeName: {
    name: 'title',
    description: 'Intitulé du contenu du PixCollapsible',
    type: { name: 'string', required: true },
  },
};
