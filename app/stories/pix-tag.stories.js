import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Tag',
  argTypes: {
    color: {
      name: 'color',
      description: 'Couleur du tag',
      type: { name: 'number', required: false },
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'select',
      },
      options: [
        'grey',
        'yellow',
        'purple',
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
