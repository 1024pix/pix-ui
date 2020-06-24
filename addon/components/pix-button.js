import Component from '@glimmer/component';

class PixButton extends Component {
  get buttonClasses() {
    const classes = ['pix-button']
    if (this.args.size) {
      classes.push(`pix-button--size-${this.args.size}`)
    }
    if (this.args.color) {
      classes.push(`pix-button--color-${this.args.color}`)
    }
    if (this.args.type) {
      classes.push(`pix-button--type-${this.args.type}`)
    }
    if (this.args.rounded) {
      classes.push(`pix-button--rounded`)
    }
    return classes.join(' ');
  }
}

export default PixButton;
