import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Others/SearchInput',
  argTypes: {
    id: {
      name: 'id',
      description:
        "Un identifiant unique placé sur le composant. Si l'id n'est pas fourni un id par défaut sera mis.",
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder du champ.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    debounceTimeInMs: {
      name: 'debounceTimeInMs',
      description:
        "Temps d'attente en millisecondes entre 2 appels à la fonction triggerFiltering.",
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    triggerFiltering: {
      name: 'triggerFiltering',
      description: 'Fonction appelée quand le champ est modifié.',
      type: { required: true },
      control: { disable: true },
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

export const Template = (args) => {
  return {
    template: hbs`<PixSearchInput
  @id={{this.id}}
  @placeholder={{this.placeholder}}
  @debounceTimeInMs={{this.debounceTimeInMs}}
  @triggerFiltering={{this.triggerFiltering}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @requiredLabel={{this.requiredLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
><:label>{{this.label}}</:label></PixSearchInput>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: null,
  label: 'Filtrer un fruit',
  placeholder: 'un placeholder',
  debounceTimeInMs: 500,
  triggerFiltering: action('triggerFiltering'),
};
