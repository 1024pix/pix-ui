import { getContext } from '@ember/test-helpers';
import { dependencySatisfies, importSync, macroCondition } from '@embroider/macros';
import GlimmerComponentManager from '@glimmer/component/-private/ember-component-manager';

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
