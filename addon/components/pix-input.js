import Component from '@glimmer/component';

const ERROR_MESSAGE = 'ERROR in PixInput component, you must provide @label or @ariaLabel params';

export default class PixInput extends Component {
  get id() {
    if (!this.args.id || !this.args.id.toString().trim()) {
      throw new Error('ERROR in PixInput component, @id param is not provided');
    }
    return this.args.id;
  }

  get label() {
    if (!this.args.label && !this.args.ariaLabel) {
      throw new Error(ERROR_MESSAGE);
    }
    return this.args.label;
  }

  get ariaLabel() {
    if (!this.args.label && !this.args.ariaLabel) {
      throw new Error(ERROR_MESSAGE);
    }
    return this.args.label ? null : this.args.ariaLabel;
  }
}
