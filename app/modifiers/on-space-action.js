import { modifier } from 'ember-modifier';

export default modifier((element, [callback]) => {
  const listener = (event) => handleKeyUp(event, callback);
  element.addEventListener('keydown', listener);

  return () => {
    element.removeEventListener('keydown', listener);
  };
});

function handleKeyUp(event, callback) {
  const SPACE_KEY = ' ';

  if (event.key !== SPACE_KEY) {
    return;
  }

  callback(event);
}
