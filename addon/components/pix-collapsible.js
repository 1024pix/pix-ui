import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixCollapsible extends Component {
  text = 'pix-collapsible';
  contentId = 'pix-collapsible-' + guidFor(this);

  @tracked isCollapsed = true;
  @tracked hasUnCollapsedOnce = false;

  get isUnCollapsed() {
    return !this.isCollapsed;
  }

  get isContentRendered() {
    return this.hasUnCollapsedOnce;
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
    this.hasUnCollapsedOnce = true;
  }
}
