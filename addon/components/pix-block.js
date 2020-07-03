import Component from '@glimmer/component';

export default class PixBlockComponent extends Component {
  text = 'pix-block';

  get getShadowWeight() {
    const shadowParam = this.args.shadow;
    const correctsWeight = ['light', 'heavy'];
    return correctsWeight.includes(shadowParam) ? shadowParam : 'light';
  }
}
