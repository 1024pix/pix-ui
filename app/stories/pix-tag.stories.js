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
    texts: {
      name: 'texts',
      description: 'object contenant les traductions du composants',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: JSON.stringify({
            title: 'Supprimer le tag',
          }),
        },
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
  template: hbs`<PixTag @color={{this.color}} @texts={{this.texts}} @onRemove={{this.onRemove}}>
Contenu du tag
</PixTag>`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  texts: { removeButtonLabel: 'Supprimer le bouton' },
  onRemove: () => console.log('remove button clicked'),
};
