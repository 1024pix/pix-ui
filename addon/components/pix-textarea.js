import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixTextarea extends Component {
  @tracked value = this.args.value;

  get textLengthIndicator() {
    return this.value ? this.value.length : 0;
  }

  get label() {
    const labelIsDefined = this.args.label?.trim();
    const idIsDefined = this.args.id?.trim();

    if (labelIsDefined && !idIsDefined) {
      throw new Error('ERROR in PixTextarea component, @id param is necessary when giving @label');
    }
    return this.args.label || null;
  }

  @action
  updateValue(event) {
    this.value = event.target.value;
  }

  get requiredLabel() {
    const idRequiredLabelDefined = this.args.requiredLabel?.trim();
    const labelIsDefined = this.args.label?.trim();

    if (idRequiredLabelDefined && !labelIsDefined) {
      throw new Error(
        'ERROR in PixTextarea component, @label param is necessary when giving @requiredLabel'
      );
    }
    return this.args.requiredLabel || null;
  }
}
