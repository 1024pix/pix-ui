import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const Template = (args) => {
  return {
    template: hbs`
      <div style="width: 300px;">
        <PixSelect        
          @options={{this.options}}
          @isSearchable={{this.isSearchable}}
          @onSelect={{this.onSelect}}
          @labels={{this.labels}}
        />
      </div>
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      category: 'Fruit Rouge',
      options: [
        { value: '1', label: 'Figues' },
        { value: '10', label: 'Fraises' },
      ],
    },
    {
      category: 'Fruit Jaune',
      options: [
        { value: '2', label: 'Bananes' },
        { value: '7', label: 'Mangues' },
        { value: '11', label: 'Kaki' },
      ],
    },
    {
      category: 'Autres',
      options: [
        { value: '3', label: 'Noix' },
        { value: '4', label: 'Papayes' },
        { value: '5', label: 'Fèves de chocolat' },
        { value: '6', label: 'Dattes' },
        { value: '8', label: 'Jujube' },
        { value: '9', label: 'Avocat' },
        { value: '12', label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)' },
      ],
    },
  ],
  labels: {
    select: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      subLabel: 'Mon sous label',
      id: 'default-select',
    },
    search: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      id: 'default-select-search',
    },
  },
  isSearchable: true,
  onSelect: action('onSelect'),
};

export const argTypes = {
  options: {
    name: 'options',
    description:
      'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``.',
    type: { name: 'array', required: true },
  },
  selectedOption: {
    name: 'selectedOption',
    description: 'Option sélectionnée',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    control: { type: 'select' },
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  onSelect: {
    name: 'onSelect',
    description: 'Fonction à appeler quand une option est sélectionnée.',
    type: { required: true },
    control: { disable: true },
  },
  isSearchable: {
    name: 'isSearchable',
    description: 'Rend le champ cherchable',
    control: { type: 'boolean' },
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  label: {
    name: 'label',
    description: 'Label du menu déroulant',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
  subLabel: {
    name: 'subLabel',
    description: 'Sous Label explicatif du menu déroulant',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  id: {
    name: 'id',
    description: "L'id du label",
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
  innerText: {
    name: 'label',
    description: 'Label du menu déroulant',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
};
