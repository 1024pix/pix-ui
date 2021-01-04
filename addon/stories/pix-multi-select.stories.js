import { hbs } from 'ember-cli-htmlbars';

export const multiSelectSearchable = (args) => {
  return {
    template: hbs`
      <PixMultiSelect
        style="width:350px"
        @id={{id}}
        @title={{title}}
        @placeholder={{placeholder}}
        @isSearchable={{isSearchable}}
        @showOptionsOnInput={{showOptionsOnInput}}
        @strictSearch={{strictSearch}}
        @onSelect={{doSomething}}
        @emptyMessage={{emptyMessage}}
        @selected={{selected}}
        @options={{options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `,
    context: args,
  };
};

export const multiSelectWithChildComponent = (args) => {
  return {
    template: hbs`
      <PixMultiSelect
        @title={{titleStars}}
        @id={{id}}
        @onSelect={{onSelect}}
        @emptyMessage={{emptyMessage}}
        @options={{optionsStars}} as |star|
      >
        <PixStars
          @count={{star.value}}
          @total={{star.total}}
        />
      </PixMultiSelect>
    `,
    context: {
      ...args,
      titleStars: 'Sélectionner le niveau souhaité',
      optionsStars: [
        { value: '1', total: 3 },
        { value: '2', total: 3 },
        { value: '3', total: 3 },
      ],
    },
  };
};

export const argTypes = {
  id: {
    name: 'id',
    description: 'Permet l‘accessibilité du composant attribuant des ``for`` pour chaque entité',
    type: { name: 'string', required: true },
    defaultValue: 'aromate',
  },
  title: {
    name: 'title',
    description: 'Donner un titre à sa liste de choix multiple',
    type: { name: 'string', required: true },
    defaultValue: 'Rechercher un condiment',
  },
  emptyMessage: {
    name: 'emptyMessage',
    description: 'Un intitulé de choix indisponible (dans le cas ou certains filtres seraient excluant)',
    type: { name: 'string', required: true },
    defaultValue: 'pas de résultat',
  },
  placeholder: {
    name: 'placeholder',
    description: 'Donner une liste d‘exemple pour la recherche utilisateur dans le cas ``isSearchable`` à ``true``',
    type: { name: 'string', required: true },
    defaultValue: 'Curcuma, Thym, ...',
  },
  options: {
    name: 'options',
    description: 'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être conforme au traitement des input value.',
    type: { name: 'array', required: true },
    defaultValue: [
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
    ],
  },
  onSelect: {
    name: 'onSelect',
    description: 'Une fonction permettant d\'effectuer une action à chaque sélection',
    type: { required: true },
  },
  selected: {
    name: 'selected',
    description: 'Une pré-sélection peut être donnée au composant',
    type: { name: 'array', required: false },
    defaultValue: ['1','4'],
  },
  showOptionsOnInput: {
    name: 'showOptionsOnInput',
    description: 'Afficher la liste au focus du champs de saisie lorsque ``isSearchable`` à ``true``',
    type: { name: 'boolean', required: false },
    defaultValue: true,
  },
  isSearchable: {
    name: 'isSearchable',
    description: 'Permet de rajouter une saisie utilisateur pour faciliter la recherche',
    type: { name: 'boolean', required: false },
    defaultValue: true,
  },
  strictSearch: {
    name: 'strictSearch',
    description: 'Permet de rendre sensible à la casse et au diacritiques lorsque ``isSearchable`` à ``true``',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
};
