import Component from '@glimmer/component';

export default class PixBackgroundHeaderComponent extends Component {
  text = 'pix-background-header';

  <template>
    <div class="pix-background-header" ...attributes>
      <div class="pix-background-header__background"></div>

      <div class="pix-background-header__content">
        {{yield}}
      </div>
    </div>
  </template>
}
