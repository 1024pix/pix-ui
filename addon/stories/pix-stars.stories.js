import { hbs } from 'ember-cli-htmlbars';
import { number, select, text } from '@storybook/addon-knobs';

export const stars = () => {
  return {
    template: hbs`
      <PixStars
        @count={{count}}
        @total={{total}}
        @alt="{{alt}}"
        @color="{{color}}"
      />
    `,
    context: {
      count: number('count', 2, { range: true, min: 0, max: 10, step: 1 }),
      total: number('total', 5, { range: true, min: 0, max: 10, step: 1 }),
      alt: text('alt', 'message alternatif'),
      color: select('color', [undefined, 'yellow', 'blue', 'grey']),
    },
  }
};
