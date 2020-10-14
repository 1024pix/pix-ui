import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Button' };

const canvasContent = {
  template: hbs`<PixButton @action={{action onClick}}>Exemple de bouton</PixButton>`,
  context: {
    onClick: async () => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Bien pris !')
          resolve();
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
<PixButton>
  // TODO
</PixButton>
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| | | | | |

`
;

export const button = () => {
  return canvasContent
};

button.parameters = { notes: { markdown } };
button.decorators = [centered];
