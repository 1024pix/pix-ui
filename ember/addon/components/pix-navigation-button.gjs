import { array } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import { service } from '@ember/service';
import Component from '@glimmer/component';

import PixIcon from './pix-icon';

export default class PixNavigationButton extends Component {
  defaultParams = {};
  defaultModel = [];
  @service router;

  get isActiveRoute() {
    return this.args.route === this.router.currentRouteName;
  }

  get isLinkOpenInANewWindow() {
    return this.args?.target === '_blank';
  }

  <template>
    {{#if @route}}
      <LinkTo
        @route={{@route}}
        @models={{if @model (array @model) this.defaultModel}}
        @query={{if @query @query this.defaultParams}}
        class="pix-navigation-button"
        target={{if this.isLinkOpenInANewWindow "_blank"}}
        ...attributes
      >
        {{#if @icon}}
          <PixIcon
            class="pix-navigation-button__icon"
            @ariaHidden={{true}}
            @name={{@icon}}
            @plainIcon={{if this.isActiveRoute true false}}
          />
        {{/if}}
        {{yield}}
        {{#if this.isLinkOpenInANewWindow}}
          <PixIcon
            class="pix-navigation-button__external-icon"
            @ariaHidden={{true}}
            @name="openNew"
          />
        {{/if}}
      </LinkTo>
    {{else}}
      {{! template-lint-disable link-href-attributes }}
      <a
        class="pix-navigation-button"
        target={{if this.isLinkOpenInANewWindow "_blank"}}
        ...attributes
      >
        {{#if @icon}}
          <PixIcon
            class="pix-navigation-button__icon"
            @ariaHidden={{true}}
            @name={{@icon}}
            @plainIcon={{@iconPlain}}
          />
        {{/if}}
        {{yield}}
        {{#if this.isLinkOpenInANewWindow}}
          <PixIcon
            class="pix-navigation-button__external-icon"
            @ariaHidden={{true}}
            @name="openNew"
          />
        {{/if}}
      </a>
    {{/if}}
  </template>
}
