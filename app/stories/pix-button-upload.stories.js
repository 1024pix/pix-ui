import { action } from '@storybook/addon-actions';
import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Actions/ButtonUpload',
  argTypes: {
    id: {
      name: 'id',
      description: "identifiant du bouton d'upload",
      type: { name: 'string', required: true },
    },
    onChange: {
      name: 'onChange',
      description:
        "fonction à exécuter au moment de l'upload du fichier, elle prend en entrée la liste des fichiers uploadés.",
      type: { name: 'function', required: true },
    },
    variant: {
      name: 'variant',
      description: 'Permet le choix de la déclinaison du bouton upload souhaité',
      options: [
        'primary',
        'primary-bis',
        'primary-white',
        'secondary',
        'secondary-white',
        'tertiary',
        'tertiary-white',
        'success',
        'error',
        'transparent-dark',
      ],
      type: { name: 'string', required: false },
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      name: 'size',
      description: 'taille: `big`,`small`',
      options: ['large', 'small'],
      type: { name: 'string', required: false },
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    isBorderVisible: {
      name: 'isBorderVisible',
      description:
        'Paramètre utilisé seulement quand le `variant` est `secondary` ou `transparent-dark`',
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export const buttonUpload = (args) => {
  return {
    template: hbs`<PixButtonUpload
  @id={{this.id}}
  @onChange={{this.onChange}}
  @variant={{this.variant}}
  @size={{this.size}}
  @isBorderVisible={{this.isBorderVisible}}
>
  Cliquer pour uploader un fichier
</PixButtonUpload>`,
    context: args,
  };
};

buttonUpload.args = {
  id: 'file-upload',
  onChange: action('onChange'),
};
