Créer un composant et sa story
==============================================================================

### Création des fichiers nécessaires au composant
* `ember generate component <pix-component-name>`

Cette commande créera les fichiers suivants : 
* `addon/templates/components/<pix-component-name>.hbs`: template du composant.
* `tests/integration/components/<pix-component-name>-test.js`: test du composant.
* `app/components/<pix-component-name>.js`, sert uniquement à ember pour retrouver les composants existants dans le dossier `addon`. **On ne modifiera pas ce fichier là.**

Il vous faudra, certainement, rajouter les fichiers suivants : 
* `addon/components/<pix-component-name>.js`: controller du composant.
* `addon/styles/<_pix-component-name>.scss`: style du composant.
* `addon/stories/<pix-component-name>.stories.js`: **visualisation et documententation** du composant

En somme, rien de nouveau ici en dehors de ces deux points : 
- le contenu de `app` ne nous intéressera pas, tout se passe dans le dossier `addon`
- le fichier de la story : `addon/stories/<pix-component-name>.stories.js`

### C'est quoi une story ?
Une Story c'est un fichier dont l'extension est `.stories.js` qui permet de visualiser et documenter un composant UI.

Lorsqu'on lance Storybook ce dernier va dans `.storybook/main.js` afin de trouver l'emplacement des fichiers `.stories.js`. Ces derniers permettent ainsi d'afficher un apperçu des composants ainsi que leurs documentation. 


### Comment écrire une story ?

Voici le template classique d'une story : 

~~~javascript
import { hbs } from 'ember-cli-htmlbars'; // import nécessaire pour 'canvasContent'

export default { title: 'MonSuperComposant' }; // titre de la section affiché dans le menu de storybook

// ici on mettra les constantes 'canvasContent' et 'markdown'

export const monSuperComposant = () => { return canvasContent };

monSuperComposant.story = {
  parameters: {
    notes: { markdown }, // contenu de la documentation grâce à l'addon Notes
  },
};
~~~

[L'addon "Notes" de Storybook](https://github.com/storybookjs/storybook/tree/master/addons/notes) nous permet d'obtenir un pannel supplémentaire dans notre site Storybook. Ce pannel sert de documentation du composant et est écrit en [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

##### canvasContent

Le retour de la fonction anonyme de `monSuperComposant` doit contenir : 
- soit un fragment d'handlebar : (ne semble pas fonctionner ?)
~~~javascript
const canvasContent = hbs`<MonSuperComposant></MonSuperComposant>`;
~~~
- soit un objet qui contiendrait le template et le contexte du composant : 
~~~javascript
const canvasContent = {
    template: hbs`<MonSuperComposant @click=onClick></MonSuperComposant>`,
    context: {
      onClick: (e) => console.log(e)
    }
}
~~~


##### markdown
La constante `markdown` attend une string contenant (spoiler alert)... du markdown! 
Ce dernier sera affiché dans le pannel de documentation sur la page du composant correspondant.

```javascript
const markdown = `
  # MonSuperComposant
  Description brève de mon composant.

  Un peu plus d'information si je trouve ça utile pour utiliser ce composant...

  ## Usage

  ~~~javascript
  <MonSuperComposant></MonSuperComposant>
  ~~~

  ## Props

  | Nom           | Type          | Valeurs possibles | Par défaut | Optionnel |
  | ------------- |:-------------:|:-----------------:|:----------:|----------:|
  |      -        |       -       |         -         |     -      |     -     |
`
;
```

|   |   |
| - |:- |
| `INFO` | Pour visualiser le résultat de votre story il ne vous manque plus qu'à lancer Storybook : `npm run storybook`. | 





Plus d'information sur le [guide d'ember de Storybook ici](https://storybook.js.org/docs/guides/guide-ember/).
