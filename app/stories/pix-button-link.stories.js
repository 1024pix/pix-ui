import { hbs } from 'ember-cli-htmlbars';

export const htmlLinkTemplate = (args) => {
  return {
    template: hbs`
      <PixButtonLink 
        @href="https://pix.fr"
        target="NEW"
        @shape={{shape}}
        @backgroundColor={{backgroundColor}}
        @size={{size}}
        @isBorderVisible={{isBorderVisible}}
        @isDisabled={{isDisabled}}
      >
        Lien HTML classique
      </PixButtonLink>
    `,
    context: args,
  };
};

export const emberLinkTemplate = (args) => {
  return {
    template: hbs`
      <PixButtonLink 
        @route=""
        @model=""
        @query={{query}}
        @shape={{shape}}
        @backgroundColor={{backgroundColor}}
        @size={{size}}
        @isBorderVisible={{isBorderVisible}}
        @isDisabled={{isDisabled}}
      >
        Lien route Ember (LinkTo)
      </PixButtonLink>
    `,
    context: args,
  };
};

export const htmlLink = htmlLinkTemplate.bind({});

export const emberLink = emberLinkTemplate.bind({});

export const argTypes = {
  href: {
    name: 'href',
    description: 'Paramètre à renseigner pour utiliser lien HTML.',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  route: {
    name: 'route',
    description:
      "Paramètre à renseigner pour utiliser un composant LinkTo à la place d'un lien classique. Il prend comme valeur la route de redirection",
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  model: {
    name: 'model',
    description: 'Model Ember lié à la route utilisée',
    type: { required: false },
  },
  query: {
    name: 'query',
    description:
      "Paramètre facultatif du <LinkTo> Ember permettant d'ajouter des paires de clé/valeur dans les paramètres d'une URL",
    type: { required: false },
  },
  shape: {
    name: 'shape',
    description: 'forme: `rounded`,`squircle`',
    type: { name: 'string', required: false },
    options: ['rounded', 'squircle'],
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'squircle' },
    },
  },
  backgroundColor: {
    name: 'backgroundColor',
    description:
      'color: `blue`, `green`, `yellow`, `red`, `grey`, `transparent-light`, `transparent-dark`',
    options: ['blue', 'green', 'yellow', 'red', 'grey', 'transparent-light', 'transparent-dark'],
    type: { name: 'string', required: false },
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'blue' },
    },
  },
  size: {
    name: 'size',
    description: 'taille: `big`,`small`',
    options: ['big', 'small'],
    type: { name: 'string', required: false },
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'big' },
    },
  },
  isBorderVisible: {
    name: 'isBorderVisible',
    description:
      'Paramètre utilisé seulement quand le `backgroundColor` est `transparent-light` ou `transparent-dark`',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  isDisabled: {
    name: 'isDisabled',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};
