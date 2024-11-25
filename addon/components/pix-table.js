import Component from '@glimmer/component';

export default class PixTable extends Component {
  get computedData() {
    return this.args.data.map((data) => {
      return this.args.headers.map((header) => {
        return data[header.key];
      });
    });
  }
}
