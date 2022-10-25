import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
      <PixTooltip
        @id={{this.id}}
        @position={{this.position}}
        @isLight={{this.isLight}}
        @isInline={{this.isInline}}
        @isWide={{this.isWide}}
        @hide={{this.hide}}>
        <:triggerElement>
          <PixButton aria-describedby={{this.id}}>
            {{this.label}}
          </PixButton>
        </:triggerElement>

        <:tooltip>
          {{this.text}}
        </:tooltip>
      </PixTooltip>
    `,
    context: args,
  };
};

const TemplateWithHTMLElement = (args) => {
  return {
    template: hbs`
      <PixTooltip
        @id={{this.id}}
        @isInline=true>
        <:triggerElement>
          <PixButton aria-describedby={{this.id}}>
            {{this.label}}
          </PixButton>
        </:triggerElement>

        <:tooltip>
          <FaIcon @icon="up-right-from-square" /> <strong>HTML/Ember</strong>
        </:tooltip>
      </PixTooltip>
    `,
    context: args,
  };
};

const TemplateWithIconElement = (args) => {
  return {
    template: hbs`
      <PixTooltip
        @id={{this.id}}
        @isInline=true>
        <:triggerElement>
          <button style='padding:0; margin-left:4px; line-height:0;'>
            <FaIcon class="external-link" @icon="up-right-from-square" />
          </button>
        </:triggerElement>

        <:tooltip>
         {{this.text}}
        </:tooltip>
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
  id: 'tooltip-light',
  isLight: true,
};

export const isWide = Template.bind({});
isWide.args = {
  ...Default.args,
  id: 'tooltip-wide',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas molestie mauris vel viverra.',
  isWide: true,
};

export const isInline = Template.bind({});
isInline.args = {
  ...Default.args,
  id: 'tooltip-large',
  text: 'Je suis une trèèèèèèèès longue information',
  isInline: true,
};

export const left = Template.bind({});
left.args = {
  ...Default.args,
  id: 'tooltip-left',
  label: 'Mon infobulle apparaît à gauche',
  position: 'left',
  isInline: true,
};

export const right = Template.bind({});
right.args = {
  ...Default.args,
  id: 'tooltip-right',
  label: 'Mon infobulle apparaît à droite',
  position: 'right',
  isInline: true,
};

export const bottom = Template.bind({});
bottom.args = {
  ...Default.args,
  id: 'tooltip-bottom',
  label: 'Mon infobulle apparaît en bas',
  position: 'bottom',
};

export const hide = Template.bind({});
hide.args = {
  label: 'À survoler pour voir la tooltip',
  text: "Ne devrait pas s'afficher",
  hide: true,
};

export const WithHTML = TemplateWithHTMLElement.bind({});
WithHTML.args = {
  label: 'À survoler pour voir la tooltip',
};

export const WithIcon = TemplateWithIconElement.bind({});
Default.args = {
  text: 'Hello World',
  label: 'À survoler pour voir la tooltip',
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
  hide: {
    name: 'hide',
    description: 'Masquer la tooltip',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
};
