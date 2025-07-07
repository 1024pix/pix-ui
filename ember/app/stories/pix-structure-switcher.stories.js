import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Navigation/StructureSwitcher',
  argTypes: {
    label: {
      name: 'label',
      description: 'Libellé du bouton',
      type: { name: 'string', required: true },
    },
    structures: {
      name: 'structures',
      description: 'Liste des structures à afficher dans le menu',
      type: { name: 'array', required: true },
    },
    onChange: {
      name: 'onChange',
      description: 'Fonction à appeler quand une structure est sélectionnée.',
      type: { required: true },
      control: { disable: true },
    },
    value: {
      name: 'value',
      description: 'structure sélectionnée',
      options: ['1', '2', '3'],
      control: { type: 'select' },
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    label: 'Changer de structure',
    value: '2',
    structures: [
      {
        value: 1,
        label: 'SCO Institut médico-éducatif professionnel Marguerite Sinclair',
      },
      {
        value: 2,
        label: "L'école du design",
      },
      {
        value: 3,
        label:
          "INSTITUT D'ENSEIGNEMENT TECHNIQUE DE MECANIQUE ET D'ELECTRICITE INSTITUT MARGUERITE MASSART",
      },
      {
        value: 4,
        label: 'un_super_d_organization_qui_ne_comporte_aucun_espace_oui_oui_c_est_du_vecu',
      },
      {
        value: 5,
        label: 'SCO Institut médico-éducatif professionnel Marguerite Sinclair',
      },
      {
        value: 6,
        label: "L'école du design",
      },
      {
        value: 7,
        label:
          "INSTITUT D'ENSEIGNEMENT TECHNIQUE DE MECANIQUE ET D'ELECTRICITE INSTITUT MARGUERITE MASSART",
      },
      {
        value: 8,
        label: 'un_super_d_organization_qui_ne_comporte_aucun_espace_oui_oui_c_est_du_vecu',
      },
    ],
    onChange: (opt) => {
      console.log(this, opt);
    },
  },
};

export const StructureSwitcher = (args) => {
  return {
    template: hbs`<PixAppLayout @variant={{this.variant}}>

  <PixStructureSwitcher
    @label={{this.label}}
    @structures={{this.structures}}
    @value={{this.value}}
    @onChange={{this.onChange}}
  />
</PixAppLayout>`,
    context: args,
  };
};
