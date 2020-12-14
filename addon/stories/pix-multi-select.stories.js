import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';


export default { 
  title: 'Form/Multi Select',
  decorators: [withKnobs],
};

const canvasContent = hbs`
  <h2>MultiSelect</h2>

  <PixMultiSelect
    style="width:450px"
    @title={{title}}
    @placeholder={{placeholder}}
    @isSearchable={{isSearchable}}
    @showOptionsOnInput={{showOptionsOnInput}}
    @strictSearch={{strictSearch}}
    @id={{id}}
    @onSelect={{doSomething}}
    @emptyMessage={{emptyMessage}}
    @selected={{selected}}
    @options={{options}} as |option|>
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

\`isSearchable\` : Permet de rajouter une saisie utilisateur pour faciliter la recherche

\`placeholder\` : Donner une liste d'exemple pour la recherche utilisateur dans le cas \`isSearchable\` à \`true\`

\`showOptionsOnInput\` : Afficher la liste au focus du champs de saisie lorsque \`isSearchable\` à \`true\`

\`strictSearch\` : Permet de rendre sensible à la casse et au diacritiques lorsque \`isSearchable\` à \`true\`

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

| Nom            | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| -------------- |:-------------:|:-------------------:|:----------:|----------:|
| id             | string        |                     |            |     non   |
| title          | string        |                     |            |     non   |
| emptyMessage   | string        |                     |            |     non   |
| placeholder    | string        |                     |            |     non   |
| options        | array         |                     |            |     non   |
| onSelect       | function      |                     |            |     non   |
| selected       | array         |                     |    []      |     oui   |
| showOptionsOnInput | boolean       |     true/false      |    false   |     oui   |
| isSearchable   | boolean       |     true/false      |    false   |     oui   |
`;

export const multiSelect = () => {
  return {
    template: canvasContent,
    context: {
      idStars: 'stars',
      titleStars: 'Sélectionner le niveau souhaité',
      optionsStars: [
        { value: '1', total : 3 },
        { value: '2', total : 3 },
        { value: '3', total : 3 },
      ],


      options : [
        {label:"ANETH HERBE AROMATIQUE", value: '1'},
        {label:"ANIS VERT HERBE AROMATIQUE", value: '2'},
        {label:"BADIANE AROMATE", value: '3'},
        {label:"BAIES ROSES EPICES", value: '4'},
        {label:"BASILIC HERBE AROMATIQUE", value: '5'},
        {label:"BOURRACHE OFFICINALE HERBE AROMATIQUE", value: '6'},
        {label:"CANNELLE AROMATE", value: '7'},
        {label:"CAPRE CONDIMENT", value: '8'},
        {label:"CARDAMOME AROMATE", value: '9'},
        {label:"CARVI HERBE AROMATIQUE", value: '10'},
        {label:"CERFEUIL HERBE AROMATIQUE", value: '11'},
        {label:"CHILI - EPICES", value: '12'},
        {label:"CIBOULETTE HERBE AROMATIQUE", value: '13'},
        {label:"CINQ BAIES EPICES", value: '14'},
        {label:"CINQ (5) EPICES", value: '15'},
        {label:"CITRONNELLE HERBE AROMATIQUE", value: '16'},
        {label:"CLOU DE GIROFLE AROMATE", value: '17'},
        {label:"COLOMBO EPICES", value: '18'},
        {label:"CORIANDRE AROMATE", value: '19'},
        {label:"CUMIN AROMATE", value: '20'},
        {label:"CURCUMA AROMATE", value: '21'},
        {label:"CURRY ou CARI EPICES", value: '22'},
        {label:"ESTRAGON HERBE AROMATIQUE", value: '23'},
        {label:"FENUGREC AROMATE", value: '24'},
        {label:"FEVE DE TONKA EPICE", value: '25'},
        {label:"GARAM MASALA EPICES", value: '26'},
        {label:"GENIEVRE (BAIES) AROMATE", value: '27'},
        {label:"GINGEMBRE AROMATE", value: '28'},
        {label:"HYSOPE OFFICINALE HERBE AROMATIQUE", value: '29'},
        {label:"LAURIER SAUCE HERBE AROMATIQUE", value: '30'},
        {label:"MACIS ou FLEUR DE MUSCADE EPICES", value: '31'},
        {label:"MARJOLAINE HERBE AROMATIQUE", value: '32'},
        {label:"MELISSE OFFICINALE HERBE AROMATIQUE", value: '33'},
        {label:"MENTHE HERBE AROMATIQUE", value: '34'},
        {label:"NOIX DE MUSCADEEPICE", value: '35'},
        {label:"ORIGAN HERBE AROMATIQUE", value: '36'},
        {label:"PAPRIKA EPICE", value: '37'},
        {label:"PERSIL HERBE AROMATIQUE", value: '38'},
        {label:"PIMENT CONDIMENT", value: '39'},
        {label:"PIMPRENELLE HERBE AROMATIQUE", value: '40'},
        {label:"POIVRE DE SICHUAN EPICE", value: '41'},
        {label:"QUATRE (4) EPICES", value: '42'},
        {label:"RAS EL HANOUT EPICES", value: '43'},
        {label:"ROMARIN HERBE AROMATIQUE", value: '44'},
        {label:"SAFRAN EPICE", value: '45'},
        {label:"SAUGE OFFICINALE HERBE AROMATIQUE", value: '46'},
        {label:"THYM HERBE AROMATIQUE", value: '47'},
      ],
      isSearchable: boolean('isSearchable', true),
      strictSearch: boolean('strictSearch', false),
      showOptionsOnInput: boolean('showOptionsOnInput', true),
      id: text('id', 'aromate'),
      title: text('title', 'Recherchez un condiment'),
      placeholder: text('placeholder', 'Curcuma, Thym, ...'),
      emptyMessage: text('emptyMessage', 'Pas de résultat'),
      selected: ["1", "4"],
      doSomething : () => {},
    }
  }
};

multiSelect.parameters = { notes: { markdown } };
multiSelect.decorators = [centered];
