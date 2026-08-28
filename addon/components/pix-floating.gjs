import { hash } from '@ember/helper';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier as eModifier } from 'ember-modifier';

import { anchorTo } from '../modifiers/floating-ui';

const ref = eModifier((element, positional) => {
  const fn = positional[0];
  fn(element);
});

/**
 * A component that provides no DOM and yields two modifiers for creating
 * creating floating uis, such as menus, popovers, tooltips, etc.
 * This component currently uses [Floating UI](https://floating-ui.com/)
 *
 * Example usage:
 * ```gjs
 * import { PixFloating } from '@1024pix/pix-ui';
 *
 * <template>
 *   <PixFloating as |reference floating|>
 *     <button {{reference}}> ... </button>
 *     <menu {{floating}}> ... </menu>
 *   </PixFloating>
 * </template>
 * ```
 */
export default class PixFloating extends Component {
  @tracked reference = undefined;
  @tracked data = undefined;

  setData = (data) => (this.data = data);

  setReference = (element) => (this.reference = element);

  <template>
    {{#let
      (modifier
        anchorTo
        flipOptions=@flipOptions
        hideOptions=@hideOptions
        middleware=@middleware
        offsetOptions=@offsetOptions
        placement=@placement
        shiftOptions=@shiftOptions
        strategy=@strategy
        setData=this.setData
      )
      as |prewiredAnchorTo|
    }}
      {{#let (if this.reference (modifier prewiredAnchorTo this.reference)) as |floating|}}
        {{yield
          (modifier ref this.setReference)
          floating
          (hash setReference=this.setReference data=this.data)
        }}
      {{/let}}
    {{/let}}
  </template>
}
