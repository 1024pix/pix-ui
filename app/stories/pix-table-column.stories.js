import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Table/TableColumn',
  argTypes: {
    context: {
      name: 'context',
      description: 'Propriété a récupérer depuis le block element `<:columns>` du PixTable parent.',
      type: { name: 'privé', required: true },
    },
    type: {
      defaultValue: {
        summary: 'text',
      },
      options: ['text', 'number'],
      control: {
        type: 'select',
      },
      type: {
        name: '"text" | "number"',
        description: 'Defini le style avec lequel nous afficherons la colonne',
      },
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
        Nom
      </:header>
      <:cell>
        {{row.name}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}} @type='number'>
      <:header>
        Âge
      </:header>
      <:cell>
        {{row.age}}
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
