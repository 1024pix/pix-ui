import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: 'Basics/Action Button' };

const canvasContent = hbs`
  <h3>Par défaut:</h3>
  <PixActionButton />
  <h3>Avec l'icon 'times':</h3>
  <PixActionButton @icon='times' />
`;

const markdown = `
# ActionButton
Le ActionButton permet de créer un bouton contenant une icône font-awesome.

## Usage

Par défaut:

~~~javascript
<PixActionButton />
~~~

Avec paramètre:

~~~javascript
<PixActionButton @icon='times' />
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
|icon|string|les icons de font-awesome|'plus'|oui|
|triggerAction|function|-|-|oui|

`
;

export const actionButton = () => {
  return {
    template: canvasContent,
  }
};

actionButton.parameters = { notes: { markdown } };
actionButton.decorators = [centered];
