import { hbs } from 'ember-cli-htmlbars';

export default { title: 'Block' };

const canvasContent = hbs`
<div style='background-color: #F4F5F7; padding: 30px;'>

  <PixBlock @shadow='heavy'>
    <div> Un bloc avec une ombre forte </div>
  </PixBlock>

  <PixBlock @shadow='light'> 
    <div> Un bloc avec une ombre faible </div>
  </PixBlock>

</div>
`;

const markdown = `
# Block

Un \`Block\` est un bloc de fond blanc dont les bords sont arrondis et ayant une ombre projetée.

> Les marges intérieures du bloc sont de 14px (haut et bas) et 24px (droite et gauche), sauf pour la version mobile où c'est 16px (partout).

> Un \`Block\` prendra toute la largeur de son parent, dans la limite maximale de 980px.

> Donnez donc un parent de la taille que vous souhaitez, votre bloc prendra la même taille.

## Usage

~~~javascript
<PixBlock @shadow='heavy'>
  // ici le contenu que vous souhaitez
</PixBlock>
~~~

Il est souvent utilisé dans le PixBackgroundHeader.

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| shadow        | string        | ["light", "heavy"]  |  "light"   | oui       |

`
;

export const block = () => {
  return {
    template: canvasContent,
  }
};

block.parameters = { notes: { markdown } };
