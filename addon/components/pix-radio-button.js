import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

export default class PixRadioButton extends Component {
  text = 'pix-radio-button';

  get id() {
    return this.args.id || guidFor(this);
  }

  @action
  avoidCheckedStateChangeIfIsDisabled(event) {
    if (this.args.isDisabled) {
      event.preventDefault();
    }
  }
}
