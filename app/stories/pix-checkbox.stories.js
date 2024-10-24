import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Inputs/Checkbox',
  argTypes: {
    id: {
      name: 'id',
      description:
        'Identifiant du champ permettant de lui attacher un label. Généré automatiquement si non renseigné.',
      type: { name: 'string' },
    },
    class: {
      name: 'class',
      description: "Permet d'ajouter une classe au parent du composant.",
      type: { name: 'string' },
    },
    isIndeterminate: {
      name: 'isIndeterminate',
      description:
        "Rendre la checkbox indéterminée, état indiquant que la/les case(s) n'est/ne sont ni cochée(s) ni décochée(s) (exemple: une checkbox parente indiquant la sélection partielle de plusieurs checkbox enfants)",
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    checked: {
      name: 'checked',
      description: 'Permet de cocher la checkbox',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isDisabled: {
      name: 'isDisabled',
      description: 'Permet de désactiver la checkbox',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
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
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixCheckbox
  @id={{this.id}}
  @class={{this.class}}
  @isIndeterminate={{this.isIndeterminate}}
  @checked={{this.checked}}
  @isDisabled={{this.isDisabled}}
  disabled={{this.disabled}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @requiredLabel={{this.requiredLabel}}
  @inlineLabel={{this.inlineLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
</PixCheckbox>`,
    context: args,
  };
};

const FullWidthTemplate = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div
  style='border: 1px solid var(--pix-neutral-500); background: var(--pix-neutral-20); padding: var(--pix-spacing-4x); width: 500px'
><PixCheckbox @id={{this.id}} @isIndeterminate={{false}}>
    <:label>{{this.label}}</:label>
  </PixCheckbox></div>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'accept-newsletter',
  label: 'Recevoir la newsletter',
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  id: 'accept-newsletter',
  label: 'Recevoir la newsletter',
  checked: true,
};

export const FullWidth = FullWidthTemplate.bind({});
FullWidth.args = {
  id: 'proposal',
  label: 'Une réponse',
};

export const isIndeterminate = Template.bind({});
isIndeterminate.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  isIndeterminate: true,
  checked: true,
};

export const withSmallLabel = Template.bind({});
withSmallLabel.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  size: 'small',
};

export const withLargeLabel = Template.bind({});
withLargeLabel.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  size: 'large',
};

export const isDisabled = Template.bind({});
isDisabled.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  isDisabled: true,
};

export const checkedIsDisabled = Template.bind({});
checkedIsDisabled.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  isDisabled: true,
  checked: true,
};

export const isIndeterminateIsDisabled = Template.bind({});
isIndeterminateIsDisabled.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  isDisabled: true,
  checked: true,
  isIndeterminate: true,
};

const MultipleTemplate = (args) => {
  return {
    template: hbs`<PixCheckbox
  @id='one'
  @class={{this.class}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @isIndeterminate={{this.isIndeterminate}}
  @size={{this.size}}
  @checked={{this.checked}}
  disabled={{this.disabled}}
  @isDisabled={{this.isDisabled}}
>
  <:label>{{this.label}}</:label>
</PixCheckbox>
<PixCheckbox
  @id='two'
  @class={{this.class}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @isIndeterminate={{this.isIndeterminate}}
  @size={{this.size}}
  @checked={{this.checked}}
  disabled={{this.disabled}}
  @isDisabled={{this.isDisabled}}
>
  <:label>{{this.label}}</:label>
</PixCheckbox>`,
    context: args,
  };
};

export const multiple = MultipleTemplate.bind({});
multiple.args = {
  label: 'Recevoir la newsletter',
};
