import PixButtonBase from './pix-button-base';
import { action } from '@ember/object';

export default class PixButtonUpload extends PixButtonBase {
  get className() {
    return super.baseClassNames.join(' ');
  }

  @action
  handleChange(e) {
    if (e.target && e.target.files && e.target.files.length) {
      this.args.onChange(e.target.files);
    }
  }
}
