import { hbs } from 'ember-cli-htmlbars';
import pixCheckboxStories from './pix-checkbox.stories.js';

export default {
  title: 'Form/Inputs/Checkbox/Variant Tile',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Utiliser une variante graphique du composant',
      options: ['tile'],
      control: { type: 'select' },
      type: { required: true },
    },
    ...pixCheckboxStories.argTypes,
  },
};

const VariantTileTemplate = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div
  style='border: 1px solid var(--pix-neutral-500); padding: var(--pix-spacing-4x); width: 500px'
><PixCheckbox
    @id={{this.id}}
    @isIndeterminate={{this.isIndeterminate}}
    @checked={{this.checked}}
    @isDisabled={{this.isDisabled}}
    @variant={{this.variant}}
  >
    <:label>{{this.label}}</:label>
  </PixCheckbox></div>`,
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

export const isIndeterminateIsDisabledVariantTile = VariantTileTemplate.bind({});
isIndeterminateIsDisabledVariantTile.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'tile',
  isDisabled: true,
  checked: true,
  isIndeterminate: true,
};
