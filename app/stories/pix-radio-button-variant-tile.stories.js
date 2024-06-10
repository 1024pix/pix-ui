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
};

export const isDisabledVariantTile = VariantTileTemplate.bind({});
isDisabledVariantTile.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'tile',
  isDisabled: true,
};

export const checkedIsDisabledVariantTile = VariantTileTemplate.bind({});
checkedIsDisabledVariantTile.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'tile',
  isDisabled: true,
  checked: true,
};
