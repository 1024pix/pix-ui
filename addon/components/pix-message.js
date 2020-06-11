import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  getType: computed('type', function() {
    const correctTypes = ["info", "success", "warning", "alert"];
    return correctTypes.includes(this.type) ? this.type : 'info';
  }),
});
