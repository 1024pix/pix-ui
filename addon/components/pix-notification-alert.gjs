import { concat } from '@ember/helper';
import Component from '@glimmer/component';

import PixIcon from './pix-icon';

const TYPE_INFO = 'info';
const TYPE_SUCCESS = 'success';
const TYPE_WARNING = 'warning';
const TYPE_ERROR = 'error';
const TYPE_COMMUNICATION = 'communication';
const TYPE_COMMUNICATION_ORGA = 'communication-orga';
const TYPE_COMMUNICATION_CERTIF = 'communication-certif';

export default class PixNotificationAlert extends Component {
  get type() {
    const correctTypes = [
      TYPE_INFO,
      TYPE_SUCCESS,
      TYPE_WARNING,
      TYPE_ERROR,
      TYPE_COMMUNICATION,
      TYPE_COMMUNICATION_CERTIF,
      TYPE_COMMUNICATION_ORGA,
    ];

    return correctTypes.includes(this.args.type) ? this.args.type : 'info';
  }

  get iconName() {
    const classes = {
      [TYPE_INFO]: 'info',
      [TYPE_SUCCESS]: 'checkCircle',
      [TYPE_WARNING]: 'warning',
      [TYPE_ERROR]: 'error',
      [TYPE_COMMUNICATION]: 'campaign',
      [TYPE_COMMUNICATION_CERTIF]: 'campaign',
      [TYPE_COMMUNICATION_ORGA]: 'campaign',
    };
    return classes[this.type];
  }

  <template>
    <p class="pix-notification-alert {{concat 'pix-notification-alert--' this.type}}" ...attributes>
      {{#if @withIcon}}
        <PixIcon
          @name={{this.iconName}}
          @ariaHidden={{true}}
          @plainIcon={{true}}
          class="pix-notification-alert__icon"
        />
      {{/if}}
      <span class="pix-notification-alert__content">
        {{yield}}
      </span>
    </p>
  </template>
}
