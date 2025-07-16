import './PixTag.ce.js';

import { html, nothing } from 'lit';

const description =
  "<p>Un `Tag` est un type de `Chips` qui permet de mettre en avant une information ou bien de la catégoriser.</p><p>Il est possible de surcharger le style d'un `PixTag` via l'attribut class ainsi que de passer n'importe quel attribut sur sa `div` parente (par exemple, un `aria-label`)</p>";

export default {
  title: 'PixTag',
  component: 'pix-tag',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      name: 'color',
      description: 'Couleur du tag',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'select',
      },
      options: [
        'blue',
        'blue-light',
        'dark',
        'error',
        'green',
        'grey',
        'neutral',
        'primary',
        'purple',
        'secondary',
        'success',
        'tertiary',
        'white',
        'yellow',
      ],
    },
  },
};

export const Primary = {
  args: {
    color: 'primary',
  },
  render: ({ color }) => html` <pix-tag color=${color || nothing}> tag text </pix-tag>`,
};
