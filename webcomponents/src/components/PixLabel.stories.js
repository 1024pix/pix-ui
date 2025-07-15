import './PixLabel.js';

import { html } from 'lit';

export default {
  title: 'Forms/Label',
  component: 'pix-label',
  tags: ['autodocs'],
  argTypes: {
    for: {
      name: 'for',
      description: 'Identifiant du champ à rattacher au label',
      type: { name: 'string', required: true },
    },
    label: {
      name: '#label',
      description: 'Le label du champ',
      type: { name: 'string', required: true },
    },
    subLabel: {
      name: 'subLabel',
      description: 'Un descriptif complétant le label',
      type: { name: 'string', required: false },
    },
    requiredLabel: {
      name: 'requiredLabel',
      description: 'Label indiquant que le champ est requis.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    screenReaderOnly: {
      name: 'screenReaderOnly',
      description: "Permet de rendre le label lisible uniquement par les lecteurs d'écran",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: "Permet de changer la couleur à l'état disabled",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      name: 'size',
      description: 'Correspond à la taille de la police du label.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: { type: 'select' },
      options: ['small', 'large', 'default'],
    },
    inlineLabel: {
      name: 'inlineLabel',
      description:
        'Permet de ne pas afficher la marge pour les éléments de formulaire inline ( checkbox / radio )',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  },
  render: (args) => {
    const { inlineLabel, label, requiredLabel, screenReaderOnly, size, subLabel } = args;

    return html`<pix-label
      for="${args.for}"
      inline-label="${inlineLabel}"
      required-label="${requiredLabel}"
      screen-reader-only="${screenReaderOnly}"
      size="${size}"
      sub-label="${subLabel}"
    >
      ${label}
    </pix-label>`;
  },
};

export const Default = {
  args: {
    label: 'Prénom',
  },
};

export const withSubLabel = {
  args: {
    label: 'Prénom',
    subLabel: 'a small information',
  },
};

export const withRequiredLabel = {
  args: {
    label: 'Prénom',
    requiredLabel: 'Champ obligatoire',
  },
};

export const screenReaderOnlyLabel = {
  args: {
    label: 'Prénom',
    screenReaderOnly: true,
  },
};
