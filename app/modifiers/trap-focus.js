import { modifier } from 'ember-modifier';

export default modifier(function trapFocus(element) {
  const [firstFocusableElement] = findFocusableElements(element);

  firstFocusableElement.focus();

  function handleKeyDown(event) {
    const TAB_KEY = 9;
    const focusableElements = findFocusableElements(element);
    const [firstFocusableElement] = focusableElements;
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (event.keyCode !== TAB_KEY) {
      return;
    }

    function handleBackwardTab() {
      if (document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      }
    }

    function handleForwardTab() {
      if (document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }

    if (event.shiftKey) {
      handleBackwardTab();
    } else {
      handleForwardTab();
    }
  }

  element.addEventListener('keydown', handleKeyDown);

  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
});

function findFocusableElements(element) {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    ),
  ].filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
}
