import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Forms/Input',
  argTypes: {
    id: {
      name: 'id',
      description: 'Identifiant du champ permettant de lui attacher un label',
      type: { name: 'string', required: true },
    },
    value: {
      name: 'value',
      description: "Valeur de l'input",
      type: { name: 'string', required: false },
    },
    validationStatus: {
      name: 'validationStatus',
      description:
        "Définit l'état du champ, neutre par défaut, en succès ou erreur selon l'action de l'utilisateur",
      type: { name: 'string', required: false },
      options: ['default', 'success', 'error'],
      control: { type: 'select' },
    },
    errorMessage: {
      name: 'errorMessage',
      description:
        "Affiche le message d'erreur donné. Doit s'accompagner du paramètre validationStatus en 'error'",
      type: { name: 'string', required: false },
    },

    label: {
      name: 'label',
      description: 'Le label du champ',
      type: { name: 'string', required: false },
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
    isFullWidth: {
      name: 'isFullWidth',
      description: 'Permet au composant de prendre la largeur de son parent',
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
    template: hbs`<PixInput
  @id={{this.id}}
  @errorMessage={{this.errorMessage}}
  placeholder='Jeanne, Pierre ...'
  @validationStatus={{this.validationStatus}}
  @size={{this.size}}
  disabled={{this.disabled}}
  readonly={{this.readonly}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @requiredLabel={{this.requiredLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
</PixInput>`,
    context: args,
  };
};

const TemplateWithoutLabel = (args) => {
  return {
    template: hbs`<PixInput
  @id={{this.id}}
  @errorMessage={{this.errorMessage}}
  placeholder='Jeanne, Pierre ...'
  @validationStatus={{this.validationStatus}}
  @size={{this.size}}
  disabled={{this.disabled}}
  readonly={{this.readonly}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @requiredLabel={{this.requiredLabel}}
/>`,
    context: args,
  };
};

const TemplateWithParent = (args) => {
  return {
    template: hbs`{{!-- template-lint-disable no-inline-styles --}}
<span style='color: blue;'>Composant parent</span>
<div style='width: 400px; border: 2px solid blue; padding-top: 1rem; padding-bottom: 1rem;'>
  <PixInput @id={{this.id}} @errorMessage={{this.errorMessage}} placeholder='Jeanne, Pierre ...' @validationStatus={{this.validationStatus}} @size={{this.size}} disabled={{this.disabled}} readonly={{this.readonly}} @subLabel={{this.subLabel}} @inlineLabel={{this.inlineLabel}} @requiredLabel={{this.requiredLabel}} @screenReaderOnly={{this.screenReaderOnly}} @isFullWidth={{this.isFullWidth}}>
    <:label>{{this.label}}</:label>
  </PixInput>
</div>`,

    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'first-name',
  label: 'Prénom',
};

export const withLabel = Template.bind({});
withLabel.args = {
  id: 'first-name',
  label: 'Prénom',
  subLabel: 'a small information',
};

export const errorState = Template.bind({});
errorState.args = {
  id: 'first-name',
  label: 'Prénom',
  errorMessage: "un message d'erreur",
  validationStatus: 'error',
};

export const successState = Template.bind({});
successState.args = {
  id: 'first-name',
  label: 'Prénom',
  validationStatus: 'success',
};

export const disabledState = Template.bind({});
disabledState.args = {
  id: 'first-name',
  label: 'Prénom',
  disabled: true,
};

export const readonlyState = Template.bind({});
readonlyState.args = {
  id: 'first-name',
  label: 'Prénom',
  readonly: true,
};

export const withRequiredLabel = Template.bind({});
withRequiredLabel.args = {
  id: 'first-name',
  label: 'Prénom',
  requiredLabel: 'Champ obligatoire',
};

export const withoutLabel = TemplateWithoutLabel.bind({});
withoutLabel.args = {
  id: 'first-name',
};

export const withIsFullWidth = TemplateWithParent.bind({});
withIsFullWidth.args = {
  id: 'first-name',
  label: 'Prénom',
  isFullWidth: true,
  inlineLabel: false,
  requiredLabel: 'Champ obligatoire',
};
