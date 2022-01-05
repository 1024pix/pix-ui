import { getRootElement } from '@ember/test-helpers';

function _isTextInElement(element, text) {
  const isTextFoundInElement =
    element.textContent?.trim().includes(text) || element.value?.toString().trim().includes(text);

  if (isTextFoundInElement) {
    return true;
  }

  const hasElementChildren = element.children.length > 0;
  if (hasElementChildren) {
    for (let i = 0; i < element.children.length; i++) {
      if (_isTextInElement(element.children[i], text)) {
        return true;
      }
    }
  }

  return false;
}

export function contains(text) {
  const result = _isTextInElement(getRootElement(), text);

  let message = `There is no elements with "${text}"`;
  if (result) {
    message = `Element with "${text}" found`;
  }

  this.pushResult({ result, message });
}

export function notContains(text) {
  const elements = _isTextInElement(getRootElement(), text);
  const result = elements.length === 0;

  let message = `Element with "${text}" found`;
  if (result) {
    message = `There is no elements with "${text}"`;
  }

  this.pushResult({
    result,
    message,
  });
}
