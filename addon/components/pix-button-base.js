import Component from '@glimmer/component';

export default class PixButtonBase extends Component {
  get shape() {
    return this.args.shape || 'squircle';
  }

  get backgroundColor() {
    return this.args.backgroundColor || 'blue';
  }

  get size() {
    return this.args.size || 'big';
  }

  get baseClassNames() {
    const classNames = [
      'pix-button',
      `pix-button--shape-${this.shape}`,
      `pix-button--size-${this.size}`,
      `pix-button--background-${this.backgroundColor}`
    ];
    this.args.isBorderVisible && classNames.push('pix-button--border');
    this.args.isDisabled && classNames.push('pix-button--disabled');
    return classNames;
  }
}
