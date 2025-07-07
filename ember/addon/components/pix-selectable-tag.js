import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class PixSelectableTag extends Component {
  @action
  toggleIsChecked() {
    return this.args.onChange(!this.args.checked);
  }
}
