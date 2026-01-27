import { service } from '@ember/service';
import Component from '@glimmer/component';

import PixToast from './pix-toast';

export default class PixToastContainer extends Component {
  @service pixToast;

  <template>
    <div class="pix-toast-container">
      {{#each this.pixToast.content as |toast|}}
        <PixToast @toast={{toast}} @closeButtonAriaLabel={{@closeButtonAriaLabel}} />
      {{/each}}
    </div>
  </template>
}
