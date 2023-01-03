import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import accessibleContrastedColorGenerator from '@1024pix/pix-ui/utils/accessible-contrasted-color-generator';

export default class PixIndicatorCard extends Component {
  id = guidFor(this);
  iconId = 'icon-' + this.id;
  tooltipId = 'tooltip-' + this.id;

  @action
  setIconColor() {
    const element = document.getElementById(this.iconId);
    try {
      element.style.color = this.args.color;
      element.style.backgroundColor = accessibleContrastedColorGenerator(this.args.color);
    } catch (error) {
      console.error(error.message);
    }
  }
}
