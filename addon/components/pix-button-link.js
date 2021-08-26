import PixButtonBase from './pix-button-base'

export default class PixButtonLink extends PixButtonBase {

  defaultModel = [];
  defaultParams = {};

  get className() {
    return super.baseClassNames.join(' ')
  }
}
