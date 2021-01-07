import Component from '@glimmer/component';

export default class PixTextarea extends Component {
  get textLengthIndicator() {
    return this.args.value
      ? this.args.value.length
      : 0;
  }
}
