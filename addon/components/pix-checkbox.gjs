import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixLabelWrapped from './pix-label-wrapped';
export default class PixCheckbox extends Component {
  constructor() {
    super(...arguments);
  }

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

  get hasDeclarativeState() {
    return this.args.state === 'declarative' || this.args.state === 'declarative-selected';
  }

  get inputClasses() {
    const classes = ['pix-checkbox__input'];

    if (this.args.isIndeterminate) {
      classes.push(`${classes[0]}--indeterminate`);
    }

    if (this.hasSuccessState || this.hasErrorState) {
      classes.push(`${classes[0]}--state`);
    }

    return classes.join(' ');
  }

  get isDisabled() {
    warn(
      'PixCheckbox: @isDisabled attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isDisabled),
      {
        id: 'pix-ui.checkbox.is-disabled.not-boolean',
      },
    );

    return this.args.isDisabled || this.args.disabled ? 'true' : null;
  }

  @action
  avoidCheckedStateChangeIfIsDisabled(event) {
    if (this.args.isDisabled) {
      event.preventDefault();
    }
  }

  get stateSuccessMessage() {
    return this.args.texts?.stateSuccess;
  }

  get stateErrorMessage() {
    return this.args.texts?.stateError;
  }

  get stateDeclarativeMessage() {
    return this.args.texts?.stateDeclarative;
  }

  <template>
    <div class="pix-checkbox {{@class}}">
      <PixLabelWrapped
        @for={{this.id}}
        @requiredLabel={{@text?.requiredLabel}}
        @subLabel={{@text?.subLabel}}
        @size={{@size}}
        @inlineLabel={{true}}
        @screenReaderOnly={{@screenReaderOnly}}
        @isDisabled={{this.isDisabled}}
        @variant={{@variant}}
        @state={{@state}}
      >
        <:inputElement>
          <input
            type="checkbox"
            id={{this.id}}
            class={{this.inputClasses}}
            checked={{@checked}}
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
        {{else if this.hasDeclarativeState}}
          {{this.stateDeclarativeMessage}}
        {{/if}}
      </span>
    </div>
  </template>
}
