import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

import PixButton from './pix-button';
import PixIcon from './pix-icon';

export default class PixFilterBanner extends Component {
  get displayTitle() {
    return Boolean(this.args.title);
  }

  get displayDetails() {
    return Boolean(this.args.details);
  }

  get displayClearFilters() {
    return Boolean(this.args.clearFiltersLabel);
  }

  get displayLoadFilters() {
    return Boolean(this.args.loadFiltersLabel);
  }

  get displayActionMenu() {
    return this.displayClearFilters || this.displayDetails || this.displayLoadFilters;
  }

  @action
  onSubmit(event) {
    if (this.args.onLoadFilters) {
      event.preventDefault();
      this.args.onLoadFilters(event);
    }
  }

  <template>
    <form {{on "submit" this.onSubmit}} class="pix-filter-banner" ...attributes>
      {{#if this.displayTitle}}
        <p class="pix-filter-banner__title">
          <PixIcon
            @name="filter"
            @plainIcon={{true}}
            class="pix-filter-banner__icon-title"
            aria-hidden="true"
          />
          {{@title}}
        </p>
      {{/if}}

      <div class="pix-filter-banner__container">
        <div class="pix-filter-banner__filter">
          {{yield}}
        </div>

        {{#if this.displayActionMenu}}
          <div class="pix-filter-banner__action">
            {{#if this.displayDetails}}
              <p>{{@details}}</p>
            {{/if}}

            {{#if this.displayLoadFilters}}
              <PixButton @variant="primary" @type="submit" @size="small">
                {{@loadFiltersLabel}}
              </PixButton>
            {{/if}}

            {{#if this.displayClearFilters}}
              <PixButton
                class="pix-filter-banner__button"
                @iconBefore="delete"
                @variant="tertiary"
                @size="small"
                @triggerAction={{@onClearFilters}}
                @isDisabled={{@isClearFilterButtonDisabled}}
              >
                {{@clearFiltersLabel}}
              </PixButton>
            {{/if}}
          </div>
        {{/if}}
      </div>
    </form>
  </template>
}
