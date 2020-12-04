import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Form/MultiSelect' };

const canvasContent = hbs`
  <h2>Multi Select avec scroll</h2>
  
  <PixMultiSelect
    @title={{title}}
    @id={{id}}
    @onSelect={{doSomething}}
    @emptyMessage={{emptyMessage}}
    @selected={{selected}}
    @options={{options}} as |option|>
    {{option.label}}
  </PixMultiSelect>

  <h2>MultiSelect sans scroll</h2>

  <PixMultiSelect
    @title={{title}}
    @id={{idNoScroll}}
    @onSelect={{doSomething}}
    @emptyMessage={{emptyMessage}}
    @selected={{selected}}
    @options={{optionsNoScroll}} as |option|>
    {{option.label}}
  </PixMultiSelect>

  <h2>MultiSelect avec contenu HTML</h2>

  <PixMultiSelect
    style="width:350px"
    @title={{titleStars}}
    @id={{idStars}}
    @onSelect={{doSomething}}
    @emptyMessage={{emptyMessage}}
    @selected={{selected}}
    @options={{optionsStars}} as |star|>
    <PixStars
      @count={{star.value}}
      @total={{star.total}}
      />
  </PixMultiSelect>
`;

const markdown = `
# MultiSelect
Un select custom permettant une gestion de la multiselection. Permet de passer soit du texte brut soit des composants à sa liste. (PixStars etc...)
l'ajout de \`class\` et d'autres attributs comme \`aria-label\` sont possibles.

\`id\` : Permet l'accessibilité du composant attribuant des \`for\` pour chaque entité.

\`title\` : Donner un titre à sa liste de choix multiple

\`options\` : Les options sont représentées par un tableau d'objet contenant les propriétés value et label. \`value\` doit être de type \`String\` pour être conforme au traitement des input value. 

\`onSelect\` : une fonction permettant d'effectuer une action à chaque sélection.

\`selected\` : Une pré-sélection peut être donnée au composant

\`emptyMessage\` : Un intitulé de choix indisponible (dans le cas ou certains filtres seraient excluant)

## Usage

Multi select

~~~javascript
<PixMultiSelect
  @title={{title}}
  @emptyMessage={{emptyMessage}}
  @id={{id}}
  @onSelect={{doSomething}}
  @selected={{selected}}
  @options={{options}} as |option|>
  {{option.label}}
</PixMultiSelect>
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

Examples de valeur préselectionné:

~~~javascript
['1','4']
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| id            | string        |                     |            |     non   |
| title         | string        |                     |            |     non   |
| onSelect      | function      |                     |            |     non   |
| emptyMessage  | string        |                     |            |     oui   |
| selected      | array         |                     |            |     oui   |
| options       | array         |                     |            |     non   |
`;

export const multiSelect = () => {
  return {
    template: canvasContent,
    context: {
      optionsNoScroll : [
        { value: '1', label: 'tomate' },
        { value: '2', label: 'fromage' },
        { value: '3', label: 'gruyère' },
        { value: '4', label: 'olive' },
        
      ],
      options: [
        { value: '1', label: 'Tomate' },
        { value: '2', label: 'Fromage' },
        { value: '3', label: 'Gruyère' },
        { value: '4', label: 'Olive' },
        { value: '5', label: 'Jambon' },
        { value: '6', label: 'Tapenade' },
        { value: '7', label: 'Tzatziki' },
      ],
      optionsStars: [
        { value: '1', total : 7 },
        { value: '2', total : 7 },
        { value: '3', total : 7 },
        { value: '4', total : 7 },
        { value: '5', total : 7 },
        { value: '6', total : 7 },
        { value: '7', total : 7 },
      ],
      id: 'dips',
      idNoScroll: 'dips2',
      idStars: 'stars',
      title: 'Liste d\'accompagnement',
      titleStars: 'Sélectionner le niveau souhaité',
      emptyMessage: 'Pas de résultat',
      selected: ["1","4"],
      doSomething : () => {},
    }
  }
};

multiSelect.parameters = { notes: { markdown } };
multiSelect.decorators = [centered];
