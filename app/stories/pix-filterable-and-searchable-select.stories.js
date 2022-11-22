import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
      <PixFilterableAndSearchableSelect
        @label={{label}}
        @placeholder={{placeholder}}
        @options={{options}}
        @onChange={{onChange}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Mon label',
  placeholder: 'Mon placeholder',
  options: [],
  onChange: () => {},
};
