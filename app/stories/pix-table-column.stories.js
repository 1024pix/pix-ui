import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Table/TableColumn',
  argTypes: {
    context: {
      name: 'context',
      description: 'Propriété a récupérer depuis le block element `<:columns>` du PixTable parent.',
      type: { name: 'privé', required: true },
    },
    header: {
      name: '<:header>',
      description: 'En-tête de la colonne',
      type: { name: 'block content', required: true },
    },
    cell: {
      name: '<:cell>',
      description: 'Cellule de la colonne.',
      type: { name: 'block content', required: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTable @data={{this.data}} @caption={{this.caption}}>
  <:columns as |row context|>
    <PixTableColumn @context={{context}}>
      <:header>
        Info
      </:header>
      <:cell>
        <PixIcon @name='info' @title={{concat row.name ' a ' row.age ' ans'}} />
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  caption: 'Description du tableau',
  data: [
    {
      name: 'jean',
      age: 15,
    },
    {
      name: 'brian',
      age: 25,
    },
  ],
};
