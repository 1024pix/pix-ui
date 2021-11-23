import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
      <PixTooltip
        @id="tooltip-1"
        @text={{this.text}}
        @position={{this.position}}
        @isLight={{this.isLight}}
        @isInline={{this.isInline}}
        @isWide={{this.isWide}}
        @unescapeHtml={{this.unescapeHtml}}
      >
        <PixButton aria-describedby="tooltip-1">
          {{this.label}}
        </PixButton>
      </PixTooltip>
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World',
  label: 'À survoler pour voir la tooltip',
};

export const isLight = Template.bind({});
isLight.args = {
  ...Default.args,
  isLight: true,
};

export const isWide = Template.bind({});
isWide.args = {
  ...Default.args,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas molestie mauris vel viverra.',
  isWide: true,
};

export const isInline = Template.bind({});
isInline.args = {
  ...Default.args,
  text: 'Je suis une trèèèèèèèès longue information',
  isInline: true,
};

export const left = Template.bind({});
left.args = {
  ...Default.args,
  label: 'Mon infobulle apparaît à gauche',
  position: 'left',
  isInline: true,
};

export const right = Template.bind({});
right.args = {
  ...Default.args,
  label: 'Mon infobulle apparaît à droite',
  position: 'right',
  isInline: true,
};

export const bottom = Template.bind({});
bottom.args = {
  ...Default.args,
  label: 'Mon infobulle apparaît en bas',
  position: 'bottom',
};

export const unescapeHtml = Template.bind({});
unescapeHtml.args = {
  ...Default.args,
  text: 'Hello <b style="color: red;">W</b>orld',
  label: "J'affiche du html",
  unescapeHtml: true,
};

export const argTypes = {
  id: {
    name: 'id',
    description: 'Identifiant permettant de référencer le déclencheur via aria-describedby',
    type: { name: 'string', required: true },
  },
  text: {
    name: 'text',
    defaultValue: 'Tooltiptop',
    description: 'Texte à afficher',
    type: { name: 'string', required: false },
  },
  position: {
    name: 'position',
    description: 'Position de la tooltip',
    type: { name: 'string', required: false },
    table: { defaultValue: { summary: 'top' } },
    control: {
      type: 'select',
      options: [
        'top',
        'top-left',
        'top-right',
        'right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
      ],
    },
  },
  isLight: {
    name: 'isLight',
    description: 'Affichage en mode clair',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
  isInline: {
    name: 'isInline',
    description: 'Affichage en une seule ligne',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
  isWide: {
    name: 'isWide',
    description: 'Affichage large',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
  unescapeHtml: {
    name: 'unescapeHtml',
    description: "Évite d'échapper les caractères HTML",
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
};
