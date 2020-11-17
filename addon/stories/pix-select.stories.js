import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Form' };

const canvasContent = hbs`
  <PixSelect
    @options={{options}}
    @onChange={{onChange}}
    @emptyOptionLabel="Sélectionner une option"
  />
`;

const markdown = `
# Select

Affiche un champ Select avec la liste des options fournie.

Les options sont représentées par un tableau d'objet contenant les propriétés value et label.

## Usage

~~~javascript
<PixSelect
  @options={{options}}
  @onChange={{onChange}}
  @selectedOption="1"
  @emptyOptionLabel="Empty option"
/>
~~~

Exemple d'options:

~~~javascript
[
  { value: '1', label: 'Tomate' },
  { value: '2', label: 'Fromage' },
  { value: '3', label: 'Gruyère' },
  { value: '4', label: 'Olive' },
]
~~~

## Props

| Nom              |   Type   | Valeurs possibles | Par défaut | Optionnel |
| ---------------- | :------: | :---------------: | :--------: | --------: |
| options          |  array   |         -         |     -      |       non |
| onChange         | function |         -         |     -      |       non |
| selectedOption   |  string  |         -         |     -      |       oui |
| emptyOptionLabel |  string  |         -         |     -      |       oui |


`
;

export const select = () => {
  return {
    template: canvasContent,
    context: {
      options: [
        { value: '1', label: 'Tomate' },
        { value: '2', label: 'Fromage' },
        { value: '3', label: 'Gruyère' },
        { value: '4', label: 'Olive' },
      ],
      onChange: console.log,
    }
  }
};

select.parameters = { notes: { markdown } };
select.decorators = [centered];
