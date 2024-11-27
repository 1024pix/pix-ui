import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixAccordions extends Component {
  text = 'pix-accordions';
  contentId = 'pix-accordions-' + guidFor(this);

  @tracked isCollapsed = true;
  @tracked hasUnCollapsedOnce = false;

  get isUnCollapsed() {
    return !this.isCollapsed;
  }

  get isContentRendered() {
    return this.hasUnCollapsedOnce;
  }

  @action
  toggleAccordions() {
    this.isCollapsed = !this.isCollapsed;
    this.hasUnCollapsedOnce = true;
  }
}
