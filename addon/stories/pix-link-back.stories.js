import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'ReturnTo' };

const canvasContent = hbs`
  <h2>Liens avec texte</h2>
  <PixReturnTo @route='profile' @text='Un lien de retour' />
  <br><br>
  <PixReturnTo @route='profile' @text='Un lien de retour bleu' @shade='blue' />
  <br>
  <div style="background-color: #1A38A0; padding: 2px 5px; margin-top: 20px;">
    <PixReturnTo @route='profile' @text='Un lien clair sur fond de couleur' @shade='white' />
  </div>
  <br>
  <h2>Liens sans texte</h2>
  <PixReturnTo @route='profile' />
  <br><br>
  <PixReturnTo @route='profile' @shade='blue' />
  <br>
  <div style="background-color: #1A38A0; padding: 2px 5px; margin-top: 20px;">
    <PixReturnTo @route='profile' @shade='white' />
  </div>
`;

const markdown = `
# ReturnTo
La \`ReturnTo\` est un lien de retour vers une page précédente.
> Il est nécessaire de passer une @route au composant.
> Il est possible d'afficher uniquement l'icone flèche en omettant de passer le paramètre @text.
## Usage
~~~javascript
<PixReturnTo @text='Retour vers mon profil' @route='profile' @shade='blue' />
~~~
## Props
| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| route | string | - | - | non |
| text | string | - | - | oui |
| shade | string | ["white", "black", "blue"] | "black" | oui |
`
;

export const returnTo = () => {
  return {
    template: canvasContent,
  }
};

returnTo.story = {
  parameters: {
    notes: {
      markdown,
    },
  },
  decorators: [centered],
};
