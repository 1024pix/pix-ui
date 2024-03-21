import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Textarea',
  argTypes: {
    id: {
      name: 'id',
      description: 'id généré automatiquement, peut être définit manuellement si besoin',
      type: { name: 'string', required: false },
    },
    value: {
      name: 'value',
      description: 'Valeur du champ',
      type: { name: 'string', required: true },
    },
    maxlength: {
      name: 'maxlength',
      description: 'Nombre de caractères maximal à taper dans le champ',
      type: { name: 'number', required: false },
    },
    errorMessage: {
      name: 'errorMessage',
      description: 'Affiche une erreur en dessous du champ.',
      type: { name: 'string', required: false },
    },

    label: {
      name: 'label',
      description: 'Donne un label au champ.',
      type: { name: 'string', required: true },
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

const Template = (args) => {
  return {
    template: hbs`<PixTextarea
  @id={{this.id}}
  @value={{this.value}}
  @maxlength={{this.maxlength}}
  @errorMessage={{this.errorMessage}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @requiredLabel={{this.requiredLabel}}
  @inlineLabel={{this.inlineLabel}}
><:label>{{this.label}}</:label></PixTextarea>`,
    context: args,
  };
};

export const textarea = Template.bind({});
textarea.args = {
  id: 'textarea',
  value: 'Contenu du textarea',
};
