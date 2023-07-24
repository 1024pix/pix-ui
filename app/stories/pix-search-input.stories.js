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
    label: {
      name: 'label',
      description:
        "Label du champ. ** ⚠️ Le `label` est obligatoire si l'`ariaLabel` n'est pas donné. ⚠️ **",
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description:
        "Label du champ. ** ⚠️ L'`ariaLabel` est obligatoire si le `label` n'est pas donné. ⚠️ **",
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
  },
};

export const Template = (args) => {
  return {
    template: hbs`
      <PixSearchInput
        @id={{this.id}}
        @label={{this.label}}
        @ariaLabel={{this.ariaLabel}}
        @placeholder={{this.placeholder}}
        @debounceTimeInMs={{this.debounceTimeInMs}}
        @triggerFiltering={{this.triggerFiltering}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: null,
  label: 'Filtrer un fruit',
  ariaLabel: null,
  placeholder: 'un placeholder',
  debounceTimeInMs: 500,
  triggerFiltering: action('triggerFiltering'),
};
