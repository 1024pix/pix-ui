import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
      <PixFilterableAndSearchableSelect
        @selectLabel={{selectLabel}}
        @selectPlaceholder={{selectPlaceholder}}
        @selectOptions={{selectOptions}}
        @selectOnChange={{selectOnChange}}
        @multiSelectId={{multiSelectId}}
        @multiSelectLabel={{multiSelectLabel}}
        @multiSelectPlaceholder={{multiSelectPlaceholder}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  selectLabel: 'Mon select label',
  selectPlaceholder: 'Mon select placeholder',
  selectOptions: [{ value: 1, label: 'select a jambon' }],
  selectOnChange: () => {},
  multiSelectId: 'multi-select-id',
  multiSelectLabel: 'Mon multi select label',
  multiSelectPlaceholder: 'Mon multi select placeholder',
};
