import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Basics/Button' };

const canvasContent = {
  template: hbs`
    <h2> Bouton avec loader blanc et une action qui se résout</h2>
    <PixButton
    @triggerAction={{action onClick}}
    @loading-color='white'
    >
    Cliquez pour valider !
</PixButton>
 <h2> Bouton avec loader gris et une action qui se ne résout pas</h2>
    <PixButton
    @triggerAction={{action onClickFailed}}
    @loading-color='grey'
    >
    Cliquez pour valider !
</PixButton>`,
  context: {
    onClick: async () => {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          console.log('OK !')
          resolve();
        }, 2000);
      });
      return promise
    },
    onClickFailed: async () => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Marche pas :(')
          reject();
        }, 2000);
      });
      return promise
    }

}
}

const markdown = `
# Button
Ce composant est un bouton simple qui empêche les clics multiples.

## Usage

~~~javascript
<PixButton @triggerAction={{action yourAction}} @loading-color='grey' @type='button'>
  Nom du bouton
</PixButton>
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| triggerAction | action | | | Non |
| loading-color | string | white/grey | white | Oui |
| type | string | button/submit | button | Oui |

`
;

export const button = () => {
  return canvasContent
};

button.parameters = { notes: { markdown } };
button.decorators = [centered];
