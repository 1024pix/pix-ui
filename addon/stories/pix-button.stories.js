import {hbs} from 'ember-cli-htmlbars';

export default {title: 'Button'};

const canvasContent = hbs`

  <h3>Default buttons</h3>
  <PixButton @onClick={{fn onClick}}>Default</PixButton>
  <PixButton @onClick={{fn onClick}} @color="green">Green</PixButton>
  <PixButton @onClick={{fn onClick}} @color="red">Red</PixButton>
  <PixButton @onClick={{fn onClick}} @color="yellow">Yellow</PixButton>
  <PixButton @onClick={{fn onClick}} @color="grey">Grey</PixButton>
  <PixButton @onClick={{fn onClick}} @color="grey" disabled>Disabled</PixButton>

  <h3>Outlined buttons</h3>
  <PixButton @onClick={{fn onClick}} @type="outlined">Default</PixButton>
  <PixButton @onClick={{fn onClick}} @type="outlined" @color="green">Green</PixButton>
  <PixButton @onClick={{fn onClick}} @type="outlined" @color="red">Red</PixButton>
  <PixButton @onClick={{fn onClick}} @type="outlined" @color="yellow">Yellow</PixButton>
  <PixButton @onClick={{fn onClick}} @type="outlined" @color="grey">Grey</PixButton>

  <h3>Rounded buttons</h3>
  <PixButton @onClick={{fn onClick}} @rounded={{true}}>Default</PixButton>
  <PixButton @onClick={{fn onClick}} @rounded={{true}} @color="green">Green</PixButton>
  <PixButton @onClick={{fn onClick}} @rounded={{true}} @color="red">Red</PixButton>
  <PixButton @onClick={{fn onClick}} @rounded={{true}} @color="yellow">Yellow</PixButton>
  <PixButton @onClick={{fn onClick}} @rounded={{true}} @color="grey">Grey</PixButton>

  <h3>Button sizes</h3>
  <PixButton @onClick={{fn onClick}}>Default</PixButton>
  <PixButton @onClick={{fn onClick}} @size="large">Large</PixButton>
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
 @disabled="true|false"
 @loading="true|false"
>
    Mon Bouton
</PixButton>

~~~

## Props

| Nom      |   Type   |       Valeurs possibles        | Par défaut | Optionnel |
| -------- | :------: | :----------------------------: | :--------: | --------: |
| type     |  string  |        solid, outlined         |   solid    |       oui |
| color    |  string  | blue, red, yellow, green, grey |    blue    |       oui |
| rounded  | boolean  |          true, false           |   false    |       oui |
| size     |  string  |         medium, large          |   medium   |       oui |
| onClick  | function |     l'action à déclencher      |     -      |       non |
| disabled | boolean  |          true, false           |   false    |       oui |
| loading  | boolean  |          true, false           |   false    |       oui |
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
