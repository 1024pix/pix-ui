import { hbs } from 'ember-cli-htmlbars';

import { VARIANTS } from '../../addon/helpers/variants.js';

export default {
  title: 'Other/Block',
  argTypes: {
    variant: {
      name: 'variant',
      description: "Permet de changer la couleur selon l'application",
      options: VARIANTS,
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      type: {
        name: VARIANTS.join(' | '),
        required: false,
      },
    },
    condensed: {
      name: 'condensed',
      description: 'Permet d‘enlever le padding',
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`
      <PixBlock @variant={{this.variant}} @condensed={{this.condensed}}>
        {{this.information}}
      </PixBlock>`,
    context: args,
  };
};

export const neutral = Template.bind({});
neutral.args = {
  variant: 'default',
  information: 'Commun',
};

export const certif = Template.bind({});
certif.args = {
  variant: 'certif',
  information: 'Pour Pix Certif',
};

export const orga = Template.bind({});
orga.args = {
  variant: 'orga',
  information: 'Pour Pix Orga',
};

export const admin = Template.bind({});
admin.args = {
  variant: 'admin',
  information: 'Pour Pix Admin',
};

export const condensed = Template.bind({});
condensed.args = {
  variant: 'primary',
  condensed: true,
  information: 'Condensed',
};
