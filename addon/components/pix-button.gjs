import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import PixButtonContent from './pix-button/pix-button-content';
import PixButtonBase from './pix-button-base';
export default class PixButton extends PixButtonBase {
  text = 'pix-button';
  defaultModel = [];

  @tracked isTriggering = false;

  constructor(...args) {
    super(...args);

    const isTriggerFunctionExistOnTypedifferentOfSubmit =
      this.args.type !== 'submit' && typeof this.args.triggerAction === 'function';
    const isTriggerFunctionExistOrNullOnTypeSubmit =
      this.args.type === 'submit' &&
      (typeof this.args.triggerAction === 'function' ||
        this.args.triggerAction === undefined ||
        this.args.triggerAction === null);

    warn(
      'PixButton: @triggerAction attribute should be a function',
      isTriggerFunctionExistOnTypedifferentOfSubmit || isTriggerFunctionExistOrNullOnTypeSubmit,
      {
        id: 'pix-ui.button.action.not-function',
      },
    );
  }

  get isLoading() {
    warn(
      'PixButton: @isLoading attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isLoading),
      {
        id: 'pix-ui.button.is-loading.not-boolean',
      },
    );

    return this.args.isLoading || this.isTriggering;
  }

  get type() {
    return this.args.type || 'button';
  }

  get loadingColor() {
    return this.args.loadingColor || this.args['loading-color'] || 'white';
  }

  get isDisabled() {
    warn(
      'PixButton: @isDisabled attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isDisabled),
      {
        id: 'pix-ui.button.is-disabled.not-boolean',
      },
    );

    return this.isLoading || this.args.isDisabled ? 'true' : null;
  }

  get className() {
    return super.baseClassNames.join(' ');
  }

  @action
  async triggerAction(params) {
    if (this.isDisabled || (this.type === 'submit' && !this.args.triggerAction)) return;

    try {
      this.isTriggering = true;
      await this.args.triggerAction(params);
    } finally {
      this.isTriggering = false;
    }
  }

  <template>
    <button
      type={{this.type}}
      class={{this.className}}
      {{on "click" this.triggerAction}}
      aria-disabled="{{this.isDisabled}}"
      ...attributes
    >
      {{#if this.isLoading}}
        <div class="loader loader--{{this.loadingColor}}">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
        <span class="loader__not-visible-text">{{yield}}</span>
      {{else}}
        <PixButtonContent
          @iconBefore={{@iconBefore}}
          @iconAfter={{@iconAfter}}
          @plainIconAfter={{@plainIconAfter}}
          @plainIconBefore={{@plainIconBefore}}
        >
          {{yield}}
        </PixButtonContent>
      {{/if}}
    </button>
  </template>
}
