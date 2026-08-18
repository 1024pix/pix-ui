import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { eq } from 'ember-truth-helpers';

import PixIcon from './pix-icon';
import PixLabel from './pix-label';

export default class PixToggle extends Component {
  get id() {
    return this.args.id || guidFor(this);
  }

  get cssClasses() {
    const classes = ['pix-toggle'];

    if (this.args.size) {
      classes.push(`${classes[0]}--${this.args.size}`);
    }

    if (this.args.class) {
      classes.push(this.args.class);
    }

    return classes.join(' ');
  }

  get isDisabled() {
    warn(
      'PixToggle: @isDisabled attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isDisabled),
      {
        id: 'pix-ui.toggle.is-disabled.not-boolean',
      },
    );

    return this.args.isDisabled ? 'true' : null;
  }

  @action
  avoidCheckedStateChangeIfIsDisabled(event) {
    if (this.isDisabled) {
      event.preventDefault();
    }
  }

  <template>
    <PixLabel
      class={{this.cssClasses}}
      for={{this.id}}
      @size={{if (eq @size "large") "large" "small"}}
      @inlineLabel={{true}}
      @isDisabled={{this.isDisabled}}
    >
      {{#if (has-block)}}
        <span class="pix-toggle__label">
          {{yield}}
        </span>
      {{/if}}
      <span class="pix-toggle__input">
        {{! template-lint-disable require-mandatory-role-attributes }}
        {{! Native checkbox checkedness conveys the switch state; aria-checked would be redundant and unreliable }}
        <input
          class="pix-toggle-input__checkbox"
          role="switch"
          type="checkbox"
          id={{this.id}}
          checked={{@checked}}
          aria-disabled={{this.isDisabled}}
          {{on "click" this.avoidCheckedStateChangeIfIsDisabled}}
          ...attributes
        />
        <span class="pix-toggle-input__thumb">
          <PixIcon class="pix-toggle-input__icon--checked" @name="check" @ariaHidden={{true}} />
          <PixIcon class="pix-toggle-input__icon--unchecked" @name="close" @ariaHidden={{true}} />
        </span>
      </span>
    </PixLabel>
  </template>
}
