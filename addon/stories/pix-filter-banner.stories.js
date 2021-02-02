import { hbs } from 'ember-cli-htmlbars';

export const filterBanner = (args) => {
  return {
    template: hbs`
      <PixFilterBanner @title={{title}} @details={{details}}>
        <PixSelect @options={{options}} @onChange={{onChange}} />
        <PixSelect @options={{options}} @onChange={{onChange}} />
      </PixFilterBanner>
    `,
    context: {
      title: 'Filtres',
      details: 'Des détails sur le filtre',
      ...args,
      options:  [{ value: '1', label: 'Tomate' }],
      onChange: console.log,
    },
  };
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
  }
};
