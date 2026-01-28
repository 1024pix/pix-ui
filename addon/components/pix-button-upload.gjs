import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import PixButtonBase from './pix-button-base';

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

  <template>
    <label for={{@id}} class={{this.className}} role="button">
      {{yield}}
    </label>
    <input
      id={{@id}}
      type="file"
      class="screen-reader-only"
      value={{this.files}}
      {{on "change" this.handleChange}}
      ...attributes
    />
  </template>
}
