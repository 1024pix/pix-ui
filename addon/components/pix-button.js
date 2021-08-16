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

  get loadingColor() {
    return this.args.loadingColor || this.args['loading-color'] || 'white';
  }

  get backgroundColor() {
    return this.args.backgroundColor || 'blue';
  }

  get isButtonLoadingOrDisabled() {
    return this.isLoading || this.args.isDisabled;
  }

  get ariaDisabled() {
    return this.isButtonLoadingOrDisabled;
  }

  get size() {
    return this.args.size || 'big';
  }

  get isBorderVisible() {
    return this.args.isBorderVisible;
  }

  get className() {
    const classNames = [
      'pix-button',
      `pix-button--shape-${this.shape}`,
      `pix-button--size-${this.size}`,
      `pix-button--background-${this.backgroundColor}`
    ];
    this.args.isDisabled && classNames.push('pix-button--disabled');
    this.isBorderVisible && classNames.push('pix-button--border');
    return classNames.join(' ')
  }

  get enableTriggerAction(){
    return !(this.type === 'submit' && !this.args.triggerAction)
  }

  @action
  async triggerAction(params) {
    try {
      this.isLoading = true;
      await this.args.triggerAction(params);
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      if (!this.args.triggerAction) {
        throw new Error('@triggerAction params is required for PixButton !');
      }
      throw new Error(e);
    }
  }
}
