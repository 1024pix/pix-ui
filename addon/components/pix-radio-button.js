import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class PixRadioButton extends Component {
  text = 'pix-radio-button';

  get id() {
    return this.args.id || guidFor(this);
  }
}
