import { hbs } from 'ember-cli-htmlbars';

export const modal = (args) => {
  return {
    template: hbs`
      <PixModal>
      </PixModal>
    `,
    context: args,
  };
};

export const argTypes = {

};
