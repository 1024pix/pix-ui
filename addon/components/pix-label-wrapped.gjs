import Component from '@glimmer/component';

import PixIcon from './pix-icon';

export default class PixLabelWrapped extends Component {
  get className() {
    const classes = ['pix-label', 'pix-label-wrapped'];

    if (this.args.inlineLabel) classes.push('pix-label--inline-label');
    if (this.args.isDisabled) classes.push('pix-label-wrapped--disabled');
    if (this.args.variant === 'modulix') {
      classes.push('pix-label-wrapped--variant-modulix');
      if (this.args.state === 'success') classes.push('pix-label-wrapped--state-modulix-success');
      if (this.args.state === 'error') classes.push('pix-label-wrapped--state-modulix-error');
      if (this.args.state === 'neutral') classes.push('pix-label-wrapped--state-modulix-neutral');
      if (this.args.state === 'declarative')
        classes.push('pix-label-wrapped--state-modulix-declarative');
      if (this.args.state === 'declarative-selected')
        classes.push('pix-label-wrapped--state-modulix-declarative-selected');
    } else {
      if (this.args.state === 'success') classes.push('pix-label-wrapped--state-success');
      if (this.args.state === 'error') classes.push('pix-label-wrapped--state-error');
    }

    const size = ['small', 'large'].includes(this.args.size) ? this.args.size : 'default';

    classes.push(`pix-label--${size}`);

    return classes.join(' ');
  }

  get hasError() {
    return this.args.state === 'error';
  }

  get hasSuccess() {
    return this.args.state === 'success';
  }

  <template>
    <label for={{@for}} class={{this.className}} ...attributes>
      {{#if this.hasError}}
        <PixIcon
          @name="cancel"
          @plainIcon={{true}}
          @ariaHidden={{true}}
          class="pix-label-wrapped__state-icon"
        />
      {{/if}}
      {{#if this.hasSuccess}}
        <PixIcon
          @name="checkCircle"
          @plainIcon={{true}}
          @ariaHidden={{true}}
          class="pix-label-wrapped__state-icon"
        />
      {{/if}}

      {{yield to="inputElement"}}

      <span class="{{if @screenReaderOnly 'screen-reader-only'}}">
        {{yield}}

        {{#if @requiredLabel}}
          <abbr title={{@requiredLabel}} class="mandatory-mark">*</abbr>
        {{/if}}

        {{#if @subLabel}}
          <span class="pix-label__sub-label">{{@subLabel}}</span>
        {{/if}}
      </span>
    </label>
  </template>
}
