import Component from '@glimmer/component';

export default class PixStepComponent extends Component {
  get cssClass() {
    const classes = ['pix-step'];

    if (this.args.isCurrent) {
      classes.push('pix-step--current');
    }

    return classes.join(' ');
  }

  get displayIndex() {
    return this.args.index + 1;
  }

  get ariaCurrent() {
    return this.args.isCurrent ? 'step' : null;
  }

  <template>
    <li class={{this.cssClass}} aria-current={{this.ariaCurrent}} ...attributes>
      <div class="pix-step__index" aria-hidden="true">
        {{this.displayIndex}}
      </div>
      {{#if @title}}
        <div class="pix-step__title">
          {{@title}}
        </div>
      {{/if}}
      {{#if @subtitle}}
        <div class="pix-step__subtitle">
          {{@subtitle}}
        </div>
      {{/if}}
    </li>
  </template>
}
