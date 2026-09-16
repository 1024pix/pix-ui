import { hbs } from 'ember-cli-htmlbars';

import { VARIANTS } from '../../addon/helpers/variants.js';

export default {
  title: 'Navigation/AppLayout',
  argTypes: {
    variant: {
      description: "Variante de l'application",
      options: VARIANTS,
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
      type: {
        name: VARIANTS.join(' | '),
        required: false,
      },
    },
    banner: {
      name: '<:banner>',
      description:
        'Permet de positionner les banners des applications en haut du layout en position sticky',
      type: { name: 'block content', required: false },
    },
    navigation: {
      name: '<:navigation>',
      description: 'insère la navigation à son emplacement définit par le layout',
      type: { name: 'block content', required: false },
    },
    main: {
      name: '<:main>',
      description: 'Insère le contenu principale de la page dans son emplacement dédié',
      type: { name: 'block content', required: true },
    },
    footer: {
      name: '<:footer>',
      description: "Insère le footer de l'application en bas de page",
      type: { name: 'block content', required: false },
    },
  },
  args: {
    variant: 'primary',
  },
};

export const AppLayout = (args) => {
  return {
    template: hbs`<PixAppLayout @variant={{this.variant}}>
  <:banner>
    <PixBannerAlert @type='warning'>
      WARNING ceci n'est pas un exercice | WARNING ceci n'est pas un exercice | WARNING ceci n'est
      pas un exercice | WARNING ceci n'est pas un exercice | WARNING ceci n'est pas un exercice !
    </PixBannerAlert>
  </:banner>
  <:navigation>
    <PixNavigation @navigationAriaLabel={{this.navigationAriaLabel}} @openLabel='Ouvrir le menu' @closeLabel='Fermer le menu'>
      <:brand>
        <a href='/'>
          <img src='/pix-orga.svg' alt='pix orga' />
        </a>
      </:brand>
      <:navElements>
        <PixNavigationButton @route='hello' @icon='conversionPath' class='active'>Campagnes</PixNavigationButton>
        <PixNavigationButton @route='hello' @icon='infoUser'>Participants</PixNavigationButton>
        <PixNavigationButton @route='hello' @icon='users'>Équipe</PixNavigationButton>
        <PixNavigationButton @route='hello' @icon='seat'> Places</PixNavigationButton>
        <PixNavigationButton href='https://pix.fr' @icon='book'> Documentation</PixNavigationButton>
        <PixNavigationButton @icon='help' @target='_blank' href='https://pix.fr' title='Pix.fr'>Centre d'aide</PixNavigationButton>
      </:navElements>
      <:burgerMenu>
        <PixNavigationButton @route='hello' @icon='infoUser'>Menu</PixNavigationButton>
      </:burgerMenu>
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
        <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} @value={{this.selectedStructure.value}} @onChange={{this.onChange}} />
        <PixButton @variant='tertiary' @size='small' @triggerAction={{this.onDisconnect}}>
          Se déconnecter
        </PixButton>
      </:footer>
    </PixNavigation>

  </:navigation>
  <:main>
    <main>
      <svg viewbox='0 0 600 400' width='100%' height='400' xmlns='http://www.w3.org/2000/svg'>
        <rect width='600' height='400' fill='IndianRed' />
      </svg>

      <svg viewbox='0 0 600 400' width='100%' height='400' xmlns='http://www.w3.org/2000/svg'>
        <rect width='600' height='400' fill='DeepPink' />
      </svg>

      <svg viewbox='0 0 600 400' width='100%' height='400' xmlns='http://www.w3.org/2000/svg'>
        <rect width='600' height='400' fill='Khaki' />
      </svg>

      <svg viewbox='0 0 600 400' width='100%' height='400' xmlns='http://www.w3.org/2000/svg'>
        <rect width='600' height='400' fill='RebeccaPurple' />
      </svg>

      <svg viewbox='0 0 600 400' width='100%' height='400' xmlns='http://www.w3.org/2000/svg'>
        <rect width='600' height='400' fill='YellowGreen' />
      </svg>

      <svg viewbox='0 0 600 400' width='100%' height='400' xmlns='http://www.w3.org/2000/svg'>
        <rect width='600' height='400' fill='LightCoral' />
      </svg>

      <svg viewbox='0 0 600 400' width='100%' xmlns='http://www.w3.org/2000/svg'>
        <rect width='600' height='400' fill='PowderBlue' />
      </svg>
    </main>
  </:main>
  <:footer>
    <footer>
      <ul>
        <li>
          <a href='https://pix.fr/mentions-legales' target='_blank' rel='noopener noreferrer'>
            Mentions légales
          </a>
        </li>
        <li>
          <a href='https://pix.fr/accessibilite-pix-certif' target='_blank' rel='noopener noreferrer'>
            Accessibilité : partiellement conforme
          </a>
        </li>
      </ul>
      <div>
        <span>© 2024 Pix</span>
      </div>
    </footer>
  </:footer>
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
