import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Basics/Return To' };

const canvasContent = hbs`
  <h2>Liens avec texte</h2>
  <PixReturnTo @route='profile'>
    Un lien de retour
  </PixReturnTo>
  <br><br>

  <PixReturnTo @route='profile' @shade='blue'>
    Un lien de retour bleu
  </PixReturnTo>
  <br>

  <div style="background-color: #1A38A0; padding: 2px 5px; margin-top: 20px;">
    <PixReturnTo @route='profile' @shade='white'>
      Un lien clair sur fond de couleur
    </PixReturnTo>
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

Le \`ReturnTo\` est un lien de retour vers une page précédente.

> Il est nécessaire de passer une @route au composant.

> Il est possible d'afficher uniquement l'icone flèche en omettant de mettre du contenu enfant dans la balise.


## Usage

Avec texte :

~~~javascript
<PixReturnTo @route='profile' @shade='blue'>
  Retour vers mon profil
</PixReturnTo>
~~~

Sans texte :

~~~javascript
<PixReturnTo @route='profile' @shade='white' />
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| route | string | - | - | non |
| model | ember model | - | - | oui |
| shade | string | ["white", "black", "blue"] | "black" | oui |

`
;

export const returnTo = () => {
  return {
    template: canvasContent,
  }
};

returnTo.parameters = { notes: { markdown } };
returnTo.decorators = [centered];
