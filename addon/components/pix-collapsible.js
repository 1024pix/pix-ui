import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixCollapsible extends Component {
  text = 'pix-collapsible';

  @tracked isCollapsed = false;

  get isOpen() {
    return !this.isCollapsed;
  }

  get title() {
    if (!this.args.title || !this.args.title.trim()) {
      throw new Error('ERROR in PixCollapsible component, @title param is not provided');
    }
    return this.args.title;
  }

  @action
  toggleCollapsible() {
    this.isCollapsed = !this.isCollapsed;
  }
}
