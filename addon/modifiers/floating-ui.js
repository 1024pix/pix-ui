import { assert } from '@ember/debug';
import { autoUpdate, computePosition, flip, hide, offset, shift } from '@floating-ui/dom';
import { modifier as eModifier } from 'ember-modifier';

export const anchorTo = eModifier(
  (
    floatingElement,
    [_referenceElement],
    {
      strategy = 'fixed',
      offsetOptions = 0,
      placement = 'bottom',
      flipOptions,
      shiftOptions,
      middleware = [],
      setData,
    },
  ) => {
    const referenceElement =
      typeof _referenceElement === 'string'
        ? document.querySelector(_referenceElement)
        : _referenceElement;

    assert(
      'no reference element defined',
      referenceElement instanceof HTMLElement || referenceElement instanceof SVGElement,
    );

    assert(
      'no floating element defined',
      floatingElement instanceof HTMLElement || _referenceElement instanceof SVGElement,
    );

    assert(
      'reference and floating elements cannot be the same element',
      floatingElement !== _referenceElement,
    );

    assert('@middleware must be an array of one or more objects', Array.isArray(middleware));

    Object.assign(floatingElement.style, {
      position: strategy,
      top: '0',
      left: '0',
    });

    const update = async () => {
      const { middlewareData, x, y } = await computePosition(referenceElement, floatingElement, {
        middleware: [
          offset(offsetOptions),
          flip(flipOptions),
          shift(shiftOptions),
          ...middleware,
          hide({ strategy: 'referenceHidden' }),
          hide({ strategy: 'escaped' }),
          exposeMetadata(),
        ],
        placement,
        strategy,
      });

      const referenceHidden = middlewareData.hide?.referenceHidden;

      Object.assign(floatingElement.style, {
        top: `${y}px`,
        left: `${x}px`,
        margin: 0,
        visibility: referenceHidden ? 'hidden' : 'visible',
      });

      void setData?.(middlewareData['metadata']);
    };

    void update();

    const cleanup = autoUpdate(referenceElement, floatingElement, update);

    /**
     * in the function-modifier manager, teardown of the previous modifier
     * occurs before setup of the next
     * https://github.com/ember-modifier/ember-modifier/blob/main/ember-modifier/src/-private/function-based/modifier-manager.ts#L58
     */
    return cleanup;
  },
);

function exposeMetadata() {
  return {
    name: 'metadata',
    fn: (data) => {
      return { data };
    },
  };
}
