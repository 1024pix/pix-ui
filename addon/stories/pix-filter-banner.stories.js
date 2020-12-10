import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Form/Filter Banner' };

const canvasContent = hbs`
<h3>Avec titre</h3>
  <PixFilterBanner @title="Filtres">
    <select>
      <option value="3">
        classe de 3e
      </option>
    </select>
  </PixFilterBanner>

<h3>Sans titre</h3>
<PixFilterBanner>
  <select>
    <option value="3">
      classe de 3e
    </option>
  </select>
</PixFilterBanner>
`;

const markdown = `
# FilterBanner

Une \`FilterBanner\` permet de wrapper les éléments de filtres (\`Select\`, \`Multi-Select\`, ...).

> Il est possible de surcharger le style d'une \`<PixFilterBanner>\` via l'attribut \`class\` ainsi que de passer n'importe quel attribut sur sa \`div\` wrapper (par exemple, un \`aria-label\`)

## Usage

~~~javascript
<PixFilterBanner aria-label="Filtres sur les campagnes">
  // ici ajouter le contenu de la bannière de filtres
</PixFilterBanner>
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| title         | string        |                     | null       | oui       |

`
;

export const filterBanner = () => {
  return {
    template: canvasContent,
  }
};

filterBanner.parameters = { notes: { markdown } };
filterBanner.decorators = [centered];
