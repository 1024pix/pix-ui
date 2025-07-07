import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ModalPage extends Controller {
  @tracked showModal = false;
  title = "Qu'est-ce qu'une modale ?";

  @action
  onCloseButtonClick() {}
}
