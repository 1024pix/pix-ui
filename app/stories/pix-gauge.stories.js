import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Gauge',
  argTypes: {
    label: {
      description: "Titre à renseigner pour les lecteurs d'écran",
      type: { name: 'string', required: true },
    },
    stepLabels: {
      description:
        'Labels pour les différents niveaux (ex: Novice / Intermédiaire / Avancé / Expert)',
      type: { name: 'array', required: false },
    },
    isSmall: {
      description:
        'A passer à true pour passer la jauge en taille "mini" + pour cacher les labels de niveaux et les séparateurs',
      type: { name: 'boolean', required: false },
    },
    hiveValues: {
      description: 'A passer à true pour cacher les valeurs numériques',
      type: { name: 'boolean', required: false },
    },
    maxLevel: {
      description: 'Niveau maximum atteignable',
      type: { name: 'number', required: true },
    },
    reachedLevel: {
      description: 'Niveau atteint',
      type: { name: 'number', required: false },
    },
    locale: {
      name: 'locale',
      description: "Permet de formater les niveaux selon la locale de l'utilisateur",
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['fr', 'en', 'es'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fr' },
      },
    },
  },
  args: {
    stepLabels: ['Novice', 'Intermédiaire', 'Avancé', 'Expert'],
    isSmall: false,
    hideValues: false,
    maxLevel: 4,
    reachedLevel: 1,
  },
};

export const PixGauge = (args) => {
  return {
    template: hbs`<PixGauge
  @stepLabels={{this.stepLabels}}
  @isSmall={{this.isSmall}}
  @hideValues={{this.hideValues}}
  @maxLevel={{this.maxLevel}}
  @reachedLevel={{this.reachedLevel}}
  @locale={{this.locale}}
/>`,
    context: args,
  };
};
