import { action } from '@ember/object';
import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import PixIcon from './pix-icon';
import PixIconButton from './pix-icon-button';

const TYPE_INFO = 'information';
const TYPE_ERROR = 'error';
const TYPE_WARNING = 'warning';
const TYPE_ENVIRONMENT = 'environment';
const TYPE_COMMUNICATION = 'communication';
const TYPE_COMMUNICATION_ORGA = 'communication-orga';
const TYPE_COMMUNICATION_CERTIF = 'communication-certif';

const types = [
  TYPE_INFO,
  TYPE_ERROR,
  TYPE_WARNING,
  TYPE_ENVIRONMENT,
  TYPE_COMMUNICATION,
  TYPE_COMMUNICATION_ORGA,
  TYPE_COMMUNICATION_CERTIF,
];

const icons = {
  [TYPE_INFO]: 'info',
  [TYPE_ERROR]: 'error',
  [TYPE_WARNING]: 'warning',
  [TYPE_ENVIRONMENT]: 'displaySettings',
  [TYPE_COMMUNICATION]: 'campaign',
  [TYPE_COMMUNICATION_ORGA]: 'campaign',
  [TYPE_COMMUNICATION_CERTIF]: 'campaign',
};

export default class PixBannerAlert extends Component {
  @tracked isBannerVisible = true;
  get type() {
    return types.includes(this.args.type) ? this.args.type : TYPE_INFO;
  }

  get icon() {
    return icons[this.type];
  }

  get displayAction() {
    return this.args.actionLabel && this.args.actionUrl;
  }

  get isExternalLink() {
    return this.args.actionUrl.includes('/');
  }

  get canCloseBanner() {
    return this.args.canCloseBanner;
  }

  get displayBanner() {
    return this.isBannerVisible;
  }

  @action
  async closeBanner(params) {
    if (this.args.onCloseBannerTriggerAction) {
      await this.args.onCloseBannerTriggerAction(params);
    }
    this.isBannerVisible = false;
  }

  <template>
    {{#if this.displayBanner}}
      <div class="pix-banner-alert pix-banner-alert--{{this.type}}" role="alert" ...attributes>
        <PixIcon
          @name={{this.icon}}
          @plainIcon={{true}}
          @ariaHidden={{true}}
          class="pix-banner-alert__icon"
        />
        <div>
          {{yield}}
          {{#if this.displayAction}}
            {{#if this.isExternalLink}}
              <a
                class="pix-banner-alert__action"
                href={{@actionUrl}}
                target="_blank"
                rel="noopener noreferrer"
              >
                {{@actionLabel}}
                <PixIcon @name="openNew" class="external-link" @ariaHidden={{true}} />
              </a>
            {{else}}
              <LinkTo
                class="pix-banner-alert__action"
                @route={{@actionUrl}}
              >{{@actionLabel}}</LinkTo>
            {{/if}}
          {{/if}}
        </div>
        {{#if this.canCloseBanner}}
          <div class="pix-banner-alert__close">
            <PixIconButton
              @ariaLabel="Fermer"
              @iconName="close"
              @size="small"
              @triggerAction={{this.closeBanner}}
            />
          </div>
        {{/if}}
      </div>
    {{/if}}
  </template>
}
