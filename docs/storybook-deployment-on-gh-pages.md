Déploiement de Storybook
==============================================================================

Notre Storybook est déployé à l'adresse suivante : https://1024pix.github.io/pix-ui/.

#### C'est quoi Storybook ?
[Storybook](https://storybook.js.org/) c'est un outil pour faire des interfaces présentant les composants UI d'un projet.
Par abus de langage, lorsque nous parlons de Storybook, nous parlons du site web crée grâce à cet outil.

#### Qui héberge notre Storybook ?
Notre Storybook est hébergé de manière statique sur les [Github Pages](https://pages.github.com/).

#### Quand est mis à jour notre Storybook ?
La mise à jour de ce site Storybook est faite automatiquement lors d'une release de Pix-UI.
A noter qu'il faudra attendre quelques minutes après la fin du script pour voir le changement.

#### Quelle version de Storybook est mise en ligne ? 
La version des composants présentés sur notre Storybook correspondent (en temps normal) à la version des composants présents sur la branche `master`.

#### Concrètement comment ça marche ?

Lors de la release de Pix-UI le script effectue la commande suivante depuis la branche `master`: 
```
npm run deploy-storybook
```
Cette commande fait appel à l'outil [storybook-deployer](https://github.com/storybookjs/storybook-deployer). Ce dernier effectue les actions suivantes :
- build Storybook comme une app statique
- commit et push le résultat précédent sur la branche `gh-pages`

*(Il est possible de customiser l'auteur ou le nom des commits, voir sur la [doc de storybook-deployer](https://github.com/storybookjs/storybook-deployer).)*

Le changement de la branche `gh-pages` est détecté par les Github Pages et la nouvelle version du site est re-déployée.


Pour changer la branche de déploiement ou l'url du site, voir dans les [settings du repository de Pix-UI](https://github.com/1024pix/pix-ui/settings), section Github Pages.


#### Peut-on se servir de Github Pages comme Review App sur nos PRs ? 

Non (du moins pas à connaissance).

Il est néanmoins possible de déployer une version autre de Storybook que celle présente sur master, en se positionnant sur la branche désirée et lancant la commande `npm run deploy-storybook`.
***Attention cependant***, ce changement sera appliqué sur https://1024pix.github.io/pix-ui/ et visible par tout le monde.

Pour le moment aucun système de RA n'a été mis en place sur Pix-UI.
