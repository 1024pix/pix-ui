import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Checkbox',
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
    labelSize: {
      name: 'labelSize',
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

export const Template = (args) => {
  return {
    template: hbs`<PixCheckbox
  @id={{this.id}}
  @class={{this.class}}
  @isIndeterminate={{this.isIndeterminate}}
  @checked={{this.checked}}
  @isDisabled={{this.isDisabled}}
  disabled={{this.isDisabled}}
  @labelSize={{this.labelSize}}
  @inlineLabel={{this.inlineLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
</PixCheckbox>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'accept-newsletter',
  label: 'Recevoir la newsletter',
};

export const indeterminateCheckbox = Template.bind({});
indeterminateCheckbox.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  isIndeterminate: true,
  checked: true,
};

export const checkboxWithSmallLabel = Template.bind({});
checkboxWithSmallLabel.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  labelSize: 'small',
};

export const checkboxWithLargeLabel = Template.bind({});
checkboxWithLargeLabel.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  labelSize: 'large',
};

export const checkboxDisabled = Template.bind({});
checkboxDisabled.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  disabled: true,
};

export const checkboxCheckedDisabled = Template.bind({});
checkboxCheckedDisabled.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  disabled: true,
  checked: true,
};

export const checkboxInterminateDisabled = Template.bind({});
checkboxInterminateDisabled.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  disabled: true,
  checked: true,
  isIndeterminate: true,
};

export const MultipleTemplate = (args) => {
  return {
    template: hbs`<PixCheckbox
  @id='one'
  @class={{this.class}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @isIndeterminate={{this.isIndeterminate}}
  @labelSize={{this.labelSize}}
  @checked={{this.checked}}
  disabled={{this.isDisabled}}
  @isDisabled={{this.isDisabled}}
>
  <:label>{{this.label}}</:label>
</PixCheckbox>
<PixCheckbox
  @id='two'
  @class={{this.class}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @isIndeterminate={{this.isIndeterminate}}
  @labelSize={{this.labelSize}}
  @checked={{this.checked}}
  disabled={{this.isDisabled}}
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
