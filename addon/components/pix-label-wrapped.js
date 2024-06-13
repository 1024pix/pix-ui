import Component from '@glimmer/component';

export default class PixLabelWrapped extends Component {
  get className() {
    const classes = ['pix-label', 'pix-label-wrapped'];

    if (this.args.inlineLabel) classes.push('pix-label--inline-label');
    if (this.args.isDisabled) classes.push('pix-label-wrapped--disabled');
    if (this.args.variant === 'tile') classes.push('pix-label-wrapped--variant-tile');
    if (this.args.state === 'success') classes.push('pix-label-wrapped--state-success');
    if (this.args.state === 'error') classes.push('pix-label-wrapped--state-error');

    const size = ['small', 'large'].includes(this.args.size) ? this.args.size : 'default';

    classes.push(`pix-label--${size}`);

    return classes.join(' ');
  }

  get hasError() {
    return this.args.state === 'error';
  }

  get hasSuccess() {
    return this.args.state === 'success';
  }
}
