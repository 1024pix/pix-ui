import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Basics/Toggle',
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
    useIcons: {
      name: 'useIcons',
      description: "Définit si l'on utilise des icons dans le PixToggle",
      type: { name: 'boolean', required: true },
    },
    onLabel: {
      name: 'onLabel',
      description: "Le label de l'état actif du PixToggle à placer dans les yield <:on>",
      type: { name: 'string', required: false },
    },
    offLabel: {
      name: 'offLabel',
      description: "Le label de l'état non actif du PixToggle à placer dans les yield <:off>",
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

const Template = (args) => {
  return {
    template: hbs`<PixToggle
  @toggled={{this.toggled}}
  @onChange={{this.onChange}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @useIcons={{this.useIcons}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
  <:on>{{this.onLabel}}</:on>
  <:off>{{this.offLabel}}</:off>

</PixToggle>`,
    context: args,
  };
};

const TemplateWithYields = (args) => {
  return {
    template: hbs`<PixToggle @toggled={{this.toggled}} @onChange={{this.onChange}} @useIcons={{this.useIcons}}>
  <:label>{{this.label}}</:label>
  {{! template-lint-disable no-inline-styles }}
  <:on><PixIcon @name='eye' /></:on>
  {{! template-lint-disable no-inline-styles }}
  <:off><PixIcon @name='eyeOff' /></:off>
</PixToggle>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Mon toggle',
  onLabel: 'Option A',
  offLabel: 'Option B',
  toggled: false,
  onChange: action('onChange'),
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  label: 'Mon toggle',
  onLabel: 'Option A',
  offLabel: 'Option B',
  toggled: false,
  onChange: action('onChange'),
};

export const ScreenReaderOnly = Template.bind({});
ScreenReaderOnly.args = {
  screenReaderOnly: true,
  label: 'Mon toggle',
  onLabel: 'Option A',
  offLabel: 'Option B',
  toggled: false,
  onChange: action('onChange'),
};

export const WithYields = TemplateWithYields.bind({});
WithYields.args = {
  label: 'Mon toggle',
  toggled: false,
  useIcons: true,
  onChange: action('onChange'),
};
