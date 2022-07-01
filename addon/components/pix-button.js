import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import PixButtonBase from './pix-button-base';

export default class PixButton extends PixButtonBase {
  text = 'pix-button';
  defaultModel = [];

  @tracked isTriggering = false;

  get isLoading() {
    return this.args.isLoading || this.isTriggering;
  }

  get type() {
    return this.args.type || 'button';
  }

  get loadingColor() {
    return this.args.loadingColor || this.args['loading-color'] || 'white';
  }

  get isButtonLoadingOrDisabled() {
    return this.isLoading || this.args.isDisabled;
  }

  get ariaDisabled() {
    return this.isButtonLoadingOrDisabled;
  }

  get className() {
    return super.baseClassNames.join(' ');
  }

  @action
  async triggerAction(params) {
    if (this.type === 'submit' && !this.args.triggerAction) return;
    if (!this.args.triggerAction) {
      throw new Error('@triggerAction params is required for PixButton !');
    }
    try {
      this.isTriggering = true;
      await this.args.triggerAction(params);
    } finally {
      this.isTriggering = false;
    }
  }
}
