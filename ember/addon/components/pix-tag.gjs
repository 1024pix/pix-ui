import Component from '@glimmer/component';

export default class PixTag extends Component {
  <template>
    <pix-tag color="{{@color}}">
      {{yield}}
    </pix-tag>
  </template>
}
