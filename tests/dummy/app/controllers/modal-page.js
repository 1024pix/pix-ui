import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ModalPage extends Controller {
  @tracked showModal = false;
  title = "Qu'est-ce qu'une modale ?";

  @action
  onClose(event) {
    this.showModal = !this.showModal;

    const currentModal = event.target.closest('.pix-modal');
    if (currentModal.querySelector('form').length) {
      currentModal.querySelector('form').reset();
    }
  }
}
