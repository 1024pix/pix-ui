import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Tooltip' };

const canvasContent = hbs`
<PixTooltip
  @text='Hey'
  @position='top'
  >
  <button>Tooltip top</button>
</PixTooltip>

<br><br>

<PixTooltip
  @text='Hello'
  @position='right'
  >
  <button>Tooltip right</button>
</PixTooltip>

<br><br>

<PixTooltip
  @text='A looooooong looooooong text but in a single line'
  @position='bottom'
  @inline=true
  >
  <button>Tooltip bottom</button>
</PixTooltip>

<br><br>

<PixTooltip
  @text='In accumsan scelerisque sapien, et lacinia nisi efficitur a.'
  @position='left'
  >
  <button>Tooltip left</button>
</PixTooltip>
`;

const markdown = `
# Tooltip
Une infobulle qui s'affiche au survol d'un élément.

Ce composant est utilisé comme wrapper, c'est à dire qu'il encadre l'élément sur lequel on souhaite ajouter une infobulle.
      
| | |
|-|-|
|\`INFO\` | A noter que le wraper PixTooltip est en \`display: flex;\`, il s'adaptera donc à la taille de ses enfants. Ainsi si votre élément ne s'affiche plus comme avant après l'ajout de la PixTooltip, veillez à rajouter les dimensions voulues à l'enfant.


## Usage

~~~javascript
<PixTooltip
  @text='Texte à afficher'
  @position='bottom'
  @inline={{true}}
  >
    // ici l'élément que je souhaite survoler pour voir la tooltip
</PixTooltip>
~~~

## Props

| Nom           | Type          | Valeurs possibles | Par défaut | Optionnel |
| ------------- |:-------------:|:-----------------:|:----------:|----------:|
| text          | string        |         -         |     -      | oui |
| position      | string        | ["top", "right", "bottom", "left"] | "top" | oui |
| inline        | boolean       |    true, false    |    false   | oui |
`;

export const tooltip = () => {
  return {
    template: canvasContent,
  }
};

tooltip.parameters = { notes: { markdown } };
tooltip.decorators = [centered];
