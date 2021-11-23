import Component from '@glimmer/component';

export default class PixTextarea extends Component {
  get textLengthIndicator() {
    return this.args.value ? this.args.value.length : 0;
  }

  get label() {
    const labelIsDefined = this.args.label?.trim();
    const idIsNotDefined = !this.args.id?.trim();

    if (labelIsDefined && idIsNotDefined) {
      throw new Error('ERROR in PixTextarea component, @id param is necessary when giving @label');
    }
    return this.args.label || null;
  }
}
