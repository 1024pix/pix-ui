import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixButton extends Component {
  text = 'pix-button';
  @tracked isLoading = false;

  @action
  async triggerAction() {
    if (this.args.action) {
      this.isLoading = true;
      await this.args.action()
      this.isLoading = false;
    }
  }

}
