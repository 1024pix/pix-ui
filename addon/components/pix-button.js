import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixButton extends Component {
  text = 'pix-button';
  @tracked isLoading = false;

  get type() {
    return this.args.type || 'button';
  }

  get border() {
    return this.args.border || 'squircle-big';
  }

  get backgroundColor() {
    return this.args.backgroundColor || 'blue';
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
