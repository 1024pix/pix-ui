import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixIcon from './pix-icon';
import PixLabel from './pix-label';

export default class PixSegmentedControl extends Component {
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
    this.args.onChange(!this.args.toggled);
  }

  get id() {
    return guidFor(this);
  }

  get toggleName() {
    return `${this.id}-toggle`;
  }

  get idViewA() {
    return `${this.id}-viewA`;
  }

  get idViewB() {
    return `${this.id}-viewB`;
  }

  get stateViewA() {
    return !this.args.toggled;
  }

  get stateViewB() {
    return this.args.toggled;
  }

  <template>
    <fieldset class={{this.className}} role="radiogroup">
      <PixLabel
        @useAsLegend={{true}}
        @screenReaderOnly={{@screenReaderOnly}}
        @subLabel={{@subLabel}}
        @size={{@size}}
        @inlineLabel={{@inlineLabel}}
      >
        {{yield to="label"}}
      </PixLabel>

      <div class="pix-segmented-control__radio">
        <label class="pix-segmented-control__radio-label" for={{this.idViewA}}>
          {{#if @iconA}}
            <PixIcon @name={{@iconA}} @plainIcon={{this.stateViewA}} @ariaHidden={{true}} />
          {{/if}}
          {{yield to="viewA"}}
          <input
            class="screen-reader-only"
            {{on "change" this.onChange}}
            id={{this.idViewA}}
            type="radio"
            name={{this.toggleName}}
            value="viewA"
            checked={{this.stateViewA}}
          />
        </label>
        <label class="pix-segmented-control__radio-label" for={{this.idViewB}}>
          {{#if @iconB}}
            <PixIcon @name={{@iconB}} @plainIcon={{this.stateViewB}} @ariaHidden={{true}} />
          {{/if}}
          {{yield to="viewB"}}
          <input
            class="screen-reader-only"
            {{on "change" this.onChange}}
            id={{this.idViewB}}
            type="radio"
            name={{this.toggleName}}
            value="viewB"
            checked={{this.stateViewB}}
          />
        </label>
      </div>
    </fieldset>
  </template>
}
