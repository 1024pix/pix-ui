import Component from '@glimmer/component';

export default class PixMessage extends Component {
  get type() {
    const correctTypes = ["info", "success", "warning", "alert"];
    return correctTypes.includes(this.args.type) ? this.args.type : 'info';
  }
}
