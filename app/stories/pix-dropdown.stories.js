import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  component: 'PixDropdown',
};

export const Template = (args) => {
  return {
    template: hbs`<div style='width: 300px;'>
  <PixDropdown
    @id={{this.id}}
    @options={{this.options}}
    @onSelect={{this.onSelect}}
    @placeholder={{this.placeholder}}
    @selectedOption={{this.selectedOption}}
    @isSearchable={{this.isSearchable}}
    @searchPlaceholder={{this.searchPlaceholder}}
    @label={{this.label}}
    @clearLabel={{this.clearLabel}}
    @expandLabel={{this.expandLabel}}
    @collapseLabel={{this.collapseLabel}}
    @pageSize={{this.pageSize}}
    @requiredLabel={{this.requiredLabel}}
  />
</div>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: '1', label: 'Figues' },
    { value: '2', label: 'Bananes' },
    { value: '3', label: 'Noix' },
    { value: '4', label: 'Papayes' },
    { value: '5', label: 'Fèves de chocolat' },
    { value: '6', label: 'Dattes' },
    { value: '7', label: 'Mangues' },
    { value: '8', label: 'Jujube' },
    { value: '9', label: 'Avocat' },
    { value: '10', label: 'Fraises' },
    { value: '11', label: 'Kaki' },
    { value: '12', label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)' },
  ],
  placeholder: 'Choisissez une option',
  onSelect: action('onSelect'),
  id: 'default-dropdown',
  clearLabel: 'Supprimer la sélection',
  expandLabel: 'Ouvrir la liste',
  collapseLabel: 'Réduire la liste',
};

export const withLabel = Template.bind({});
withLabel.args = {
  ...Default.args,
  id: 'dropdown-with-label',
  label: 'Ton fruit préféré: ',
  requiredLabel: 'Champ requis',
};

export const searchableDropdown = Template.bind({});
searchableDropdown.args = {
  ...Default.args,
  isSearchable: true,
  id: 'searchable-dropdown',
  placeholder: 'Fraises, Mangues...',
  searchPlaceholder: 'Rechercher',
};

export const paginatedDropdown = Template.bind({});
paginatedDropdown.args = {
  ...Default.args,
  id: 'paginated-dropdown',
  placeholder: 'Quel est ton fruit préféré ?',
  pageSize: 10,
  isSearchable: true,
  searchPlaceholder: 'Rechercher',
  options: Array.from({ length: 100 }, (_, index) => ({
    value: `${index}`,
    label: `${index}abc`,
  })),
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
    description:
      "Rend le champ cherchable, le paramètre @searchPlaceholder devient requis pour l'accessibilité.",
    control: { type: 'boolean' },
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  searchPlaceholder: {
    name: 'searchPlaceholder',
    description: 'Placeholder du champ de recherche. Requis si le menu est cherchable.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  placeholder: {
    name: 'placeholder',
    description: "Un texte donnant une indication a l'utilisateur sur le choix des options.",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  label: {
    name: 'label',
    description: 'Label du menu déroulant, le paramètre @id devient obligatoire avec ce paramètre.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  requiredLabel: {
    name: 'requiredLabel',
    description:
      'Label indiquant que le champ est requis, le paramètre @label devient obligatoire avec ce paramètre.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  id: {
    name: 'id',
    description: "L'id du label",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  pageSize: {
    name: 'pageSize',
    description: "Le nombre d'élément à afficher dans la liste.",
    type: { name: 'number', required: false },
    table: {
      type: { summary: 'number' },
    },
  },
  clearLabel: {
    name: 'clearLabel',
    description: "Label de l'icône pour éliminer la sélection. Requis pour l'accessibilité.",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  expandLabel: {
    name: 'expandLabel',
    description: "Label de l'icône pour ouvrir le menu déroulant. Requis pour l'accessibilité.",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  collapseLabel: {
    name: 'collapseLabel',
    description: "Label de l'icône pour réduire le menu déroulant. Requis pour l'accessibilité.",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
};
