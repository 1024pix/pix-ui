import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`<PixInputCode
  @ariaLabel={{ariaLabel}}
  @legend={{legend}}
  @inputType={{inputType}}
  @numInputs={{numInputs}}
  @explanationOfUse={{explanationOfUse}}
/>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Champ',
  legend: "Code de validation d'adresse e-mail",
};

export const argTypes = {
  ariaLabel: {
    name: 'ariaLabel',
    description:
      "L'aria-label de chaque champ. L'aria-label est automatiquement complété à la fin par ` <numero>`, où `<numero>` correspond à la position du champ dans le PixInputCode.",
    type: { name: 'string', required: true },
  },
  legend: {
    name: 'legend',
    description:
      "La description du composant. Ce champ n'est pas visible. Indiquer ce à quoi correspond votre PixInputCode.",
    type: { name: 'string', required: true },
  },
  explanationOfUse: {
    name: 'explanationOfUse',
    description:
      "Explication du fonctionnement des champs du PixInputCode. Ce champ n'est pas visible. Le texte par défaut est uniquement en Français. Veillez à donc le surchager avec vos traductions. Par ailleurs, le texte par défaut change selon le type du champ du PixInputCode",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: {
        summary:
          'Pour se déplacer de champ en champ vous pouvez utiliser la tabulation ou bien les flèches gauche et droite de votre clavier. Pour remplir un champ vous pouvez utiliser des chiffres de 1 à 9 ou bien les flèches haut et bas de votre clavier pour incrémenter de 1 la valeur du champ.',
      },
    },
  },
  inputType: {
    name: 'inputType',
    description: 'Le type de chaque champ : `number` ou `text`',
    type: { name: 'string', required: false },
    options: ['number', 'text'],
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'number' },
    },
  },
  numInputs: {
    name: 'numInputs',
    description: 'Le nombre de champ',
    type: { name: 'number', required: false },
    table: {
      defaultValue: { summary: 6 },
    },
  },
  onAllInputsFilled: {
    name: 'onAllInputsFilled',
    description: 'Fonction appelée (avec le code en paramètre) une fois tous les champs remplis',
    type: { required: false },
    control: { disable: true },
  },
};
