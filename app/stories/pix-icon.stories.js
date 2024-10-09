import { hbs } from 'ember-cli-htmlbars';
import { ICONS } from '../../addon/helpers/icons.js';

export default {
  title: 'Others/Icon',
  argTypes: {
    name: {
      name: 'name',
      description: "Nom de l'icône à utiliser",
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(ICONS),
    },
    plainIcon: {
      name: 'plainIcon',
      description: "Permet d'utiliser la version pleine de l'icône",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    alternativeText: {
      name: 'alternativeText',
      description: "Permet d'ajouter un texte alternatif pour illustrer l'icône si besoin",
      type: { name: 'string', required: false },
    },
    ariaHidden: {
      name: 'ariaHidden',
      description:
        "Permet de ne pas vocaliser l'icône au lecteur d'écran dans le cas d'une icône purement décorative.",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export const icon = (args) => ({
  template: hbs`<PixIcon
  @name={{this.name}}
  @plainIcon={{this.plainIcon}}
  @alternativeText={{this.alternativeText}}
  @ariaHidden={{this.ariaHidden}}
/>`,
  context: args,
});

const icons = Object.entries(ICONS).flatMap(([name, icon]) =>
  icon.plainIcon
    ? [
        { iconName: name, variant: false },
        { iconName: name, variant: true },
      ]
    : { iconName: name, variant: false },
);

export const allIcons = (args) => {
  return {
    template: hbs`<ul class='icon-list'>
  {{#each this.icons as |icon|}}
    <li class='icon-list__cell'>
      <PixIcon
        @name={{icon.iconName}}
        @plainIcon={{icon.variant}}
        @alternativeText={{icon.iconName}}
        @ariaHidden={{true}}
      />
      <p class='icon-name'>{{icon.iconName}}&nbsp;{{if icon.variant '(plain)'}}</p>
    </li>
  {{/each}}
</ul>`,
    context: args,
  };
};

allIcons.bind({});
allIcons.args = { icons };
