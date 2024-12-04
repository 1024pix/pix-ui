import Component from '@glimmer/component';

export default class PixTableColumn extends Component {
  get displayHeader() {
    return this.args.context === 'header';
  }
}
