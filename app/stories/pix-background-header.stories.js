import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Layout/Background Header',
};

export const backgroundHeader = (args) => {
  return {
    template: hbs`<PixBackgroundHeader>

  <PixBlock style='margin: 0 0 32px; padding: 14px 24px;'>Un panel avec du text</PixBlock>

  <PixBlock style='padding: 14px 24px;'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a interdum mauris. Morbi ac diam
    varius, maximus massa id, venenatis lectus. Fusce interdum tincidunt mattis. Nullam porta
    sollicitudin lorem, sodales cursus arcu finibus in. Nam pretium congue diam sollicitudin
    faucibus. Aliquam nec augue massa. Pellentesque eleifend nec arcu eu tincidunt. Pellentesque at
    quam dignissim, lacinia sem et, pharetra magna. Etiam venenatis felis augue, id sollicitudin
    sapien interdum at. Cras bibendum fermentum eros, rutrum varius turpis venenatis vitae.
    Suspendisse aliquet iaculis sem in blandit. Mauris vitae erat lobortis est volutpat bibendum non
    molestie purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Sed consequat porttitor metus a imperdiet. Duis quis enim fermentum, sodales
    massa sit amet, blandit elit. Aliquam felis purus, dictum sed pretium vel, aliquam sit amet
    felis. Nunc convallis pellentesque convallis. Suspendisse potenti. Aenean iaculis, nunc placerat
    aliquam posuere, tellus enim facilisis metus, non egestas sapien arcu et leo.
  </PixBlock>

</PixBackgroundHeader>`,
    context: args,
  };
};
