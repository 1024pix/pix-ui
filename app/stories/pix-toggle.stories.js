import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Forms/Toggle',
  tags: ['new'],
  argTypes: {
    label: {
      name: 'label',
      description:
        'Le label du composant, passé en bloc. Si aucun label visible n’est passé, un `aria-label` doit être fourni au composant.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      name: 'checked',
      description: 'Permet d’activer le toggle',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isDisabled: {
      name: 'isDisabled',
      description:
        'Permet de désactiver le toggle tout en le laissant accessible au clavier et aux lecteurs d’écran',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      name: 'size',
      description: 'Correspond à la taille du toggle et de la police de son label.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    id: {
      name: 'id',
      description:
        'Identifiant du champ permettant de lui attacher son label. Généré automatiquement si non renseigné.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    class: {
      name: 'class',
      description: 'Permet d’ajouter une classe au parent du composant.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixToggle
  @id={{this.id}}
  @class={{this.class}}
  @checked={{this.checked}}
  @isDisabled={{this.isDisabled}}
  @size={{this.size}}
>{{this.label}}</PixToggle>`,
    context: args,
  };
};

const SizesTemplate = (args) => {
  return {
    template: hbs`<PixToggle @id='toggle-small' @checked={{true}}>Taille par défaut</PixToggle>
<br />
<br />
<PixToggle @id='toggle-large' @size='large' @checked={{true}}>@size="large"</PixToggle>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Recevoir la newsletter',
};

export const sizes = SizesTemplate.bind({});
