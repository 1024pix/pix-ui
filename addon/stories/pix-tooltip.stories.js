import { hbs } from 'ember-cli-htmlbars';

export default { title: 'Tooltip' };

export const tooltip = () => {
  return {
    template: hbs`
      <div style="padding:100px 200px; display:inline-block">
        <PixTooltip
          @text='In accumsan scelerisque sapien, et lacinia nisi efficitur a.'
          @position='top'
          >
          <button>Tooltip top</button>
        </PixTooltip>

        <br><br>

        <PixTooltip
          @text='In accumsan scelerisque sapien, et lacinia nisi efficitur a.'
          @position='right'
          >
          <button>Tooltip right</button>
        </PixTooltip>

        <br><br>

        <PixTooltip
          @text='In accumsan scelerisque sapien, et lacinia nisi efficitur a.'
          @position='bottom'
          >
          <button>Tooltip bottom</button>
        </PixTooltip>

        <br><br>

        <PixTooltip
          @text='In accumsan scelerisque sapien, et lacinia nisi efficitur a.'
          @position='left'
          >
          <button>Tooltip left</button>
        </PixTooltip>
      </div>
    `,
  }
};

tooltip.story = {
  parameters: {
    notes: {
      markdown: `
      # Tooltip
      Une infobulle qui s'affiche au survol d'un élément.
      
      ___

      # Usage
      ~~~javascript
      <PixTooltip
        @text='Texte d'information à afficher'
        @position='bottom'
        >
          // ce que je veux ici, par exemple un bouton : 
          <button>Mon élément à survoler</button>
      </PixTooltip>
      ~~~

      ___

      # Props
      
| Nom           | Type          | Valeurs possibles |
| ------------- |:-------------:|------------------:|
| text          | string        |            -             |
| position      | string        | "top", "right", "bottom", "left"     |
    `,
    },
  },
};
