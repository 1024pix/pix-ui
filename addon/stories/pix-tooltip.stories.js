import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
      <PixTooltip
        @text={{this.text}}
        @position={{this.position}}
        @isLight={{this.isLight}}
        @isInline={{this.isInline}}
        @isWide={{this.isWide}}
        >
          <PixButton>{{this.label}}</PixButton>
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
  ... Default.args,
  isLight: true
};

export const isWide = Template.bind({});
isWide.args = {
  ... Default.args,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas molestie mauris vel viverra.',
  isWide: true
};

export const isInline = Template.bind({});
isInline.args = {
  ... Default.args,
  text: 'Je suis une trèèèèèèèès longue information',
  isInline: true
};

export const left = Template.bind({});
left.args = {
  ... Default.args,
  label:'Mon infobulle apparaît à gauche',
  position: 'left',
  isInline: true
};

export const right = Template.bind({});
right.args = {
  ... Default.args,
  label: 'Mon infobulle apparaît à droite',
  position: 'right',
  isInline: true
};

export const bottom = Template.bind({});
bottom.args = {
  ... Default.args,
  label: 'Mon infobulle apparaît en bas',
  position: 'bottom'
};

export const argTypes = {
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
    control: { type: 'select', options: ['top', 'top-left', 'top-right', 'right', 'bottom', 'bottom-left', 'bottom-right', 'left'] },
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
};
