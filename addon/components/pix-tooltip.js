import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  getPosition: computed('position', function() {
    const correctsPosition = ['top', 'right', 'bottom', 'left'];
    return correctsPosition.includes(this.position) ? this.position : 'top';
  })
});
