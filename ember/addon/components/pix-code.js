import { warn } from '@ember/debug';
import { htmlSafe } from '@ember/template';

import PixInputBase from './pix-input-base';

export default class PixCode extends PixInputBase {
  constructor() {
    super(...arguments);

    this.prefix = 'pix-code';
  }

  get length() {
    warn('PixCode: @length is required.', !['', null, undefined].includes(this.args.length), {
      id: 'pix-ui.code.length.required',
    });

    return this.args.length || 1;
  }

  get style() {
    return htmlSafe('--nb-characters:' + this.length);
  }
}
