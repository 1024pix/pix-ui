import { hbs } from 'ember-cli-htmlbars';

export const tooltip = (args) => {
  return {
    template: hbs`
      <PixTooltip
        @text={{this.text}}
        @position={{this.position}}
        @isLight={{this.isLight}}
        @isInline={{this.isInline}}
        @isWide={{this.isWide}}
        >
          <div>Elément à survoler pour voir la tooltip</div>
      </PixTooltip>
    `,
    context: args,
  };
};

export const argTypes = {
  text: {
    name: 'text',
    description: 'Texte à afficher',
    type: { name: 'string', required: false },
  },
  position: {
    name: 'position',
    description: 'Position de la tooltip',
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'top' } },
    control: { type: 'select', options: ['top', 'top-left', 'top-right', 'right', 'bottom', 'bottom-left', 'bottom-right', 'left'] },
  },
  isLight: {
    name: 'isLight',
    description: 'Affichage en mode clair',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
  isInline: {
    name: 'isInline',
    description: 'Affichage en une seule ligne',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
  isWide: {
    name: 'isWide',
    description: 'Affichage large',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
};
