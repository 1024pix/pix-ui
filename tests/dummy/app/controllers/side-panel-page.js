import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SidePanelPage extends Controller {
  @tracked showModal = false;
  title = "Filtrer";

  @action
  onClose() {}
}
