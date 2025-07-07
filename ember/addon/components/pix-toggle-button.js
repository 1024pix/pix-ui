import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class PixToggleButton extends Component {
  get className() {
    const classes = ['pix-toggle-button'];
    if (this.args.toggled) {
      classes.push('pix-toggle-button--pressed');
    }

    if (this.args.inlineLabel) {
      classes.push('pix-toggle-button--inline');
    }

    return classes.join(' ');
  }

  @action
  onToggle() {
    this.args.onChange(!this.args.toggled);
  }

  get id() {
    return guidFor(this);
  }
}
