import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';


export default class PixTooltip extends Component {
  get position() {
    const correctsPosition = ['top', 'right', 'bottom', 'bottom-left', 'bottom-right', 'left', 'top-left', 'top-right'];
    return correctsPosition.includes(this.args.position) ? this.args.position : 'top';
  }

  get text() {
    if(this.args.unescapeHtml) {
      return htmlSafe(this.args.text);
    } else {
      return this.args.text;
    }
  }
}

