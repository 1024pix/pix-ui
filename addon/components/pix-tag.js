import Component from '@glimmer/component';

export default class PixTag extends Component {
  get classes() {
    const { color } = this.args;
    const classes = [];
    if (color) classes.push(`pix-tag--${color}`);
    return classes.join(' ');
  }
}
