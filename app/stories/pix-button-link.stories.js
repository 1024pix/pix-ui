import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Basics/ButtonLink',

  argTypes: {
    href: {
      name: 'href',
      description: 'Paramètre à renseigner pour utiliser lien HTML.',
      type: { name: 'string', required: false },
    },
    route: {
      name: 'route',
      description:
        "Paramètre à renseigner pour utiliser un composant LinkTo à la place d'un lien classique. Il prend comme valeur la route de redirection",
      type: { name: 'string', required: false },
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
        'color: `primary`, `secondary`, `success`, `error`, `neutral`, `transparent-light`, `transparent-dark`',
      options: [
        'primary',
        'secondary',
        'success',
        'error',
        'neutral',
        'transparent-light',
        'transparent-dark',
      ],
      type: { name: 'string', required: false },
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
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
  },
};

export const htmlLink = {
  render: (args) => ({
    template: hbs`<PixButtonLink
  @href='https://pix.fr'
  target='NEW'
  @shape={{this.shape}}
  @backgroundColor={{this.backgroundColor}}
  @size={{this.size}}
  @isBorderVisible={{this.isBorderVisible}}
  @isDisabled={{this.isDisabled}}
>
  Lien HTML classique
</PixButtonLink>`,
    context: args,
  }),
};

export const emberLink = (args) => {
  return {
    template: hbs`<PixButtonLink
  @route=''
  @model=''
  @query={{this.query}}
  @shape={{this.shape}}
  @backgroundColor={{this.backgroundColor}}
  @size={{this.size}}
  @isBorderVisible={{this.isBorderVisible}}
  @isDisabled={{this.isDisabled}}
>
  Lien route Ember (LinkTo)
</PixButtonLink>`,
    context: args,
  };
};
