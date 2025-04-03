import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class PixSidebar extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixSidebar component: @title argument is required.');
    }
  }

  get id() {
    return guidFor(this);
  }
}
