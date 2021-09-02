import Component from '@glimmer/component';

const ID_ERROR_MESSAGE = 'ERROR in PixRadioButton component, @id param is not provided';

export default class PixRadioButton extends Component {
  text = 'pix-radio-button';

  get id() {
    if (!this.args.id || !this.args.id.trim()) {
      throw new Error(ID_ERROR_MESSAGE);
    }
    return this.args.id;
  }

  get isDisabled() {
    return this.args.isDisabled;
  }
}
