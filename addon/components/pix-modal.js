import Component from '@glimmer/component';

export default class PixModal extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixModal component: @title argument is required.');
    }
  }
}
