import { hbs } from 'ember-cli-htmlbars';

export const loadingButtons = (args) => {
  return {
    template: hbs`
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}>
        Bouton avec loader blanc (default)
      </PixButton>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='grey'
          @type={{type}}>
        Bouton avec loader gris
      </PixButton>
    `,
    context: args,
  };
};

export const borderButtons = (args) => {
  return {
    template: hbs`
    <section>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}
          @border='rounded-big'>
        Bouton rounded-big
      </PixButton>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}
          @border='rounded-small'>
        Bouton rounded-small
      </PixButton>
    </section>
    <section>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}
          @border='squircle-big'>
        Bouton squircle-big (default)
      </PixButton>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}
          @border='squircle-small'>
        Bouton squircle-small
      </PixButton>
    </section>
    `,
    context: args,
  };
};

export const colorButtons = (args) => {
  return {
    template: hbs`
      <section>
        <PixButton
            @triggerAction={{action triggerAction}}
            @loading-color='white'
            @backgroundColor='blue'
            @type={{type}}>
          Bouton avec background blue (default)
        </PixButton>
      </section>
      <section>
        <PixButton
            @triggerAction={{action triggerAction}}
            @loading-color='white'
            @backgroundColor='green'
            @type={{type}}>
          Bouton avec background green
        </PixButton>
      </section>
      <section>
        <PixButton
            @triggerAction={{action triggerAction}}
            @loading-color='white'
            @backgroundColor='yellow'
            @type={{type}}>
          Bouton avec background yellow
        </PixButton>
      </section>
        <section>
        <PixButton
            @triggerAction={{action triggerAction}}
            @loading-color='white'
            @backgroundColor='grey'
            @type={{type}}>
          Bouton avec background grey
        </PixButton>
      </section>
      <section>
        <PixButton
            @triggerAction={{action triggerAction}}
            @loading-color='white'
            @backgroundColor='transparent'
            @type={{type}}>
          Bouton avec background transparent
        </PixButton>
      </section>
    `,
    context: args,
  };
}

export const disabledButtons = (args) => {
  return {
    template: hbs`
      <PixButton
          @triggerAction={{action triggerAction}}
          @isDisabled={{isDisabled}}>
        Bouton actif (défaut)
      </PixButton>
      <PixButton
          @triggerAction={{action triggerAction}}
          @isDisabled={{true}}>
        Bouton désactivé
      </PixButton>
    `,
    context: args,
  };
};

export const argsTypes = {
  type: {
    name: 'type',
    description: 'type du bouton',
    type: { required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'button' },
    }
  },
  triggerAction: {
    name: 'triggerAction',
    description: 'fonction à appeler en cas de clic',
    type: { required: true },
    defaultValue: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      })
    },
    control: { disable: true },
  },
  loadingColor: {
    name: 'loadingColor',
    description: 'couleur de chargement: `white`, `grey`',
    type: { name: 'string', required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'white' },
    }
  },
  border: {
    name: 'border',
    description: 'bordure: `rounded-small`, `rounded-big`, `squircle-small`, `squircle-big`',
    type: { name: 'string', required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'squircle-big' },
    }
  },
  backgroundColor: {
    name: 'backgroundColor',
    description: 'color: `blue`, `green`, `yellow`, `grey`, `transparent`',
    type: { name: 'string', required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'blue' },
    }
  },
  isDisabled: {
    name: 'isDisabled',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    }
  },
};
