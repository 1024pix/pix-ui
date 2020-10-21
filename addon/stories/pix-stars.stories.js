import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Stars' };

const canvasContent = hbs`
  <h2>Differentes couleurs</h2>
  <PixStars 
    @count={{2}}
    @total={{5}}
    @alt="message alt"
  />

  <PixStars 
    @count={{2}}
    @total={{5}}
    @alt="message alt"
    @color="blue"
  />

  <PixStars 
    @count={{2}}
    @total={{5}}
    @alt="message alt"
    @color="grey"
  />

  <h2>Ne pas afficher les étoiles vides</h2>
  <p>Pour ne pas afficher les étoiles vides, il suffit de ne pas donner le total d'étoiles.</p>
  <PixStars 
    @count={{3}}
    @alt="message alt"
  />
`;

const markdown = `
# Stars

Affiche une série d'étoiles en fonction des paramètres donnés.
Un texte alternatif peut être renseigné et différents styles sont pré-définis.

## Usage

~~~javascript
<PixStars 
  @count={{2}}
  @total={{5}}
  @alt="message alternatif"
  @color="blue"
/>
~~~

## Props

| Nom            |  Type   | Valeurs possibles | Par défaut | Optionnel |
| -------------- | :-----: | :---------------: | :--------: | --------: |
| count          | number  |         -         |     0      |       oui |
| total          | number  |         -         |     0      |       oui |
| alt            | string  |         -         |     -      |       non |
| color          | string  |  yellow/blue/grey |  yellow    |       oui |

`
;

export const stars = () => {
  return {
    template: canvasContent,
  }
};

stars.parameters = { notes: { markdown } };
stars.decorators = [centered];
