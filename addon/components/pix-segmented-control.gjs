import { warn } from '@ember/debug';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { not } from 'ember-truth-helpers';

import PixIcon from './pix-icon';
import PixLabel from './pix-label';

export default class PixSegmentedControl extends Component {
  @tracked toggled = this.args.toggled || false;

  get variant() {
    const value = this.args.variant ?? 'primary';
    const variantList = ['primary', 'orga', 'certif'];

    warn(
      `PixAppLayout: @variant "${value}" should be ${variantList.join(', ')}`,
      variantList.includes(value),
      {
        id: 'pix-ui.pix-segmented-control.variant.not-valid',
      },
    );

    return value;
  }

  get className() {
    const classes = ['pix-segmented-control', `pix-segmented-control--${this.variant}`];

    if (this.args.inlineLabel) {
      classes.push('pix-segmented-control--inline');
    }

    return classes.join(' ');
  }

  @action
  onChange() {
    this.args.onChange(!this.toggled);
    this.toggled = !this.toggled;
  }

  get id() {
    return guidFor(this);
  }

  <template>
    <div class={{this.className}} role="group" aria-labelledby="{{this.id}}">
      <PixLabel
        @for={{this.id}}
        @screenReaderOnly={{@screenReaderOnly}}
        @subLabel={{@subLabel}}
        @size={{@size}}
        @inlineLabel={{@inlineLabel}}
      >
        {{yield to="label"}}
      </PixLabel>
      <div class="radio">
        <input
          onchange={{this.onChange}}
          id="viewA"
          type="radio"
          name="toggle"
          value="viewA"
          checked={{not this.toggled}}
        />
        <label for="viewA">
          {{#if @iconA}}
            <PixIcon @name={{@iconA}} @plainIcon={{not this.toggled}} />
          {{/if}}
          {{yield to="viewA"}}
        </label>
        <input
          onchange={{this.onChange}}
          id="viewB"
          type="radio"
          name="toggle"
          value="viewB"
          checked={{this.toggled}}
        />
        <label for="viewB">
          {{#if @iconB}}
            <PixIcon @name={{@iconB}} @plainIcon={{this.toggled}} />
          {{/if}}
          {{yield to="viewB"}}
        </label>
      </div>
    </div>
  </template>
}
