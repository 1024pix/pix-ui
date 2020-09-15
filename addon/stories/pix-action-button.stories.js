import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'ActionButton' };

const canvasContent = hbs`
  <PixActionButton>
  </PixActionButton>
`;

const markdown = `
# ActionButton
TODO

## Usage

~~~javascript
<PixActionButton>
  // TODO
</PixActionButton>
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| | | | | |

`
;

export const actionButton = () => {
  return {
    template: canvasContent,
  }
};

actionButton.parameters = { notes: { markdown } };
actionButton.decorators = [centered];
