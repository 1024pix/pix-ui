import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Layout/Navigation',
  argTypes: {
    variant: {
      description: 'Variante de la navigation',
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
    navigationAriaLabel: 'Navigation Principale',
  },
};

export const Navigation = (args) => {
  return {
    template: hbs`<PixAppLayout>
  <PixNavigation @variant={{this.variant}} @navigationAriaLabel={{this.navigationAriaLabel}}>
    <:brand>
      <a href='/'>
        <img src='/pix-orga.svg' alt='pix orga' />
      </a>
    </:brand>
    <:navElements>
      <PixButtonLink @variant='tertiary' @route='hello' class='active'><PixIcon
          @name='conversionPath'
          @ariaHidden={{true}}
        />Campagnes</PixButtonLink>
      <PixButtonLink @variant='tertiary' @route='hello'><PixIcon
          @name='infoUser'
          @ariaHidden={{true}}
        />Participants</PixButtonLink>
      <PixButtonLink @variant='tertiary' @route='hello'><PixIcon
          @name='users'
          @ariaHidden={{true}}
        />Équipe</PixButtonLink>
      <PixButtonLink @variant='tertiary' @route='hello'><PixIcon
          @name='seat'
          @ariaHidden={{true}}
        />Places</PixButtonLink>
      <PixButtonLink @variant='tertiary' @href='https://pix.fr'><PixIcon
          @name='book'
          @ariaHidden={{true}}
        />Documentation</PixButtonLink>
      <PixButtonLink
        @variant='tertiary'
        @href='https://pix.fr'
        title='Pix.fr'
        target='_blank'
        @newWindowLabel='ouvre une nouvelle fenêtre'
      ><PixIcon @name='help' @ariaHidden={{true}} />Centre d'aide</PixButtonLink>
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
      <PixButton @variant='primary' @iconBefore='codeNumber' @size='small'>
        J'ai un code
      </PixButton>
      <PixButton @variant='secondary' @size='small'>
        Changer d'organisation
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
