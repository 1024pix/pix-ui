import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Label',
  argTypes: {
    for: {
      name: 'for',
      description: 'Identifiant du champ à rattacher au label',
      type: { name: 'string', required: true },
    },
    label: {
      name: 'label',
      description: 'Le label du champ',
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
      description:
        'Permet de ne pas afficher la marge pour les éléments de formulaire inline ( checkbox / radio )',
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
    template: hbs`<PixLabel
  @id={{this.id}}
  @subLabel={{this.subLabel}}
  @size={{this.size}}
  @requiredLabel={{this.requiredLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @inlineLabel={{this.inlineLabel}}
>
  {{this.label}}
</PixLabel>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'first-name',
  label: 'Prénom',
};

export const withSubLabel = Template.bind({});
withSubLabel.args = {
  id: 'first-name',
  label: 'Prénom',
  subLabel: 'a small information',
};

export const withRequiredLabel = Template.bind({});
withRequiredLabel.args = {
  id: 'first-name',
  label: 'Prénom',
  requiredLabel: 'Champ obligatoire',
};

export const screenReaderOnlyLabel = Template.bind({});
screenReaderOnlyLabel.args = {
  id: 'first-name',
  label: 'Prénom',
  screenReaderOnlyLabel: true,
};
