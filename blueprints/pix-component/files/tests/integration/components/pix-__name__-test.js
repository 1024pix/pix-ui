import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | <%= dasherizedModuleName %>', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-<%= dasherizedModuleName %>';

  test('it renders the default Pix<%= classifiedModuleName %>', async function(assert) {
    // when
    await render(hbs`
      <Pix<%= classifiedModuleName %>
        <!-- TODO -->
      />
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'content');
  });

});
