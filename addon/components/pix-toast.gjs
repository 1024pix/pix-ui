import { warn } from '@ember/debug';
import { concat } from '@ember/helper';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';

const TYPE_SUCCESS = 'success';
const TYPE_ERROR = 'error';
const TYPE_INFORMATION = 'information';
const TYPE_WARNING = 'warning';

import PixIcon from './pix-icon';
import PixIconButton from './pix-icon-button';

export default class PixToast extends Component {
  @service pixToast;

  get type() {
    const correctTypes = [TYPE_SUCCESS, TYPE_ERROR, TYPE_INFORMATION, TYPE_WARNING];
    warn('PixToast: you need to provide a type', correctTypes.includes(this.args.toast?.type), {
      id: 'pix-ui.toast.type.not-provided',
    });
    return this.args.toast?.type ?? 'success';
  }

  get iconClass() {
    const classes = {
      [TYPE_INFORMATION]: 'info',
      [TYPE_SUCCESS]: 'checkCircle',
      [TYPE_WARNING]: 'warning',
      [TYPE_ERROR]: 'error',
    };
    return classes[this.type];
  }

  @action
  removeNotification(event) {
    event.preventDefault();
    event.stopPropagation();
    this.pixToast.removeNotification(this.args.toast);
  }

  <template>
    <div class="pix-toast {{concat 'pix-toast--' this.type}}" role="alert" ...attributes>
      <div class="pix-toast__icon {{concat 'pix-toast__icon--' this.type}}">
        <PixIcon @name={{this.iconClass}} @ariaHidden={{true}} @plainIcon={{true}} />
      </div>
      <p class="pix-toast__content">
        {{@toast.message}}
      </p>
      <div class="pix-toast__close-button-container">
        <PixIconButton
          @ariaLabel={{@closeButtonAriaLabel}}
          @iconName="close"
          @size="small"
          @triggerAction={{this.removeNotification}}
          class="{{concat 'pix-toast__close-button--' this.type}}"
        />
      </div>
    </div>
  </template>
}
