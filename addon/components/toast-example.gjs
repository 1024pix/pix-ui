import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';

import PixButton from './pix-button';
import PixToastContainer from './pix-toast-container';

export default class ToastExample extends Component {
  @service pixToast;

  @action displayNotification() {
    const types = ['error', 'information', 'success', 'warning'];
    const messages = [
      'ALERTE !',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur ultricies volutpat. Integer at massa id odio tristique lacinia quis in metus.',
      "L'action a été un succès !",
      'Attention, cette action peut avoir des conséquences...',
    ];

    const randomNumber = Math.floor(Math.random() * 4);

    this.pixToast.addNotification({
      message: messages[randomNumber],
      type: types[randomNumber],
    });
  }

  <template>
    <div class="toast-example">
      <PixButton @size="small" @triggerAction={{this.displayNotification}}>
        Afficher une notification
      </PixButton>

      <PixToastContainer @closeButtonAriaLabel="Fermer la notification" />
    </div>
  </template>
}
