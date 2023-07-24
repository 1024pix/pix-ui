import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Textarea',
  argTypes: {
    id: {
      name: 'id',
      description: 'Identifiant du champ permettant de lui attacher un label',
      type: { name: 'string', required: true },
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
    label: {
      name: 'label',
      description: 'Donne un label au champ.',
      type: { name: 'string', required: false },
    },
    requiredLabel: {
      name: 'requiredLabel',
      description:
        'Label indiquant que le champ est requis, le paramètre @label devient obligatoire avec ce paramètre.',
      type: { name: 'string', required: false },
    },
    errorMessage: {
      name: 'errorMessage',
      description: 'Affiche une erreur en dessous du champ.',
      type: { name: 'string', required: false },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTextarea
  @id={{this.id}}
  @value={{this.value}}
  @maxlength={{this.maxlength}}
  @label={{this.label}}
  @requiredLabel={{this.requiredLabel}}
  @errorMessage={{this.errorMessage}}
/>`,
    context: args,
  };
};

export const textarea = Template.bind({});
textarea.args = {
  id: 'textarea',
  value: 'Contenu du textarea',
};
