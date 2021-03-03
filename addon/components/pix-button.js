import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixButton extends Component {
  text = 'pix-button';
  @tracked isLoading = false;

  get type() {
    return this.args.type || 'button';
  }

  get shape() {
    return this.args.shape || 'squircle';
  }

  get backgroundColor() {
    return this.args.backgroundColor || 'blue';
  }

  get isDisabled() {
    return this.args.isDisabled === true || false;
  }

  get isButtonLoadingOrDisabled() {
    return this.isLoading || this.isDisabled;
  }

  get ariaDisabled() {
    return (this.isLoading || this.isDisabled).toString();
  }

  @action
  async triggerAction(params) {
    try {
      this.isLoading = true;
      await this.args.triggerAction(params);
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      if(!this.args.triggerAction) {
        throw(new Error('@triggerAction params is required for PixButton !'));
      }
      throw(new Error(e))
    }
  }

}
