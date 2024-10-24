import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/Multi Select',
  render: (args) => ({
    template: hbs`{{! template-lint-disable no-forbidden-elements }}
<style>
  .custom { border : none; }
</style>
<h4><strong>⚠️ La sélection des éléments ne fonctionne pas dans Storybook.</strong></h4>
{{#if this.id}}
  <div>
    <label for={{this.id}}>Un label en dehors du composant</label>
  </div>
{{/if}}
<PixMultiSelect
  @id={{this.id}}
  @placeholder={{this.placeholder}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @size={{this.size}}
  @onChange={{this.onChange}}
  @emptyMessage={{this.emptyMessage}}
  @className={{this.className}}
  @isSearchable={{this.isSearchable}}
  @strictSearch={{this.strictSearch}}
  @values={{this.values}}
  @options={{this.options}}
>
  <:label>{{this.label}}</:label>
  <:default as |option|>{{option.label}}</:default>
</PixMultiSelect>`,
    context: args,
  }),
  argTypes: {
    id: {
      name: 'id',
      description:
        "Permet l'accessibilité du composant attribuant des ``for`` pour chaque entité. **⚠️ L'`id` est obligatoire que si le `label` n'est pas donné. ⚠️**",
      type: { name: 'string' },
    },
    placeholder: {
      name: 'placeholder',
      description:
        'Rempli le contenu interne du composant, `placeholder` pour `isSearchable` `true`, sinon rawContent du `button`',
      type: { name: 'string', required: true },
    },
    emptyMessage: {
      name: 'emptyMessage',
      description:
        'Un intitulé de choix indisponible (dans le cas ou certains filtres seraient excluant)',
      type: { name: 'string', required: true },
    },
    options: {
      name: 'options',
      description:
        'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être conforme au traitement des input value.',
      type: { name: 'array', required: false },
    },
    onChange: {
      name: 'onChange',
      description: "Une fonction permettant d'effectuer une action à chaque sélection",
      type: { required: true },
    },
    values: {
      name: 'values',
      description: 'Une pré-sélection peut être donnée au composant',
      type: { name: 'array', required: false },
    },
    isSearchable: {
      name: 'isSearchable',
      description: 'Permet de rajouter une saisie utilisateur pour faciliter la recherche',
      type: { name: 'boolean', required: false },
      table: { defaultValue: { summary: false } },
    },
    strictSearch: {
      name: 'strictSearch',
      description:
        'Permet de rendre sensible à la casse et au diacritiques lorsque ``isSearchable`` à ``true``',
      type: { name: 'boolean', required: false },
      table: { defaultValue: { summary: false } },
    },
    headerClassName: {
      name: 'headerClassName',
      description: 'Cette classe css permet de surcharger le css par défaut du composant.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    placement: {
      name: 'placement',
      description:
        "Permet de placer la dropdown du select par rapport à son bouton. Par défaut, cela s'adapte tout seul.",
      type: { name: 'string', required: false },
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'right',
        'right-start',
        'right-end',
        'left',
        'left-start',
        'left-end',
      ],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom-start' },
      },
    },
    label: {
      name: 'label',
      description: 'Le label du champ',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    subLabel: {
      name: 'subLabel',
      description: 'Un descriptif complétant le label',
      type: { name: 'string', required: false },
    },
    requiredLabel: {
      name: 'requiredLabel',
      description: 'Label indiquant que le champ est requis.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    screenReaderOnly: {
      name: 'screenReaderOnly',
      description: "Permet de rendre le label lisible uniquement par les lecteurs d'écran",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      name: 'size',
      description: 'Correspond à la taille de la police du label.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: { type: 'select' },
      options: ['small', 'large', 'default'],
    },
    inlineLabel: {
      name: 'inlineLabel',
      description: 'Permet de ne pas afficher la marge pour les éléments de formulaire inline',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  },
};

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

export const Default = {
  args: {
    label: 'Label du champ',
    options: DEFAULT_OPTIONS,
    onChange: action('onChange'),
    emptyMessage: 'pas de résultat',
    values: ['1', '3'],
    placeholder: 'placeholder',
  },
};

export const multiSelectWithChildComponent = (args) => {
  return {
    template: hbs`<h4><strong>⚠️ La sélection des éléments ne fonctionne pas dans Storybook.</strong></h4>
<PixMultiSelect
  @placeholder={{this.placeholder}}
  @onChange={{this.onChange}}
  @emptyMessage={{this.emptyMessage}}
  @className={{this.className}}
  @options={{this.options}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
  <:default as |option|>
    <PixStars
      @alt={{concat 'Étoiles ' option.value ' sur ' option.total}}
      @count={{option.value}}
      @total={{option.total}}
    />
  </:default>
</PixMultiSelect>`,
    context: args,
  };
};

multiSelectWithChildComponent.args = {
  ...Default.args,
  placeholder: 'Sélectionner le niveau souhaité',
  label: 'Résultat évaluation',
  options: [
    { value: '0', total: 3 },
    { value: '1', total: 3 },
    { value: '2', total: 3 },
    { value: '3', total: 3 },
  ],
};

export const multiSelectSearchable = {
  args: {
    ...Default.args,
    isSearchable: true,
    strictSearch: true,
    emptyMessage: 'Aucune option trouvée',
  },
};

export const multiSelectWithCustomClass = {
  args: {
    ...Default.args,
    className: 'custom',
    isSearchable: false,
  },
};

export const multiSelectWithId = {
  args: {
    ...Default.args,
    label: undefined,
    id: 'custom',
    isSearchable: false,
  },
};

const TemplateWithYield = (args) => ({
  template: hbs`<PixMultiSelect
  @id={{this.id}}
  @onChange={{this.onChange}}
  @emptyMessage={{this.emptyMessage}}
  @className={{this.className}}
  @isSearchable={{this.isSearchable}}
  @strictSearch={{this.strictSearch}}
  @values={{this.values}}
  @options={{this.options}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @requiredLabel={{this.requiredLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
  <:placeholder>filtres (2)</:placeholder>
  <:default as |option|>{{option.label}}</:default>
</PixMultiSelect>`,
  context: args,
});

export const multiSelectWithYield = TemplateWithYield.bind({});
multiSelectWithYield.args = {
  ...Default.args,
  placeholder: undefined,
  isSearchable: false,
};
