import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Other/Card',
  tags: ['new'],
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Choisir une variante',
      options: ['orga', 'certif', 'admin', 'primary'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixCard @variant={{this.variant}} @title={{this.title}} @subtitle={{this.subtitle}} @image={{this.image}} @wide={{this.wide}}>
  <:tag><PixTag @color='green'>Parcours Apprenants</PixTag></:tag>
  <:description>
    {{this.description}}
  </:description>
  <:footer>
    {{this.footer}}
  </:footer>
</PixCard>`,

    context: args,
  };
};

export const Card = Template.bind({});
Card.args = {
  variant: 'orga',
  title: 'Parcours Combiné IA',
  subtitle: 'Autres',
  image: 'https://assets.pix.org/sites/orga/parcours-apprenant.png',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum nisl sapien, at viverra lorem facilisis in.',
  footer: '12 sujets • Accès sans compte',
};

export const WideCard = Template.bind({});
WideCard.args = {
  ...Card.args,
  wide: true,
};
