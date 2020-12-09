import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Basics/Tag' };

const canvasContent = hbs`
<h3>Classic colors</h3>

<PixTag>
  This is a blue tag
</PixTag>

<PixTag @color='purple'>
  This is a purple tag
</PixTag>

<PixTag @color='green'>
  This is a green tag
</PixTag>

<br><br>
<h3>Light colors</h3>

<PixTag @color='blue-light'>
  This is a blue tag
</PixTag>

<PixTag @color='purple-light'>
  This is a purple tag
</PixTag>

<PixTag @color='green-light'>
  This is a green tag
</PixTag>
`;

const markdown = `
# Tag

Un \`Tag\` est un type de \`Chips\` qui permet de mettre en avant une information ou bien de la catégoriser.

> Il est possible de surcharger le style d'un \`<PixTag>\` via l'attribut \`class\` ainsi que de passer n'importe quel attribut sur sa \`div\` wrapper (par exemple, un \`aria-label\`)

## Usage

~~~javascript
<PixTag @color='Couleur du tag' aria-label="mon tag">
  // ici ajouter le contenu du tag
</PixTag>
~~~

## Props

| Nom           | Type          | Valeurs possibles     | Par défaut | Optionnel |
| ------------- |:-------------:|:---------------------:|:----------:|----------:|
| color         | string        | blue, blue-light, purple, purple-light, green, green-light   | blue       | oui       |
`
;

export const tag = () => {
  return {
    template: canvasContent,
  }
};

tag.parameters = { notes: { markdown } };
tag.decorators = [centered];
