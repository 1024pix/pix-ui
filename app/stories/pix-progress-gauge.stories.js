import { hbs } from 'ember-cli-htmlbars';

export const Default = (args) => {
  return {
    template: hbs`<PixProgressGauge
  @value={{value}}
  @color={{color}}
  @isArrowLeft={{isArrowLeft}}
  @subtitle={{subtitle}}
  @tooltipText={{tooltipText}}
/>`,
    context: args,
  };
};
Default.args = {
  tooltipText: '%',
};

export const whiteProgressGauge = (args) => {
  return {
    template: hbs`<section style='width: 100%; padding: 35px 35px 5px;background-color: lightgray'>
  <PixProgressGauge
    @value={{value}}
    @color={{color}}
    @isArrowLeft={{isArrowLeft}}
    @subtitle={{subtitle}}
    @tooltipText={{tooltipText}}
  />
</section>`,
    context: args,
  };
};
whiteProgressGauge.args = {
  value: '50',
  tooltipText: '50%',
  color: 'white',
  isArrowLeft: true,
  subtitle: 'Avancement',
};

export const argTypes = {
  value: {
    name: 'value',
    description: 'Valeur atteinte sur 100',
    type: { name: 'number', required: false },
    table: { defaultValue: { summary: null } },
  },
  color: {
    name: 'color',
    description:
      'Modifie la couleur de la barre de progression. Peut prendre les valeurs `yellow` ou `white`',
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'yellow' } },
    control: { type: 'select', options: ['yellow', 'white'] },
  },
  isArrowLeft: {
    name: 'isArrowLeft',
    description: "Modifie la position de l'info bulle sur la gauche",
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
  subtitle: {
    name: 'subtitle',
    description: 'Afficher un sous-titre sous la barre de progression',
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'null' } },
  },
  tooltipText: {
    name: 'tooltipText',
    description: "Afficher un label dans l'info bulle au dessus de la barre de progression",
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'null' } },
  },
};
