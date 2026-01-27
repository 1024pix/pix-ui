import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class PixSelectableTag extends Component {
  @action
  toggleIsChecked() {
    return this.args.onChange(!this.args.checked);
  }

  <template>
    <div class="pix-selectable-tag {{if @checked ' pix-selectable-tag--checked'}}">
      <input
        type="checkbox"
        id={{@id}}
        {{on "change" this.toggleIsChecked}}
        checked={{@checked}}
        ...attributes
      />
      <label for={{@id}}>{{@label}}</label>
    </div>
  </template>
}
