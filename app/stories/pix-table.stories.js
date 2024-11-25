import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Table',
  // select attribute data type from https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    data: {
      name: 'data',
      description: 'Liste des données du tableau',
      type: { name: 'array', required: true },
    },
    headers: {
      name: 'headers',
      description: 'Nom des colonnes',
      type: { name: 'array', required: true },
    },
    caption: {
      name: 'caption',
      description: "Description du tableau (lisible uniquement par les lecteurs d'écran)",
      type: { name: 'string', required: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTable @data={{this.data}} @headers={{this.headers}} @caption={{this.caption}} />`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      name: 'jean',
      description: 'fort au jungle speed',
      age: 'il a 15ans',
    },
    {
      name: 'brian',
      description: 'travail au peach pit',
      age: 'il a 25ans',
    },
  ],
  headers: [
    {
      name: 'Nom',
      key: 'name',
    },
    {
      name: 'Description',
      key: 'description',
    },
    {
      name: 'Age',
      key: 'age',
    },
  ],
  caption: 'Description du tableau',
};
