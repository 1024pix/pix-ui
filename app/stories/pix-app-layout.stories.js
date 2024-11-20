import { hbs } from 'ember-cli-htmlbars';
export default {
  title: 'Navigation/AppLayout',
  argTypes: {
    variant: {
      description: "Variante de l'application",
      type: { name: 'string', required: false },
      options: ['primary', 'orga', 'certif'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
  args: {
    variant: 'primary',
  },
};

export const AppLayout = (args) => {
  return {
    template: hbs`<PixAppLayout @variant={{this.variant}}>
  <PixNavigation @navigationAriaLabel={{this.navigationAriaLabel}}>
    <:brand>
      <a href='/'>
        <img src='/pix-orga.svg' alt='pix orga' />
      </a>
    </:brand>
    <:navElements>
      <PixNavigationButton
        @route='hello'
        @icon='conversionPath'
        class='active'
      >Campagnes</PixNavigationButton>
      <PixNavigationButton @route='hello' @icon='infoUser'>Participants</PixNavigationButton>
      <PixNavigationButton @route='hello' @icon='users'>Équipe</PixNavigationButton>
      <PixNavigationButton @route='hello' @icon='seat'> Places</PixNavigationButton>
      <PixNavigationButton href='https://pix.fr' @icon='book'> Documentation</PixNavigationButton>
      <PixNavigationButton @icon='help' @target='_blank' href='https://pix.fr' title='Pix.fr'>Centre
        d'aide</PixNavigationButton>
    </:navElements>
    <:footer>
      <p>
        <b>1 000 places disponibles</b>
      </p>
      <p>
        <b>Martin Dupond</b>
        <br />
        <span>
          Organisation Test Pix (UAI003)
        </span>
      </p>
      <PixNavigationSeparator />
      <PixButton @variant='primary' @iconBefore='codeNumber' @size='small'>
        J'ai un code
      </PixButton>
      <PixStructureSwitcher
        @label='Changer de structure'
        @structures={{this.structures}}
        @value={{this.selectedStructure.value}}
        @onChange={{this.onChange}}
      />
      <PixButton @variant='tertiary' @size='small' @triggerAction={{this.onDisconnect}}>
        Se déconnecter
      </PixButton>
    </:footer>
  </PixNavigation>
  <div>
    <svg class='svg' width='600px' height='400px' xmlns='http://www.w3.org/2000/svg'>
      <rect width='600px' height='400px' fill='IndianRed' />
    </svg>

    <svg width='90%' height='400px' xmlns='http://www.w3.org/2000/svg'>
      <rect width='600px' height='400px' fill='DeepPink' />
    </svg>

    <svg width='90%' height='400px' xmlns='http://www.w3.org/2000/svg'>
      <rect width='600px' height='400px' fill='Khaki' />
    </svg>

    <svg width='90%' height='400px' xmlns='http://www.w3.org/2000/svg'>
      <rect width='600px' height='400px' fill='RebeccaPurple' />
    </svg>

    <svg width='90%' height='400px' xmlns='http://www.w3.org/2000/svg'>
      <rect width='600px' height='400px' fill='YellowGreen' />
    </svg>

    <svg width='90%' height='400px' xmlns='http://www.w3.org/2000/svg'>
      <rect width='600px' height='400px' fill='LightCoral' />
    </svg>

    <svg width='90%' height='400px' xmlns='http://www.w3.org/2000/svg'>
      <rect width='600px' height='400px' fill='PowderBlue' />
    </svg>
  </div>
</PixAppLayout>`,
    context: {
      ...args,
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
        {
          value: 11,
          label: 'SCO Institut médico-éducatif professionnel Marguerite Sinclair',
        },
        {
          value: 12,
          label: "L'école du design",
        },
        {
          value: 13,
          label:
            "INSTITUT D'ENSEIGNEMENT TECHNIQUE DE MECANIQUE ET D'ELECTRICITE INSTITUT MARGUERITE MASSART",
        },
        {
          value: 14,
          label: 'un_super_d_organization_qui_ne_comporte_aucun_espace_oui_oui_c_est_du_vecu',
        },
        {
          value: 15,
          label: 'SCO Institut médico-éducatif professionnel Marguerite Sinclair',
        },
        {
          value: 16,
          label: "L'école du design",
        },
        {
          value: 17,
          label:
            "INSTITUT D'ENSEIGNEMENT TECHNIQUE DE MECANIQUE ET D'ELECTRICITE INSTITUT MARGUERITE MASSART",
        },
        {
          value: 18,
          label: 'un_super_d_organization_qui_ne_comporte_aucun_espace_oui_oui_c_est_du_vecu',
        },
      ],
      selectedStructure: { label: 'Structure 2', value: 2 },
      onChange: (option) => {
        console.log(option);
      },
    },
  };
};
