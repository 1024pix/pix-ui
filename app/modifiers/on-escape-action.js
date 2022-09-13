import { modifier } from 'ember-modifier';

export default modifier((element, [callback, focusId = null]) => {
  function handleKeyUp(event) {
    const ESCAPE_KEY = 'Escape';

    if (event.key !== ESCAPE_KEY) {
      return;
    }

    callback(event);

    if (focusId) {
      document.getElementById(focusId).focus();
    }
  }

  element.addEventListener('keyup', handleKeyUp);

  return () => {
    element.removeEventListener('keyup', handleKeyUp);
  };
});
