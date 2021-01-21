import { hbs } from 'ember-cli-htmlbars';

export const filterBanner = (args) => {
  return {
    template: hbs`
      <PixFilterBanner @title={{title}}>
        <PixSelect @options={{options}} @onChange={{onChange}} />
        <PixSelect @options={{options}} @onChange={{onChange}} />
      </PixFilterBanner>
    `,
    context: {
      title: 'Filtres',
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
  }
};
