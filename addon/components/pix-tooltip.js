import Component from '@glimmer/component';

export default class PixTooltip extends Component {
  get position() {
    const correctsPosition = [
      'top',
      'right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'top-left',
      'top-right',
    ];
    return correctsPosition.includes(this.args.position) ? this.args.position : 'top';
  }

  get display() {
    return typeof this.args.hide === 'undefined' || !this.args.hide;
  }
}
