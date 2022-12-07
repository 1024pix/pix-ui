import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PixToggle extends Component {
  get className() {
    const classes = ['pix-toggle'];
    if (this.args.inline) {
      classes.push('pix-toggle--inline');
    }
    if (this.args.toggled) {
      classes.push('pix-toggle--pressed');
    }
    if (this.args.screenReaderOnly) {
      classes.push('pix-toggle--screen-reader-only');
    }
    return classes.join(' ');
  }

  @action
  onToggle() {
    this.args.onChange(!this.args.toggled);
  }
}
