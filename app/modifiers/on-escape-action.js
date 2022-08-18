import { modifier } from 'ember-modifier';

export default modifier((element, [callback]) => {
  function handleKeyUp(event) {
    const TAB_KEY = 'Escape';

    if (event.key !== TAB_KEY) {
      return;
    }

    callback(event);
  }

  element.addEventListener('keyup', handleKeyUp);

  return () => {
    element.removeEventListener('keyup', handleKeyUp);
  };
});
