import Component from '@glimmer/component';

export default class PixLabel extends Component {
  get className() {
    const classes = ['pix-label'];

    if (this.args.screenReaderOnly) classes.push('screen-reader-only');
    if (this.args.wrappedElement) classes.push('pix-label--wrapped-element');
    if (this.args.inlineLabel) classes.push('pix-label--inline-label');
    if (this.args.isDisabled) classes.push('pix-label--disabled');

    const size = ['small', 'large'].includes(this.args.size) ? this.args.size : 'default';

    classes.push(`pix-label--${size}`);

    return classes.join(' ');
  }
}
