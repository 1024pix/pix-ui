import Component from '@glimmer/component';

export default class PixTag extends Component {
  get classes() {
    const { color, compact } = this.args;
    const classes = [];
    if (color) classes.push(`pix-tag--${color}`);
    if (compact) classes.push(`pix-tag--compact`);
    return classes.join(' ');
  }
}
