import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import PixLabel from './pix-label';
import { not } from 'ember-truth-helpers';
import { action } from '@ember/object';
import PixIcon from './pix-icon';

export default class PixToggleButton extends Component {
  @tracked toggled = this.args.toggled || false;

  get className() {
    const classes = ['pix-toggle-button'];

    if (this.args.inlineLabel) {
      classes.push('pix-toggle-button--inline');
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
