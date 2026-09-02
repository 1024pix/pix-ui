import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

import PixIcon from './pix-icon';

export default class PixIconButton extends Component {
  text = 'pix-icon-button';

  get size() {
    return this.args.size || 'big';
  }

  get color() {
    return this.args.color || 'light-grey';
  }

  get variant() {
    return this.args.variant;
  }

  get className() {
    const classNames = ['pix-icon-button', `pix-icon-button--${this.size}`];

    if (this.variant) {
      classNames.push(`pix-icon-button--${this.variant}`);
    }

    return classNames.join(' ');
  }

  get isDisabled() {
    warn(
      'PixIconButton: @isDisabled attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isDisabled),
      {
        id: 'pix-ui.icon-button.is-disabled.not-boolean',
      },
    );

    return this.args.isDisabled ? 'true' : null;
  }

  get ariaLabel() {
    warn(
      'PixIconButton: @label attribute should be a string.',
      !['', null, undefined].includes(this.args.ariaLabel),
      {
        id: 'pix-ui.icon-button.close-button-label.not-string',
      },
    );

    return this.args.ariaLabel;
  }

  @action
  triggerAction(params) {
    if (this.isDisabled) return;

    if (this.args.triggerAction) {
      this.args.triggerAction(params);
    }
  }

  <template>
    <button
      type="button"
      class={{this.className}}
      {{on "click" this.triggerAction}}
      aria-disabled="{{this.isDisabled}}"
      ...attributes
    >
      <span class="screen-reader-only">{{this.ariaLabel}}</span>
      <PixIcon
        class="pix-icon-button__icon pix-icon-button__icon--{{this.size}}"
        @ariaHidden={{true}}
        @name={{@iconName}}
        @plainIcon={{@plainIcon}}
      />
    </button>
  </template>
}
