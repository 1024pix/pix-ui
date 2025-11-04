import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PixToggleButton extends Component {
  @tracked toggled = this.args.toggled || false;

  get className() {
    const classes = ['pix-toggle-button'];

    if (this.args.inlineLabel) {
      classes.push('pix-toggle-button--inline');
    }

    return classes.join(' ');
  }

  @action
  onChange() {
    this.args.onChange(!this.toggled);
    this.toggled = !this.toggled;
  }

  get id() {
    return guidFor(this);
  }
}
