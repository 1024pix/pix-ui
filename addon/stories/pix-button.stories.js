import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Button' };

const canvasContent = {
  template: hbs`
    <h2> Bouton avec loader blanc et une action qui se résout</h2>
    <PixButton
    style="
      width: 280px;
      padding: 14px 20px;
      font-family: Arial, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.012rem;
      text-align: center;
      border-radius: 5px;
      background-color: #3D68FF;
      color: #FFFFFF;
      cursor: pointer;
      border: none;
      outline: none;
      transition: background-color 0.2s ease;
      position: relative;"
    @action={{action onClick}}
    @loading-color='white'
    >
    Cliquez pour valider !
</PixButton>
 <h2> Bouton avec loader gris et une action qui se ne résout pas</h2>
    <PixButton
    style="
      width: 280px;
      padding: 14px 20px;
      font-family: Arial, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.012rem;
      text-align: center;
      border-radius: 5px;
      background-color: #FFBE00;
      color: #253858;
      cursor: pointer;
      border: none;
      outline: none;
      transition: background-color 0.2s ease;
      position: relative;"
    @action={{action onClickFailed}}
    @loading-color='grey'
    >
    Cliquez pour valider !
</PixButton>`,
  context: {
    onClick: async () => {
      const promise = new Promise((resolve, reject) => {
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
<PixButton @action={{action yourAction}} @loading-color='grey'>
  Nom du bouton
</PixButton>
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| action | action | | | Non |
| loading-color | string | white/grey | white | Oui |

`
;

export const button = () => {
  return canvasContent
};

button.parameters = { notes: { markdown } };
button.decorators = [centered];
