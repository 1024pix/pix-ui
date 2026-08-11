import { modifier } from 'ember-modifier';

const SCROLL_LOCK_CLASS = 'pix-overlay-scroll-lock';

const scrollLockingDialogs = new Set();

function lockPageScrolling(element) {
  scrollLockingDialogs.add(element);
  document.body.classList.add(SCROLL_LOCK_CLASS);
}

function unlockPageScrolling(element) {
  scrollLockingDialogs.delete(element);

  if (scrollLockingDialogs.size === 0) {
    document.body.classList.remove(SCROLL_LOCK_CLASS);
  }
}

/**
 * @param {boolean} isOpen
 * @param {boolean} [focusOnClose=true]
 */
export default modifier(function modalDialog(element, [isOpen, focusOnClose = true]) {
  if (isOpen) {
    if (!element.open) {
      element.showModal();
    }

    lockPageScrolling(element);
  } else if (element.open) {
    const hadFocusInside = element.contains(document.activeElement);

    element.close();

    if (focusOnClose === false && hadFocusInside) {
      document.activeElement?.blur();
    }
  }

  return () => {
    unlockPageScrolling(element);
  };
});
