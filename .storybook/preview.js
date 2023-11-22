const preview = {
  parameters: {
    layout: 'centered',
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
    parameters: {
      // Sets a delay for the component's stories
      chromatic: { delay: 600 },
    },
    options: {
      storySort: {
        order: [
          'Utiliser Pix UI',
          ['Installation', 'Utiliser un composant'],
          'Développement',
          [
            'Design System',
            'Créer un composant',
            'Bonnes pratiques',
            'Breaking changes',
            'Faire une release',
            'Architecture',
            'Storybook'
          ],
        ],
      },
    },
  }
};
export default preview;
