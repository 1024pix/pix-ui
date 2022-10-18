import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class PixSelect extends Component {
  @tracked isExpanded = false;
  @tracked selectedOption = null;

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  get listId() {
    return `listbox-${this.args.id}`;
  }

  get innerText() {
    if (this.selectedOption) {
      const { label } = this.args.options.find((option) => option.value === this.selectedOption);
      return label || this.args.innerText;
    } else {
      return this.args.innerText;
    }
  }

  @action
  toggleDropdown(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = !this.isExpanded;
  }

  @action
  showDropdown(event) {
    if (this.isExpanded) return;

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = true;
  }

  @action
  hideDropdown(event) {
    if (!this.isExpanded) return;

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = false;
  }

  @action
  onSelect(option, event) {
    this.selectedOption = option.value;
    this.args.onSelect(this.selectedOption);

    this.hideDropdown(event);
    document.getElementById(this.args.id).focus();
  }
}
