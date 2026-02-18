import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Progress Bar',
  argTypes: {
    value: {
      name: 'value',
      description: 'Valeur atteinte sur 100',
      type: { name: 'number', required: true },
      table: { defaultValue: { summary: null } },
    },
    label: {
      name: 'label',
      description:
        "Afficher un label caché permettant d'expliciter le contexte de la jauge de progression",
      type: { name: 'string', required: true },
      table: { defaultValue: { summary: 'null' } },
    },
    locale: {
      name: 'locale',
      description:
        "Permet de traduire le pourcentage dans la langue de l'application utilisant le composant",
      type: { name: 'string', required: true },
      table: { defaultValue: { summary: 'null' } },
    },
    themeMode: {
      name: 'themeMode',
      description:
        "Permet d'indiquer si le thème de la barre de progression est en dark mode ou light mode. Modifie la couleur de fond de la barre de progression. Peut prendre les valeurs `light` ou `dark`",
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'light' } },
      control: { type: 'select' },
      options: ['dark', 'light'],
    },
    color: {
      name: 'color',
      description:
        'Modifie la couleur du contenu de la barre de progression. Peut prendre les valeurs `primary`, `green` ou `blue`',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'primary' } },
      control: { type: 'select' },
      options: ['primary', 'success', 'tertiary'],
    },
    subtitle: {
      name: 'subtitle',
      description: 'Afficher un sous-titre sous la barre de progression',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'null' } },
    },
    hidePercentage: {
      name: 'hidePercentage',
      description: 'Cacher le pourcentage affiché à gauche de la barre de progression',
      type: { name: 'boolean', required: false },
      table: { defaultValue: { summary: 'false' } },
    },
    isDecorative: {
      name: 'isDecorative',
      description:
        'Indiquer que la barre de progression est utilisée pour de la présentation et doit être ignorée par les lecteurs d’écran',
      type: { name: 'boolean', required: false },
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export const Default = (args) => {
  return {
    template: hbs`<PixProgressBar
  @value={{this.value}}
  @color={{this.color}}
  @locale={{this.locale}}
  @themeMode={{this.themeMode}}
  @subtitle={{this.subtitle}}
  @label={{this.label}}
/>`,
    context: args,
  };
};
Default.args = {
  value: 0.5,
  locale: 'fr',
};

export const Success = (args) => {
  return {
    template: hbs`<PixProgressBar
  @value={{this.value}}
  @color={{this.color}}
  @themeMode={{this.themeMode}}
  @subtitle={{this.subtitle}}
  @locale={{this.locale}}
  @label={{this.label}}
/>`,
    context: args,
  };
};
Success.args = {
  value: 0.5,
  color: 'success',
  locale: 'fr',
};

export const Tertiary = (args) => {
  return {
    template: hbs`<PixProgressBar
  @value={{this.value}}
  @color={{this.color}}
  @locale={{this.locale}}
  @themeMode={{this.themeMode}}
  @subtitle={{this.subtitle}}
  @label={{this.label}}
/>`,
    context: args,
  };
};
Tertiary.args = {
  value: 0.5,
  color: 'tertiary',
  locale: 'en',
};

export const darkModeProgressBar = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<section style='width: 100%; padding: 35px 35px 5px;background-color: #253858'>
  <PixProgressBar
    @value={{this.value}}
    @color={{this.color}}
    @label={{this.label}}
    @locale={{this.locale}}
    @themeMode={{this.themeMode}}
    @subtitle={{this.subtitle}}
  />
</section>`,
    context: args,
  };
};
darkModeProgressBar.args = {
  value: 0.5,
  label: 'Chargement',
  locale: 'es',
  color: 'primary',
  themeMode: 'dark',
  subtitle: 'Avancement',
};

export const WithoutPercentage = (args) => {
  return {
    template: hbs`<PixProgressBar
  @value={{this.value}}
  @color={{this.color}}
  @themeMode={{this.themeMode}}
  @locale={{this.locale}}
  @subtitle={{this.subtitle}}
  @label={{this.label}}
  @hidePercentage={{this.hidePercentage}}
/>`,
    context: args,
  };
};
WithoutPercentage.args = {
  value: 0.5,
  color: 'primary',
  locale: 'fr',
  hidePercentage: true,
};
