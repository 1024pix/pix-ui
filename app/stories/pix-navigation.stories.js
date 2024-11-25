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
  },
};

export const Navigation = (args) => {
  return {
    template: hbs`<PixAppLayout @variant='primary'>
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
    context: args,
  };
};
