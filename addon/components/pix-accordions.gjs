import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import PixIcon from './pix-icon';
import PixTag from './pix-tag';

export default class PixAccordions extends Component {
  text = 'pix-accordions';
  contentId = 'pix-accordions-' + guidFor(this);

  @tracked isCollapsedWhenUncontrolled = true;
  hasBeenExpandedOnce = false;

  get isControlled() {
    return this.args.isExpanded !== undefined && this.args.isExpanded !== null;
  }

  get isExpanded() {
    return this.isControlled ? Boolean(this.args.isExpanded) : !this.isCollapsedWhenUncontrolled;
  }

  get isContentRendered() {
    if (this.isExpanded) {
      // eslint-disable-next-line ember/no-side-effects
      this.hasBeenExpandedOnce = true;
    }

    return this.hasBeenExpandedOnce;
  }

  @action
  toggleAccordions() {
    const nextIsExpanded = !this.isExpanded;

    if (!this.isControlled) {
      this.isCollapsedWhenUncontrolled = !nextIsExpanded;
    }

    if (this.args.onToggle) {
      this.args.onToggle(nextIsExpanded);
    }
  }

  get isV2Version() {
    return this.args.isV2Version ? '-v2' : '';
  }

  <template>
    <div class="pix-accordions{{this.isV2Version}}">

      <button
        class="pix-accordions{{this.isV2Version}}__title"
        type="button"
        {{on "click" this.toggleAccordions}}
        aria-controls={{this.contentId}}
        aria-expanded={{if this.isExpanded "true" "false"}}
        ...attributes
      >

        <span class="pix-accordions{{this.isV2Version}}-title__container">
          {{#if @iconName}}
            <PixIcon
              class="pix-accordions{{this.isV2Version}}-title__icon"
              @name={{@iconName}}
              @plainIcon={{@plainIcon}}
              @ariaHidden={{true}}
            />
          {{/if}}

          {{yield to="title"}}
        </span>

        <span class="pix-accordions{{this.isV2Version}}-title__container">
          {{#if @tagContent}}
            <PixTag @color={{@tagColor}}>
              {{@tagContent}}
            </PixTag>
          {{/if}}
          <PixIcon
            class="pix-accordions{{this.isV2Version}}-title-container__toggle-icon"
            @ariaHidden={{true}}
            @name="{{if this.isExpanded 'chevronTop' 'chevronBottom'}}"
          />
        </span>
      </button>

      <div
        id={{this.contentId}}
        class="pix-accordions{{this.isV2Version}}__content"
        aria-hidden={{if this.isExpanded "false" "true"}}
      >
        {{#if this.isContentRendered}}
          {{yield to="content"}}
        {{/if}}
      </div>
    </div>
  </template>
}
