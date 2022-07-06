import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => ({
  template: hbs`
    <section style={{this.style}}>
      <PixButton
        @triggerAction={{action triggerAction}}
        @loadingColor={{loadingColor}}
        @shape={{shape}}
        @backgroundColor={{backgroundColor}}
        @isDisabled={{isDisabled}}
        @isLoading={{isLoading}}
        @size={{size}}
        @isBorderVisible={{isBorderVisible}}
      >
        {{this.label}}
      </PixButton>
    </section>
    {{#each extraButtons as |button|}}
      <section style={{button.style}}>
        <PixButton
          @triggerAction={{action triggerAction}}
          @loadingColor={{button.loadingColor}}
          @shape={{button.shape}}
          @backgroundColor={{button.backgroundColor}}
          @isDisabled={{button.isDisabled}}
          @isLoading={{button.isLoading}}
          @size={{button.size}}
          @isBorderVisible={{button.isBorderVisible}}
        >
          {{button.label}}
        </PixButton>
      </section>
    {{/each}}`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  loadingColor: 'white',
  shape: 'squircle',
  size: 'big',
  backgroundColor: 'blue',
  label: 'Bouton',
};

export const borders = Template.bind({});
borders.args = {
  ...Default.args,
  label: 'Bouton avec bordure sur fond clair',
  backgroundColor: 'transparent-light',
  loadingColor: 'grey',
  isBorderVisible: true,
  extraButtons: [
    {
      ...Default.args,
      label: 'Bouton avec bordure sur fond sombre',
      style: 'background-color: #775555',
      backgroundColor: 'transparent-dark',
      isBorderVisible: true,
    },
  ],
};

export const colors = Template.bind({});
colors.args = {
  ...Default.args,
  label: 'Bouton avec background blue (default)',
  extraButtons: [
    {
      ...Default.args,
      label: 'Bouton avec background green',
      backgroundColor: 'green',
    },
    {
      ...Default.args,
      label: 'Bouton avec background yellow',
      backgroundColor: 'yellow',
    },
    {
      ...Default.args,
      label: 'Bouton avec background red',
      backgroundColor: 'red',
    },
    {
      ...Default.args,
      label: 'Bouton avec background grey',
      backgroundColor: 'grey',
    },
    {
      ...Default.args,
      label: 'Bouton avec bordure sur fond clair',
      backgroundColor: 'transparent-light',
      loadingColor: 'grey',
      isBorderVisible: true,
    },
    {
      ...Default.args,
      label: 'Bouton avec bordure sur fond sombre',
      style: 'background-color: #775555',
      backgroundColor: 'transparent-dark',
      isBorderVisible: true,
    },
  ],
};

export const disabled = Template.bind({});
disabled.args = {
  ...Default.args,
  label: 'Bouton désactivé',
  isDisabled: true,
};

export const loader = Template.bind({});
loader.args = {
  ...Default.args,
  label: 'Bouton avec loader au clic',
  backgroundColor: 'yellow',
  loadingColor: 'grey',
  triggerAction: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  },
  extraButtons: [
    {
      ...Default.args,
      isLoading: true,
    },
  ],
};

export const shape = Template.bind({});
shape.args = {
  ...Default.args,
  label: 'Bouton rounded',
  shape: 'rounded',
};

export const size = Template.bind({});
size.args = {
  ...Default.args,
  label: 'Bouton small',
  size: 'small',
};

export const argsTypes = {
  type: {
    name: 'type',
    description: 'type du bouton',
    type: { required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'button' },
    },
  },
  triggerAction: {
    name: 'triggerAction',
    description: 'fonction à appeler en cas de clic, optionnel si le bouton est de type submit',
    type: { required: true },
    control: { disable: true },
  },
  loadingColor: {
    name: 'loadingColor',
    description: 'couleur de chargement: `white`, `grey`',
    type: { name: 'string', required: false },
    options: ['white', 'grey'],
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'white' },
    },
  },
  shape: {
    name: 'shape',
    description: 'forme: `rounded`,`squircle`',
    type: { name: 'string', required: false },
    options: ['rounded', 'squircle'],
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'squircle' },
    },
  },
  backgroundColor: {
    name: 'backgroundColor',
    description:
      'color: `blue`, `green`, `yellow`, `red`, `grey`, `transparent-light`, `transparent-dark`',
    options: ['blue', 'green', 'yellow', 'red', 'grey', 'transparent-light', 'transparent-dark'],
    type: { name: 'string', required: false },
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'blue' },
    },
  },
  isDisabled: {
    name: 'isDisabled',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  isLoading: {
    name: 'isLoading',
    description:
      'Affiche un loader. Si `@triggerAction` retourne une promesse alors le loading est géré automatiquement.',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  size: {
    name: 'size',
    description: 'taille: `big`,`small`',
    options: ['big', 'small'],
    type: { name: 'string', required: false },
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'big' },
    },
  },
  isBorderVisible: {
    name: 'isBorderVisible',
    description:
      'Paramètre utilisé seulement quand le `backgroundColor` est `transparent-light` ou `transparent-dark`',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  route: {
    name: 'route',
    description: 'Déprécié et remplacé par le composant PixButtonLink',
    type: { name: 'string', required: false },
  },
  model: {
    name: 'model',
    description: 'Déprécié et remplacé par le composant PixButtonLink',
    type: { required: false },
  },
};
