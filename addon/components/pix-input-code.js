import Component from '@glimmer/component';
import { action } from '@ember/object';

const ERROR_MESSAGE = 'ERROR in PixInputCode component, you must provide an @ariaLabel';

export default class PixInputCode extends Component {
  moveFocus = true;
  numInputs = this.args.numInputs || 6;

  get numbersForIterations() {
    return Array.from({ length: this.numInputs }, (_, i) => i + 1);
  }

  get ariaLabel() {
    if (!this.args.ariaLabel) {
      throw new Error(ERROR_MESSAGE);
    }
    return this.args.ariaLabel;
  }

  get inputType() {
    return this.args.inputType || 'number';
  }

  get placeholder() {
    return this.inputType === 'number' ? '0' : null;
  }

  focusElement(index) {
    const nextElem = document.getElementById(`code-input-${index}`);
    nextElem && nextElem.focus();
  }

  validateInput(elem) {
    if (this.inputType === 'number') {
      const startsWithDigit = elem.value.match(/^[1-9]/);
      if (!startsWithDigit) elem.value = '';
    }
    if (elem.value.length > 1) elem.value = [...elem.value][0];
  }

  triggerAction() {
    if (!this.args.onAllInputsFilled) return;

    const code = [];
    for(let i = 1; i <= this.numInputs; i++) {
      const elem = document.getElementById(`code-input-${i}`);
      elem.value.length > 0 && code.push(elem.value);
    }
    if (code.length === this.numInputs) {
      this.args.onAllInputsFilled(code.join(''));
    }
  }

  @action
  handleCodeInput(index) {
    const elem = document.getElementById(`code-input-${index}`);
    this.validateInput(elem);
    if (elem.value.length > 0) {
      elem.classList.add("filled");
      this.moveFocus && this.focusElement(index + 1);
      this.triggerAction();
    } else {
      elem.classList.remove("filled");
    }
  }

  @action
  handleKeyUp(index, event) {
    const eventMap = {
      Backspace: index - 1,
      ArrowLeft: index - 1,
      ArrowRight: index + 1
    }
    const newIndex = eventMap[event.code || event.key];
    this.focusElement(newIndex);
  }

  @action
  handleArrowUpOrDown(event) {
    this.moveFocus = true;
    const eventCode = event.code || event.key;
    if (['ArrowUp', 'ArrowDown'].includes(eventCode)) this.moveFocus = false;
  }

  @action
  handlePaste(index, event) {
    event.preventDefault();
    event.stopPropagation();
    const pastedText = (event.clipboardData || window.clipboardData).getData('text');
    [...pastedText].forEach(char => {
      const elem = document.getElementById(`code-input-${index}`);
      if (elem) {
        this.focusElement(index);
        elem.value = char;
        index++;
      }
    });
    this.focusElement(index);
    this.triggerAction();
  }
}
