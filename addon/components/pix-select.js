import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class PixSelect extends Component {
  @tracked isExpanded = false;

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  @action
  toggleDropdown() {
    this.isExpanded = !this.isExpanded;
  }
}
