import PixButtonBase from './pix-button-base'

export default class PixButtonLink extends PixButtonBase {

  defaultModel = [];

  get className() {
    return super.baseClassNames.join(' ')
  }
}
