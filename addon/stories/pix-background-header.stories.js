import { hbs } from 'ember-cli-htmlbars';

export default { title: 'BackgroundHeader' };

const canvasContent = hbs`
<PixBackgroundHeader @background-color='pink'>

  <PixBlock>Un panel avec du text</PixBlock>

  <PixBlock> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a interdum mauris. Morbi ac diam varius, maximus massa id, venenatis lectus. Fusce interdum tincidunt mattis. Nullam porta sollicitudin lorem, sodales cursus arcu finibus in. Nam pretium congue diam sollicitudin faucibus. Aliquam nec augue massa. Pellentesque eleifend nec arcu eu tincidunt. Pellentesque at quam dignissim, lacinia sem et, pharetra magna. Etiam venenatis felis augue, id sollicitudin sapien interdum at. Cras bibendum fermentum eros, rutrum varius turpis venenatis vitae. Suspendisse aliquet iaculis sem in blandit. Mauris vitae erat lobortis est volutpat bibendum non molestie purus.
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed consequat porttitor metus a imperdiet. Duis quis enim fermentum, sodales massa sit amet, blandit elit. Aliquam felis purus, dictum sed pretium vel, aliquam sit amet felis. Nunc convallis pellentesque convallis. Suspendisse potenti. Aenean iaculis, nunc placerat aliquam posuere, tellus enim facilisis metus, non egestas sapien arcu et leo.
  </PixBlock>

</PixBackgroundHeader>
`;

const markdown = `
# BackgroundHeader

Un \`BackgroundHeader\` est une bannière donnant un fond de couleur bleu en haut d'une page.
Les enfants de la bannière se mettrons en colonne.

> Pour le moment ce composant n'est pas paramétrable car nous n'avons pas d'autres types de bannières.

> Le \`BackgroundHeader\` se couple bien avec un ou plusieurs \`PixBlock\`.

## Usage

~~~javascript
<PixBackgroundHeader>
  // ici le contenu que vous souhaitez
</PixBackgroundHeader>
~~~

Souvent utilisé avec la PixBlock :

~~~javascript
<PixBackgroundHeader>
  <PixBlock>
    // ce que je veux dans mon premier panel
  </PixBlock>

  // un deuxième panel ou autre chose...
</PixBackgroundHeader>
~~~

## Props

Aucune props pour le moment.
`
;

export const backgroundHeader = () => {
  return {
    template: canvasContent,
  }
};

backgroundHeader.parameters = { notes: { markdown } };
