import { hbs } from 'ember-cli-htmlbars';

import pixRadioButtonStories from './pix-radio-button.stories.js';

export default {
  title: 'Forms/Radio Button/Variant Modulix',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Utiliser une variante graphique du composant',
      options: ['modulix'],
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

const VariantModulixTemplate = (args) => {
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

export const VariantModulix = VariantModulixTemplate.bind({});
VariantModulix.args = {
  id: 'proposal',
  label: 'Une réponse',
  variant: 'modulix',
  state: 'neutral',
};

export const isDisabledVariantModulix = VariantModulixTemplate.bind({});
isDisabledVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'modulix',
  isDisabled: true,
  state: 'neutral',
};

export const checkedIsDisabledVariantModulix = VariantModulixTemplate.bind({});
checkedIsDisabledVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'modulix',
  isDisabled: true,
  checked: true,
  state: 'neutral',
};

export const isDisabledIsSuccessVariantModulix = VariantModulixTemplate.bind({});
isDisabledIsSuccessVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'La réponse est correcte',
  variant: 'modulix',
  isDisabled: true,
  checked: true,
  state: 'success',
};

export const isDisabledIsErrorVariantModulix = VariantModulixTemplate.bind({});
isDisabledIsErrorVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'La réponse est fausse',
  variant: 'modulix',
  isDisabled: true,
  checked: true,
  state: 'error',
};
