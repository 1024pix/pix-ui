import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'ActionButton' };

const canvasContent = hbs`
  <PixActionButton/>

  <PixActionButton @icon='times'/>
`;

const markdown = `
# ActionButton
L'action button permet de créer un bouton contenant une icone

## Usage
Par défaut

~~~javascript
<PixActionButton/>
~~~

Avec parametre

~~~javascript
<PixActionButton @icon='times' />
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| icon          | string        | font awesome icons  | plus       |oui        |

`
;

export const actionButton = () => {
  return {
    template: canvasContent,
  }
};

actionButton.parameters = { notes: { markdown } };
actionButton.decorators = [centered];
