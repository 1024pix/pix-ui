import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`<PixInformationsList @informations={{this.informations}}></PixInformationsList>`,
    context: args,
  };
};
export const Default = Template.bind({});
Default.args = {
  informations: [
    {
      title: 'Arbousier',
      description:
        "L'Arbousier parfois appelé Arbre à fraises est une espèce d'arbustes ou de petits arbres de la famille des Ericaceae",
    },
    {
      title: 'Concupiscent',
      description: 'Qui éprouve de la concupiscence, qui est attaché aux plaisirs sensuels',
    },
    {
      title: 'Pipistrelle',
      description:
        'La Pipistrelle commune est une petite espèce de chauve-souris européenne, de la famille des Vespertilionidés',
    },
  ],
};

export const argTypes = {
  informations: {
    name: 'informations',
    description:
      'Les informations sont représentées par un tableau d‘objet contenant les propriétés ``title`` et ``description``',
    type: { name: 'array', required: true },
  },
};
