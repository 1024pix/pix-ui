import { hbs } from 'ember-cli-htmlbars';

export const filterBanner = (args) => {
  return {
    template: hbs`
      <PixFilterBanner @title={{title}}>
        <select>
          <option value="22">
            classe de 2nd
          </option>
          <option value="3">
            classe de 3e
          </option>
        </select>
      </PixFilterBanner>
    `,
    context: args,
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
