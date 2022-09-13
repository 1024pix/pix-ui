import { modifier } from 'ember-modifier';

export default modifier((element, [callback, focusId = null]) => {
  function handleKeyUp(event) {
    const ENTER_KEY = 'Enter';

    if (event.key !== ENTER_KEY) {
      return;
    }

    if (element.type === 'checkbox') {
      element.checked = !element.checked;
      element.dispatchEvent(new Event('change'));
    }

    if (focusId) {
      document.getElementById(focusId).focus();
    }

    callback(event);
  }

  element.addEventListener('keydown', handleKeyUp);

  return () => {
    element.removeEventListener('keydown', handleKeyUp);
  };
});
