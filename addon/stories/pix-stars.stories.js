import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';
import { withKnobs, number, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Others/Stars',
  decorators: [withKnobs],
};

const canvasContent = hbs`
  <h2>PixStars</h2>
  <p>Vous pouvez intéragir avec le composant via l'onglet "knobs"</p>
  <PixStars
    @count={{count}}
    @total={{total}}
    @alt="{{alt}}"
    @color="{{color}}"
  />

  <p>Pour ne pas afficher les étoiles vides, il suffit de ne pas donner le total d'étoiles.</p>
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
  const starOptions = {
    range: true,
    min: 0,
    max: 10,
    step: 1,
  };
  const colors = [undefined, 'yellow', 'blue', 'grey'];

  return {
    template: canvasContent,
    context: {
      count: number('count', 2, starOptions),
      total: number('total', 5, starOptions),
      alt: text('alt', 'message alternatif'),
      color: select('color', colors, undefined),
    },
  }
};

stars.parameters = { notes: { markdown } };
stars.decorators = [centered];
