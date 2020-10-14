import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixButton extends Component {
  text = 'pix-button';
  @tracked isLoading = false;

  @action
  async triggerAction() {
    try {
      this.isLoading = true;
      await this.args.action()
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
    }
  }

}
