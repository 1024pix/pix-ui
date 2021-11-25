import { hbs } from 'ember-cli-htmlbars';

export const selectableTagDefault = (args) => {
  return {
    template: hbs`
      <PixSelectableTag  
        @label="non sélectionné"
        @id="123"
        @onChange={{onChange}}
        @checked={{false}}
      />
    `,
    context: args,
  };
};

export const selectableTagSelected = (args) => {
  return {
    template: hbs`
      <PixSelectableTag  
        @label="Sélectionné"
        @id="456"
        @onChange={{onChange}}
        @checked={{true}}
      />
    `,
    context: args,
  };
};

export const selectableTagMultiple = (args) => {
  return {
    template: hbs`
      <div style="display:flex;justify-content:space-around;width:400px;height:100%;padding:10px">
        <PixSelectableTag
          @label="Lorem ipsum"
          @id="1"
          @onChange={{onChange}}
          @checked={{false}}
        />
        <PixSelectableTag
          @label="Lorem ipsum"
          @id="2"
          @onChange={{onChange}}
          @checked={{false}}
        />
        <PixSelectableTag
          @label="Lorem ipsum"
          @id="3"
          @onChange={{onChange}}
          @checked={{false}}
        />
      </div>
    `,
    context: args,
  };
};

export const argTypes = {
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
};
