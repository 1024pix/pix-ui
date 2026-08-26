import { hbs } from 'ember-cli-htmlbars';

import { MODAL_VARIANTS } from '../../addon/helpers/variants';

export default {
  title: 'Navigation/SidePanel',
  argTypes: {
    showSidePanel: {
      name: 'showSidePanel',
      description: 'Visibilité du side-panel',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    title: {
      name: 'title',
      description: 'Titre du side-panel',
      type: { name: 'string', required: true },
    },
    subtitle: {
      name: 'subtitle',
      description: 'Sous-titre du side-panel',
      type: { name: 'string', required: false },
    },
    iconName: {
      name: 'iconName',
      description: 'Icône du side-panel',
      type: { name: 'string', required: false },
    },
    variant: {
      name: 'variant',
      description: "Variante du style du side-panel selon l'app",
      options: MODAL_VARIANTS,
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'default' },
      },
      type: { name: MODAL_VARIANTS.join(' | '), required: false },
    },
    onClose: {
      name: 'onClose',
      description: 'Fonction à exécuter à la fermeture du side-panel',
      type: { name: 'function', required: true },
      table: {
        type: { summary: 'function' },
      },
    },
    focusOnClose: {
      name: 'focusOnClose',
      description:
        'Après fermeture du side-panel, active ou non le focus sur l‘élément qui a déclenché son ouverture',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixSidePanel @showSidePanel={{this.showSidePanel}} @title={{this.title}} @subtitle={{this.subtitle}} @iconName={{this.iconName}} @variant={{this.variant}} @focusOnClose={{this.focusOnClose}} @onClose={{fn (mut this.showSidePanel) (not this.showSidePanel)}}>
  <:content>
    <p>
      Un SidePanel est, dans une interface graphique, une fenêtre qui prend le contrôle total du
      clavier et de l'écran. Elle est en général associée à du paramétrage d'écran.
    </p>
  </:content>
  <:footer>
    <PixButton @iconBefore='delete' @variant='tertiary' @size='small' @triggerAction={{fn (mut this.showSidePanel) (not this.showSidePanel)}}>
      Effacer les filtres
    </PixButton>

    <PixButton @triggerAction={{fn (mut this.showSidePanel) (not this.showSidePanel)}}>Appliquer les
      filtres
    </PixButton>
  </:footer>
</PixSidePanel>
{{!-- template-lint-disable no-inline-styles --}}
<div style='display:flex; justify-content:center; align-items:center; height:105vh;'>
  <PixButton @triggerAction={{fn (mut this.showSidePanel) (not this.showSidePanel)}} style='height:45px'>Ouvrir le side-panel
  </PixButton>
</div>`,

    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  showSidePanel: true,
  title: 'Filtrer',
  subtitle: 'Sous-titre',
  iconName: 'lightBulb',
  variant: 'default',
  onClose: () => {},
  focusOnClose: true,
};

export const Orga = Template.bind({});
Orga.args = {
  showSidePanel: true,
  title: 'Filtrer',
  subtitle: 'Sous-titre',
  iconName: 'lightBulb',
  variant: 'orga',
  onClose: () => {},
  focusOnClose: true,
};

export const Certif = Template.bind({});
Certif.args = {
  showSidePanel: true,
  title: 'Filtrer',
  subtitle: 'Sous-titre',
  iconName: 'lightBulb',
  variant: 'certif',
  onClose: () => {},
  focusOnClose: true,
};
