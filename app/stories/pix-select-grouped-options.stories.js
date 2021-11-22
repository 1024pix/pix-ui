import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const Template = (args) => ({
  template: hbs`
      <div style="width: 300px">
        <PixSelectGroupedOptions
          @id={{id}}
          @options={{options}}
          @onChange={{onChange}}
          @selectedOption={{selectedOption}}
          @isSearchable={{isSearchable}}
          @label={{label}}
          @categories={{categories}}
        />
      </div>
    `,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  id: 'pix-select-with-label',
  label: 'Films',
  categories: [
    { name: 'action', label: 'Action' },
    { name: 'animation', label: 'Animation' },
    { name: 'horreur', label: 'Horreur' },
  ],
  options: [
    { value: '1', label: 'Die Hard', category: 'action' },
    { value: '2', label: 'Inception', category: 'action' },
    { value: '3', label: 'Terminator', category: 'action' },
    { value: '4', label: 'Princess Mononoké', category: 'animation' },
    { value: '5', label: 'Le Roi Lion', category: 'animation' },
    { value: '6', label: 'Spider-Man: New Generation', category: 'animation' },
    { value: '7', label: 'Alien', category: 'horreur' },
    { value: '8', label: 'The thing', category: 'horreur' },
    { value: '9', label: 'Shining', category: 'horreur' },
  ],
  onChange: action('onChange'),
};

export const searchable = Template.bind({});
searchable.args = {
  ...Default.args,
  id: 'pix-select-search',
  label: 'Films',
  isSearchable: true,
  placeholder: 'Fraises, Mangues...',
};

export const argTypes = {
  options: {
    name: 'options',
    description:
      'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être que le champ puisse être cherchable',
    type: { name: 'object', required: true },
  },
  onChange: {
    name: 'onChange',
    description: 'Fonction à appeler si une option est sélectionnée',
    type: { required: true },
    control: { disable: true },
  },
  selectedOption: {
    name: 'selectedOption',
    description: 'Option sélectionnée',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    control: { type: 'select' },
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    },
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
    description: 'Donne un label au champ, le paramètre @id devient obligatoire avec ce paramètre.',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    },
  },
  categories: {
    name: 'categories',
    description: '',
    type: { name: 'object', required: false },
  },
};
