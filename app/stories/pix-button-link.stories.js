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
    variant: {
      name: 'variant',
      description:
        'color: `primary`, `primary-bis`, `secondary`,`tertiary`, `success`, `error`, `transparent-dark`',
      options: [
        'primary',
        'primary-bis',
        'secondary',
        'tertiary',
        'success',
        'error',
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
      description: 'taille: `large`,`small`',
      options: ['large', 'small'],
      type: { name: 'string', required: false },
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    isBorderVisible: {
      name: 'isBorderVisible',
      description:
        'Paramètre utilisé seulement quand le `variant` est `secondary` ou `transparent-dark`',
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
  @variant={{this.variant}}
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
  @variant={{this.variant}}
  @size={{this.size}}
  @isBorderVisible={{this.isBorderVisible}}
  @isDisabled={{this.isDisabled}}
>
  Lien route Ember (LinkTo)
</PixButtonLink>`,
    context: args,
  };
};
