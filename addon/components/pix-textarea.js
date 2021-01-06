import Component from '@glimmer/component';

export default class PixTextarea extends Component {
  get reportLength() {
    return this.args.value
      ? this.args.value.length
      : 0;
  }
}
