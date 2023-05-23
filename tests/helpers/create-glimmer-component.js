import { getContext } from '@ember/test-helpers';
import GlimmerComponentManager from '@glimmer/component/-private/ember-component-manager';
import { macroCondition, dependencySatisfies, importSync } from '@embroider/macros';

export default function createComponent(lookupPath, named = {}) {
  const { owner } = getContext();
  let componentClass;
  if (macroCondition(dependencySatisfies('@embroider/core', '*'))) {
    componentClass = importSync(`../../../../components/${lookupPath}`).default;
  } else {
    const result = owner.factoryFor(`component:${lookupPath}`);
    componentClass = result.class;
  }
  const componentManager = new GlimmerComponentManager(owner);
  return componentManager.createComponent(componentClass, { named });
}
