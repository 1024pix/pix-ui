import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Navigation/Tabs',
  tags: ['new'],
  argTypes: {
    variant: {
      name: 'variant',
      description: "Permet de changer la couleur des onglets selon l'application",
      options: ['orga', 'certif', 'primary'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
      type: {
        name: '"primary" | "orga" | "certif"',
        required: true,
      },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: "Label pour la navigation. Nécessaire pour l'accessibilité",
      type: { name: 'string' },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTabs @variant={{this.variant}}>
  <LinkTo @route='' class='active'>
    Lien actif
  </LinkTo>
  <LinkTo @route=''>
    Campagnes
  </LinkTo>
  <LinkTo @route=''>
    Certifications
  </LinkTo>
  <LinkTo @route=''>
    Contenus formatifs
  </LinkTo>
</PixTabs>`,
    context: args,
  };
};

export const primary = Template.bind({});
primary.args = {
  variant: 'primary',
};

export const certif = Template.bind({});
certif.args = {
  variant: 'certif',
};

export const orga = Template.bind({});
orga.args = {
  variant: 'orga',
};
