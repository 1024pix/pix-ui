import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  component: 'PixSelect',
};

export const Template = (args) => {
  return {
    template: hbs`
        {{#if this.id}}
          <div>
            <label for={{this.id}}>Un label en dehors du composant</label>
          </div>
        {{/if}}
        <PixSelect
          @id={{this.id}}
          @className={{this.className}}
          @options={{this.options}}
          @isSearchable={{this.isSearchable}}
          @onChange={{this.onChange}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @hideDefaultOption={{this.hideDefaultOption}}
          @subLabel={{this.subLabel}}
          @searchLabel={{this.searchLabel}}
          @value={{this.value}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @screenReaderOnly={{this.screenReaderOnly}}
          @emptySearchMessage={{this.emptySearchMessage}}
          @requiredText={{this.requiredText}}
          @errorMessage={{this.errorMessage}}
          @isDisabled={{this.isDisabled}}
          @placement={{this.placement}}
          @icon={{this.icon}}
        />
    `,
    context: args,
  };
};

export const TemplatePopover = (args) => {
  return {
    template: hbs`
      <div style="display:flex;height:330px">
        <div style="align-self:flex-end">
        {{#if this.id}}
          <div>
            <label for={{this.id}}>Un label en dehors du composant</label>
          </div>
        {{/if}}
        <PixSelect
          @id={{this.id}}
          @className={{this.className}}
          @options={{this.options}}
          @isSearchable={{this.isSearchable}}
          @onChange={{this.onChange}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @hideDefaultOption={{this.hideDefaultOption}}
          @subLabel={{this.subLabel}}
          @searchLabel={{this.searchLabel}}
          @value={{this.value}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @screenReaderOnly={{this.screenReaderOnly}}
          @emptySearchMessage={{this.emptySearchMessage}}
          @requiredText={{this.requiredText}}
          @errorMessage={{this.errorMessage}}
          @isDisabled={{this.isDisabled}}
          @placement={{this.placement}}
        />
        </div>
      </div>
    `,
    context: args,
  };
};

export const WithId = Template.bind({});
WithId.args = {
  id: 'custom',
  options: [
    { value: '1', label: 'Figues' },
    { value: '3', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '4', label: 'Mangues' },
    { value: '5', label: 'Kaki' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  placeholder: 'Mon innerText',
  isSearchable: false,
  onChange: action('onChange'),
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'custom',
  options: [
    { value: '1', label: 'Figues' },
    { value: '3', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '4', label: 'Mangues' },
    { value: '5', label: 'Kaki' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  isSearchable: false,
  onChange: action('onChange'),
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: '1', label: 'Figues' },
    { value: '3', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '4', label: 'Mangues' },
    { value: '5', label: 'Kaki' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  isSearchable: false,
  onChange: action('onChange'),
};

export const WithCategories = Template.bind({});
WithCategories.args = {
  options: [
    { value: '1', label: 'Figues', category: 'Fruit Rouge' },
    { value: '3', label: 'Fraises', category: 'Fruit Rouge' },
    { value: '3', label: 'Noix', category: 'Autres' },
    { value: '4', label: 'Papayes', category: 'Autres' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
      category: 'Autres',
    },
  ],
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  isSearchable: false,
  onChange: action('onChange'),
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  options: [
    { value: '1', label: 'Figues' },
    { value: '3', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '4', label: 'Mangues' },
    { value: '5', label: 'Kaki' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  searchLabel: 'Mon label',
  searchPlaceholder: 'Mon innerText',
  isSearchable: true,
  emptySearchMessage: 'Aucune option',
  onChange: action('onChange'),
};

export const WithCategoriesAndSearch = Template.bind({});
WithCategoriesAndSearch.args = {
  options: [
    { value: '1', label: 'Figues', category: 'Fruit Rouge' },
    { value: '2', label: 'Fraises', category: 'Fruit Rouge' },
    { value: '3', label: 'Fèves de chocolat', category: 'Autres' },
    { value: '5', label: 'Dattes', category: 'Autres' },
    {
      value: '4',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
      category: 'Autres',
    },
  ],
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  searchLabel: 'Mon label',
  searchPlaceholder: 'Mon innerText',
  isSearchable: true,
  emptySearchMessage: 'Aucune option',
  onChange: action('onChange'),
};

export const WithDropDownAtTheTop = TemplatePopover.bind({});
WithDropDownAtTheTop.args = {
  options: [
    { value: '1', label: 'Figues' },
    { value: '3', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '4', label: 'Mangues' },
    { value: '5', label: 'Kaki' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  label: 'JambonFromage',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  isSearchable: false,
  onChange: action('onChange'),
  placement: 'top',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'earth-europe',
  isSearchable: false,
  label: 'With icon',
  onChange: action('onChange'),
  options: [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
  ],
  value: 'fr',
};

export const argTypes = {
  options: {
    name: 'options',
    description:
      'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value``, ``label`` et ``category``. Ce dernier étant optionnel.',
    type: { name: 'array', required: true },
  },
  value: {
    name: 'value',
    description: 'Option sélectionnée',
    options: ['1', '2', '3', '4', '5', '6'],
    control: { type: 'select' },
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  onChange: {
    name: 'onChange',
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
  id: {
    name: 'id',
    description:
      "Un identifiant unique placé sur le composant. **⚠️ L'`id` est obligatoire que si le `label` n'est pas donné. ⚠️**",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  label: {
    name: 'label',
    description:
      "Label du menu déroulant. ** ⚠️ Le `label` est obligatoire que si l'`id` n'est pas donné. ⚠️ **",
    type: { name: 'string', required: false },
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
  placeholder: {
    name: 'placeholder',
    description: "Placeholder du menu déroulant. Il sert aussi de label pour l'option par défaut",
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
  hideDefaultOption: {
    name: 'hideDefaultOption',
    description: "Cache l'option par défaut",
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  className: {
    name: 'className',
    description: 'Cette classe css permet de surcharger le css par défaut du composant.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  searchLabel: {
    name: 'searchLabel',
    description:
      'Label de la recherche dans le menu déroulant. **⚠️ Le `searchLabel` est obligatoire que si le `isSearchable` à `true`. ⚠️**',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  searchPlaceholder: {
    name: 'searchPlaceholder',
    description:
      'Placeholder de la recherche dans le menu déroulant. **⚠️ Le `searchPlaceholder` est obligatoire que si le `isSearchable` à `true`. ⚠️**',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  emptySearchMessage: {
    name: 'emptySearchMessage',
    description:
      "Message affiché si la recherche ne retourne pas d'options. **⚠️ Le `emptySearchMessage` est obligatoire que si le `isSearchable` à `true`. ⚠️**",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  requiredText: {
    name: 'requiredText',
    description: "Affiche l'astérisque au label et ajoute sa signification",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  errorMessage: {
    name: 'errorMessage',
    description: 'Message affiché si une erreur survient',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  isDisabled: {
    name: 'isDisabled',
    description: "Permet de désactiver l'affichage des options possible",
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: false },
    },
  },
  placement: {
    name: 'placement',
    description:
      "Permet de placer la dropdown du select par rapport à son bouton. Par défaut, cela s'adapte tout seul.",
    type: { name: 'string', required: false },
    options: ['bottom', 'top', 'left', 'right'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    },
  },
  icon: {
    name: 'icon',
    description:
      "Permet l'affichage d'une icône FontAwesome avant le placeholder ou le label de l'option sélectionnée.",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    },
  },
};
