# 1. Eviter les balises HTML natives

Date : 2022-01-04

## État

Accepté

## Contexte

Le framework Ember propose des composants helpers tels que `<Input>` ou `<Textarea>`.
Cependant leurs comportements diffèrent pas mal des éléments HTML natifs `<input>` et `<textarea>`. 

Ainsi nous aimerions privilégier l'une des deux utilisations afin de ne plus avoir à changer, comme ça a pu être le cas dans le composant PixInput ([voir discussion sur le sujet](https://github.com/1024pix/pix-ui/pull/147#discussion_r724312399)).

Actuellement, tous les composants Pix-UI utilisent des balises HTML natives sauf le PixTextarea qui utilise le `<Textarea>` d'Ember.

Historique des PRs qui ont mené à cette problématique :
- https://github.com/1024pix/pix-ui/pull/149 a changé le PixInputPassword et PixInput pour utiliser `<Input>` plutôt que `<input>` (embarqué dans la version v8.4.0 de Pix-UI).
- https://github.com/1024pix/pix-ui/pull/147/files a changé le PixInputPassword pour utiliser `<input>` plutôt que `<Input>` (embarqué dans la version v11.0.0 de Pix-UI).
- https://github.com/1024pix/pix-ui/pull/175/files a changé le PixInput pour utiliser `<input>` plutôt que `<Input>` (embarqué dans la version v11.1.0 de Pix-UI).

#### Possibilité 1
Privilégier l'utilisation des composants helpers que propose Ember (`<Input>` / `<Textarea>`).

Ce qui impliquerait : 
- une solution plus "ember way"
- une obligation d'utiliser le two-way-binding (les modifications de valeurs dans un composant enfant répercutera les changements automatiquement dans un composant parent) qui va à l'encontre du principe Data Down Action Up (les données descendent vers les composants enfants et les enfants remontent les actions aux composants parents).
- plus de magie et moins de contrôle, lorsqu'on passe l'attribut `@value` Ember met tout à jour tout seul (le changement est répercuté partout)
- une obligation de copier le modèle pour ne pas le modifier
- une difficulté pour la validation de formulaire, avec la librairie `ember-cp-validation` les erreurs s'affichent dans le formulaire au moindre changement (ce qui n'est pas souhaitable) mais de toute manière on est pas sûrs de vouloir continuer à utiliser cette librairie.


#### Possibilité 2
Privilégier l'utilisation des éléments HTML natifs (`<input>` / `<textarea>`).

Ce qui impliquerait : 
- de ne pas avoir le two-way-binding imposé
- une obligation de déclarer un `onChange` sur les champs afin d'interargir avec changements du champ
- une obligation de copier le modèle pour ne pas le modifier
- une plus grande maîtrise de la balise et ce qu'il s'y passe en coulisse

## Décision

Nous privélégierons les éléments HTML natifs et éviterons autant que possible le two-way-binding.

## Conséquences

Il faut mettre à jour le PixTextarea pour qu'il utilise une balise `<textarea>`.

⚠️ Lors de la mise à jour des versions v11.0.0 / v11.1.0 de Pix-UI il faut mettre à jour tous les PixInput et PixInputPassword afin qu'il définissent un `onChange` pour ne pas casse le comportement existant.
