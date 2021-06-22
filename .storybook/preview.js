export const parameters = {
  a11y: {
    element: '#root',
  },
  viewMode: 'docs',
  docs: {
    iframeHeight: 400,
    transformSource: (src) => {
      const match = /hbs`\s?([\s\S]*)`/g.exec(src);
      return match ? match[1] : src;
    },
  },
  controls: { expanded: true },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  options: {
    storySort: {
      order: [
        'Utiliser Pix UI',
        ['Installation', 'Utiliser un composant'],
        'Développement',
        ['Design System', 'Utiliser un composant', 'Créer un composant', 'Bonnes pratiques', 'Architecture', 'Storybook'],
      ],
    },
  },
};
