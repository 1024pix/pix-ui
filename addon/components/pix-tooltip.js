import Component from '@ember/component';
import layout from '../components/pix-tooltip'; // TODO: repare this stupide path
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  getPosition: computed('position', function() {
    const correctsPosition = ['top', 'right', 'bottom', 'left'];
    return correctsPosition.includes(this.position) ? this.position : 'top';
  })
});