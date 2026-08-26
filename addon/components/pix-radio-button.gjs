import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixLabelWrapped from './pix-label-wrapped';

export default class PixRadioButton extends Component {
  text = 'pix-radio-button';

  get id() {
    return this.args.id || guidFor(this);
  }

  get stateId() {
    return `${this.id}-state`;
  }

  get hasSuccessState() {
    return this.args.state === 'success';
  }

  get hasErrorState() {
    return this.args.state === 'error';
  }

  get isDisabled() {
    warn(
      'PixRadioButton: @isDisabled attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isDisabled),
      {
        id: 'pix-ui.radio-button.is-disabled.not-boolean',
      },
    );

    return this.args.isDisabled || this.args.disabled ? 'true' : null;
  }

  get inputClasses() {
    const classes = ['pix-radio-button__input'];

    if (this.hasSuccessState || this.hasErrorState) {
      classes.push(`${classes[0]}--state`);
    }

    if (this.args.variant === 'modulix') {
      classes.push('pix-radio-button__input--variant-modulix');
    }

    return classes.join(' ');
  }

  get stateSuccessMessage() {
    return this.args.texts?.stateSuccess;
  }

  get stateErrorMessage() {
    return this.args.texts?.stateError;
  }

  @action
  avoidCheckedStateChangeIfIsDisabled(event) {
    if (this.args.isDisabled) {
      event.preventDefault();
    }
  }

  <template>
    <div class="pix-radio-button {{@class}}">
      <PixLabelWrapped
        @for={{this.id}}
        @requiredLabel={{@text?.requiredLabel}}
        @subLabel={{@text?.subLabel}}
        @size={{@size}}
        @screenReaderOnly={{@screenReaderOnly}}
        @isDisabled={{this.isDisabled}}
        @inlineLabel={{true}}
        @variant={{@variant}}
        @state={{@state}}
      >
        <:inputElement>
          <input
            type="radio"
            id={{this.id}}
            class={{this.inputClasses}}
            value={{@value}}
            aria-disabled={{this.isDisabled}}
            aria-describedby={{this.stateId}}
            {{on "click" this.avoidCheckedStateChangeIfIsDisabled}}
            ...attributes
          />
        </:inputElement>
        <:default>
          {{yield to="label"}}
        </:default>
      </PixLabelWrapped>

      <span class="screen-reader-only" id={{this.stateId}}>
        {{#if this.hasSuccessState}}
          {{this.stateSuccessMessage}}
        {{else if this.hasErrorState}}
          {{this.stateErrorMessage}}
        {{/if}}
      </span>
    </div>
  </template>
}
