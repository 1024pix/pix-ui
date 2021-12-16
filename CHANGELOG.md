# Pix-UI Changelog

## v11.1.0 (16/12/2021)


### :building_construction: Tech
- [#175](https://github.com/1024pix/pix-ui/pull/175) [TECH] Faire en sorte que le message d'erreur soit situé à l'intérieur de l'élément qui le compose (PIX-3829)

## v11.0.1 (08/12/2021)


### :bug: Bug fix
- [#181](https://github.com/1024pix/pix-ui/pull/181) [BUGFIX] Corriger les explications d'utilisations du PixInputCode

### :coffee: Various
- [#171](https://github.com/1024pix/pix-ui/pull/171) [DOC] Améliorer l'information sur l'accessibilité dans la doc de PixTooltip

## v11.0.0 (03/12/2021)


### :rocket: Enhancement
- [#177](https://github.com/1024pix/pix-ui/pull/177) [FEATURE] Création du composant Tag sélectionnable  dans Pix UI (PIX-3757)

### :building_construction: Tech
- [#180](https://github.com/1024pix/pix-ui/pull/180) [TECH] Ajouter la possibilité d'utiliser des composants Ember à l'intérieur de la tooltip (Pix-3925)
- [#179](https://github.com/1024pix/pix-ui/pull/179) [TECH] Mise à jour du template de pull request pour faire apparaître plus clairement les BREAKING_CHANGES
- [#148](https://github.com/1024pix/pix-ui/pull/148) [TECH] Formatter les fichiers avec prettier (PIX-3469)

### :bug: Bug fix
- [#147](https://github.com/1024pix/pix-ui/pull/147) [BUGFIX] Ajout de l'évènement onChange afin de supprimer le message d'erreur lorsque l'utilisateur modifie sa saisie (PIX-3476)

### :coffee: Various
- [#178](https://github.com/1024pix/pix-ui/pull/178) [DOC] Améliorer l'information sur les breaking changes dans Pix UI
- [#174](https://github.com/1024pix/pix-ui/pull/174) [DOC] Mise a jour de la la méthode d'installation dans la documentation
- [#158](https://github.com/1024pix/pix-ui/pull/158) [DOC] Suivre le déploiement de la release.

## v10.2.1 (10/11/2021)


### :building_construction: Tech
- [#173](https://github.com/1024pix/pix-ui/pull/173) [TECH] Mise a jour du nom de domaine.

## v10.2.0 (10/11/2021)


### :building_construction: Tech
- [#172](https://github.com/1024pix/pix-ui/pull/172) [TECH] Monter node de version a 16.13.0

## v10.1.0 (10/11/2021)


### :coffee: Various
- [#164](https://github.com/1024pix/pix-ui/pull/164) [INFRA] Release npm @1024pix/pix-ui automatisée

## v10.0.2 (08/11/2021)


### :coffee: Various
- [#165](https://github.com/1024pix/pix-ui/pull/165) [FIXBUG] Problème de sélection des statuts sur Firefox (PIX-3636)

## v10.0.1 (03/11/2021)


### :building_construction: Tech
- [#163](https://github.com/1024pix/pix-ui/pull/163) [TECH] Ne plus inclure les stories dans le bundle de Pix-UI
- [#162](https://github.com/1024pix/pix-ui/pull/162) [TECH] Donner toutes les permissions à l'auto-merge
- [#161](https://github.com/1024pix/pix-ui/pull/161) [TECH] Ajout de la permission pour l'auto merge d'écrire sur les status
- [#160](https://github.com/1024pix/pix-ui/pull/160) [TECH] Restaurer la version initiale de automerge.
- [#159](https://github.com/1024pix/pix-ui/pull/159) [TECH] Ajout d'une permission d'écriture pour l'auto merge

### :bug: Bug fix
- [#166](https://github.com/1024pix/pix-ui/pull/166) [BUGFIX] Empêcher PixSelect de déborder de l'élément parent

## v10.0.0 (20/10/2021)

- [#156](https://github.com/1024pix/pix-ui/pull/156) [TECH] Enlever les règles bloquantes et non utiles du reset CSS [BREAKING_CHANGES]

## v9.2.0 (20/10/2021)

- [#157](https://github.com/1024pix/pix-ui/pull/157) [FEATURE] Afficher un préfixe optionnel dans le composant PixInputPassword.

## v9.1.0 (18/10/2021)

- [#155](https://github.com/1024pix/pix-ui/pull/155) [FEATURE] Ajouter le chargement asynchrone des options sur PixMultiSelect
- [#154](https://github.com/1024pix/pix-ui/pull/154) [BUGFIX] Les options du select n'apparaissent pas complètement (PIX-3608).
- [#135](https://github.com/1024pix/pix-ui/pull/135)  [TECH] Exclure des fichiers de l'archive pix-ui

## v9.0.1 (12/10/2021)

- [#153](https://github.com/1024pix/pix-ui/pull/153) [BUGFIX] Améliorer l'ordre des explications d'accessibilité du PixInputCode 

## v9.0.0 (08/10/2021)

- [#152](https://github.com/1024pix/pix-ui/pull/152) [BUGFIX] Mettre à jour le PixInputCode [BREAKING_CHANGES] 

## v8.4.0 (05/10/2021)

- [#149](https://github.com/1024pix/pix-ui/pull/149) [FEATURE] Permettre de tracker les values des PixInput et PixInputPassword
- [#151](https://github.com/1024pix/pix-ui/pull/151) [TECH] Ajout du helper getByLabel
- [#144](https://github.com/1024pix/pix-ui/pull/144) [TECH] Ajout du helper fillInByLabel (PIX-3470)
- [#146](https://github.com/1024pix/pix-ui/pull/146) [TECH] Ajout du helper clickByLabel (PIX-3470)
- [#143](https://github.com/1024pix/pix-ui/pull/143) [TECH] Ajout du helper notContains (PIX-3470)

## v8.3.0 (04/10/2021)

- [#145](https://github.com/1024pix/pix-ui/pull/145) [BUGFIX] Correction de l'id requis quand le label est renseigné
- [#150](https://github.com/1024pix/pix-ui/pull/150) [TECH] Mettre à jour la version de l'auto merge et donner les permissions nécessaires au github token
- [#142](https://github.com/1024pix/pix-ui/pull/142) [TECH] Ajout du helper contains
- [#140](https://github.com/1024pix/pix-ui/pull/140) [TECH] Restreindre les permissions par défaut du github token
- [#141](https://github.com/1024pix/pix-ui/pull/141) [DOC] Ajouter comment créer un composant dans le README

## v8.2.0 (17/09/2021)

- [#137](https://github.com/1024pix/pix-ui/pull/137) [FEATURE] Création du composant PixInputCode (PIX-3172). 

## v8.1.2 (16/09/2021)

- [#138](https://github.com/1024pix/pix-ui/pull/138) [BUGFIX] Modifier l'évènement utilisé dans PixButtonUpload

## v8.1.1 (14/09/2021)

- [#136](https://github.com/1024pix/pix-ui/pull/136) [BUGFIX] Pouvoir uploader le même nom de fichier 2 fois de suite

## v8.1.0 (14/09/2021)

- [#130](https://github.com/1024pix/pix-ui/pull/130) [FEATURE] Création du composant PixRadioButton (PIX-3031).
- [#126](https://github.com/1024pix/pix-ui/pull/126) [FEATURE] Permettre d'afficher du code formatté HTML dans la tooltip
- [#132](https://github.com/1024pix/pix-ui/pull/132) [FEATURE] Création du composant PixInputPassword (PIX-3089). 

## v8.0.1 (03/09/2021)

- [#131](https://github.com/1024pix/pix-ui/pull/131) [FEATURE] Centrer les boutons d'un formulaire par défaut
- [#133](https://github.com/1024pix/pix-ui/pull/133) [TECH] Enlever le padding des section mis globalement

## v8.0.0 (01/09/2021)

- [#129](https://github.com/1024pix/pix-ui/pull/129) [FEATURE] Aligner le style du PixTooltip avec le design system (PIX-3019).

## v7.0.0 (31/08/2021)

- [#122](https://github.com/1024pix/pix-ui/pull/122) [TECH] Aligner le style des composants de formulaire avec le design system (PIX-3052).

## v6.2.0 (31/08/2021)

- [#128](https://github.com/1024pix/pix-ui/pull/128) [FEATURE] Aligner le style du PixBanner avec le design system (PIX-3022).

## v6.1.0 (27/08/2021)

- [#124](https://github.com/1024pix/pix-ui/pull/124) [FEATURE] Aligner le style du PixMessage avec le design system (PIX-3021).

## v6.0.0 (27/08/2021)

- [#123](https://github.com/1024pix/pix-ui/pull/123) [FEATURE] Aligner le style du PixIconButton avec le design system - BREAKING CHANGES (PIX-3017).
- [#127](https://github.com/1024pix/pix-ui/pull/127) [TECH] Faire en sorte d'ajouter des arguments de manière dynamique

## v5.5.0 (25/08/2021)

- [#121](https://github.com/1024pix/pix-ui/pull/121) [FEATURE] Création du composant PixInput (PIX-3014).

## v5.4.1 (25/08/2021)

- [#125](https://github.com/1024pix/pix-ui/pull/125) [FEATURE] Ne pas afficher la tooltip si le texte est vide

## v5.4.0 (20/08/2021)

- [#120](https://github.com/1024pix/pix-ui/pull/120) [FEATURE] Ajout du composant PixButtonUpload
- [#119](https://github.com/1024pix/pix-ui/pull/119) [FEATURE] Ajout du composant PixButtonLink
- [#118](https://github.com/1024pix/pix-ui/pull/118) [FEATURE] Alignement du PixButton avec le design system
- [#114](https://github.com/1024pix/pix-ui/pull/114) [TECH] Mise a jour des dépendances et fix des vulnérabilités (PIX-2961).
- [#116](https://github.com/1024pix/pix-ui/pull/116) [TECH] S'assurer des règles d'a11y du linter (PIX-3033)

## v5.3.1 (16/08/2021)

- [#117](https://github.com/1024pix/pix-ui/pull/117) [BUGFIX] Permettre de passer des paramètres au PixButton de type lien (PIX-3036).
- [#115](https://github.com/1024pix/pix-ui/pull/115) [TECH] Réparer le merge automatique (PIX-3001).
- [#113](https://github.com/1024pix/pix-ui/pull/113) [TECH] Automerge la PR à l'ajout du label (PIX-3001).

## v5.3.0 (13/08/2021)

- [#111](https://github.com/1024pix/pix-ui/pull/111) [FEATURE] Refacto des stories
- [#110](https://github.com/1024pix/pix-ui/pull/110) [FEATURE] Centrer le contenu de Pix-Button par défaut
- [#109](https://github.com/1024pix/pix-ui/pull/109) [FEATURE] Enlever les effets visuels au survol d'un bouton disabled
- [#112](https://github.com/1024pix/pix-ui/pull/112) [TECH] Ajout des actions dans storybook (PIX-2995)
- [#108](https://github.com/1024pix/pix-ui/pull/108) [TECH] Ajuster la taille des apperçus des composants dans les stories
- [#104](https://github.com/1024pix/pix-ui/pull/104) [TECH] Bump des packages Storybook de 6.1.21 à 6.2.9.
- [#106](https://github.com/1024pix/pix-ui/pull/106) [TECH] Voir le changelog dans storybook

## v5.2.2 (04/08/2021)

- [#105](https://github.com/1024pix/pix-ui/pull/105) [FEATURE] Ne pas pouvoir sélectionner la valeur vide du PixSelect.
- [#103](https://github.com/1024pix/pix-ui/pull/103) [TECH] Initialize Pix UI doc summary

## v5.2.1 (18/06/2021)

- [#102](https://github.com/1024pix/pix-ui/pull/102) [CLEAN] Corriger une petite coquille dans la doc de Pix-Tooltip

## v5.2.0 (15/06/2021)

- [#101](https://github.com/1024pix/pix-ui/pull/101) Permettre l'absence de trigger action sur PixButton de type submit

## v5.1.0 (02/06/2021)

- [#95](https://github.com/1024pix/pix-ui/pull/95) [FEATURE] Ajout du composant PixCollapsible
- [#96](https://github.com/1024pix/pix-ui/pull/96) [FEATURE] Ajout d'une bordure sur les boutons colorés lors des focus.
- [#100](https://github.com/1024pix/pix-ui/pull/100) Ne pas changer la taille du bouton lors du loading.

## v5.0.0 (21/05/2021)

- [#99](https://github.com/1024pix/pix-ui/pull/99) [BUGFIX] La bonne version de PixBanner-BREAKING-CHANGES (PIX-2563)

## v4.0.0 (21/05/2021)

- [#97](https://github.com/1024pix/pix-ui/pull/97) [FEATURE] Harmonisation du composant PixBanner (pix-2563)
- [#98](https://github.com/1024pix/pix-ui/pull/98) [BUGFIX] Corriger la taille de la police du composant Pix Tag

## v3.5.0 (28/04/2021)

- [#81](https://github.com/1024pix/pix-ui/pull/81) [TECH] Enrichir Pix Button.

## v3.4.0 (09/04/2021)

- [#85](https://github.com/1024pix/pix-ui/pull/85) [TECH] Installation du pack "essentiels" des addons storybook

## v3.3.0 (01/04/2021)

- [#91](https://github.com/1024pix/pix-ui/pull/91) [TECH] Ajout de review app pour Storybook
- [#89](https://github.com/1024pix/pix-ui/pull/89) [TECH] Déployer Storybook avec une GitHub action
- [#88](https://github.com/1024pix/pix-ui/pull/88) [TECH] Corrige la doc de l'attribute type du bouton
- [#92](https://github.com/1024pix/pix-ui/pull/92) [ProgressGauge] Ajout du composant barre de progression (Pix-2332).

## v3.2.0 (08/03/2021)

- [#83](https://github.com/1024pix/pix-ui/pull/83) [FEATURE] Rendre PixSelect cherchable (PIX-2306)
- [#84](https://github.com/1024pix/pix-ui/pull/84) [TECH] Mettre à jour les dépendances de Pix-UI

## v3.1.1 (04/03/2021)

- [#86](https://github.com/1024pix/pix-ui/pull/86) Informer tout le monde que l'apperçu du multiselect dans storybook ne fonctionne pas

## v3.1.0 (16/02/2021)

- [#78](https://github.com/1024pix/pix-ui/pull/78) [FEAT] Mise à jour de la couleur de l'élément bannière.

## v3.0.0 (15/02/2021)

- [#79](https://github.com/1024pix/pix-ui/pull/79) [TECH] Enrichir PixActionButton et la renommer en PixIconButton pour que cela reflète plus son utilisation - BREAKING CHANGES.

## v2.2.0 (12/02/2021)

- [#74](https://github.com/1024pix/pix-ui/pull/74) [FEATURE] Ajout d'un bouton permettant de supprimer tous les éléments filtrés d'un seul clic dans le filter banner(PIX-2032).
- [#76](https://github.com/1024pix/pix-ui/pull/76) [FIX] Multi-select: le composant ne se met pas a jour quand on modifie l'argument '@selected' (PIX-2141)

## v2.1.0 (11/02/2021)

- [#77](https://github.com/1024pix/pix-ui/pull/77) [TECH] Pouvoir désactiver le PixButton

## v2.0.3 (03/02/2021)

- [#75](https://github.com/1024pix/pix-ui/pull/75) [TECH] Permettre le redimensionnement de la textarea seulement vertical

## v2.0.2 (02/02/2021)

- [#71](https://github.com/1024pix/pix-ui/pull/71) [STYLE] Corriger l'affichage d'un texte sur deux lignes avec une icone dans PixMessage

## v2.0.1 (01/02/2021)

- [#72](https://github.com/1024pix/pix-ui/pull/72) [FEATURE] Ajout du nombre d'éléments filtrés dans le composant filter banner sur Pix-UI(pix-2031).
- [#73](https://github.com/1024pix/pix-ui/pull/73) [TECH] Toujours passer ...attributes à la PixTextarea

## v2.0.0 (27/01/2021)

- [#68](https://github.com/1024pix/pix-ui/pull/68) [TECH] Enrichir la Pix Tooltip - BREAKING CHANGES (Pix-2000).
- [#67](https://github.com/1024pix/pix-ui/pull/67) [TECH] Enrichir la PixActionButton - BREAKING CHANGES.

## v1.6.1 (27/01/2021)

- [#70](https://github.com/1024pix/pix-ui/pull/70) [TECH] Corriger les attributs pour la PixTextarea

## v1.6.0 (26/01/2021)

- [#69](https://github.com/1024pix/pix-ui/pull/69) [TECH] Ajout d'une icone facultative pour PixMessage

## v1.5.0 (26/01/2021)

- [#66](https://github.com/1024pix/pix-ui/pull/66) [TECH] Pouvoir modifier les bords et la couleur de PixButton

## v1.4.2 (21/01/2021)

- [#65](https://github.com/1024pix/pix-ui/pull/65) [STYLE] Correction du style FilterBanner et MultiSelect

## v1.4.1 (15/01/2021)

- [#64](https://github.com/1024pix/pix-ui/pull/64) [FIX] Problème de CSS et de propagation sur le multiselect (PIX-1981)

## v1.4.0 (08/01/2021)

- [#63](https://github.com/1024pix/pix-ui/pull/63) [FEATURE] Ajout du composant PixTextarea
- [#62](https://github.com/1024pix/pix-ui/pull/62) [FEATURE] Ajout du tri des éléments dans le multi-select (PIX-1685)
- [#60](https://github.com/1024pix/pix-ui/pull/60) [TECH] Passer les stories à MDX

## v1.3.0 (17/12/2020)

- [#59](https://github.com/1024pix/pix-ui/pull/59) [FEATURE] Ajout du PixTag compact
- [#55](https://github.com/1024pix/pix-ui/pull/55) [FEATURE] Modification des addons dépréciés

## v1.2.1 (15/12/2020)

- [#58](https://github.com/1024pix/pix-ui/pull/58) [TECH] Donner un id fixe directement au mutliselect cherchable

## v1.2.0 (15/12/2020)

- [#48](https://github.com/1024pix/pix-ui/pull/48) [FEATURE] Donner la possibilité de faire une recherche sur un multi-select (Pix-1677)
- [#56](https://github.com/1024pix/pix-ui/pull/56) [FEATURE] Ajout des variantes jaunes et grises pour le composant PixTag
- [#46](https://github.com/1024pix/pix-ui/pull/46) [FEATURE] Création du composant multi-select (PIX-1674).
- [#45](https://github.com/1024pix/pix-ui/pull/45) [FEATURE] Création du composant de bannière de filtres (PIX-1675).
- [#41](https://github.com/1024pix/pix-ui/pull/41) [FEATURE] Ajout du composant pix-select
- [#38](https://github.com/1024pix/pix-ui/pull/38) [BUGFIX] Amélioration du Pix-Button pour les formulaire
- [#54](https://github.com/1024pix/pix-ui/pull/54) [TECH] Envoyer un message d'erreur plus explicite pour le PixButton
- [#53](https://github.com/1024pix/pix-ui/pull/53) [TECH] Ajouter knobs au projet
- [#52](https://github.com/1024pix/pix-ui/pull/52) [TECH] Organisation des composants en categories
- [#50](https://github.com/1024pix/pix-ui/pull/50) [TECH] Mise à jour des dépendances pix-ui
- [#47](https://github.com/1024pix/pix-ui/pull/47) [TECH] Corriger les erreurs eslint
- [#49](https://github.com/1024pix/pix-ui/pull/49) [TECH] Ajouter le linter aux build circle-ci
- [#51](https://github.com/1024pix/pix-ui/pull/51) [TECH] Ne pas utiliser de mot clé ember comme nom de paramètre
- [#44](https://github.com/1024pix/pix-ui/pull/44) [TECH] Skip la CI sur les gh-pages
- [#43](https://github.com/1024pix/pix-ui/pull/43) [TECH] Ne pas lancer circle-ci sur la branche gh-pages
- [#40](https://github.com/1024pix/pix-ui/pull/40) [TECH] Afficher l'erreur levée par un bouton.
- [#57](https://github.com/1024pix/pix-ui/pull/57) [Feature] Ajout de l'argument uppercase sur le composant PixTag
- [#42](https://github.com/1024pix/pix-ui/pull/42) [DOC] Mise à jour de la documentation pour faire un déploiement de Pix-UI 
- [#39](https://github.com/1024pix/pix-ui/pull/39) [DesignFix] Corriger le design de la PixReturnTo

## v1.1.0 (15/12/2020)

- [#48](https://github.com/1024pix/pix-ui/pull/48) [FEATURE] Donner la possibilité de faire une recherche sur un multi-select (Pix-1677)
- [#56](https://github.com/1024pix/pix-ui/pull/56) [FEATURE] Ajout des variantes jaunes et grises pour le composant PixTag

## v1.0.1 (11/12/2020)

- [#54](https://github.com/1024pix/pix-ui/pull/54) [TECH] Envoyer un message d'erreur plus explicite pour le PixButton
- [#53](https://github.com/1024pix/pix-ui/pull/53) [TECH] Ajouter knobs au projet
- [#52](https://github.com/1024pix/pix-ui/pull/52) [TECH] Organisation des composants en categories
- [#50](https://github.com/1024pix/pix-ui/pull/50) [TECH] Mise à jour des dépendances pix-ui
- [#49](https://github.com/1024pix/pix-ui/pull/49) [TECH] Ajouter le linter aux build circle-ci
- [#47](https://github.com/1024pix/pix-ui/pull/47) [TECH] Corriger les erreurs eslint

## v1.0.0 (10/12/2020)

- [#46](https://github.com/1024pix/pix-ui/pull/46) [FEATURE] Création du composant multi-select (PIX-1674).
- [#45](https://github.com/1024pix/pix-ui/pull/45) [FEATURE] Création du composant de bannière de filtres (PIX-1675).
- [#51](https://github.com/1024pix/pix-ui/pull/51) [TECH] Ne pas utiliser de mot clé ember comme nom de paramètre

## v0.18.2 (01/12/2020)

- [#44](https://github.com/1024pix/pix-ui/pull/44) [TECH] Skip la CI sur les gh-pages

## v0.18.1 (18/11/2020)

- [#43](https://github.com/1024pix/pix-ui/pull/43) [TECH] Ne pas lancer circle-ci sur la branche gh-pages

## v0.18.0 (18/11/2020)

- [#41](https://github.com/1024pix/pix-ui/pull/41) [FEATURE] Ajout du composant pix-select
- [#42](https://github.com/1024pix/pix-ui/pull/42) [DOC] Mise à jour de la documentation pour faire un déploiement de Pix-UI 

## v0.17.0 (16/11/2020)

- [#39](https://github.com/1024pix/pix-ui/pull/39) [DesignFix] Corriger le design de la PixReturnTo

## v0.16.0 (16/11/2020)

- [#40](https://github.com/1024pix/pix-ui/pull/40) [TECH] Afficher l'erreur levée par un bouton.

## v0.15.1 (27/10/2020)

- [#38](https://github.com/1024pix/pix-ui/pull/38) [BUGFIX] Amélioration du Pix-Button pour les formulaire

## v0.15.0 (26/10/2020)

- [#37](https://github.com/1024pix/pix-ui/pull/37) [STYLE] Les étoiles bleues "vides" de PixStars ne doivent pas avoir de bordure

## v0.14.0 (22/10/2020)

- [#36](https://github.com/1024pix/pix-ui/pull/36) [FEATURE] Ajout du composant PixStars (pix-1448)

## v0.13.0 (19/10/2020)

- [#35](https://github.com/1024pix/pix-ui/pull/35) [FEATURE] Ajout du composant Bouton.

## v0.12.0 (30/09/2020)


## v0.11.0 (29/09/2020)


## v0.10.0 (24/09/2020)

- [#33](https://github.com/1024pix/pix-ui/pull/33) [FEATURE] Créer le composant PixActionButton

## v0.9.0 (18/09/2020)

- [#34](https://github.com/1024pix/pix-ui/pull/34) [TECH] Upgrade Ember-cli and font-awesome.
- [#32](https://github.com/1024pix/pix-ui/pull/32) [TECH] Eviter de jouer circle-ci sur la branche gh-pages
- [#31](https://github.com/1024pix/pix-ui/pull/31) [TECH] Ajout de ...attributes à la PixTooltip

## v0.8.1 (27/08/2020)

- [#31](https://github.com/1024pix/pix-ui/pull/31) [TECH] Ajout de ...attributes à la PixTooltip

## v0.8.0 (24/08/2020)

- [#30](https://github.com/1024pix/pix-ui/pull/30) [FEATURE] Add support for ember app internal links in PixBanner (PIX-1085).

## v0.7.0 (21/08/2020)

- [#24](https://github.com/1024pix/pix-ui/pull/24) [TECH] Ajout d'une commande custom pour créer un composant Pix UI

## v0.6.0 (17/08/2020)

- [#29](https://github.com/1024pix/pix-ui/pull/29) [FEATURE] Ajout du composant PixBanner (PIX-1114).
- [#28](https://github.com/1024pix/pix-ui/pull/28) [TECH] Correction des warnings de storybook
- [#23](https://github.com/1024pix/pix-ui/pull/23) [TECH] Ajout d'un reset CSS

## v0.5.0 (22/07/2020)

- [#27](https://github.com/1024pix/pix-ui/pull/27) [BUGFIX] Corrections de la PixLinkBack renommée en PixReturnTo

## v0.4.0 (17/07/2020)

- [#25](https://github.com/1024pix/pix-ui/pull/25) [FEATURE] Ajout du composant PixLinkBack
- [#26](https://github.com/1024pix/pix-ui/pull/26) [TECH] Changer le port de l'app Ember Pix UI
- [#19](https://github.com/1024pix/pix-ui/pull/19) [TECH] Ajout du addon-a11y pour vérifier des points d'accessibilité sur les add-on pix.

## v0.3.0 (03/07/2020)

- [#22](https://github.com/1024pix/pix-ui/pull/22) [FEATURE] Ajout d'un PixBackgroundBlue & PixBlocShadow

## v0.2.2 (18/06/2020)

- [#21](https://github.com/1024pix/pix-ui/pull/21) [TECH] Correction du déploiment automatique de storybook en ligne

## v0.2.1 (17/06/2020)

- [#20](https://github.com/1024pix/pix-ui/pull/20) [TECH] Mettre des dépendances en "devDependancies"

## v0.2.0 (12/06/2020)

- [#18](https://github.com/1024pix/pix-ui/pull/18) [FEATURE] Ajout du composant Message
- [#17](https://github.com/1024pix/pix-ui/pull/17) [FEATURE] Ajout du composant PixTag
- [#16](https://github.com/1024pix/pix-ui/pull/16) [DOCS] Ajout de documentations (readme, bonne pratiques ...)
- [#14](https://github.com/1024pix/pix-ui/pull/14) [DOCS] Documentation sur le déploiement de Storybook en ligne

## v0.1.2 (04/06/2020)

- [#13](https://github.com/1024pix/pix-ui/pull/13) [TECH] Correction de l'ordre des titres du Changelog

## v0.1.1 (03/06/2020)

- [#12](https://github.com/1024pix/pix-ui/pull/12) [BUGFIX] Ajustements sur le script de déploiement.

## v0.1.0 (03/06/2020)

- [#2](https://github.com/1024pix/pix-ui/pull/2) [FEATURE] Création d'un composant Tooltip
- [#1](https://github.com/1024pix/pix-ui/pull/1) [FEATURE] Ajout de style commun avec sass
- [#11](https://github.com/1024pix/pix-ui/pull/11) [TECH] Ajout des scripts de déploiement.
- [#10](https://github.com/1024pix/pix-ui/pull/10) [TECH] Ajout d'un script de déploiement de storybook sur GitHub Pages
- [#9](https://github.com/1024pix/pix-ui/pull/9) [TECH] Correction d'un bug venant du theme et centrer les stories
- [#8](https://github.com/1024pix/pix-ui/pull/8) [TECH] Customiser storybook
- [#4](https://github.com/1024pix/pix-ui/pull/4) [TECH] Paramétrer circleCI
- [#3](https://github.com/1024pix/pix-ui/pull/3) Add a new PR template
