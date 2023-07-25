import { modifier } from 'ember-modifier';

let sourceActiveElement = null;

export default modifier(function trapFocus(element, [isOpen]) {
  const [firstFocusableElement] = findFocusableElements(element);

  if (isOpen) {
    preventPageScrolling();
    sourceActiveElement = document.activeElement;
    focusElement(firstFocusableElement, element);
  } else if (sourceActiveElement) {
    allowPageScrolling();
    focusElement(sourceActiveElement, element);
  }

  element.addEventListener('keydown', (event) => {
    handleKeyDown(event, element);
  });

  return () => {
    element.removeEventListener('keydown', (event) => {
      handleKeyDown(event, element);
    });
    allowPageScrolling();
  };
});

function findFocusableElements(element) {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
}

function focusElement(elementToFocus, element) {
  let focusOnce = false;

  const handleTransitionEnd = () => {
    if (!focusOnce) {
      elementToFocus.focus();
      focusOnce = true;
    }
  };

  if (hasTransitionDuration(element)) {
    element.addEventListener('transitionend', handleTransitionEnd);
  } else if (hasAnimationDuration(element)) {
    element.addEventListener('animationend', handleTransitionEnd);
  } else {
    elementToFocus.focus();
  }

  return () => {
    if (hasTransitionDuration(element)) {
      element.removeEventListener('transitionend', handleTransitionEnd);
    } else if (hasAnimationDuration(element)) {
      element.removeEventListener('animationend', handleTransitionEnd);
    }
  };
}

function preventPageScrolling() {
  document.body.classList.add('body__trap-focus');
}

function allowPageScrolling() {
  document.body.classList.remove('body__trap-focus');
}

function hasTransitionDuration(element) {
  return hasDurationByKey(element, 'transition-duration');
}

function hasAnimationDuration(element) {
  return hasDurationByKey(element, 'animation-duration');
}

function hasDurationByKey(element, key) {
  return !['', '0s'].includes(getComputedStyle(element, null).getPropertyValue(key));
}

function handleKeyDown(event, element) {
  const TAB_KEY = 'Tab';
  const focusableElements = findFocusableElements(element);
  const [firstFocusableElement] = focusableElements;
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  if (event.key !== TAB_KEY) {
    return;
  }

  const handleBackwardTab = () => {
    if (document.activeElement === firstFocusableElement) {
      event.preventDefault();
      lastFocusableElement.focus();
    }
  };

  const handleForwardTab = () => {
    if (document.activeElement === lastFocusableElement) {
      event.preventDefault();
      firstFocusableElement.focus();
    }
  };

  if (event.shiftKey) {
    handleBackwardTab();
  } else {
    handleForwardTab();
  }
}
