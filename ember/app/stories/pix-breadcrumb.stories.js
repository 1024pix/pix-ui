import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Navigation/Breadcrumb',
  argTypes: {
    links: {
      name: 'links',
      description: "Tableau contenant toutes les étapes du fil d'Ariane",
      type: { name: 'array', required: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixBreadcrumb @links={{this.links}} aria-label="Fil d'Ariane" />`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      route: 'authenticated',
      label: 'Une poule sur un mur',
    },
    {
      route: 'authenticated.campaigns.campaign.activity',
      label: 'Qui picote du pain dur',
      model: 'campaign',
    },
    {
      route: null,
      label: 'Picoti, picota',
    },
  ],
};
