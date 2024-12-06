import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Navigation/Toggle Button',
  argTypes: {
    label: {
      name: 'label',
      description: 'Le label du PixToggleButton',
      type: { name: 'string', required: true },
    },
    subLabel: {
      name: 'subLabel',
      description: 'Le sous label du PixToggleButton',
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
      description: "Définit si l'on utilise des icons dans le PixToggleButton",
      type: { name: 'boolean', required: true },
    },
    viewALabel: {
      name: '<:viewA>',
      description: "Yield où l'on place le label ou l'icône de l'état actif du PixToggleButton",
    },
    viewBLabel: {
      name: '<:viewB>',
      description: "Yield où l'on place le label ou l'icône de l'état non actif du PixToggleButton",
    },
    toggled: {
      name: 'toggled',
      description: 'Détermine si le PixToggleButton est activé',
      type: { name: 'boolean', required: true },
    },
    onChange: {
      name: 'onChange',
      description: "Fonction à appeler quand le PixToggleButton change d'état.",
      type: { required: true },
      control: { disable: true },
    },
    inlineLabel: {
      name: 'inlineLabel',
      description: "Permet d'afficher le PixToggleButton sur une seule ligne",
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
    template: hbs`<PixToggleButton
  @toggled={{this.toggled}}
  @onChange={{this.onChange}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @useIcons={{this.useIcons}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>

</PixToggleButton>`,
    context: args,
  };
};

const TemplateWithIcons = (args) => {
  return {
    template: hbs`<PixToggleButton @toggled={{this.toggled}} @onChange={{this.onChange}} @useIcons={{this.useIcons}}>
  <:label>{{this.label}}</:label>
  {{! template-lint-disable no-inline-styles }}
  <:viewA><PixIcon @name='eye' /></:viewA>
  {{! template-lint-disable no-inline-styles }}
  <:viewB><PixIcon @name='eyeOff' /></:viewB>
</PixToggleButton>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Mon toggle',
  viewALabel: 'Option A',
  viewBLabel: 'Option B',
  toggled: false,
  onChange: action('onChange'),
};

export const Inline = Template.bind({});
Inline.args = {
  inlineLabel: true,
  label: 'Mon toggle',
  viewALabel: 'Option A',
  viewBLabel: 'Option B',
  toggled: false,
  onChange: action('onChange'),
};

export const ScreenReaderOnly = Template.bind({});
ScreenReaderOnly.args = {
  screenReaderOnly: true,
  label: 'Mon toggle',
  viewALabel: 'Option A',
  viewBLabel: 'Option B',
  toggled: false,
  onChange: action('onChange'),
};

export const WithIcons = TemplateWithIcons.bind({});
WithIcons.args = {
  label: 'Mon toggle',
  toggled: false,
  useIcons: true,
  onChange: action('onChange'),
};
