import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  getPosition: computed('position', function() {
    const correctsPosition = ['top', 'right', 'bottom', 'left'];
    return correctsPosition.includes(this.position) ? this.position : 'top';
  }),
  displayInline: computed('inline', function() {
    const inlineInString = this.inline ? this.inline.toString() : '';
    return inlineInString == 'true' ? 'pix-tooltip__content--no-wrap' : '';
  })
});
