import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/Filter banner',
  argTypes: {
    title: {
      name: 'title',
      description: 'Titre du filtre',
      type: { name: 'string', required: false },
    },
    details: {
      name: 'details',
      description: 'Détails du filtre',
      type: { name: 'string', required: false },
    },
    clearFiltersLabel: {
      name: 'clearFiltersLabel',
      description: 'libellé du bouton',
      type: { name: 'string', required: false },
    },
    onClearFilters: {
      name: 'onClearFilters',
      description: 'fonction à appeler pour déclencher l’action de suppression des filtres',
      type: { required: false },
    },
    isClearFilterButtonDisabled: {
      name: 'isClearFilterButtonDisabled',
      description: 'Désactiver le button de la suppresion des filtres',
      type: { name: 'boolean', required: true },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export const filterBanner = (args) => {
  return {
    template: hbs`<PixFilterBanner
  @title={{this.title}}
  @details={{this.details}}
  @clearFiltersLabel={{this.clearFiltersLabel}}
  @onClearFilters={{this.onClearFilters}}
  @isClearFilterButtonDisabled={{this.isClearFilterButtonDisabled}}
>
  <PixSelect
    @options={{this.options}}
    @onChange={{this.onChange}}
    @screenReaderOnly={{true}}
    @placeholder='placeholer'
  >
    <:label>mon label</:label>
  </PixSelect>
  <PixSelect
    @options={{this.options}}
    @onChange={{this.onChange}}
    @screenReaderOnly={{true}}
    @placeholder='placeholer'
  >
    <:label>mon label</:label>
  </PixSelect>
  <PixSelect
    @options={{this.options}}
    @onChange={{this.onChange}}
    @screenReaderOnly={{true}}
    @placeholder='placeholer'
  >
    <:label>mon label</:label>
  </PixSelect>
</PixFilterBanner>`,
    context: args,
  };
};
filterBanner.args = {
  title: 'Filtres',
  details: 'Des détails sur le filtre',
  clearFiltersLabel: 'Effacer les filtres',
  options: [
    { value: '1', label: 'Tomate' },
    { value: '2', label: 'Mozza' },
  ],
  onChange: action('select-onchange'),
  onClearFilters: action('onClearFilters'),
};
