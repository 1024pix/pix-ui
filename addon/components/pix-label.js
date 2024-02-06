import Component from '@glimmer/component';

export default class PixLabel extends Component {
  get className() {
    const classes = ['pix-label'];

    if (this.args.screenReaderOnly) classes.push('screen-reader-only');
    if (this.args.inlineLabel) classes.push('pix-label--inline-label');
    if (this.args.isDisabled) classes.push('pix-label--disabled');

    const labelSize = ['small', 'large'].includes(this.args.labelSize)
      ? this.args.labelSize
      : 'default';

    classes.push(`pix-label--${labelSize}`);

    return classes.join(' ');
  }
}
