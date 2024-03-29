import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'basics/Tag/Selectable Tag',
  argTypes: {
    label: {
      name: 'label',
      description: 'Le label du tag sélectionnable',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      name: 'id',
      description: "L'id du tag sélectionnable",
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      name: 'onChange',
      description: 'Fonction à appeler si le tag est sélectionné',
      type: { required: true },
      control: { disable: true },
    },
    checked: {
      name: 'checked',
      description: 'Indiquez si le tag doit être coché',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export const selectableTagDefault = (args) => {
  return {
    template: hbs`<PixSelectableTag
  @label='non sélectionné'
  @id='123'
  @onChange={{this.onChange}}
  @checked={{false}}
/>`,
    context: args,
  };
};

export const selectableTagSelected = (args) => {
  return {
    template: hbs`<PixSelectableTag @label='Sélectionné' @id='456' @onChange={{this.onChange}} @checked={{true}} />`,
    context: args,
  };
};

export const selectableTagMultiple = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div style='display:flex;justify-content:space-around;width:400px;height:100%;padding:10px'>
  <PixSelectableTag @label='Lorem ipsum' @id='1' @onChange={{this.onChange}} @checked={{false}} />
  <PixSelectableTag @label='Lorem ipsum' @id='2' @onChange={{this.onChange}} @checked={{false}} />
  <PixSelectableTag @label='Lorem ipsum' @id='3' @onChange={{this.onChange}} @checked={{false}} />
</div>`,
    context: args,
  };
};
