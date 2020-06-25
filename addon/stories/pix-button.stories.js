import {hbs} from 'ember-cli-htmlbars';

export default {title: 'Button'};

const canvasContent = hbs`
  <h3>Primary buttons</h3>
  <PixButton @onClick={{fn onClick}}>Primary</PixButton>
  <PixButton @rounded={{true}} @color="green" @onClick={{fn onClick}}>Primary</PixButton>

  <h3>Secondary button</h3>
  <PixButton @color="grey" @onClick={{fn onClick}}>Secondary</PixButton>

  <h3>Tertiary button</h3>
  <PixButton @type="outlined" @color="grey" @onClick={{fn onClick}}>Tertiary</PixButton>

  <h3>Button sizes</h3>
  <PixButton @onClick={{fn onClick}}>Default</PixButton>
  <PixButton @onClick={{fn onClick}} @size="large">Default</PixButton>

  <h3>Colors</h3>
  <PixButton @onClick={{fn onClick}}>Blue</PixButton>
  <PixButton @onClick={{fn onClick}} @color="green">Green</PixButton>
  <PixButton @onClick={{fn onClick}} @color="red">Red</PixButton>
  <PixButton @onClick={{fn onClick}} @color="yellow">Yellow</PixButton>
  <PixButton @onClick={{fn onClick}} @color="grey">Grey</PixButton>

  <h3>Button disabled</h3>
  <PixButton disabled @onClick={{fn onClick}}>Primary</PixButton>
`;

const markdown = `
## Default Button

Les boutons utilisés un peu partout sur la plateforme, notamment dans les formulaires d'inscriptions.

## Usage

~~~javascript

<PixButton
 @type="contained|outlined"
 @color="blue|red|yellow|green|grey"
 @rounded="true|false"
 @size="medium|large"
 @onClick="function"
 @loading="true|false"
 disabled="true|false"
>
  Disabled
</PixButton>

~~~

## Props

| Nom      |   Type   |       Valeurs possibles        | Par défaut | Optionnel |
| -------- | :------: | :----------------------------: | :--------: | --------: |
| @type     |  string  |        solid, outlined         |   solid    |       oui |
| @color    |  string  | blue, red, yellow, green, grey |    blue    |       oui |
| @rounded  | boolean  |          true, false           |   false    |       oui |
| @size     |  string  |         medium, large          |   medium   |       oui |
| @onClick  | function |     l'action à déclencher      |     -      |       non |
| @loading  | boolean  |          true, false           |   false    |       oui |
| disabled  | boolean  |          true, false           |   false    |       oui |
`;

export const button = () => {
  return {
    template: canvasContent,
    context: { onClick: () => console.log('click') }
  }
};

button.story = {
  parameters: {
    notes: {
      markdown,
    },
  },
};
