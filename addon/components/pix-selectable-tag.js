import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PixSelectableTag extends Component {
  @action
  toggleIsChecked() {
    return this.args.onChange(!this.args.checked);
  }
}
