import Component from '@glimmer/component';

export default class PixStars extends Component {
  get starsCount() {
    if (!this.args.total && !this.args.count) return [];
    return this.args.total ? Array(this.args.total) : Array(this.args.count);
  }

  get itemClasses() {
    if (!this.args.color) return 'pix-stars__item';
    return `pix-stars__item pix-stars__item--color-${this.args.color}`;
  }
}
