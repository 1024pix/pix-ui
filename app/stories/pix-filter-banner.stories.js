import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const filterBanner = (args) => {
  return {
    template: hbs`<PixFilterBanner
  @title={{this.title}}
  @details={{this.details}}
  @clearFiltersLabel={{this.clearFiltersLabel}}
  @onClearFilters={{this.onClearFilters}}
>
  <PixSelect @options={{this.options}} @onChange={{this.onChange}} @label="mon label" @screenReaderOnly={{true}} @placeholder="placeholer"/>
  <PixSelect @options={{this.options}} @onChange={{this.onChange}} @label="mon label" @screenReaderOnly={{true}} @placeholder="placeholer"/>
  <PixSelect @options={{this.options}} @onChange={{this.onChange}} @label="mon label" @screenReaderOnly={{true}} @placeholder="placeholer"/>
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
};

export const argTypes = {
  title: {
    name: 'title',
    description: 'Titre du filtre',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  details: {
    name: 'details',
    description: 'Détails du filtre',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  clearFiltersLabel: {
    name: 'clearFiltersLabel',
    description: 'libellé du bouton',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  onClearFilters: {
    name: 'onClearFilters',
    description: 'fonction à appeler pour déclencher l’action de suppression des filtres',
    type: { required: false },
    defaultValue: action('onClearFilters'),
  },
};
