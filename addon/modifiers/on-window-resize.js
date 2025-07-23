import { modifier } from 'ember-modifier';

const observerMap = new WeakMap();

export default modifier(function onWindowResize(element, [changeHandler]) {
  let observer;

  if (observerMap.has(changeHandler)) {
    observer = observerMap.get(changeHandler);
  } else {
    observer = new ResizeObserver(changeHandler);
    observerMap.set(changeHandler, observer);
  }

  observer.observe(element);

  return () => {
    observer.unobserve(element);
  };
});
