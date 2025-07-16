import './PixToggleButton.ce.js';

import { html, nothing } from 'lit';

export default {
  title: 'Forms/ToggleButton',
  component: 'pix-toggle-button',
  tags: ['autodocs'],
  argTypes: {
    viewA: {
      name: '#viewA',
      description: "Le contenu de l'option A",
      type: { name: 'string', required: true },
    },
    viewB: {
      name: '#viewB',
      description: "Le contenu de l'option B",
      type: { name: 'string', required: true },
    },
    for: {
      name: 'for',
      description: 'Identifiant du champ à rattacher au label',
      type: { name: 'string', required: true },
    },
    label: {
      name: '#label',
      description: 'Le label du PixToggleButton',
      type: { name: 'string', required: true },
    },
    subLabel: {
      name: 'subLabel',
      description: 'Le sous label du PixToggleButton',
      type: { name: 'string', required: false },
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
    useIcons: {
      name: 'useIcons',
      description: "Définit si l'on utilise des icons dans le PixToggleButton",
      type: { name: 'boolean', required: true },
    },
    toggled: {
      name: 'toggled',
      description: 'Détermine si le PixToggleButton est activé',
      type: { name: 'boolean', required: true },
    },
    onChange: {
      name: '@change',
      description: "Fonction à appeler quand le PixToggleButton change d'état.",
      type: { required: true },
      control: { disable: true },
    },
  },
  render: (args) => {
    const {
      inlineLabel,
      onChange,
      label,
      requiredLabel,
      screenReaderOnly,
      size,
      subLabel,
      toggled,
      useIcons,
      viewA,
      viewB,
    } = args;

    return html`<pix-toggle-button
      for=${args.for}
      inline-label=${inlineLabel || nothing}
      required-label=${requiredLabel}
      screen-reader-only=${screenReaderOnly || nothing}
      use-icons=${useIcons || nothing}
      size=${size || nothing}
      sub-label=${subLabel || nothing}
      toggled=${toggled || nothing}
      @change=${onChange}
    >
      <span slot="label">${label}</span>
      <span slot="viewA">${viewA}</span>
      <span slot="viewB">${viewB}</span>
    </pix-toggle-button>`;
  },
};

export const Default = {
  args: {
    label: 'Mon toggle',
    viewA: 'Option A',
    viewB: 'Option B',
    toggled: false,
    onChange: () => {
      console.log('onChange');
    },
  },
};

export const ScreenReaderOnly = {
  args: {
    screenReaderOnly: true,
    label: 'Mon toggle',
    viewA: 'Option A',
    viewB: 'Option B',
    toggled: false,
    onChange: () => {
      console.log('onChange');
    },
  },
};

export const WithIcons = {
  args: {
    label: 'Mon toggle',
    viewA: 'JE SUIS INVISIBLE',
    viewB: 'INVISIIIIIBLE',
    toggled: false,
    useIcons: true,
    onChange: () => {
      console.log('onChange');
    },
  },
};
