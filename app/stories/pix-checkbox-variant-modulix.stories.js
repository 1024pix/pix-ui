import { hbs } from 'ember-cli-htmlbars';

import pixCheckboxStories from './pix-checkbox.stories.js';

export default {
  title: 'Forms/Checkbox/Variant modulix',
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
      description: 'Si `isDisabled` permet de marquer la checkbox comme correcte ou incorrecte',
      options: ['neutral', 'success', 'error'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral' },
      },
    },
    ...pixCheckboxStories.argTypes,
  },
};

const VariantModulixTemplate = (args) => {
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
    @state={{this.state}}
  >
    <:label>{{this.label}}</:label>
  </PixCheckbox></div>`,
    context: args,
  };
};

export const VariantModulix = VariantModulixTemplate.bind({});
VariantModulix.args = {
  id: 'proposal',
  label: 'Une réponse',
  variant: 'modulix',
};

export const isDisabledVariantModulix = VariantModulixTemplate.bind({});
isDisabledVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'modulix',
  state: 'neutral',
  isDisabled: true,
};

export const checkedIsDisabledVariantModulix = VariantModulixTemplate.bind({});
checkedIsDisabledVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'modulix',
  state: 'neutral',
  isDisabled: true,
  checked: true,
};

export const isIndeterminateIsDisabledVariantModulix = VariantModulixTemplate.bind({});
isIndeterminateIsDisabledVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'modulix',
  state: 'neutral',
  isDisabled: true,
  checked: true,
  isIndeterminate: true,
};

export const isDisabledIsSuccessVariantModulix = VariantModulixTemplate.bind({});
isDisabledIsSuccessVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'modulix',
  isDisabled: true,
  checked: true,
  state: 'success',
};

export const isDisabledIsErrorVariantModulix = VariantModulixTemplate.bind({});
isDisabledIsErrorVariantModulix.args = {
  id: 'accept-newsletter-2',
  label: 'Recevoir la newsletter',
  variant: 'modulix',
  isDisabled: true,
  checked: true,
  state: 'error',
};
