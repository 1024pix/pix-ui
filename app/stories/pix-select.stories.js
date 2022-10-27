import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const Template = (args) => {
  return {
    template: hbs`
      <style>
        .custom {
          border: 0;
        }
        .custom:hover {
          border: 0;
        }
      </style>
      <div style="width: 300px;">
        <PixSelect        
          @className={{this.className}}
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

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'custom',
  options: [
    { value: '1', label: 'Figues' },
    { value: '10', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '7', label: 'Mangues' },
    { value: '11', label: 'Kaki' },
    {
      value: '12',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  labels: {
    select: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      subLabel: 'Mon sous label',
      id: 'default-select',
    },
  },
  isSearchable: false,
  onSelect: action('onSelect'),
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: '1', label: 'Figues' },
    { value: '10', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '7', label: 'Mangues' },
    { value: '11', label: 'Kaki' },
    {
      value: '12',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  labels: {
    select: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      subLabel: 'Mon sous label',
      id: 'default-select',
    },
  },
  isSearchable: false,
  onSelect: action('onSelect'),
};

export const WithCategories = Template.bind({});
WithCategories.args = {
  options: [
    { value: '1', label: 'Figues', category: 'Fruit Rouge' },
    { value: '10', label: 'Fraises', category: 'Fruit Rouge' },
    { value: '3', label: 'Noix', category: 'Autres' },
    { value: '4', label: 'Papayes', category: 'Autres' },
    {
      value: '12',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
      category: 'Autres',
    },
  ],
  labels: {
    select: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      subLabel: 'Mon sous label',
      id: 'with-category-select',
    },
  },
  isSearchable: false,
  onSelect: action('onSelect'),
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  options: [
    { value: '1', label: 'Figues' },
    { value: '10', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '7', label: 'Mangues' },
    { value: '11', label: 'Kaki' },
    {
      value: '12',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  labels: {
    select: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      subLabel: 'Mon sous label',
      id: 'with-search-select',
    },
    search: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      id: 'with-search-select',
    },
  },
  isSearchable: true,
  onSelect: action('onSelect'),
};

export const WithCategoriesAndSearch = Template.bind({});
WithCategoriesAndSearch.args = {
  options: [
    { value: '1', label: 'Figues', category: 'Fruit Rouge' },
    { value: '10', label: 'Fraises', category: 'Fruit Rouge' },
    { value: '5', label: 'Fèves de chocolat', category: 'Autres' },
    { value: '6', label: 'Dattes', category: 'Autres' },
    {
      value: '12',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
      category: 'Autres',
    },
  ],
  labels: {
    select: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      subLabel: 'Mon sous label',
      id: 'with-category-and-search-select',
    },
    search: {
      label: 'Mon label',
      innerText: 'Mon innerText',
      id: 'with-category-and-search-select',
    },
  },
  isSearchable: true,
  onSelect: action('onSelect'),
};

export const argTypes = {
  options: {
    name: 'options',
    description:
      'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value``, ``label`` et ``category``. Ce dernier étant optionnel.',
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
  labels: {
    select: {
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
      innerText: {
        name: 'innerText',
        description: 'InnerText/Placeholder du menu déroulant',
        type: { name: 'string', required: true },
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
    },
    search: {
      label: {
        name: 'label',
        description: 'Label de la recherche dans le menu déroulant',
        type: { name: 'string', required: true },
        table: {
          type: { summary: 'string' },
        },
      },
      innerText: {
        name: 'innerText',
        description: 'innerText/Placeholder de la recherche dans le menu déroulant',
        type: { name: 'string', required: true },
        table: {
          type: { summary: 'string' },
        },
      },
      id: {
        name: 'id',
        description: "L'id du label de la recherche dans le menu déroulant",
        type: { name: 'string', required: true },
        table: {
          type: { summary: 'string' },
        },
      },
    },
  },
};
