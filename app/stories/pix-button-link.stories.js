import { hbs } from 'ember-cli-htmlbars';

import { ICONS } from '../../addon/helpers/icons';

export default {
  title: 'Actions/ButtonLink',
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
    replace: {
      name: 'replace',
      description: 'Écraser la dernière entrée de l’historique du navigateur',
      type: { name: 'boolean', required: false },
    },
    variant: {
      name: 'variant',
      description: 'Permet le choix de la déclinaison du bouton lien souhaité',
      options: [
        'primary',
        'primary-bis',
        'primary-white',
        'secondary',
        'secondary-white',
        'tertiary',
        'tertiary-white',
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
    iconBefore: {
      name: 'iconBefore',
      description: `Nom de l'icône à afficher **avant** le label`,
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: Object.keys(ICONS),
    },
    iconAfter: {
      name: 'iconAfter',
      description: `Nom de l'icône à afficher **après** le label`,
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: Object.keys(ICONS),
    },
    plainIconBefore: {
      name: 'plainIconBefore',
      description: `Change le type de l'icône **avant** le label en fill/plain`,
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    plainIconAfter: {
      name: 'plainIconAfter',
      description: `Change le type de l'icône **après** le label fill/plain`,
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
  @variant='tertiary'
  @size={{this.size}}
  @iconBefore={{this.iconBefore}}
  @plainIconBefore={{this.plainIconBefore}}
  @iconAfter={{this.iconAfter}}
  @plainIconAfter={{this.plainIconAfter}}
  @isBorderVisible={{this.isBorderVisible}}
  @isDisabled={{this.isDisabled}}
>
  Lien HTML classique
</PixButtonLink>`,
    context: args,
  }),
};

const Template = (args) => {
  return {
    template: hbs`<PixButtonLink
  @route=''
  @model=''
  @query={{this.query}}
  @variant={{this.variant}}
  @size={{this.size}}
  @isBorderVisible={{this.isBorderVisible}}
  @iconBefore={{this.iconBefore}}
  @plainIconBefore={{this.plainIconBefore}}
  @iconAfter={{this.iconAfter}}
  @plainIconAfter={{this.plainIconAfter}}
  @isDisabled={{this.isDisabled}}
>
  Lien route Ember (LinkTo)
</PixButtonLink>`,
    context: args,
  };
};

export const emberLink = Template.bind({});

export const icons = Template.bind({});
icons.args = {
  ...emberLink.args,
  iconBefore: 'add',
  iconAfter: 'minus',
};
