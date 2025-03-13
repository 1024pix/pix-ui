import { hbs } from 'ember-cli-htmlbars';

import { VARIANTS } from '../../addon/helpers/variants.js';

export default {
  title: 'Other/Contenu',
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
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixBlock @variant={{this.variant}}>
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
