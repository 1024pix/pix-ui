import Component from '@glimmer/component';

export default class PixNavigationButton extends Component {
  defaultParams = {};
  defaultModel = [];

  get isLinkOpenInANewWindow() {
    return this.args?.target === '_blank';
  }
}
