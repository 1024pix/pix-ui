import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Basics/Button',
  argTypes: {
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
    backgroundColor: {
      name: 'backgroundColor',
      description:
        'color: `primary`, `secondary`, `success`, `error`, `neutral`, `transparent-light`, `transparent-dark`',
      options: [
        'primary',
        'secondary',
        'success',
        'error',
        'neutral',
        'transparent-light',
        'transparent-dark',
      ],
      type: { name: 'string', required: false },
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    iconBefore: {
      name: 'iconBefore',
      description: `Nom de l'icône font-awesome à afficher **avant** le label`,
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['trash-can', 'heart', 'magnifying-glass', 'plus', 'xmark'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
    },
    iconAfter: {
      name: 'iconAfter',
      description: `Nom de l'icône font-awesome à afficher **après** le label`,
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['trash-can', 'heart', 'magnifying-glass', 'plus', 'xmark'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
    },
    prefixIconBefore: {
      name: 'prefixIconBefore',
      description: `Permet d'ajouter un préfix à l'icone devant le label pour appliquer un style particulier`,
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['fas', 'far'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
    },
    prefixIconAfter: {
      name: 'prefixIconAfter',
      description: `Permet d'ajouter un préfix à l'icone derrière le label pour appliquer un style particulier`,
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['fas', 'far'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
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
  },
};

const Template = (args) => ({
  template: hbs`<section style={{this.style}}>
  <PixButton
    @triggerAction={{this.triggerAction}}
    @loadingColor={{this.loadingColor}}
    @backgroundColor={{this.backgroundColor}}
    @isDisabled={{this.isDisabled}}
    @isLoading={{this.isLoading}}
    @size={{this.size}}
    @isBorderVisible={{this.isBorderVisible}}
    @iconBefore={{this.iconBefore}}
    @iconAfter={{this.iconAfter}}
    @prefixIconBefore={{this.prefixIconBefore}}
    @prefixIconAfter={{this.prefixIconAfter}}
  >
    {{this.label}}
  </PixButton>
</section>
{{#each this.extraButtons as |button|}}
  <section style={{button.style}}>
    <PixButton
      @triggerAction={{this.triggerAction}}
      @loadingColor={{button.loadingColor}}
      @backgroundColor={{button.backgroundColor}}
      @isDisabled={{button.isDisabled}}
      @isLoading={{button.isLoading}}
      @size={{button.size}}
      @isBorderVisible={{button.isBorderVisible}}
      @iconBefore={{button.iconBefore}}
      @iconAfter={{button.iconAfter}}
      @prefixIconBefore={{this.prefixIconBefore}}
      @prefixIconAfter={{this.prefixIconAfter}}
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
  size: 'big',
  backgroundColor: 'primary',
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
  label: 'Bouton avec background primary (default)',
  extraButtons: [
    {
      ...Default.args,
      label: 'Bouton avec background success',
      backgroundColor: 'success',
    },
    {
      ...Default.args,
      label: 'Bouton avec background secondary',
      backgroundColor: 'secondary',
    },
    {
      ...Default.args,
      label: 'Bouton avec background error',
      backgroundColor: 'error',
    },
    {
      ...Default.args,
      label: 'Bouton avec background neutral',
      backgroundColor: 'neutral',
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

export const icons = Template.bind({});
icons.args = {
  ...Default.args,
  iconBefore: 'magnifying-glass',
  iconAfter: 'heart',
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

export const size = Template.bind({});
size.args = {
  ...Default.args,
  label: 'Bouton small',
  size: 'small',
};
