import { hbs } from 'ember-cli-htmlbars';

export const defaultInput = (args) => {
  return {
    template: hbs`
      <h3 style="margin: 0.5em 0">Default</h3>
      <PixInput />
    `,
    context: args,
  };
};

export const searchableInput = (args) => {
  return {
    template: hbs`
      <h3 style="margin: 0.5em 0">Searchable</h3>
      <PixInput @searchableOptions={{options}} />
    `,
    context: {
      ...args,
      options: [
        { value: 'Figues', label: 'Figues' },
        { value: 'Bananes', label: 'Bananes' },
        { value: 'Noix', label: 'Noix' },
        { value: 'Papayes', label: 'Papayes' },
        { value: 'Fèves de chocolat', label: 'Fèves de chocolat' },
        { value: 'Dattes', label: 'Dattes' },
        { value: 'Mangues', label: 'Mangues' },
        { value: 'Jujube', label: 'Jujube' },
        { value: 'Avocat', label: 'Avocat' },
        { value: 'Fraises', label: 'Fraises' },
        { value: 'Kaki', label: 'Kaki' },
      ]
    }
  };
};

export const argTypes = {
  options: {
    name: 'searchableOptions',
    description: 'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être conforme au traitement des input value.',
    type: { name: 'object', required: false },
    defaultValue: [
      { value: 'Figues', label: 'Figues' },
      { value: 'Bananes', label: 'Bananes' },
      { value: 'Noix', label: 'Noix' },
      { value: 'Papayes', label: 'Papayes' },
      { value: 'Fèves de chocolat', label: 'Fèves de chocolat' },
      { value: 'Dattes', label: 'Dattes' },
      { value: 'Mangues', label: 'Mangues' },
      { value: 'Jujube', label: 'Jujube' },
      { value: 'Avocat', label: 'Avocat' },
      { value: 'Fraises', label: 'Fraises' },
      { value: 'Kaki', label: 'Kaki' },
    ],
  },
};
