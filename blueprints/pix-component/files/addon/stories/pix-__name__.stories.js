import { hbs } from 'ember-cli-htmlbars';
import centered from '@storybook/addon-centered/ember';

export default { title: '<%= classifiedModuleName %>' };

const canvasContent = hbs`
  <Pix<%= classifiedModuleName %>>
  </Pix<%= classifiedModuleName %>>
`;

const markdown = `
# <%= classifiedModuleName %>
TODO

## Usage

~~~javascript
<Pix<%= classifiedModuleName %>>
  // TODO
</Pix<%= classifiedModuleName %>>
~~~

## Props

| Nom           | Type          |  Valeurs possibles  | Par défaut | Optionnel |
| ------------- |:-------------:|:-------------------:|:----------:|----------:|
| | | | | |

`
;

export const <%= camelizedModuleName %> = () => {
  return {
    template: canvasContent,
  }
};

<%= camelizedModuleName %>.parameters = { notes: { markdown } };
<%= camelizedModuleName %>.decorators = [centered];
