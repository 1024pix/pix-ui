import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const buttonUpload = (args) => {
  return {
    template: hbs`<PixButtonUpload
  @id={{this.id}}
  @onChange={{this.onChange}}
  @shape={{this.shape}}
  @backgroundColor={{this.backgroundColor}}
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

export const argTypes = {
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
  shape: {
    name: 'shape',
    description: 'forme: `rounded`,`squircle`',
    type: { name: 'string', required: false },
    options: ['rounded', 'squircle'],
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'squircle' },
    },
  },
  backgroundColor: {
    name: 'backgroundColor',
    description:
      'color: `blue`, `green`, `yellow`, `red`, `grey`, `transparent-light`, `transparent-dark`',
    options: ['blue', 'green', 'yellow', 'red', 'grey', 'transparent-light', 'transparent-dark'],
    type: { name: 'string', required: false },
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'blue' },
    },
  },
  size: {
    name: 'size',
    description: 'taille: `big`,`small`',
    options: ['big', 'small'],
    type: { name: 'string', required: false },
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'big' },
    },
  },
  isBorderVisible: {
    name: 'isBorderVisible',
    description:
      'Paramètre utilisé seulement quand le `backgroundColor` est `transparent-light` ou `transparent-dark`',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};
