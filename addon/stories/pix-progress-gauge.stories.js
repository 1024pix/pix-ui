import { hbs } from 'ember-cli-htmlbars';

export const customProgressGauge = (args) => {
  return {
    template: hbs`
      <PixProgressGauge
        @value={{value}}
        @color={{color}}
        @isArrowLeft={{isArrowLeft}}
        @subtitle={{subtitle}}
        @tooltipText={{tooltipText}} />
    `,
    context: args,
  };
};

export const whiteProgressGauge = () => {
  return {
    template: hbs`
    <section style="width: 100%; padding: 35px 35px 5px;background-color: lightgray">
      <PixProgressGauge
        @value="50"
        @tooltipText="50%"
        @color="white"
        @isArrowLeft=true
        @subtitle="Avancement" />
    </section>
    `
  };
}

export const yellowProgressGauge = () => {
  return {
    template: hbs`
    <section>
      <PixProgressGauge
        @value="50"
        @tooltipText="50%"
        @color="yellow" />
    </section>
    `
  };
}

export const argTypes = {
  value: {
    name: 'value',
    description: 'Valeur atteinte sur 100',
    type: { name: 'number', required: false },
    table: { defaultValue: { summary: null } },
  },
  color: {
    name: 'color',
    description: 'Modifie la couleur de la barre de progression. Peut prendre les valeurs `yellow` ou `white`',
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'yellow' } },
    control: { type: 'select', options: ['yellow', 'white'] },
  },
  isArrowLeft: {
    name: 'isArrowLeft',
    description: 'Modifie la position de l\'info bulle sur la gauche',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
  subtitle:  {
    name: 'subtitle',
    description: 'Afficher un sous-titre sous la barre de progression',
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'null' } },
  },
  tooltipText:  {
    name: 'tooltipText',
    description: 'Afficher un label dans l\'info bulle au dessus de la barre de progression',
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'null' } },
    defaultValue: 'Tooltip',
  },
};
