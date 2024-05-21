import Component from '@glimmer/component';

export default class PixButtonBase extends Component {
  get variant() {
    return this.args.variant || 'primary';
  }

  get size() {
    return this.args.size || 'small';
  }

  get baseClassNames() {
    const classNames = [
      'pix-button',
      `pix-button--size-${this.size}`,
      `pix-button--${this.variant}`,
    ];

    this.args.isBorderVisible && classNames.push('pix-button--border');

    return classNames;
  }
}
