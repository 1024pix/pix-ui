import { hbs } from 'ember-cli-htmlbars';

export default {
  component: 'PixProgressGauge',
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

export const darkModeProgressGauge = (args) => {
  return {
    template: hbs`<section style='width: 100%; padding: 35px 35px 5px;background-color: #253858'>
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
  color: 'purple',
  themeMode: 'dark',
  subtitle: 'Avancement',
};

export const argTypes = {
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
      "Modifie la couleur du contenu de la barre de progression. Peut prendre les valeurs `blue`, 'green' ou `purple`",
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'blue' } },
    control: { type: 'select' },
    options: ['blue', 'green', 'purple'],
  },
  subtitle: {
    name: 'subtitle',
    description: 'Afficher un sous-titre sous la barre de progression',
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'null' } },
  },
};
