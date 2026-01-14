import Component from '@glimmer/component';

export default class PixLabel extends Component {
  get className() {
    const classes = ['pix-label'];

    if (this.args.screenReaderOnly) classes.push('screen-reader-only');
    if (this.args.inlineLabel) classes.push('pix-label--inline-label');
    if (this.args.isDisabled) classes.push('pix-label--disabled');

    const size = ['small', 'large'].includes(this.args.size) ? this.args.size : 'default';

    classes.push(`pix-label--${size}`);

    return classes.join(' ');
  }

  <template>
    {{#if @useAsLegend}}
      <legend class={{this.className}} ...attributes>
        <ChoreLabel @requiredLabel={{@requiredLabel}} @subLabel={{@subLabel}}>{{yield}}</ChoreLabel>
      </legend>
    {{else}}
      <label for={{@for}} class={{this.className}} ...attributes>
        <ChoreLabel @requiredLabel={{@requiredLabel}} @subLabel={{@subLabel}}>{{yield}}</ChoreLabel>
      </label>
    {{/if}}
  </template>
}

const ChoreLabel = <template>
  {{yield}}
  {{#if @requiredLabel}}
    <abbr title={{@requiredLabel}} class="mandatory-mark">*</abbr>
  {{/if}}

  {{#if @subLabel}}
    <span class="pix-label__sub-label">{{@subLabel}}</span>
  {{/if}}
</template>;
