import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';

export default class PixTextarea extends Component {
  // eslint-disable-next-line ember/no-tracked-properties-from-args
  @tracked value = this.args.value;

  get id() {
    if (this.args.id) return this.args.id;
    return 'textarea-' + guidFor(this);
  }

  get textLengthIndicator() {
    return this.value ? this.value.length : 0;
  }

  @action
  updateValue(event) {
    this.value = event.target.value;
  }
}
