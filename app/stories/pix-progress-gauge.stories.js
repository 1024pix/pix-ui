import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Others/Progress Gauge',
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
  },
};

export const Default = (args) => {
  return {
    template: hbs`<PixProgressGauge
  @value={{this.value}}
  @color={{this.color}}
  @themeMode={{this.themeMode}}
  @subtitle={{this.subtitle}}
  @label={{this.label}}
/>`,
    context: args,
  };
};
Default.args = {
  value: '50',
};

export const Success = (args) => {
  return {
    template: hbs`<PixProgressGauge
  @value={{this.value}}
  @color={{this.color}}
  @themeMode={{this.themeMode}}
  @subtitle={{this.subtitle}}
  @label={{this.label}}
/>`,
    context: args,
  };
};
Success.args = {
  value: '50',
  color: 'success',
};

export const Tertiary = (args) => {
  return {
    template: hbs`<PixProgressGauge
  @value={{this.value}}
  @color={{this.color}}
  @themeMode={{this.themeMode}}
  @subtitle={{this.subtitle}}
  @label={{this.label}}
/>`,
    context: args,
  };
};
Tertiary.args = {
  value: '50',
  color: 'tertiary',
};

export const darkModeProgressGauge = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<section style='width: 100%; padding: 35px 35px 5px;background-color: #253858'>
  <PixProgressGauge
    @value={{this.value}}
    @color={{this.color}}
    @label={{this.label}}
    @themeMode={{this.themeMode}}
    @subtitle={{this.subtitle}}
  />
</section>`,
    context: args,
  };
};
darkModeProgressGauge.args = {
  value: '50',
  label: 'Chargement',
  color: 'primary',
  themeMode: 'dark',
  subtitle: 'Avancement',
};
