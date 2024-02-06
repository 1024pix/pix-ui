import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixToggle extends Component {
  get className() {
    const classes = ['pix-toggle'];
    if (this.args.toggled) {
      classes.push('pix-toggle--pressed');
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
