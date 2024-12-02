import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Table/TableBasicColumn',
  // select attribute data type from https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    type: {
      defaultValue: {
        summary: 'text',
      },
      type: {
        name: '"text" | "number"',
      },
    },
    name: {
      name: 'name',
      description: 'Nom de la colonne',
      type: { name: 'string', required: true },
    },
    value: {
      name: 'value',
      description: 'La valeur de la cellule',
      type: { name: 'string', required: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTable @data={{this.data}} @caption={{this.caption}}>
  <:columns as |row context|>
    <PixTableBasicColumn
      @context={{context}}
      class={{this.typeClass}}
      @name='Nom'
      @value={{row.name}}
    />
    <PixTableBasicColumn
      @context={{context}}
      class={{this.typeClass}}
      @name='Âge'
      @value={{row.age}}
      @type='number'
    />
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
