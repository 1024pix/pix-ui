import { hbs } from 'ember-cli-htmlbars';
import pixRadioButtonStories from './pix-radio-button.stories.js';

export default {
  title: 'Form/Inputs/Radio Button/Variant Tile',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Utiliser une variante graphique du composant',
      options: ['tile'],
      control: { type: 'select' },
      type: { required: true },
    },
    state: {
      name: 'state',
      description: 'Si `isDisabled` permet de marquer le radiobutton comme correcte ou incorrecte',
      options: ['neutral', 'success', 'error'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral' },
      },
    },
    ...pixRadioButtonStories.argTypes,
  },
};

const VariantTileTemplate = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div
  style='border: 1px solid var(--pix-neutral-500); background: var(--pix-neutral-20); padding: var(--pix-spacing-4x); width: 500px'
><PixRadioButton
    @id={{this.id}}
    @isDisabled={{this.isDisabled}}
    checked={{this.checked}}
    @variant={{this.variant}}
    @state={{this.state}}
    @size={{this.size}}
  >
    <:label>{{this.label}}</:label>
  </PixRadioButton></div>`,
    context: args,
  };
};

export const VariantTile = VariantTileTemplate.bind({});
VariantTile.args = {
  id: 'proposal',
  label: 'Une réponse',
  variant: 'tile',
  state: 'neutral',
};

export const isDisabledVariantTile = VariantTileTemplate.bind({});
isDisabledVariantTile.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'tile',
  isDisabled: true,
  state: 'neutral',
};

export const checkedIsDisabledVariantTile = VariantTileTemplate.bind({});
checkedIsDisabledVariantTile.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'tile',
  isDisabled: true,
  checked: true,
  state: 'neutral',
};

export const isDisabledIsSuccessVariantTile = VariantTileTemplate.bind({});
isDisabledIsSuccessVariantTile.args = {
  id: 'accept-newsletter-2',
  label: 'La réponse est correcte',
  variant: 'tile',
  isDisabled: true,
  checked: true,
  state: 'success',
};

export const isDisabledIsErrorVariantTile = VariantTileTemplate.bind({});
isDisabledIsErrorVariantTile.args = {
  id: 'accept-newsletter-2',
  label: 'La réponse est fausse',
  variant: 'tile',
  isDisabled: true,
  checked: true,
  state: 'error',
};
