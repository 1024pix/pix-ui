import Component from '@glimmer/component';

export default class PixTextarea extends Component {
  get textLengthIndicator() {
    return this.args.value ? this.args.value.length : 0;
  }

  get label() {
    const labelIsDefined = this.args.label?.trim();
    const idIsDefined = this.args.id?.trim();

    if (labelIsDefined && !idIsDefined) {
      throw new Error('ERROR in PixTextarea component, @id param is necessary when giving @label');
    }
    return this.args.label || null;
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
