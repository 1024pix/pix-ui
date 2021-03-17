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

export const shapeButtons = (args) => {
  return {
    template: hbs`
    <section>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}
          @shape='rounded'>
        Bouton rounded
      </PixButton>
    </section>
    <section>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}
          @shape='squircle'>
        Bouton squircle (default)
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
            @loading-color='grey'
            @backgroundColor='transparent-light'
            @type={{type}}>
          Bouton avec background transparent-light
        </PixButton>
      </section>
      <section style="background-color: #345193">
        <PixButton
            @triggerAction={{action triggerAction}}
            @loading-color='white'
            @backgroundColor='transparent-dark'
            @type={{type}}>
          Bouton avec background transparent-dark
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

export const borderButtons = (args) => {
  return {
    template: hbs`
    <section>
      <PixButton @isBorderVisible={{false}}
      @backgroundColor="transparent-light"
      >
        Bouton sans bordure (défaut)
      </PixButton>
    </section>
    <section>
      <PixButton
        @isBorderVisible={{true}}
        @backgroundColor="transparent-light"
        >
        Bouton avec bordure sur fond clair
      </PixButton>
    </section>
      <section style="background-color: #345193">
        <PixButton
          @isBorderVisible={{true}}
          @backgroundColor="transparent-dark"
          >
          Bouton avec bordure sur fond sombre
        </PixButton>
      </section>
    `,
    context: args,
  };
};

export const sizeButtons = (args) => {
  return {
    template: hbs`
    <section>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}
          @size='small'>
        Bouton small
      </PixButton>
    </section>
    <section>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}
          @size='big'>
        Bouton big (default)
      </PixButton>
    </section>
    `,
    context: args,
  };
}

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
  shape: {
    name: 'shape',
    description: 'forme: `rounded`,`squircle`',
    type: { name: 'string', required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'squircle' },
    }
  },
  backgroundColor: {
    name: 'backgroundColor',
    description: 'color: `blue`, `green`, `yellow`, `grey`, `transparent-light`, `transparent-dark`',
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
  size: {
    name: 'size',
    description: 'taille: `big`,`small`',
    type: { name: 'string', required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'big' },
    }
  },
  isBorderVisible: {
    name: 'isBorderVisible',
    description: 'Paramètre utilisé seulement quand le `backgroundColor` est `transparent-light` ou `transparent-dark`',
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    }
  },
};