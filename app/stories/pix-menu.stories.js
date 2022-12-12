import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const Template = (args) => {
  return {
    template: hbs`<PixMenu
      @show={{this.show}}
      @items={{this.items}}
      @onClick={{this.onClick}}
      as |item|
    >
      {{item.label}}
    </PixMenu>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  show: true,
  items: [
    {
      label: 'Option 1',
      value: '1',
    },
  ],
  onClick: action('onClick'),
};

export const Hide = Template.bind({});
Hide.args = {
  show: false,
  items: [
    {
      label: 'Option 1',
      value: '1',
    },
  ],
  onClick: action('onClick'),
};

const TemplateWithYield = (args) => {
  return {
    template: hbs`<PixMenu
      @items={{this.items}}
      @onClick={{this.onClick}}
      as |item|
    >
      <FaIcon @icon={{item.icon}} /> {{item.label}}
    </PixMenu>`,
    context: args,
  };
};

export const WithYield = TemplateWithYield.bind({});
WithYield.args = {
  show: true,
  items: [
    {
      label: 'Option 1',
      icon: 'sun',
      value: '1',
    },
    {
      label: 'Option 2',
      icon: 'moon',
      value: '2',
    },
  ],
  onClick: action('onClick'),
};

const TemplateWithoutClick = (args) => {
  return {
    template: hbs`<PixMenu
      @items={{this.items}}
      as |item className|
    >
      <div class={{className}} {{on "click" this.onClick}}>{{item.label}}</div>
    </PixMenu>`,
    context: args,
  };
};

export const WithoutClick = TemplateWithoutClick.bind({});
WithoutClick.args = {
  show: true,
  items: [
    {
      label: 'Option 1',
      value: '1',
    },
  ],
  onClick: action('onClick'),
};

const TemplateWithFilter = (args) => {
  return {
    template: hbs`<PixMenu
      @items={{this.items}}
    >
      <:filter as |value onChange|>
        <PixInput
          @id='filter'
          @ariaLabel='Filter'
          placeholder='Recherche'
          @value={{value}}
          {{on "input" onChange}}
        />
      </:filter>
      <:default as |item className|>
        <div class={{className}} {{on "click" this.onClick}}>{{item.label}}</div>
      </:default>
    </PixMenu>`,
    context: args,
  };
};

export const WithFilter = TemplateWithFilter.bind({});
WithFilter.args = {
  show: true,
  items: [
    {
      label: 'Salade',
      value: '1',
    },
    {
      label: 'Tomate',
      value: '2',
    },
    {
      label: 'Oignon',
      value: '3',
    },
  ],
  onClick: action('onClick'),
};
