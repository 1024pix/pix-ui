import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/Toggle',
  argTypes: {
    label: {
      name: 'label',
      description: 'Le label du PixToggle',
      type: { name: 'string', required: true },
    },
    subLabel: {
      name: 'subLabel',
      description: 'Le sous label du PixToggle',
      type: { name: 'string', required: true },
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
    onLabel: {
      name: 'onLabel',
      description: "Le label de l'état actif du PixToggle",
      type: { name: 'string', required: false },
    },
    offLabel: {
      name: 'offLabel',
      description: "Le label de l'état non actif du PixToggle",
      type: { name: 'string', required: false },
    },
    toggled: {
      name: 'toggled',
      description: 'Détermine si le PixToggle est activé',
      type: { name: 'boolean', required: true },
    },
    onChange: {
      name: 'onChange',
      description: "Fonction à appeler quand le PixToggle change d'état.",
      type: { required: true },
      control: { disable: true },
    },
    inlineLabel: {
      name: 'inlineLabel',
      description: "Permet d'afficher le PixToggle sur une seule ligne",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
  },
};

export const Template = (args) => {
  return {
    template: hbs`<PixToggle
  @onLabel={{this.onLabel}}
  @offLabel={{this.offLabel}}
  @toggled={{this.toggled}}
  @onChange={{this.onChange}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
</PixToggle>`,
    context: args,
  };
};

export const TemplateWithYields = (args) => {
  return {
    template: hbs`<PixToggle @toggled={{this.toggled}} @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:on><FaIcon @icon='sun' /></:on>
  <:off><FaIcon @icon='moon' /></:off>
</PixToggle>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Mon toggle',
  onLabel: 'Oui',
  offLabel: 'Non',
  toggled: false,
  onChange: action('onChange'),
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  label: 'Mon toggle',
  onLabel: 'Oui',
  offLabel: 'Non',
  toggled: false,
  onChange: action('onChange'),
};

export const ScreenReaderOnly = Template.bind({});
ScreenReaderOnly.args = {
  screenReaderOnly: true,
  label: 'Mon toggle',
  onLabel: 'Oui',
  offLabel: 'Non',
  toggled: false,
  onChange: action('onChange'),
};

export const WithYields = TemplateWithYields.bind({});
WithYields.args = {
  label: 'Mon toggle',
  toggled: false,
  onChange: action('onChange'),
};
