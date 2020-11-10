import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixButton extends Component {
  text = 'pix-button';
  @tracked isLoading = false;

  get type() {
    return this.args.type || 'button';
  }

  @action
  async triggerAction(params) {
    try {
      this.isLoading = true;
      await this.args.action(params)
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      throw(new Error(e))
    }
  }

}
