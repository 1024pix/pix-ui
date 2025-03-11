import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Navigation/Navigation',
  argTypes: {
    navigationAriaLabel: {
      description: 'Variante de la navigation',
      type: { name: 'string', required: true },
    },
  },
  args: {
    navigationAriaLabel: 'Navigation Principale',
    openLabel: 'Ouvrir le menu',
    closeLabel: 'Fermer le menu',
  },
};

export const Navigation = (args) => {
  return {
    template: hbs`<PixAppLayout @variant='primary'>
  <PixNavigation
    @navigationAriaLabel={{this.navigationAriaLabel}}
    @openLabel={{this.openLabel}}
    @closeLabel={{this.closeLabel}}
  >
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
      <PixButton @variant='tertiary' @size='small' @triggerAction={{this.onDisconnect}}>
        Se déconnecter
      </PixButton>
    </:footer>
  </PixNavigation>
  <div>
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
  </div>
</PixAppLayout>`,
    context: args,
  };
};
