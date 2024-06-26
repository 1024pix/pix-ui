import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SelectPage extends Controller {
  @action
  handleTabChange(tabIndex) {
    console.log('tab changed to', tabIndex);
  }
}
