import PixButtonBase from './pix-button-base';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixButtonUpload extends PixButtonBase {
  @tracked
  files = [];

  get className() {
    return [...super.baseClassNames, 'pix-button-upload'].join(' ');
  }

  @action
  async handleChange(e) {
    if (e.target?.files?.length) {
      await this.args.onChange(e.target.files);
    }
    this.files = [];
  }
}
