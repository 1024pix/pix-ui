import { hbs } from 'ember-cli-htmlbars';

export const tooltip = (args) => {
  return {
    template: hbs`
      <PixTooltip
        @text={{text}}
        @position={{position}}
        @light={{light}}
        @inline={{inline}}
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
    defaultValue: null,
  },
  position: {
    name: 'position',
    description: 'Position de la tooltip',
    type: { name: 'string', required: false },
    defaultValue: 'top',
    control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
  },
  light: {
    name: 'light',
    description: 'Affichage en mode clair',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
  inline: {
    name: 'inline',
    description: 'Texte à afficher',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
};
