import { modifier } from 'ember-modifier';

export default modifier((element, [elementId, callback, isExpanded]) => {
  element.addEventListener('keydown', handleKeyDown);

  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };

  function handleKeyDown(event) {
    const ARROW_UP_KEY = 'ArrowUp';
    const ARROW_DOWN_KEY = 'ArrowDown';

    if (![ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
      return;
    }
    event.preventDefault();

    const focusElement = () => {
      const targetElement = document.getElementById(elementId);
      if (!targetElement) return;

      const focusableElements = findFocusableElements(targetElement);

      const [firstFocusableElement] = focusableElements;
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      const activeIndexElement = focusableElements.findIndex((elementToTarget) => {
        return document.activeElement === elementToTarget;
      });

      const handleArrowDown = () => {
        if (
          !isExpanded ||
          document.activeElement === lastFocusableElement ||
          activeIndexElement === -1
        ) {
          firstFocusableElement?.focus();
        } else {
          focusableElements[activeIndexElement + 1].focus();
        }
      };

      const handleArrowUp = () => {
        if (
          !isExpanded ||
          document.activeElement === firstFocusableElement ||
          activeIndexElement === -1
        ) {
          lastFocusableElement?.focus();
        } else {
          focusableElements[activeIndexElement - 1].focus();
        }
      };

      if (ARROW_UP_KEY === event.key) {
        handleArrowUp();
      } else if (ARROW_DOWN_KEY === event.key) {
        handleArrowDown();
      }
    };

    if (!isExpanded) {
      callback(event);

      const waitForElement = () => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          targetElement.addEventListener('transitionend', focusElement, { once: true });
        } else {
          requestAnimationFrame(waitForElement);
        }
      };

      waitForElement();
    } else {
      focusElement();
    }
  }
});

function findFocusableElements(element) {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
}
