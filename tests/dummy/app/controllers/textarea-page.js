import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TextareaPage extends Controller {
  @tracked value = null;

  @action
  onTextarea(event) {
    this.value = event.target.value;
  }

}
