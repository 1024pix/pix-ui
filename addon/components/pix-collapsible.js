import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixCollapsible extends Component {
  text = 'pix-collapsible';

  @tracked isCollapsed = false;

  @action
  toggleCollapsible() {
    this.isCollapsed = !this.isCollapsed;
  }
}
