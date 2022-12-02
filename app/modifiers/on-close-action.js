import { modifier } from 'ember-modifier';

export default modifier((element, [isOpen, callback]) => {
  if (!isOpen) {
    callback(element)
  }
});
