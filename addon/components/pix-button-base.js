import Component from '@glimmer/component';

export default class PixButtonBase extends Component {
  get shape() {
    return this.args.shape || 'squircle';
  }

  get backgroundColor() {
    return this.args.backgroundColor || 'primary';
  }

  get size() {
    return this.args.size || 'big';
  }

  get baseClassNames() {
    const classNames = [
      'pix-button',
      `pix-button--shape-${this.shape}`,
      `pix-button--size-${this.size}`,
      `pix-button--${this.backgroundColor}`,
    ];
    this.args.isBorderVisible && classNames.push('pix-button--border');

    return classNames;
  }
}
