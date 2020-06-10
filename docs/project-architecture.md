Architecture du projet Pix-UI
==============================================================================

### Arborescence générale

- `.circleci` : configuration pour les [tests de circleci](https://app.circleci.com/pipelines/github/1024pix/pix-ui)
- `.storybook` : configuration de l'outil Storybook.
- `addon` : contenu de notre addon Pix-UI.
- `app` : aide l'Ember app à découvrir automatiquement les composants exportés par un addon.
- `config` : configuration de l'addon ember.
- `docs` : documentations du projet Pix-UI.
- `scripts` : scripts utiles aux [releases de Pix-UI](make-a-release.md).
- `tests` : dossier de tests unitaires et intégration.
- `CHANGELOG.md` : détails du contenu des dernières release.
- `ember-cli-build.js` : sert uniquement à configurer l'application factice trouvée dans tests/dummy/.
- `.env` : créé et utilisé par Storybook.
- `index.js` : point d'entrée (par défaut et par convention) pour un projet npm.
- `package.json` : configuration du projet npm.

Documentation ember sur l'[arborescence d'un addon ember ici](https://cli.emberjs.com/release/writing-addons/).

##### .storybook

- `.storybook` 
  - `main.js`: indique l’emplacement des fichiers stories et des addons de storybook.
  - `preview-head.html` : setup automatique de storybook utile au live reload.
  - `preview.js` : utile à la configuration générale des stories : chez nous on y a ajouté notre thème personnalisé et un décorateur pour centrer les composants dans la fenêtre de visualisation.
  - `storybook-custom-theme.js` : définition de notre thème storybook personnalisé.

##### addon

Ce répertoire peut contenir un grand nombre des mêmes sous-répertoires et fichiers qu'une application Ember, comme `/components/` par exemple. Pour créer des composants, la plupart du travail se fera ici.

- `addon` 
  - `components` : contient les templates et les controller de chaque composants.
    - `pix-tooltip.hbs`
    - `pix-tooltip.js`
  - `stories` : contient les stories.
    - `pix-tooltip.stories.js`
  - `styles` : contient les styles des composants et les styles généraux.
    - `_colors.scss`
    - `_fonts.scss`
    - `_pix-tooltip.scss`
    - `addon.scss` : point d'entrée des styles.

##### app

Le répertoire des applications joue un rôle important pour aider une application Ember à localiser automatiquement les composants exportés par un addon.

- `app`
  - `components`
    - `pix-tooltip.js` : sert à l'app Ember à retrouver le composant correspondant pour son l'export.
  - `styles`
    - `app.scss` : vide mais utile à [ember-cli-sass](https://github.com/adopted-ember-addons/ember-cli-sass)

##### config

- `config`
  - `ember-try.js` : configuration des versions d'Ember dont la compatibilité doit être vérifiée par la suite de tests.
  - `environment.js` : valeurs par défauts pour les applications qui utilisent notre addon. Les changements de valeurs dans l'application hôte surchargeront celles par défaut.

##### docs

Si vous constatez qu'il manque des informations utile au développement du projet, il est vivement encouragé de rajouter de la documentation dans ce dossier là.
Un fichier de documentation est rédigé en [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) et son extension est `.md`.

##### scripts

Une bonne partie des scripts présents dans ce dossier sont issus de [Pix-bot](https://github.com/1024pix/pix-bot). D'où les noms et la structure des fichiers. 
Il est prévu pour la suite de pouvoir faire une release de Pix-UI grâce à Pix-bot.

##### tests

- `tests`
  - `dummy` : ne sert pas sous Pix-UI car nous utilisons Storybook pour tester et documenter nos composants.
  - `helpers`
  - `integration` : au moins un test d'intégration est attendu par composant
  - `unit` : tests unitaires
  - `index.html`
  - `test-helper.js` 

