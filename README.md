- [Présentation de Pix-UI](#Pix-UI)
- [Installation de l'addon Pix-UI](#Addon)
- [Développment de Pix-UI](#Developpement)
  - [Lancement de storybook en local](#Storybook)


Pix-UI <a id="Pix-UI"></a>
==============================================================================

Pix-UI c'est l'implémentation des principes du design system de Pix. Cela se matérialise par :
- **un addon ember**, permettant l'utilisation composants UI Pix sur des applications ember externes
- **un site statique**, présentant les composants UI Pix : https://1024pix.github.io/pix-ui/

![Capture d'écran du storybook en ligne](./docs/assets/screen-pix-storybook.png)

##### Version du projet : 

* Ember CLI v3.24 or above
* Node 12 or above


## Installation de l'addon Pix-UI <a id="Addon"></a>

Pour utiliser les composants sur une application Ember externe, il faut installer l'addon ember Pix-UI avec la commande : 
- `npm install @1024pix/pix-ui@<tag_souhaité>`

##### Quel tag choisir ?

`<tag_souhaité>` doit correspondre au numéro de version à installer. Ce numéro de version correspond à une release.
*Par exemple, on peut remplacer `<tag_souhaité>` par `v0.1.1`.*
Pour voir la liste des tags de Pix-UI, [c'est par ici.](https://github.com/1024pix/pix-ui/tags)

##### Installation par défaut

Il est possible d'installer Pix UI sans `#<tag_souhaité>`, auquel cas ce sera la dernière version qui sera installée. 

Plus d'informations sur les [tags git ici](https://git-scm.com/book/fr/v2/Les-bases-de-Git-%C3%89tiquetage).


## Développement de Pix-UI <a id="Developpement"></a>

* `git clone https://github.com/1024pix/pix-ui.git`
* `cd pix-ui`
* `npm install`

##### Création d'un composant Pix-UI

* `ember g pix-component <nom_du_composant>`

Plus d'informations sur [la création de composant ici](./docs/create-component.mdx).


##### Lancement de storybook en local <a id="Storybook"></a>

Pour visualiser les composants créés, il faut lancer storybook :
* `npm run storybook`


