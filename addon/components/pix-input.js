import Component from '@glimmer/component';

export default class PixInput extends Component {
  text = 'pix-input';

  get id() {
    if (!this.args.id || !this.args.id.trim()) {
      throw new Error('ERROR in PixInput component, @id param is not provided');
    }
    return this.args.id;
  }
}
