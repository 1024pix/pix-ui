import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const DEFAULT_OPTIONS = [
  { label: 'ANETH HERBE AROMATIQUE', value: '1' },
  { label: 'ANIS VERT HERBE AROMATIQUE', value: '2' },
  { label: 'BADIANE AROMATE', value: '3' },
  { label: 'BAIES ROSES EPICES', value: '4' },
  { label: 'BASILIC HERBE AROMATIQUE', value: '5' },
  { label: 'BOURRACHE OFFICINALE HERBE AROMATIQUE', value: '6' },
  { label: 'CANNELLE AROMATE', value: '7' },
  { label: 'CAPRE CONDIMENT', value: '8' },
  { label: 'CARDAMOME AROMATE', value: '9' },
  { label: 'CARVI HERBE AROMATIQUE', value: '10' },
  { label: 'CERFEUIL HERBE AROMATIQUE', value: '11' },
];

export const multiSelectWithChildComponent = (args) => {
  return {
    template: hbs`
      <h4>⚠️ La sélection des éléments ne fonctionne pas dans Storybook.</h4>
      <PixMultiSelect
        @id={{this.id}}
        @label={{this.label}}
        @innerText={{this.titleStars}}
        @screenReaderOnly={{this.screenReaderOnly}}
        
        @onSelect={{this.onSelect}}
        @emptyMessage={{this.emptyMessage}}
        
        @options={{this.options}} as |star|
      >
        <PixStars
          @alt={{concat "Étoiles " star.value " sur " star.total}}
          @count={{star.value}}
          @total={{star.total}}
        />
      </PixMultiSelect>
    `,
    context: args,
  };
};

multiSelectWithChildComponent.args = {
  titleStars: 'Sélectionner le niveau souhaité',
  label: 'Résultat évaluation',
  options: [
    { value: '0', total: 3 },
    { value: '1', total: 3 },
    { value: '2', total: 3 },
    { value: '3', total: 3 },
  ],
};

export const multiSelectSearchable = (args) => {
  return {
    template: hbs`
      <h4>⚠️ La sélection des éléments ne fonctionne pas dans Storybook.</h4>
      <PixMultiSelect
        style="width:350px"
        @id={{this.id}}
        @label={{this.label}}
        @screenReaderOnly={{this.screenReaderOnly}}
        @innerText={{this.innerText}}

        @isSearchable={{this.isSearchable}}
        @strictSearch={{this.strictSearch}}

        @onSelect={{this.doSomething}}
        @selected={{this.selected}}

        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `,
    context: args,
  };
};

export const multiSelectAsyncOptions = (args) => {
  args.onLoadOptions = () => Promise.resolve(DEFAULT_OPTIONS);
  return {
    template: hbs`
      <h4>⚠️ La sélection des éléments ne fonctionne pas dans Storybook.</h4>
      <PixMultiSelect
        style="width:350px"
        @id={{this.id}}
        @label={{this.label}}
        @screenReaderOnly={{this.screenReaderOnly}}
        @innerText={{this.innerText}}

        @isSearchable={{this.isSearchable}}
        @strictSearch={{this.strictSearch}}

        @onSelect={{this.doSomething}}
        @selected={{this.selected}}

        @emptyMessage={{this.emptyMessage}}
        @onLoadOptions={{this.onLoadOptions}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `,
    context: args,
  };
};

export const argTypes = {
  id: {
    name: 'id',
    description: 'Permet l‘accessibilité du composant attribuant des ``for`` pour chaque entité',
    type: { name: 'string', required: true },
    defaultValue: 'aromate',
  },
  innerText: {
    name: 'innerText',
    description:
      'Rempli le contenu interne du composant, `placeholder` pour `isSearchable` `true`, sinon rawContent du `button`',
    type: { name: 'string', required: true },
    defaultValue: 'Rechercher un condiment',
  },
  label: {
    name: 'label',
    description: "Donne un label au champ qui sera celui vocalisé par le lecteur d'écran",
    type: { name: 'string', required: true },
    defaultValue: 'Label du champ',
  },
  screenReaderOnly: {
    name: 'screenReaderOnly',
    description: "Permet de cacher à l'écran le label tout en restant vocalisable",
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
  emptyMessage: {
    name: 'emptyMessage',
    description:
      'Un intitulé de choix indisponible (dans le cas ou certains filtres seraient excluant)',
    type: { name: 'string', required: true },
    defaultValue: 'pas de résultat',
  },
  options: {
    name: 'options',
    description:
      'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être conforme au traitement des input value.',
    type: { name: 'array', required: false },
    defaultValue: DEFAULT_OPTIONS,
  },
  onLoadOptions: {
    name: 'onLoadOptions',
    description:
      'Charge de manière asynchrone les options. Doit renvoyer une promesse avec la liste des options. Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être conforme au traitement des input value.',
    type: { required: false },
  },
  loadingMessage: {
    name: 'loadingMessage',
    description:
      "Message qui apparaît dans les options quand celles-ci sont en train d'être chargées via onLoadOptions",
    type: { name: 'string', required: false },
    defaultValue: 'Chargement...',
  },
  onSelect: {
    name: 'onSelect',
    description: "Une fonction permettant d'effectuer une action à chaque sélection",
    type: { required: true },
    defaultValue: action('onSelect'),
  },
  selected: {
    name: 'selected',
    description: 'Une pré-sélection peut être donnée au composant',
    type: { name: 'array', required: false },
    defaultValue: ['1', '4'],
  },
  isSearchable: {
    name: 'isSearchable',
    description: 'Permet de rajouter une saisie utilisateur pour faciliter la recherche',
    type: { name: 'boolean', required: false },
    defaultValue: true,
  },
  strictSearch: {
    name: 'strictSearch',
    description:
      'Permet de rendre sensible à la casse et au diacritiques lorsque ``isSearchable`` à ``true``',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
};
