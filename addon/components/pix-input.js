import Component from '@glimmer/component';

export default class PixInput extends Component {
  text = 'pix-input';

  get id() {
    if (!this.args.id || !this.args.id.trim()) {
      throw new Error('ERROR in PixInput component, @id param is not provided');
    }
    return this.args.id;
  }

  get className() {
    const classNames = [];
    this.args.errorMessage && classNames.push('pix-input__input--error');
    this.args.icon && classNames.push('pix-input__input--icon');
    this.args.isIconLeft && classNames.push('pix-input__input--icon-left');
    return classNames.join(' ');
  }
}
