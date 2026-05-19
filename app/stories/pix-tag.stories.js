import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Tag',
  argTypes: {
    color: {
      name: 'color',
      description: 'Couleur du tag',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'select',
      },
      options: [
        'grey',
        'yellow',
        'purple',
        'purple-light',
        'blue',
        'green',
        'error',
        'dark',
        'white',
        'blue-light',
      ],
    },
    displayRemoveButton: {
      name: 'displayRemoveButton',
      description: "Permet d'afficher un bouton pour retirer le tag",
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        control: { type: 'radio' },
        options: [true, false],
      },
    },
    onRemove: {
      name: 'onRemove',
      description: 'Fonction à appeler quand le bouton de suppression est cliqué',
      type: { required: false },
      control: { disable: true },
    },
    locale: {
      name: 'locale',
      description: "Locale permettant de localiser l'aria label du bouton de suppression",
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'fr' } },
      control: {
        type: 'select',
      },
      options: ['fr', 'en', 'nl'],
    },
  },
};

const Template = (args) => ({
  template: hbs`<PixTag @color={{this.color}} @displayRemoveButton={{this.displayRemoveButton}} @onRemove={{this.onRemove}}>
Contenu du tag
</PixTag>`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  displayRemoveButton: false,
  onRemove: () => console.log('remove button clicked'),
};
