import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`<PixCheckbox
  @id={{this.id}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @isIndeterminate={{this.isIndeterminate}}
  @labelSize={{this.labelSize}}
  @checked={{this.checked}}
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

export const argTypes = {
  id: {
    name: 'id',
    description: 'Identifiant du champ permettant de lui attacher un label',
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  label: {
    name: 'label',
    description: "Le label de l'input",
    defaultValue: null,
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
  labelSize: {
    name: 'labelSize',
    description: 'Correspond à la taille de la police du label.',
    type: { name: 'string', required: false },
    defaultValue: { summary: 'default' },
    control: {
      type: 'select',
      options: ['small', 'default', 'large'],
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
};
