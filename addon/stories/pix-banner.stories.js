import { hbs } from 'ember-cli-htmlbars';

export default { title: 'Banner' };

const canvasContent = hbs`
<h3>Message important sans action</h3>
<PixBanner>
  Bienvenue sur PixOrga !
</PixBanner>

<h3>Message important avec action</h3>
<PixBanner
  @actionLabel='Ajouter des élèves'
  @actionUrl='https://orga.pix.fr/eleves'
>
  La liste des élèves est vide, ajouter des élèves pour commencer
</PixBanner>
`;

const markdown = `
# Banner

Une \`Banner\` permet de mettre en avant une information importante.

> Il est possible de surcharger le style d'une \`<PixBanner>\` via l'attribut \`class\` ainsi que de passer n'importe quel attribut sur sa \`div\` wrapper (par exemple, un \`aria-label\`)

## Usage

~~~javascript
<PixBanner @actionLabel='Ajouter des élèves' @actionUrl='https://orga.pix.fr/eleves' aria-label="ma bannière">
  // ici ajouter le contenu de la bannière
</PixBanner>
~~~

## Props

| Nom           | Type          | Valeurs possibles     | Par défaut | Optionnel |
| ------------- |:-------------:|:---------------------:|:----------:|----------:|
| actionLabel   | string        |                       | null       | oui       |
| actionUrl     | url           |                       | null       | oui       |
`
;

export const banner = () => {
  return {
    template: canvasContent,
  }
};

banner.parameters = { notes: { markdown } };

