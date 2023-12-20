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
    label: {
      name: 'label',
      description: "Le label de l'input",
    },
    class: {
      name: 'class',
      description: "Permet d'ajouter une classe au parent du composant.",
      type: { name: 'string' },
    },
    screenReaderOnly: {
      name: 'screenReaderOnly',
      description:
        "Permet de ne pas afficher le label à l'écran. Sert à garder un label qui sera lisible par les lecteurs d'écran.",
      type: { name: 'boolean', required: true },
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
      options: ['small', 'default'],
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
  },
};

export const Template = (args) => {
  return {
    template: hbs`<PixCheckbox
  @id={{this.id}}
  @class={{this.class}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @isIndeterminate={{this.isIndeterminate}}
  @labelSize={{this.labelSize}}
  @checked={{this.checked}}
  @isDisabled={{this.isDisabled}}
  disabled={{this.isDisabled}}
>
  {{this.label}}
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
  {{this.label}}
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
  {{this.label}}
</PixCheckbox>`,
    context: args,
  };
};

export const multiple = MultipleTemplate.bind({});
multiple.args = {
  label: 'Recevoir la newsletter',
};
