import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CheckboxPage extends Controller {
  @action
  onClick() {
    console.log('CLICKED');
  }
}
