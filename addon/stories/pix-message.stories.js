import { hbs } from 'ember-cli-htmlbars';

export default { title: 'Message' };

const canvasContent = hbs`
<PixMessage @type='info'>
  Ceci est un message à caractère informatif.
</PixMessage>

<br><br>

<PixMessage @type='alert'>
  <strong>Attention</strong> à la marche ! 
</PixMessage>

<br><br>

<PixMessage @type='success'>
  This is a success message.
</PixMessage>

<br><br>

<PixMessage @type='warning'>
  This is a warning.
</PixMessage>

`;

const markdown = `
# Message
Un bandeau d'information, par défaut de type info. 

## Usage

~~~javascript

<PixMessage @type='info'>
  // Ici les informations à afficher dans le bandeau.
</PixMessage>
~~~

## Props

| Nom           | Type          | Valeurs possibles | Par défaut | Optionnel |
| ------------- |:-------------:|:-----------------:|:----------:|----------:|
| type          | string        |         ["info", "success", "warning", "alert"]         |     "info"      | oui |
`;

export const message = () => {
  return {
    template: canvasContent,
  }
};

message.story = {
  parameters: {
    notes: {
      markdown,
    },
  },
};
