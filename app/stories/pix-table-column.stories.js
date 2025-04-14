import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Table/TableColumn',
  argTypes: {
    context: {
      name: 'context',
      description: 'Propriété a récupérer depuis le block element `<:columns>` du PixTable parent.',
      type: { name: 'privé', required: true },
    },
    onSort: {
      name: 'onSort',
      description:
        "Fonction appelée en cas de clic sur le bouton de tri d'une colonne. Sa présence détermine si le bouton de tri est affiché ou non. Le tri est à implémenter soi-même.",
      type: { name: 'function', required: false },
    },
    sortOrder: {
      name: 'sortOrder',
      description:
        "Statut du tri de la colonne. À gérer du côté de l'application.<br> ⚠️ Obligatoire si `@onSort` est utilisé ⚠️",
      options: ['asc', 'desc', null],
      control: {
        type: 'select',
      },
      type: {
        name: '"asc" | "desc" | null',
        required: false,
      },
    },
    ariaLabelDefaultSort: {
      name: 'ariaLabelDefaultSort',
      description:
        "Label du bouton de tri, lorsqu'aucun tri n'est appliqué.<br>  ⚠️ Obligatoire si `@onSort` est utilisé ⚠️",
      type: { name: 'string', required: false },
    },
    ariaLabelSortAsc: {
      name: 'ariaLabelSortAsc',
      description:
        'Label du bouton de tri (pour trier en ordre ascendant), lorsque le tri descendant est appliqué.<br>  ⚠️ Obligatoire si `@onSort` est utilisé ⚠️',
      type: { name: 'string', required: false },
    },
    ariaLabelSortDesc: {
      name: 'ariaLabelSortDesc',
      description:
        'Label du bouton de tri (pour trier en ordre descendant), lorsque le tri ascendant est appliqué.<br>  ⚠️ Obligatoire si `@onSort` est utilisé ⚠️',
      type: { name: 'string', required: false },
    },
    type: {
      defaultValue: {
        summary: 'text',
      },
      options: ['text', 'number', 'checkbox'],
      control: {
        type: 'select',
      },
      type: {
        name: '"text" | "number"',
        description: 'Defini le style avec lequel nous afficherons la colonne',
      },
    },
    isMainRow: {
      name: 'isMainRow',
      description:
        'Permet de définir la cellule qui portera la valeur principale de la ligne entière',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    header: {
      name: '<:header>',
      description: 'En-tête de la colonne',
      type: { name: 'block content', required: true },
    },
    cell: {
      name: '<:cell>',
      description: 'Cellule de la colonne.',
      type: { name: 'block content', required: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTable @data={{this.data}} @caption={{this.caption}}>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} @type='checkbox'>
      <:header>
        <PixCheckbox
          @id='select-all-{{row.id}}'
          @checked={{row.checked}}
          @screenReaderOnly={{true}}
          @size='small'
        >
          <:label>Sélectionner toutes les lignes</:label>
        </PixCheckbox>
      </:header>
      <:cell>
        <PixCheckbox
          @id={{row.id}}
          @checked={{row.checked}}
          @screenReaderOnly={{true}}
          @size='small'
        >
          <:label>Sélectionner {{row.nom}}</:label>
        </PixCheckbox>
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}} @isMainRow={{this.isMainRow}}>
      <:header>
        Nom
      </:header>
      <:cell>
        {{row.name}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}} @type='number'>
      <:header>
        Âge
      </:header>
      <:cell>
        {{row.age}}
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  caption: 'Description du tableau',
  data: [
    {
      id: '1',
      name: 'jean',
      age: 15,
    },
    {
      id: '2',
      name: 'brian',
      age: 25,
    },
  ],
};

const TemplateSort = (args) => {
  return {
    template: hbs`<PixTable @data={{this.data}} @caption={{this.caption}}>
  <:columns as |row context|>
    <PixTableColumn
      @context={{context}}
      @onSort={{this.sort}}
      @sortOrder={{this.sortOrder}}
      @ariaLabelDefaultSort={{this.ariaLabelDefaultSort}}
      @ariaLabelSortAsc={{this.ariaLabelSortAsc}}
      @ariaLabelSortDesc={{this.ariaLabelSortDesc}}
    >
      <:header>
        Nom
      </:header>
      <:cell>
        {{row.name}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn
      @context={{context}}
      @type='number'
      @onSort={{this.sort}}
      @sortOrder={{this.sortOrder}}
      @ariaLabelDefaultSort={{this.ariaLabelDefaultSort}}
      @ariaLabelSortAsc={{this.ariaLabelSortAsc}}
      @ariaLabelSortDesc={{this.ariaLabelSortDesc}}
    >
      <:header>
        Age
      </:header>
      <:cell>
        {{row.age}}
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
    context: args,
  };
};

export const Sorted = TemplateSort.bind({});
Sorted.args = {
  caption: 'Description du tableau',
  data: [
    {
      name: 'jean',
      age: 15,
    },
    {
      name: 'brian',
      age: 25,
    },
  ],
  sort() {},
  sortOrder: 'asc',
  ariaLabelDefaultSort: 'click pour trier',
  ariaLabelSortAsc: 'click pour trier en ordre ascendant',
  ariaLabelSortDesc: 'click pour trier en ordre descendant',
};

const templateTag = (args) => {
  return {
    template: hbs`<PixTable @data={{this.data}} @caption={{this.caption}}>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} @type='tag'>
      <:header>
        tag
      </:header>
      <:cell>
        <PixTag>{{row.tag}}</PixTag>
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
    context: args,
  };
};
export const Tag = templateTag.bind({});
Tag.args = {
  caption: 'Description du tableau',
  data: [
    {
      tag: 'tag1',
    },
    {
      tag: 'tag2',
    },
  ],
};
