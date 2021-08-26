import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import PixButtonBase from './pix-button-base'

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
    return super.baseClassNames.join(' ')
  }

  get enableTriggerAction(){
    return !(this.type === 'submit' && !this.args.triggerAction)
  }

  @action
  async triggerAction(params) {
    try {
      this.isTriggering = true;
      await this.args.triggerAction(params);
      this.isTriggering = false;
    } catch (e) {
      this.isTriggering = false;
      if (!this.args.triggerAction) {
        throw new Error('@triggerAction params is required for PixButton !');
      }
      throw new Error(e);
    }
  }
}
