import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
      <PixFilterableAndSearchableSelect
        @label={{label}}
        @placeholder={{placeholder}}
        @options={{options}}
        @onChange={{onChange}}
        @categoriesId={{categoriesId}}
        @categoriesLabel={{categoriesLabel}}
        @categoriesPlaceholder={{categoriesPlaceholder}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Mon select label',
  placeholder: 'Mon select placeholder',
  options: [
    { value: 1, label: 'Salade', category: 'Kebab' },
    { value: 1, label: 'Tomate', category: 'Kebab' },
    { value: 1, label: 'Oignons', category: 'Kebab' },
    { value: 1, label: 'Steak', category: 'Hamburger' },
    { value: 1, label: 'Cheddar', category: 'Hamburger' },
  ],
  onChange: () => {},
  categoriesId: 'multi-select-id',
  categoriesLabel: 'Mon multi select label',
  categoriesPlaceholder: 'Mon multi select placeholder',
};
