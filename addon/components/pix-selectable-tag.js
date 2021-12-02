import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixSelectableTag extends Component {
  @tracked isChecked = this.args.checked;

  @action
  toggleIsChecked() {
    this.isChecked = !this.isChecked;
    return this.args.onChange(this.isChecked);
  }
}
