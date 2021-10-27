import Component from '@glimmer/component';

const STAR_ACQUIRED = 'acquired';
const STAR_UNACQUIRED = 'unacquired';

export default class PixStars extends Component {
  get pixStarsClass() {
    if (!this.args.color) return 'pix-stars';
    return `pix-stars pix-stars--${this.args.color}`;
  }

  get stars() {
    const { count = 0, total = 0 } = this.args;

    const starsTotal = total || count;

    const stars = [];
    for (let index = 0; index < starsTotal; index++) {
      if (index < count) {
        stars[index] = STAR_ACQUIRED;
      } else {
        stars[index] = STAR_UNACQUIRED;
      }
    }
    return stars;
  }
}
