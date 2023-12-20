import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixTextarea extends Component {
  // eslint-disable-next-line ember/no-tracked-properties-from-args
  @tracked value = this.args.value;

  get textLengthIndicator() {
    return this.value ? this.value.length : 0;
  }

  @action
  updateValue(event) {
    this.value = event.target.value;
  }
}
