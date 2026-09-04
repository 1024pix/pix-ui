'use strict';

define("dummy/tests/acceptance/pix-modal-page-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "dummy/tests/helpers/wait-for"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _waitFor) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"dummy/tests/helpers/wait-for"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | PixModalPageTest', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('Should redirect to link', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.visit)('/modal');
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: 'Ouvrir la modale'
      }));
      await (0, _waitFor.waitForDialog)();

      // when
      await (0, _testHelpers.click)(screen.getByRole('link', {
        name: 'My link'
      }));

      // then
      assert.strictEqual((0, _testHelpers.currentURL)(), '/hello-world');
    });
  });
});
define("dummy/tests/acceptance/pix-select-page-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "@testing-library/user-event", "ember-qunit", "qunit"], function (_emberTestingLibrary, _testHelpers, _userEvent, _emberQunit, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"@testing-library/user-event",0,"ember-qunit",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | PixSelectPageTest', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.module)('PixMultiSelect', function () {
      (0, _qunit.test)('displayed options should be reactive', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.visit)('/select');

        // when
        await screen.getByLabelText('Kebab').focus();
        await _userEvent.default.keyboard('[ArrowDown]');
        await screen.findByRole('menu');
        assert.strictEqual(screen.getAllByRole('menuitem').length, 3);
        await _userEvent.default.keyboard('[Escape]');
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: 'Ajouter une option'
        }));

        // then
        await screen.getByLabelText('Kebab').focus();
        await _userEvent.default.keyboard('[ArrowDown]');
        await screen.findByRole('menu');
        assert.strictEqual(screen.getAllByRole('menuitem').length, 4);
        assert.ok(screen.getByRole('menuitem', {
          name: 'Harissa (NEW)'
        }));
      });
      (0, _qunit.test)('it should filter by custom regex', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.visit)('/select');

        // when
        const multiSelect = screen.getByRole('button', {
          name: 'Kebab'
        });
        await (0, _testHelpers.click)(multiSelect);
        await (0, _testHelpers.fillIn)(await screen.findByRole('textbox', {
          name: 'Rechercher mon condiment'
        }), '[A-Z]{1}[a-z]{6}');
        await screen.findByRole('menu');

        // then
        assert.strictEqual(screen.getAllByRole('menuitem').length, 1);
        assert.dom(screen.getByRole('menuitem', {
          name: 'Oignons'
        })).exists();
      });
    });
    (0, _qunit.module)('PixSelect', function () {
      (0, _qunit.test)('displayed options should be reactive', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.visit)('/select');

        // when
        await screen.getByLabelText('Fruits').focus();
        await _userEvent.default.keyboard('[ArrowDown]');
        await screen.findByRole('listbox');
        assert.strictEqual(screen.getAllByRole('option').length, 6);
        await _userEvent.default.keyboard('[Escape]');
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: 'Ajouter un citron'
        }));

        // then
        await screen.getByLabelText('Fruits').focus();
        await _userEvent.default.keyboard('[ArrowDown]');
        await screen.findByRole('listbox');
        assert.strictEqual(screen.getAllByRole('option').length, 7);
        assert.dom(screen.getAllByRole('presentation').at(-1)).hasText('yellow');
        assert.dom(screen.getByRole('option', {
          name: 'Citron'
        })).exists();
      });
      (0, _qunit.test)('it should filter by custom regex', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.visit)('/select');

        // when
        const select = screen.getByRole('button', {
          name: 'Fruits'
        });
        await (0, _testHelpers.click)(select);
        await screen.findByRole('listbox');
        await (0, _testHelpers.fillIn)(await screen.findByRole('textbox', {
          name: 'Rechercher'
        }), 'K[a-z]{3}');

        // then
        assert.strictEqual(screen.getAllByRole('option').length, 1);
        assert.dom(screen.getByRole('option', {
          name: 'Kaki'
        })).exists();
      });
    });
  });
});
define("dummy/tests/acceptance/pix-side-panel-page-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "dummy/tests/helpers/wait-for"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _waitFor) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"dummy/tests/helpers/wait-for"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | PixSidePanelPageTest', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('Should redirect to link', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.visit)('/sidepanel');
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: 'Ouvrir le sidepanel'
      }));
      await (0, _waitFor.waitForDialog)();

      // when
      await (0, _testHelpers.click)(screen.getByRole('link', {
        name: 'My link'
      }));

      // then
      assert.strictEqual((0, _testHelpers.currentURL)(), '/hello-world');
    });
  });
});
define("dummy/tests/helpers/click-by-label", ["exports", "@ember/test-helpers", "dummy/tests/helpers/get-by-label"], function (_exports, _testHelpers, _getByLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = clickByLabel;
  0; //eaimeta@70e063a35619d71f0,"@ember/test-helpers",0,"dummy/tests/helpers/get-by-label"eaimeta@70e063a35619d71f
  function clickByLabel(labelText) {
    const clickableElement = (0, _getByLabel.default)(labelText);
    return (0, _testHelpers.click)(clickableElement);
  }
});
define("dummy/tests/helpers/contains", ["exports", "@ember/test-helpers"], function (_exports, _testHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.contains = contains;
  _exports.notContains = notContains;
  0; //eaimeta@70e063a35619d71f0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  function _isTextInElement(element, text) {
    const isTextFoundInElement = element.textContent?.trim().includes(text) || element.value?.trim().includes(text);
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
  function contains(text) {
    const result = _isTextInElement((0, _testHelpers.getRootElement)(), text);
    let message = `There is no elements with "${text}"`;
    if (result) {
      message = `Element with "${text}" found`;
    }
    this.pushResult({
      result,
      message
    });
  }
  function notContains(text) {
    const elements = _isTextInElement((0, _testHelpers.getRootElement)(), text);
    const result = elements.length === 0;
    let message = `Element with "${text}" found`;
    if (result) {
      message = `There is no elements with "${text}"`;
    }
    this.pushResult({
      result,
      message
    });
  }
});
define("dummy/tests/helpers/fill-in-by-label", ["exports", "@ember/test-helpers", "dummy/tests/helpers/get-by-label"], function (_exports, _testHelpers, _getByLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = fillInByLabel;
  0; //eaimeta@70e063a35619d71f0,"@ember/test-helpers",0,"dummy/tests/helpers/get-by-label"eaimeta@70e063a35619d71f
  function fillInByLabel(labelText, value) {
    const control = (0, _getByLabel.default)(labelText);
    return (0, _testHelpers.fillIn)(control, value);
  }
});
define("dummy/tests/helpers/get-by-label", ["exports", "dummy/tests/helpers/query-by-label"], function (_exports, _queryByLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = getByLabel;
  0; //eaimeta@70e063a35619d71f0,"dummy/tests/helpers/query-by-label"eaimeta@70e063a35619d71f
  function getByLabel(labelText) {
    const labelledElement = (0, _queryByLabel.default)(labelText);
    if (!labelledElement) {
      throw new Error(`Cannot find any element labelled "${labelText}".`);
    }
    return labelledElement;
  }
});
define("dummy/tests/helpers/query-by-label", ["exports", "@ember/test-helpers"], function (_exports, _testHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = queryByLabel;
  0; //eaimeta@70e063a35619d71f0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  function queryByLabel(labelText) {
    const labelElement = _findLabelElement(labelText);
    if (labelElement) {
      return _getElementControlledByLabel(labelElement, labelText);
    }
    const labelledElement = _findElementWithLabel(labelText);
    if (!labelledElement) {
      return null;
    }
    return labelledElement;
  }
  function _findLabelElement(labelText) {
    return (0, _testHelpers.findAll)('label').find(label => label.innerText.includes(labelText));
  }
  function _getElementControlledByLabel(label, labelText) {
    if (!label.control) {
      throw new Error(`Found label "${labelText}" but no associated form control.`);
    }
    return label.control;
  }
  function _findElementWithLabel(labelText) {
    const labellableElementSelectors = ['button', 'a[href]', '[role="button"]', 'input', 'textarea', 'select', 'label[for]', 'img'];
    return (0, _testHelpers.findAll)(labellableElementSelectors.join(',')).find(_matchesLabel(labelText));
  }
  function _matchesLabel(labelText) {
    return element => _matchesInnerText(element, labelText) || _matchesTitle(element, labelText) || _matchesAriaLabel(element, labelText) || _matchesAltAttribute(element, labelText);
  }
  function _matchesInnerText(element, labelText) {
    return element.innerText.includes(labelText);
  }
  function _matchesTitle(element, labelText) {
    return element.title?.includes(labelText);
  }
  function _matchesAltAttribute(element, labelText) {
    return element.alt?.includes(labelText);
  }
  function _matchesAriaLabel(element, labelText) {
    const ariaLabel = element.getAttribute('aria-label');
    return ariaLabel?.includes(labelText);
  }
});
define("dummy/tests/helpers/wait-for", ["exports", "@1024pix/ember-testing-library", "@ember/test-helpers"], function (_exports, _emberTestingLibrary, _testHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.waitForDialog = waitForDialog;
  _exports.waitForDialogClose = waitForDialogClose;
  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  async function waitForDialog() {
    const screen = await (0, _emberTestingLibrary.getScreen)();
    await (0, _testHelpers.waitUntil)(() => screen.queryAllByRole('dialog').length > 0);
  }
  async function waitForDialogClose() {
    const screen = await (0, _emberTestingLibrary.getScreen)();
    await (0, _testHelpers.waitUntil)(() => screen.queryAllByRole('dialog').length === 0);
  }
});
define("dummy/tests/integration/components/pix-accordions-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function getToggleIconName() {
    const useElement = document.querySelector('.pix-accordions-title-container__toggle-icon use');
    return useElement.getAttribute('href').split('#')[1];
  }
  (0, _qunit.module)('Integration | Component | PixAccordions', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    let warnStub;
    hooks.beforeEach(function () {
      warnStub = _sinon.default.stub(console, 'warn');
    });
    hooks.afterEach(function () {
      warnStub.restore();
    });
    (0, _qunit.test)('it should only render PixAccordions title by default', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixAccordions>
        <:title>
          Titre de mon élément déroulable
        </:title>
        <:content>
          <p>Contenu de mon élément</p>
        </:content>
      </PixAccordions>
      */
      {
        "id": "WxrVAqmn",
        "block": "[[[8,[39,0],null,null,[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
    });
    (0, _qunit.test)('it should render and show content on click on PixAccordions title', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixAccordions aria-label='accordions label'>
        <:title>
          Titre de mon élément déroulable
        </:title>
        <:content>
          <p>Contenu de mon élément</p>
        </:content>
      </PixAccordions>
      */
      {
        "id": "wmYchvG4",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"accordions label\"]],null,[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');

      // then
      assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
    });
    (0, _qunit.test)('it should not destroy content when uncollapsed then collapsed again', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixAccordions aria-label='accordions label'>
        <:title>
          Titre de mon élément déroulable
        </:title>
        <:content>
          <p>Contenu de mon élément</p>
        </:content>
      </PixAccordions>
      */
      {
        "id": "wmYchvG4",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"accordions label\"]],null,[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');
      await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');

      // then
      assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).exists();
    });
    (0, _qunit.test)('it should call onToggle with the new state when uncontrolled', async function (assert) {
      // given
      const onToggle = _sinon.default.stub();
      this.set('onToggle', onToggle);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixAccordions @onToggle={{this.onToggle}}>
        <:title>
          Titre de mon élément déroulable
        </:title>
        <:content>
          <p>Contenu de mon élément</p>
        </:content>
      </PixAccordions>
      */
      {
        "id": "htXqpdsg",
        "block": "[[[8,[39,0],null,[[\"@onToggle\"],[[30,0,[\"onToggle\"]]]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');
      await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');

      // then
      assert.true(onToggle.firstCall.calledWithExactly(true));
      assert.true(onToggle.secondCall.calledWithExactly(false));
    });
    (0, _qunit.module)('when controlled with @isExpanded', function () {
      (0, _qunit.test)('it should render content already expanded without any click', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{true}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "lclROQFY",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\"],[true]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.queryByRole('button')).hasAria('expanded', 'true');
        assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
      });
      (0, _qunit.test)('it should render collapsed and without content when false', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{false}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "BIWYjOBD",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\"],[false]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.queryByRole('button')).hasAria('expanded', 'false');
        assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
      });
      (0, _qunit.test)('it should call onToggle with the requested state on click', async function (assert) {
        // given
        const onToggle = _sinon.default.stub();
        this.set('onToggle', onToggle);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{false}} @onToggle={{this.onToggle}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "yvo32osq",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\",\"@onToggle\"],[false,[30,0,[\"onToggle\"]]]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');

        // then
        assert.true(onToggle.calledOnceWithExactly(true));
      });
      (0, _qunit.test)('it should not change its own state on click while @isExpanded is unchanged', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{false}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "BIWYjOBD",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\"],[false]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');

        // then
        assert.dom(screen.queryByRole('button')).hasAria('expanded', 'false');
        assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
      });
      (0, _qunit.test)('it should expand when @isExpanded becomes true after render', async function (assert) {
        // given
        this.set('isExpanded', false);
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{this.isExpanded}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "LzIks1FU",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\"],[[30,0,[\"isExpanded\"]]]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));

        // when
        this.set('isExpanded', true);
        await (0, _testHelpers.settled)();

        // then
        assert.dom(screen.queryByRole('button')).hasAria('expanded', 'true');
        assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
      });
      (0, _qunit.test)('it should collapse without destroying content when @isExpanded becomes false', async function (assert) {
        // given
        this.set('isExpanded', true);
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{this.isExpanded}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "LzIks1FU",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\"],[[30,0,[\"isExpanded\"]]]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));

        // when
        this.set('isExpanded', false);
        await (0, _testHelpers.settled)();

        // then
        assert.dom(screen.queryByRole('button')).hasAria('expanded', 'false');
        assert.dom(screen.queryByText('Contenu de mon élément')).exists();
        assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
      });
      (0, _qunit.test)('it should display the toggle icon according to the controlled state', async function (assert) {
        // given
        this.set('isExpanded', true);
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{this.isExpanded}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "LzIks1FU",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\"],[[30,0,[\"isExpanded\"]]]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));

        // then
        assert.strictEqual(getToggleIconName(), 'chevronUp');

        // when
        this.set('isExpanded', false);
        await (0, _testHelpers.settled)();

        // then
        assert.strictEqual(getToggleIconName(), 'chevronDown');
      });
      (0, _qunit.test)('it should set aria-hidden on content according to the controlled state', async function (assert) {
        // given
        this.set('isExpanded', true);
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{this.isExpanded}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "LzIks1FU",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\"],[[30,0,[\"isExpanded\"]]]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.settled)();

        // then
        assert.dom('.pix-accordions__content').hasAria('hidden', 'false');

        // when
        this.set('isExpanded', false);
        await (0, _testHelpers.settled)();

        // then
        assert.dom('.pix-accordions__content').hasAria('hidden', 'true');
      });
      (0, _qunit.test)('it should support the v2 version', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{true}} @isV2Version={{true}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "v+6gaYr6",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\",\"@isV2Version\"],[true,true]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.queryByRole('button')).hasClass('pix-accordions-v2__title');
        assert.dom(screen.queryByRole('button')).hasAria('expanded', 'true');
        assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
      });
      (0, _qunit.test)('it should not warn when @onToggle is provided', async function (assert) {
        // given
        this.set('onToggle', _sinon.default.stub());

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{true}} @onToggle={{this.onToggle}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "In7lBUau",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\",\"@onToggle\"],[true,[30,0,[\"onToggle\"]]]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));

        // then
        assert.false(warnStub.calledWithExactly('WARNING: PixAccordions: uncontrolled mode is deprecated, use @isExpanded and @onToggle instead'));
      });
      (0, _qunit.test)('it should stay uncontrolled when @isExpanded is null', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAccordions @isExpanded={{null}}>
          <:title>
            Titre de mon élément déroulable
          </:title>
          <:content>
            <p>Contenu de mon élément</p>
          </:content>
        </PixAccordions>
        */
        {
          "id": "0xlNgpB9",
          "block": "[[[8,[39,0],null,[[\"@isExpanded\"],[null]],[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');

        // then
        assert.dom(screen.queryByRole('button')).hasAria('expanded', 'true');
        assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
      });
    });
    (0, _qunit.test)('it should warn that the uncontrolled mode is deprecated when @onToggle is missing', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixAccordions>
        <:title>
          Titre de mon élément déroulable
        </:title>
        <:content>
          <p>Contenu de mon élément</p>
        </:content>
      </PixAccordions>
      */
      {
        "id": "WxrVAqmn",
        "block": "[[[8,[39,0],null,null,[[\"title\",\"content\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-accordions\",\":title\",\":content\",\"p\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-accordions-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(warnStub.calledWithExactly('WARNING: PixAccordions: uncontrolled mode is deprecated, use @isExpanded and @onToggle instead'));
    });
  });
});
define("dummy/tests/integration/components/pix-app-layout-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-app-layout', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    ['orga', 'default', 'certif', 'admin', 'modulix'].forEach(function (variant) {
      (0, _qunit.test)(`it add the correct className from ${variant}`, async function (assert) {
        // when
        this.variant = variant;
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAppLayout @variant={{this.variant}}><:main>Hello</:main></PixAppLayout>
        */
        {
          "id": "dawAVshu",
          "block": "[[[8,[39,0],null,[[\"@variant\"],[[30,0,[\"variant\"]]]],[[\"main\"],[[[[1,\"Hello\"]],[]]]]]],[],false,[\"pix-app-layout\",\":main\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-app-layout-test.js",
          "isStrictMode": false
        }));
        // then
        assert.strictEqual(this.element.querySelector('.pix-app-layout').classList.value, `pix-app-layout pix-app-layout--${variant}`);
      });
    });
    (0, _qunit.module)('when variant is admin', function () {
      (0, _qunit.test)(`should canNavigationBeShrunk from shrinkNavigationService set to true`, async function (assert) {
        // given
        const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');

        // when
        this.variant = 'admin';
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixAppLayout @variant={{this.variant}}><:main>Hello</:main></PixAppLayout>
        */
        {
          "id": "dawAVshu",
          "block": "[[[8,[39,0],null,[[\"@variant\"],[[30,0,[\"variant\"]]]],[[\"main\"],[[[[1,\"Hello\"]],[]]]]]],[],false,[\"pix-app-layout\",\":main\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-app-layout-test.js",
          "isStrictMode": false
        }));

        // then
        assert.true(shrinkNavigationService.canNavigationBeShrunk);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-background-header-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-background-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const BACKGROUND_HEADER_SELECTOR = '.pix-background-header';
    const BACKGROUND_SELECTOR = `${BACKGROUND_HEADER_SELECTOR} .pix-background-header__background`;
    const BACKGROUND_CONTENT_SELECTOR = `${BACKGROUND_HEADER_SELECTOR} .pix-background-header__content`;
    (0, _qunit.test)('it renders the default PixBackgroundHeader', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBackgroundHeader>
        Je suis un beau background bleu
      </PixBackgroundHeader>
      */
      {
        "id": "aEThCWik",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  Je suis un beau background bleu\\n\"]],[]]]]]],[],false,[\"pix-background-header\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-background-header-test.js",
        "isStrictMode": false
      }));
      const backgroundHeaderElement = this.element.querySelector(BACKGROUND_HEADER_SELECTOR);
      const backgroundElement = this.element.querySelector(BACKGROUND_SELECTOR);

      // then
      assert.contains('Je suis un beau background bleu');
      assert.strictEqual(backgroundHeaderElement.className, 'pix-background-header');
      assert.strictEqual(backgroundElement.className, 'pix-background-header__background');
    });
    (0, _qunit.module)('when there is PixBlock inside PixBackgroundHeader component', function () {
      (0, _qunit.test)('first PixBlock render', async function (assert) {
        // given
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixBackgroundHeader>
          <PixBlock>Je suis un bloc commun</PixBlock>
          <PixBlock @variant='admin'>Je suis un bloc pour Pix Admin</PixBlock>
        </PixBackgroundHeader>
        */
        {
          "id": "XRVNicJ2",
          "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"Je suis un bloc commun\"]],[]]]]],[1,\"\\n  \"],[8,[39,1],null,[[\"@variant\"],[\"admin\"]],[[\"default\"],[[[[1,\"Je suis un bloc pour Pix Admin\"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"pix-background-header\",\"pix-block\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-background-header-test.js",
          "isStrictMode": false
        }));
        const firstBlockElement = this.element.querySelector(BACKGROUND_CONTENT_SELECTOR).children[0];
        const lastBlockElement = this.element.querySelector(BACKGROUND_CONTENT_SELECTOR).children[1];

        // then
        assert.strictEqual(firstBlockElement.className, 'pix-block pix-block--variant-primary');
        assert.contains('Je suis un bloc commun');
        assert.strictEqual(lastBlockElement.className, 'pix-block pix-block--variant-admin');
        assert.contains('Je suis un bloc pour Pix Admin');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-banner-alert-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixBannerAlert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const COMPONENT_SELECTOR = '.pix-banner-alert';
    (0, _qunit.test)('it renders the default PixBannerAlert', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBannerAlert>
        Mon texte
      </PixBannerAlert>
      */
      {
        "id": "cmqkXvXn",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  Mon texte\\n\"]],[]]]]]],[],false,[\"pix-banner-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-alert-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Mon texte');
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.classList.toString().trim(), 'pix-banner-alert pix-banner-alert--information');
    });
    (0, _qunit.test)('it renders the PixBannerAlert with type warning', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBannerAlert @type='warning'>
        Mon texte
      </PixBannerAlert>
      */
      {
        "id": "+qw0iHZe",
        "block": "[[[8,[39,0],null,[[\"@type\"],[\"warning\"]],[[\"default\"],[[[[1,\"\\n  Mon texte\\n\"]],[]]]]]],[],false,[\"pix-banner-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-alert-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.classList.toString().trim(), 'pix-banner-alert pix-banner-alert--warning');
    });
    (0, _qunit.test)('it renders the PixBannerAlert with type error', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBannerAlert @type='error'>
        Mon texte
      </PixBannerAlert>
      */
      {
        "id": "ac3HAfZT",
        "block": "[[[8,[39,0],null,[[\"@type\"],[\"error\"]],[[\"default\"],[[[[1,\"\\n  Mon texte\\n\"]],[]]]]]],[],false,[\"pix-banner-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-alert-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.classList.toString().trim(), 'pix-banner-alert pix-banner-alert--error');
    });
    (0, _qunit.test)('it renders the PixBannerAlert with external url', async function (assert) {
      // given
      this.set('actionUrl', 'www.test.fr/');
      this.set('actionLabel', 'Explorer');

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBannerAlert @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />
      */
      {
        "id": "Kxpknh2H",
        "block": "[[[8,[39,0],null,[[\"@actionUrl\",\"@actionLabel\"],[[30,0,[\"actionUrl\"]],[30,0,[\"actionLabel\"]]]],null]],[],false,[\"pix-banner-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-alert-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Explorer');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(this.element.querySelector('a').getAttribute('href'), 'www.test.fr/');
    });
    (0, _qunit.test)('it renders the PixBannerAlert with internal link', async function (assert) {
      // given

      this.set('actionUrl', 'campaign.participants');
      this.set('actionLabel', 'Explorer');

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBannerAlert @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />
      */
      {
        "id": "Kxpknh2H",
        "block": "[[[8,[39,0],null,[[\"@actionUrl\",\"@actionLabel\"],[[30,0,[\"actionUrl\"]],[30,0,[\"actionLabel\"]]]],null]],[],false,[\"pix-banner-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-alert-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Explorer');
    });
    (0, _qunit.test)('it renders the PixBannerAlert with close icon', async function (assert) {
      // given
      this.set('canCloseBanner', true);

      //when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBannerAlert @type='warning' @canCloseBanner={{this.canCloseBanner}}>
        Mon texte
      </PixBannerAlert>
      */
      {
        "id": "heRId0bE",
        "block": "[[[8,[39,0],null,[[\"@type\",\"@canCloseBanner\"],[\"warning\",[30,0,[\"canCloseBanner\"]]]],[[\"default\"],[[[[1,\"\\n  Mon texte\\n\"]],[]]]]]],[],false,[\"pix-banner-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-alert-test.js",
        "isStrictMode": false
      }));

      // then
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: /Fermer/
      }));
      assert.notOk(screen.queryByText('Mon texte'));
    });
  });
});
define("dummy/tests/integration/components/pix-block-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-block', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const BLOCK_SELECTOR = '.pix-block';
    (0, _qunit.test)('it renders the PixBlock', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBlock @variant='certif' @condensed={{false}}>
        Je suis un beau bloc
      </PixBlock>
      */
      {
        "id": "z2D60l5Y",
        "block": "[[[8,[39,0],null,[[\"@variant\",\"@condensed\"],[\"certif\",false]],[[\"default\"],[[[[1,\"\\n  Je suis un beau bloc\\n\"]],[]]]]]],[],false,[\"pix-block\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-block-test.js",
        "isStrictMode": false
      }));
      const blockElement = this.element.querySelector(BLOCK_SELECTOR);

      // then
      assert.contains('Je suis un beau bloc');
      assert.strictEqual(blockElement.className, 'pix-block pix-block--variant-certif');
    });
    (0, _qunit.module)('when @variant parameter is not given', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)('it renders the primary PixBlock', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixBlock>
          Je suis un beau bloc
        </PixBlock>
        */
        {
          "id": "wd9p1P90",
          "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  Je suis un beau bloc\\n\"]],[]]]]]],[],false,[\"pix-block\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-block-test.js",
          "isStrictMode": false
        }));
        const blockElement = this.element.querySelector(BLOCK_SELECTOR);

        // then
        assert.contains('Je suis un beau bloc');
        assert.strictEqual(blockElement.className, 'pix-block pix-block--variant-primary');
      });
      (0, _qunit.test)('it should warn', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixBlock @variant='PIX APP'>Coucou</PixBlock>
        */
        {
          "id": "AHrwS1md",
          "block": "[[[8,[39,0],null,[[\"@variant\"],[\"PIX APP\"]],[[\"default\"],[[[[1,\"Coucou\"]],[]]]]]],[],false,[\"pix-block\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-block-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(warnStub.calledWithExactly('WARNING: PixBlock: @variant "PIX APP" should be primary, orga, certif, admin, modulix'));
      });
    });
    (0, _qunit.module)('when @condensed parameter is true', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)('it renders the condensed PixBlock', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixBlock @condensed={{true}}>
          Je suis un beau bloc
        </PixBlock>
        */
        {
          "id": "OR3d9knR",
          "block": "[[[8,[39,0],null,[[\"@condensed\"],[true]],[[\"default\"],[[[[1,\"\\n  Je suis un beau bloc\\n\"]],[]]]]]],[],false,[\"pix-block\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-block-test.js",
          "isStrictMode": false
        }));
        const blockElement = this.element.querySelector(BLOCK_SELECTOR);

        // then
        assert.contains('Je suis un beau bloc');
        assert.strictEqual(blockElement.className, 'pix-block pix-block--variant-primary pix-block--condensed');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-breadcrumb-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-breadcrumb', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.owner.setupRouter();
    });
    (0, _qunit.test)('it renders breadcrumb with correct links', async function (assert) {
      // given
      const links = [{
        route: 'hello',
        label: 'Une poule sur un mur'
      }, {
        route: 'bye',
        label: 'Qui picote du pain dur',
        model: 'bye'
      }, {
        route: null,
        label: 'Picoti, picota'
      }];
      this.set('links', links);

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBreadcrumb @links={{this.links}} aria-label='Breadcrumb' />
      */
      {
        "id": "c39wr/t8",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"Breadcrumb\"]],[[\"@links\"],[[30,0,[\"links\"]]]],null]],[],false,[\"pix-breadcrumb\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-breadcrumb-test.js",
        "isStrictMode": false
      }));
      const breadcrumb = screen.getByRole('navigation', {
        name: 'Breadcrumb'
      });

      // then
      const firstCrumb = (0, _emberTestingLibrary.within)(breadcrumb).getByRole('link', {
        name: 'Une poule sur un mur'
      });
      const secondCrumb = (0, _emberTestingLibrary.within)(breadcrumb).getByRole('link', {
        name: 'Qui picote du pain dur'
      });
      assert.strictEqual(firstCrumb.getAttribute('href'), '/hello-world');
      assert.strictEqual(secondCrumb.getAttribute('href'), '/bye/bye');
      assert.ok((0, _emberTestingLibrary.within)(breadcrumb).getByRole('paragraph', {
        text: 'Picoti, picota'
      }));
    });
  });
});
define("dummy/tests/integration/components/pix-button-link-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | button-link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.owner.setupRouter();
    });
    (0, _qunit.test)('it renders an HTML link', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButtonLink href='pix.fr'>
        content
      </PixButtonLink>
      */
      {
        "id": "ETIMtGDC",
        "block": "[[[8,[39,0],[[24,6,\"pix.fr\"]],null,[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-button-link\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-link-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector('a[href="pix.fr"]');
      assert.ok(componentElement);
    });
    (0, _qunit.test)('it renders an EmberJS link', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButtonLink @route='hello'>
        content
      </PixButtonLink>
      */
      {
        "id": "NN1v7XOz",
        "block": "[[[8,[39,0],null,[[\"@route\"],[\"hello\"]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-button-link\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-link-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector('a[href="/hello-world"]');
      assert.ok(componentElement);
    });
    (0, _qunit.test)('it renders an EmberJS link with model', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButtonLink @route='bye' @model='bye'>
        content
      </PixButtonLink>
      */
      {
        "id": "PMFUJqS2",
        "block": "[[[8,[39,0],null,[[\"@route\",\"@model\"],[\"bye\",\"bye\"]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-button-link\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-link-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector('a[href="/bye/bye"]');
      assert.ok(componentElement);
    });
    (0, _qunit.test)('it renders an EmberJS link with query', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButtonLink @route='bye' @model='bye' @query={{hash page=3 per_page=20}}>
        content
      </PixButtonLink>
      */
      {
        "id": "dR5IWOiO",
        "block": "[[[8,[39,0],null,[[\"@route\",\"@model\",\"@query\"],[\"bye\",\"bye\",[28,[37,1],null,[[\"page\",\"per_page\"],[3,20]]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-button-link\",\"hash\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-link-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector('a[href="/bye/bye?page=3&per_page=20"]');
      assert.ok(componentElement);
    });
  });
});
define("dummy/tests/integration/components/pix-button-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixButton', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const COMPONENT_SELECTOR = '.pix-button';
    (0, _qunit.test)('it renders the default PixButton', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButton>
        Mon bouton
      </PixButton>
      */
      {
        "id": "ovUkjzhT",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  Mon bouton\\n\"]],[]]]]]],[],false,[\"pix-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByRole('button', {
        name: 'Mon bouton'
      }));
    });
    (0, _qunit.test)('it renders the PixButton component with the given type', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButton @type='submit'>
        Mon bouton
      </PixButton>
      */
      {
        "id": "X68RNTDv",
        "block": "[[[8,[39,0],null,[[\"@type\"],[\"submit\"]],[[\"default\"],[[[[1,\"\\n  Mon bouton\\n\"]],[]]]]]],[],false,[\"pix-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByRole('button', {
        name: 'Mon bouton'
      })).hasAttribute('type', 'submit');
    });
    (0, _qunit.test)('it renders the PixButton component with isDisabled attribute', async function (assert) {
      // given
      this.set('count', 1);
      this.set('triggerAction', () => {
        this.count = this.count + 1;
      });

      //when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButton @isDisabled={{true}} @triggerAction={{this.triggerAction}}>
        Mon bouton
      </PixButton>
      */
      {
        "id": "WRXT3XnP",
        "block": "[[[8,[39,0],null,[[\"@isDisabled\",\"@triggerAction\"],[true,[30,0,[\"triggerAction\"]]]],[[\"default\"],[[[[1,\"\\n  Mon bouton\\n\"]],[]]]]]],[],false,[\"pix-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByText('Mon bouton')).hasAttribute('aria-disabled', 'true');
    });
    (0, _qunit.test)('it should call the action', async function (assert) {
      // given
      this.set('count', 1);
      this.set('triggerAction', () => {
        this.count = this.count + 1;
      });

      //when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButton @triggerAction={{this.triggerAction}}>Mon bouton</PixButton>
      */
      {
        "id": "trgTBaSx",
        "block": "[[[8,[39,0],null,[[\"@triggerAction\"],[[30,0,[\"triggerAction\"]]]],[[\"default\"],[[[[1,\"Mon bouton\"]],[]]]]]],[],false,[\"pix-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: 'Mon bouton'
      }));

      // then
      assert.strictEqual(this.count, 2);
      assert.ok(screen.getByRole('button', {
        name: 'Mon bouton'
      }));
    });
    (0, _qunit.module)('when type is submit, if no trigger action is defined', () => {
      (0, _qunit.test)('if clicked, it should do nothing', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixButton @triggerAction={{this.triggerAction}} @type='submit'>Mon bouton</PixButton>
        */
        {
          "id": "wq6GMPC2",
          "block": "[[[8,[39,0],null,[[\"@triggerAction\",\"@type\"],[[30,0,[\"triggerAction\"]],\"submit\"]],[[\"default\"],[[[[1,\"Mon bouton\"]],[]]]]]],[],false,[\"pix-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: 'Mon bouton'
        }));

        // then
        const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
        assert.strictEqual(componentElement.type, 'submit');
      });
    });
    (0, _qunit.module)('when the button has a trigger action with a promise', function (hooks) {
      hooks.beforeEach(function () {
        _sinon.default.useFakeTimers();
      });
      (0, _qunit.test)('should display a loading state', async function (assert) {
        // given
        this.set('triggerAction', () => {
          return new Promise(resolve => {
            const wait = setTimeout(() => {
              clearTimeout(wait);
              resolve();
            }, 1);
          });
        });

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixButton @triggerAction={{this.triggerAction}}>Mon bouton</PixButton>
        */
        {
          "id": "trgTBaSx",
          "block": "[[[8,[39,0],null,[[\"@triggerAction\"],[[30,0,[\"triggerAction\"]]]],[[\"default\"],[[[[1,\"Mon bouton\"]],[]]]]]],[],false,[\"pix-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: 'Mon bouton'
        }));

        // then
        const loadingComponent = this.element.querySelector('.loader');
        assert.ok(loadingComponent);
      });
    });
    (0, _qunit.module)('when the button has isLoading to true', function () {
      (0, _qunit.test)('should display a loading state', async function (assert) {
        // given
        this.set('isLoading', true);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixButton @isLoading={{this.isLoading}} />
        */
        {
          "id": "N6pwJrpz",
          "block": "[[[8,[39,0],null,[[\"@isLoading\"],[[30,0,[\"isLoading\"]]]],null]],[],false,[\"pix-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
          "isStrictMode": false
        }));

        // then
        const loadingComponent = this.element.querySelector('.loader');
        assert.ok(loadingComponent);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-button-upload-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | button-upload', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the default PixButtonUpload', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButtonUpload @id='1'>
        content
      </PixButtonUpload>
      */
      {
        "id": "PZoVaZ8W",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"1\"]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-button-upload\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-upload-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('content');
    });
  });
});
define("dummy/tests/integration/components/pix-card-test", ["@1024pix/ember-testing-library", "@1024pix/pix-ui/components/pix-card", "ember-qunit", "qunit", "sinon", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_emberTestingLibrary, _pixCard, _emberQunit, _qunit, _sinon, _component, _templateFactory, _templateOnly) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@1024pix/pix-ui/components/pix-card",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixCard', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the title', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCard @title="Parcours Combiné IA" />
      */
      {
        "id": "7OWI/aRD",
        "block": "[[[8,[32,0],null,[[\"@title\"],[\"Parcours Combiné IA\"]],null]],[],false,[]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
        "scope": () => [_pixCard.default],
        "isStrictMode": true
      }), (0, _templateOnly.default)(undefined, undefined)));
      // then
      assert.dom(screen.getByRole('heading', {
        level: 3
      })).hasText('Parcours Combiné IA');
    });
    (0, _qunit.module)('@variant', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)('it renders PixCard with primary variant', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixCard><:description>coucou</:description></PixCard>
                
        */
        {
          "id": "yxoJHPm1",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,null,[[\"description\"],[[[[1,\"coucou\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
          "scope": () => [_pixCard.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        const blockElement = this.element.querySelector('.pix-card-wrapper');
        // then
        assert.contains('coucou');
        assert.deepEqual(Array.from(blockElement.classList), ['pix-block', 'pix-block--variant-orga', 'pix-card-wrapper']);
      });
      (0, _qunit.test)('it should warn when variant is not supported', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixCard @variant="PIX APP"><:description>coucou</:description></PixCard>
                
        */
        {
          "id": "T3kbLu29",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@variant\"],[\"PIX APP\"]],[[\"description\"],[[[[1,\"coucou\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
          "scope": () => [_pixCard.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.ok(warnStub.firstCall.calledWithExactly('WARNING: PixCard: @variant "PIX APP" should be primary, admin, orga, certif'));
      });
    });
    (0, _qunit.module)('when @subtitle is provided', function () {
      (0, _qunit.test)('it renders the subtitle', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCard @title="Mon titre" @subtitle="Autres" />
        */
        {
          "id": "ObZQQpsK",
          "block": "[[[8,[32,0],null,[[\"@title\",\"@subtitle\"],[\"Mon titre\",\"Autres\"]],null]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
          "scope": () => [_pixCard.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.dom(screen.getByText('Autres')).exists();
      });
    });
    (0, _qunit.module)('when @image is provided', function () {
      (0, _qunit.test)('it renders the image', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCard @title="Mon titre" @image="https://example.com/image.svg" />
        */
        {
          "id": "hvKSfG13",
          "block": "[[[8,[32,0],null,[[\"@title\",\"@image\"],[\"Mon titre\",\"https://example.com/image.svg\"]],null]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
          "scope": () => [_pixCard.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.dom(screen.getByRole('presentation', {
          hidden: true
        })).hasAttribute('src', 'https://example.com/image.svg');
      });
    });
    (0, _qunit.module)('when @image is not provided', function () {
      (0, _qunit.test)('it does not render an image', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCard @title="Mon titre" />
        */
        {
          "id": "mTrZGVAO",
          "block": "[[[8,[32,0],null,[[\"@title\"],[\"Mon titre\"]],null]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
          "scope": () => [_pixCard.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.dom(screen.queryByRole('img', {
          hidden: true
        })).doesNotExist();
      });
    });
    (0, _qunit.module)('when the :tag named block is provided', function () {
      (0, _qunit.test)('it renders the tag block', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixCard @title="Mon titre">
                    <:tag>Parcours</:tag>
                  </PixCard>
                
        */
        {
          "id": "RXfZCAzm",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@title\"],[\"Mon titre\"]],[[\"tag\"],[[[[1,\"Parcours\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
          "scope": () => [_pixCard.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.dom(screen.getByText('Parcours')).exists();
      });
    });
    (0, _qunit.module)('when the :description named block is provided', function () {
      (0, _qunit.test)('it renders the description', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixCard @title="Mon titre">
                    <:description>Lorem ipsum dolor sit amet.</:description>
                  </PixCard>
                
        */
        {
          "id": "sxmdT0Jf",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@title\"],[\"Mon titre\"]],[[\"description\"],[[[[1,\"Lorem ipsum dolor sit amet.\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
          "scope": () => [_pixCard.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.dom(screen.getByText('Lorem ipsum dolor sit amet.')).exists();
      });
    });
    (0, _qunit.module)('when the :footer named block is provided', function () {
      (0, _qunit.test)('it renders the footer', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixCard @title="Mon titre">
                    <:footer>Informations complémentaires</:footer>
                  </PixCard>
                
        */
        {
          "id": "FoISrBnr",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@title\"],[\"Mon titre\"]],[[\"footer\"],[[[[1,\"Informations complémentaires\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-card-test.js",
          "scope": () => [_pixCard.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.dom(screen.getByText('Informations complémentaires')).exists();
      });
    });
  });
});
define("dummy/tests/integration/components/pix-checkbox-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('it should be possible to check the checkbox', function () {
      (0, _qunit.test)('when label is displayed', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox><:label>Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "EQe9BNbC",
          "block": "[[[8,[39,0],null,null,[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByName)('Recevoir la newsletter');

        // then
        assert.true(screen.getByLabelText('Recevoir la newsletter').checked);
      });
      (0, _qunit.test)('when label is hidden', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox @screenReaderOnly={{true}}><:label>Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "ahmBwHF0",
          "block": "[[[8,[39,0],null,[[\"@screenReaderOnly\"],[true]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByName)('Recevoir la newsletter');

        // then
        assert.true(screen.getByLabelText('Recevoir la newsletter').checked);
      });
    });
    (0, _qunit.test)('it should be possible to insert html in label', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCheckbox><:label>Accepter les cgu,
          <a href='https://cgu.example.net'>voir ici</a></:label></PixCheckbox>
      */
      {
        "id": "YOthf5gg",
        "block": "[[[8,[39,0],null,null,[[\"label\"],[[[[1,\"Accepter les cgu,\\n    \"],[10,3],[14,6,\"https://cgu.example.net\"],[12],[1,\"voir ici\"],[13]],[]]]]]],[],false,[\"pix-checkbox\",\":label\",\"a\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByLabelText('Accepter les cgu, voir ici')).exists();
    });
    (0, _qunit.test)('it should be possible to control state', async function (assert) {
      // given
      this.set('checked', false);
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCheckbox @checked={{this.checked}}><:label>Recevoir la newsletter</:label></PixCheckbox>
      */
      {
        "id": "a+sJQpM7",
        "block": "[[[8,[39,0],null,[[\"@checked\"],[[30,0,[\"checked\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
        "isStrictMode": false
      }));
      const checkbox = screen.getByLabelText('Recevoir la newsletter');
      assert.false(checkbox.checked);

      // when
      this.set('checked', true);

      // then
      assert.true(checkbox.checked);
    });
    (0, _qunit.module)('@isDisabled', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)(`it should not be possible to interact when @isDisabled={{true}}`, async function (assert) {
        // given
        this.set('isDisabled', true);
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox checked @isDisabled={{this.isDisabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "nOA8fGIg",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        }));
        const checkbox = screen.getByRole('checkbox', {
          name: 'Recevoir la newsletter',
          disabled: true
        });
        assert.false(warnStub.called);
        assert.true(checkbox.checked, 'Checkbox has been set to checked by default');
        assert.strictEqual(checkbox.getAttribute('aria-disabled'), 'true', '`aria-disabled` should be forced to "true" else VoiceOver don\'t consider the input as "dimmed"');

        // when
        await (0, _emberTestingLibrary.clickByName)('Recevoir la newsletter'); // should not throw!

        // then
        assert.true(checkbox.checked, "Checkbox has changed state, but shouldn't have");
      });
      (0, _qunit.test)(`it should read success state info if given`, async function (assert) {
        // given
        this.set('isDisabled', true);
        this.texts = {
          stateSuccess: 'Sélection correcte'
        };
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox checked @isDisabled={{this.isDisabled}} @state='success' @texts={{this.texts}}><:label
          >Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "Wlxsxt9X",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\",\"@texts\"],[[30,0,[\"isDisabled\"]],\"success\",[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByRole('checkbox', {
          description: 'Sélection correcte',
          hidden: true
        })).exists();
      });
      (0, _qunit.test)(`it should read error state info if given`, async function (assert) {
        // given
        this.set('isDisabled', true);
        this.texts = {
          stateError: 'Sélection incorrecte'
        };
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox checked @isDisabled={{this.isDisabled}} @state='error' @texts={{this.texts}}><:label
          >Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "mRdKcj3c",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\",\"@texts\"],[[30,0,[\"isDisabled\"]],\"error\",[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByRole('checkbox', {
          description: 'Sélection incorrecte',
          hidden: true
        })).exists();
      });
      (0, _qunit.test)(`it should read declarative state info if given`, async function (assert) {
        // given
        this.set('isDisabled', true);
        this.texts = {
          stateDeclarative: 'Sélection sans bonne ou mauvaise réponse'
        };
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox
          checked
          @isDisabled={{this.isDisabled}}
          @state='declarative'
          @texts={{this.texts}}
        ><:label>La galette des rois</:label></PixCheckbox>
        */
        {
          "id": "e0Admykh",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\",\"@texts\"],[[30,0,[\"isDisabled\"]],\"declarative\",[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,\"La galette des rois\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        })); // then
        assert.dom(screen.getByRole('checkbox', {
          description: 'Sélection sans bonne ou mauvaise réponse',
          hidden: true
        })).exists();
      });
      ['true', 'false', 'null', 'undefined'].forEach(function (testCase) {
        (0, _qunit.test)(`it should not be possible to interact when @isDisabled="${testCase}"`, async function (assert) {
          // given
          this.set('isDisabled', testCase);
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixCheckbox checked @isDisabled={{this.isDisabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>
          */
          {
            "id": "nOA8fGIg",
            "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
            "isStrictMode": false
          }));
          const checkbox = screen.getByRole('checkbox', {
            name: 'Recevoir la newsletter',
            disabled: true
          });
          assert.ok(warnStub.calledWithExactly('WARNING: PixCheckbox: @isDisabled attribute should be a boolean.'));
          assert.true(checkbox.checked, 'Checkbox has been set to checked by default');
          assert.strictEqual(checkbox.getAttribute('aria-disabled'), 'true', '`aria-disabled` should be forced to "true" else VoiceOver don\'t consider the input as "dimmed"');

          // when
          await (0, _emberTestingLibrary.clickByName)('Recevoir la newsletter'); // should not throw!

          // then
          assert.true(checkbox.checked, "Checkbox has changed state, but shouldn't have");
        });
      });
      [false, null, undefined].forEach(function (testCase) {
        (0, _qunit.test)(`it should be possible to interact when @isDisabled={{${testCase}}}`, async function (assert) {
          // given
          this.set('isDisabled', testCase);
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixCheckbox checked @isDisabled={{this.isDisabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>
          */
          {
            "id": "nOA8fGIg",
            "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
            "isStrictMode": false
          }));
          const checkbox = screen.getByRole('checkbox', {
            name: 'Recevoir la newsletter',
            disabled: true
          });
          assert.false(warnStub.called);
          assert.true(checkbox.checked, 'Checkbox has been set to checked by default');
          assert.strictEqual(checkbox.getAttribute('aria-disabled'), null, '`aria-disabled` should not be set');

          // when
          await (0, _emberTestingLibrary.clickByName)('Recevoir la newsletter');

          // then
          assert.false(checkbox.checked, 'Checkbox should have changed state');
        });
      });
    });
    (0, _qunit.module)('when disabled', function () {
      (0, _qunit.test)(`it should not be possible to interact when disabled={{true}}`, async function (assert) {
        // given
        this.set('disabled', true);
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox checked disabled={{this.disabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "z92TRyn1",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"],[16,\"disabled\",[30,0,[\"disabled\"]]]],null,[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        }));
        const checkbox = screen.getByRole('checkbox', {
          name: 'Recevoir la newsletter',
          disabled: true
        });
        assert.true(checkbox.checked, 'Checkbox has been set to checked by default');
        try {
          // when
          await (0, _emberTestingLibrary.clickByName)('Recevoir la newsletter');
          assert.true(false, 'It should not be possible to interact with disabled Checkbox');
        } catch {
          // then state did not change
          assert.true(checkbox.checked, "Checkbox has changed state, but shouldn't have");
        }
      });
      ['true', 'false', 'null', 'undefined'].forEach(function (testCase) {
        (0, _qunit.test)(`it should not be possible to interact when disabled="${testCase}"`, async function (assert) {
          // given
          this.set('disabled', testCase);
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixCheckbox checked disabled={{this.disabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>
          */
          {
            "id": "z92TRyn1",
            "block": "[[[8,[39,0],[[24,\"checked\",\"\"],[16,\"disabled\",[30,0,[\"disabled\"]]]],null,[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
            "isStrictMode": false
          }));
          const checkbox = screen.getByRole('checkbox', {
            name: 'Recevoir la newsletter',
            disabled: true
          });
          assert.true(checkbox.checked, 'Checkbox has been set to checked by default');
          try {
            // when
            await (0, _emberTestingLibrary.clickByName)('Recevoir la newsletter');
            assert.true(false, 'It should not be possible to interact with disabled Checkbox');
          } catch {
            // then state did not change
            assert.true(checkbox.checked, "Checkbox has changed state, but shouldn't have");
          }
        });
      });
      [false, null, undefined].forEach(function (testCase) {
        (0, _qunit.test)(`it should be possible to interact when disabled={{${testCase}}}`, async function (assert) {
          // given
          this.set('disabled', testCase);
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixCheckbox checked disabled={{this.disabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>
          */
          {
            "id": "z92TRyn1",
            "block": "[[[8,[39,0],[[24,\"checked\",\"\"],[16,\"disabled\",[30,0,[\"disabled\"]]]],null,[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
            "isStrictMode": false
          }));
          const checkbox = screen.getByRole('checkbox', {
            name: 'Recevoir la newsletter',
            disabled: true
          });
          assert.true(checkbox.checked, 'Checkbox has been set to checked by default');

          // when
          await (0, _emberTestingLibrary.clickByName)('Recevoir la newsletter');

          // then
          assert.false(checkbox.checked, 'Checkbox should have changed state');
        });
      });
    });
  });
});
define("dummy/tests/integration/components/pix-code-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixCode', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the default PixCode', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCode @length={{10}}><:label>Code de vérification</:label></PixCode>
      */
      {
        "id": "Igj0kxF0",
        "block": "[[[8,[39,0],null,[[\"@length\"],[10]],[[\"label\"],[[[[1,\"Code de vérification\"]],[]]]]]],[],false,[\"pix-code\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-code-test.js",
        "isStrictMode": false
      }));

      // when
      await (0, _testHelpers.fillIn)(screen.getByRole('textbox', {
        name: 'Code de vérification'
      }), 'P-123VALID');

      // then
      assert.contains('P-123VALID');
    });
    (0, _qunit.test)('it should  be possible to provide the expected number of length in the field', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCode @length={{14}}><:label>Code de vérification</:label></PixCode>
      */
      {
        "id": "c4NBj6+R",
        "block": "[[[8,[39,0],null,[[\"@length\"],[14]],[[\"label\"],[[[[1,\"Code de vérification\"]],[]]]]]],[],false,[\"pix-code\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-code-test.js",
        "isStrictMode": false
      }));

      // when
      await (0, _testHelpers.fillIn)(screen.getByRole('textbox', {
        name: 'Code de vérification'
      }), 'P-123VALID');

      // then
      assert.dom(screen.getByRole('textbox', {
        name: 'Code de vérification'
      })).hasAttribute('maxLength', '14');
      assert.dom(screen.getByRole('textbox', {
        name: 'Code de vérification'
      })).hasAttribute('minLength', '14');
    });
    (0, _qunit.test)('it should be possible to give an extra information to input', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCode @length={{10}} @subLabel='exemple: P-1234'><:label>Code de vérification</:label></PixCode>
      */
      {
        "id": "LHFP7AFs",
        "block": "[[[8,[39,0],null,[[\"@length\",\"@subLabel\"],[10,\"exemple: P-1234\"]],[[\"label\"],[[[[1,\"Code de vérification\"]],[]]]]]],[],false,[\"pix-code\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-code-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByRole('textbox', {
        name: 'Code de vérification exemple: P-1234'
      }));
    });
    (0, _qunit.test)('it should be possible to give an error message to input', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCode
        @errorMessage='Seul les caractères alphanumériques sont autorisés'
        @validationStatus='error'
      ><:label>Code de vérification</:label></PixCode>
      */
      {
        "id": "HVZvyHD4",
        "block": "[[[8,[39,0],null,[[\"@errorMessage\",\"@validationStatus\"],[\"Seul les caractères alphanumériques sont autorisés\",\"error\"]],[[\"label\"],[[[[1,\"Code de vérification\"]],[]]]]]],[],false,[\"pix-code\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-code-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByText('Seul les caractères alphanumériques sont autorisés')).exists();
    });
    (0, _qunit.test)('it should be possible to make "pixCode" required', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCode @length={{10}} @requiredLabel='Champ obligatoire'><:label>Code de vérification</:label></PixCode>
      */
      {
        "id": "jTHG5HTu",
        "block": "[[[8,[39,0],null,[[\"@length\",\"@requiredLabel\"],[10,\"Champ obligatoire\"]],[[\"label\"],[[[[1,\"Code de vérification\"]],[]]]]]],[],false,[\"pix-code\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-code-test.js",
        "isStrictMode": false
      }));

      // then
      const requiredInput = screen.getByLabelText('Code de vérification *');
      assert.dom(requiredInput).isRequired();
    });
    (0, _qunit.module)('@length', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      ['', null, undefined].forEach(function (testCase) {
        (0, _qunit.test)(`it should warn when @length="${testCase}"`, async function (assert) {
          // given
          this.set('length', testCase);
          await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixCode @length={{this.length}} @requiredLabel='Champ obligatoire'><:label>Code de vérification</:label></PixCode>
          */
          {
            "id": "+vkSomZT",
            "block": "[[[8,[39,0],null,[[\"@length\",\"@requiredLabel\"],[[30,0,[\"length\"]],\"Champ obligatoire\"]],[[\"label\"],[[[[1,\"Code de vérification\"]],[]]]]]],[],false,[\"pix-code\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-code-test.js",
            "isStrictMode": false
          }));
          assert.ok(warnStub.calledWithExactly('WARNING: PixCode: @length is required.'));
        });
      });
    });
  });
});
define("dummy/tests/integration/components/pix-filter-banner-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "@testing-library/user-event", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _userEvent, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"@testing-library/user-event",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-filter-banner', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the default PixFilterBanner', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterBanner>
        content
      </PixFilterBanner>
      */
      {
        "id": "/Nw8tNNl",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('content');
    });
    (0, _qunit.test)('it renders the PixFilterBanner with title', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterBanner @title='Titre de la bannière'>
        content
      </PixFilterBanner>
      */
      {
        "id": "niq8rJRe",
        "block": "[[[8,[39,0],null,[[\"@title\"],[\"Titre de la bannière\"]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Titre de la bannière');
    });
    (0, _qunit.test)('it renders the PixFilterBanner with details', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterBanner @details='5 participants filtrés'>
        content
      </PixFilterBanner>
      */
      {
        "id": "dMFuwR+q",
        "block": "[[[8,[39,0],null,[[\"@details\"],[\"5 participants filtrés\"]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('5 participants filtrés');
    });
    (0, _qunit.module)('clearFilterbutton', function () {
      (0, _qunit.test)('it renders the PixFilterBanner with a clearFiltersLabel button', async function (assert) {
        //given
        this.clearFiltersLabel = 'Effacer les filtres';
        this.onClearFilters = _sinon.default.spy();

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterBanner
          @clearFiltersLabel={{this.clearFiltersLabel}}
          @onClearFilters={{this.onClearFilters}}
        >
          content
        </PixFilterBanner>
        */
        {
          "id": "vIF02Ot0",
          "block": "[[[8,[39,0],null,[[\"@clearFiltersLabel\",\"@onClearFilters\"],[[30,0,[\"clearFiltersLabel\"]],[30,0,[\"onClearFilters\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
          "isStrictMode": false
        }));

        // then
        const button = screen.getByRole('button', {
          name: this.clearFiltersLabel
        });
        assert.dom(button).exists();
      });
      (0, _qunit.test)('it renders the PixFilterBanner with a disabled clearFiltersLabel button', async function (assert) {
        //given
        this.clearFiltersLabel = 'Effacer les filtres';
        this.isClearFilterButtonDisabled = true;
        this.onClearFilters = _sinon.default.spy();

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterBanner
          @clearFiltersLabel={{this.clearFiltersLabel}}
          @isClearFilterButtonDisabled={{this.isClearFilterButtonDisabled}}
        >
          content
        </PixFilterBanner>
        */
        {
          "id": "Q6FNdVJw",
          "block": "[[[8,[39,0],null,[[\"@clearFiltersLabel\",\"@isClearFilterButtonDisabled\"],[[30,0,[\"clearFiltersLabel\"]],[30,0,[\"isClearFilterButtonDisabled\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
          "isStrictMode": false
        }));

        // then
        const button = screen.getByRole('button', {
          name: this.clearFiltersLabel,
          hidden: true
        });
        assert.dom(button).exists();
      });
      (0, _qunit.test)('it should trigger onClearFilters when button clicked', async function (assert) {
        // given
        this.clearFiltersLabel = 'some label';
        this.onClearFilters = _sinon.default.spy();

        //when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterBanner
          @clearFiltersLabel={{this.clearFiltersLabel}}
          @onClearFilters={{this.onClearFilters}}
        >
          content
        </PixFilterBanner>
        */
        {
          "id": "vIF02Ot0",
          "block": "[[[8,[39,0],null,[[\"@clearFiltersLabel\",\"@onClearFilters\"],[[30,0,[\"clearFiltersLabel\"]],[30,0,[\"onClearFilters\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: this.clearFiltersLabel
        }));

        // then
        assert.ok(this.onClearFilters.calledOnce, 'the callback should be called once');
      });
    });
    (0, _qunit.module)('loadFilterbutton', function () {
      (0, _qunit.test)('it renders the PixFilterBanner with a loadFiltersLabel button', async function (assert) {
        // given && when
        this.loadFiltersLabel = 'Charger !';
        this.onLoadFilters = _sinon.default.spy();
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterBanner @loadFiltersLabel={{this.loadFiltersLabel}} @onLoadFilters={{this.onLoadFilters}}>
          content
        </PixFilterBanner>
        */
        {
          "id": "wQXtHCaD",
          "block": "[[[8,[39,0],null,[[\"@loadFiltersLabel\",\"@onLoadFilters\"],[[30,0,[\"loadFiltersLabel\"]],[30,0,[\"onLoadFilters\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
          "isStrictMode": false
        }));

        // then
        const button = screen.getByRole('button', {
          name: this.loadFiltersLabel
        });
        assert.dom(button).exists();
      });
      (0, _qunit.test)('it should trigger onLoadFilters when button clicked', async function (assert) {
        // given
        this.loadFiltersLabel = 'Charger !';
        this.onLoadFilters = _sinon.default.spy();
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterBanner @loadFiltersLabel={{this.loadFiltersLabel}} @onLoadFilters={{this.onLoadFilters}}>
          content
        </PixFilterBanner>
        */
        {
          "id": "wQXtHCaD",
          "block": "[[[8,[39,0],null,[[\"@loadFiltersLabel\",\"@onLoadFilters\"],[[30,0,[\"loadFiltersLabel\"]],[30,0,[\"onLoadFilters\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: this.loadFiltersLabel
        }));

        // then
        assert.ok(this.onLoadFilters.calledOnce, 'the callback should be called once');
      });
      (0, _qunit.test)('it should trigger onLoadFilters on key event Enter', async function (assert) {
        // given
        this.loadFiltersLabel = 'Charger !';
        this.onLoadFilters = _sinon.default.spy();
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterBanner @loadFiltersLabel={{this.loadFiltersLabel}} @onLoadFilters={{this.onLoadFilters}}>
          <label for='toto'>label</label>
          <input id='toto' name='toto' />
        </PixFilterBanner>
        */
        {
          "id": "yctw2Mdi",
          "block": "[[[8,[39,0],null,[[\"@loadFiltersLabel\",\"@onLoadFilters\"],[[30,0,[\"loadFiltersLabel\"]],[30,0,[\"onLoadFilters\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"label\"],[14,\"for\",\"toto\"],[12],[1,\"label\"],[13],[1,\"\\n  \"],[10,\"input\"],[14,1,\"toto\"],[14,3,\"toto\"],[12],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"pix-filter-banner\",\"label\",\"input\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filter-banner-test.js",
          "isStrictMode": false
        }));
        screen.getByLabelText('label').focus();

        // when
        await _userEvent.default.keyboard('[Enter]');

        // then
        assert.ok(this.onLoadFilters.calledOnce, 'the callback should be called once');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-filterable-and-searchable-select-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixFilterableAndSearchableSelect', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    this.options = [{
      value: '1',
      label: 'Mache',
      category: 'Kebab'
    }, {
      value: '2',
      label: 'Tomate',
      category: 'Hamburger'
    }];
    this.label = 'select Label';
    this.placeholder = 'selectPlaceholder';
    this.categoriesId = 'filter id';
    this.categoriesLabel = 'filterLabel';
    this.categoriesPlaceholder = 'Filtres';
    this.onChange = _sinon.default.stub();
    (0, _qunit.test)('it displays the categories', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "JJHr8mLT",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByText(`${this.categoriesPlaceholder} (0)`));
      const items = await screen.findAllByRole('menuitem');
      const categories = items.map(item => {
        return item.innerText.trim();
      });
      // then
      assert.deepEqual(categories, ['Kebab', 'Hamburger']);
    });
    (0, _qunit.test)('it displays the select options', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "1S4GabWp",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.clickByName)(this.label);
      const options = await screen.findAllByRole('option');
      const labels = options.map(option => {
        return option.innerText;
      });

      // then
      assert.deepEqual(labels, ['selectPlaceholder', 'Mache', 'Tomate']);
    });
    (0, _qunit.test)('it displays once each category', async function (assert) {
      this.options = [{
        value: '1',
        label: 'Mache',
        category: 'Kebab'
      }, {
        value: '2',
        label: 'Oignon',
        category: 'Kebab'
      }];

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "1S4GabWp",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByText(`${this.categoriesPlaceholder} (0)`));
      const items = await screen.findAllByRole('menuitem');
      const categories = items.map(item => {
        return item.innerText.trim();
      });

      // then
      assert.deepEqual(categories, ['Kebab']);
    });
    (0, _qunit.test)('it displays the number of category selected', async function (assert) {
      this.options = [{
        value: '1',
        label: 'Mache',
        category: 'Kebab'
      }, {
        value: '2',
        label: 'Tomate',
        category: 'Hamburger'
      }, {
        value: '3',
        label: 'Saumon',
        category: 'Sushi'
      }];

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "JJHr8mLT",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByText(`${this.categoriesPlaceholder} (0)`));
      await (0, _testHelpers.click)(await screen.findByRole('checkbox', {
        name: 'Hamburger'
      }));
      await (0, _testHelpers.click)(await screen.findByRole('checkbox', {
        name: 'Sushi'
      }));

      // then
      assert.dom(screen.getByText(`${this.categoriesPlaceholder} (2)`)).exists();
    });
    (0, _qunit.test)('it displays only options with the correct category', async function (assert) {
      this.options = [{
        value: '1',
        label: 'Mache',
        category: 'Kebab'
      }, {
        value: '2',
        label: 'Tomate',
        category: 'Hamburger'
      }];

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "1S4GabWp",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByText(`${this.categoriesPlaceholder} (0)`));
      await (0, _testHelpers.click)(await screen.findByRole('checkbox', {
        name: 'Kebab'
      }));
      await (0, _testHelpers.click)(await screen.findByRole('button', {
        name: this.label
      }));

      // then
      assert.dom(screen.getByText('Mache')).exists();
      assert.dom(screen.queryByText('Tomate')).doesNotExist();
    });
    (0, _qunit.test)('it displays options corresponding to the selected categories', async function (assert) {
      this.options = [{
        value: '1',
        label: 'Mache',
        category: 'Kebab'
      }, {
        value: '2',
        label: 'Tomate',
        category: 'Hamburger'
      }, {
        value: '3',
        label: 'Saumon',
        category: 'Sushi'
      }];

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "1S4GabWp",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByText(`${this.categoriesPlaceholder} (0)`));
      await (0, _testHelpers.click)(await screen.findByRole('checkbox', {
        name: 'Hamburger'
      }));
      await (0, _testHelpers.click)(await screen.findByRole('checkbox', {
        name: 'Sushi'
      }));
      await (0, _testHelpers.click)(await screen.findByRole('button', {
        name: this.label
      }));
      const options = await screen.findAllByRole('option');
      const labels = options.map(option => {
        return option.innerText;
      });

      // then
      assert.deepEqual(labels, ['selectPlaceholder', 'Tomate', 'Saumon']);
    });
    (0, _qunit.test)('it call onChange when a option is selected', async function (assert) {
      this.options = [{
        value: '1',
        label: 'Mache',
        category: 'Kebab'
      }, {
        value: '2',
        label: 'Tomate',
        category: 'Hamburger'
      }];

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "1S4GabWp",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: this.label
      }));
      await (0, _testHelpers.click)(await screen.findByRole('option', {
        name: 'Tomate'
      }));

      // then
      _sinon.default.assert.calledWith(this.onChange, '2');
      assert.ok(true);
    });
    (0, _qunit.test)('it displays options which match the text searched', async function (assert) {
      this.options = [{
        value: '1',
        label: 'Mache',
        category: 'Kebab'
      }, {
        value: '2',
        label: 'Tomate',
        category: 'Hamburger'
      }];

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
        @searchLabel='Rechercher'
        @isSearchable={{true}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "uQ4nXt/7",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\",\"@searchLabel\",\"@isSearchable\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]],\"Rechercher\",true]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: this.label
      }));
      await (0, _emberTestingLibrary.fillByLabel)('Rechercher', 'Tom');
      const items = await screen.findAllByRole('option');
      const options = items.map(item => {
        return item.innerText;
      });

      // then
      assert.deepEqual(options, ['Tomate']);
    });
    (0, _qunit.test)('it displays the selected option', async function (assert) {
      this.options = [{
        value: '1',
        label: 'Mache',
        category: 'Kebab'
      }, {
        value: '2',
        label: 'Tomate',
        category: 'Hamburger'
      }];

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @value='2'
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
        @isSearchable={{true}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "i2SdE3vw",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\",\"@isSearchable\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]],true]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: this.label
      }));
      const option = await screen.findByRole('option', {
        selected: true
      });

      // then
      assert.deepEqual(option.innerText, 'Tomate');
    });
    (0, _qunit.module)('Label and subLabel', function () {
      (0, _qunit.test)('it displays the label', async function (assert) {
        this.options = [{
          value: '1',
          label: 'Mache',
          category: 'Kebab'
        }, {
          value: '2',
          label: 'Tomate',
          category: 'Hamburger'
        }];
        this.label = 'Label de mon big composant trop compliqué';

        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterableAndSearchableSelect
          @placeholder={{this.placeholder}}
          @options={{this.options}}
          @value='2'
          @onChange={{this.onChange}}
          @categoriesId={{this.categoriesId}}
          @categoriesPlaceholder={{this.categoriesPlaceholder}}
        >
          <:label>{{this.label}}</:label>
          <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
        </PixFilterableAndSearchableSelect>
        */
        {
          "id": "pJ6sif07",
          "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
          "isStrictMode": false
        }));
        const label = await screen.getByLabelText(this.label);

        // then
        assert.dom(label).exists();
      });
      (0, _qunit.test)('it display the subLabel', async function (assert) {
        this.options = [{
          value: '1',
          label: 'Mache',
          category: 'Kebab'
        }, {
          value: '2',
          label: 'Tomate',
          category: 'Hamburger'
        }];
        this.label = 'Label de mon big composant trop compliqué';
        this.subLabel = 'Mon subLabel';

        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterableAndSearchableSelect
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @options={{this.options}}
          @value='2'
          @onChange={{this.onChange}}
          @categoriesId={{this.categoriesId}}
          @categoriesPlaceholder={{this.categoriesPlaceholder}}
        >
          <:label>{{this.label}}</:label>
          <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
        </PixFilterableAndSearchableSelect>
        */
        {
          "id": "k6fvchLT",
          "block": "[[[8,[39,0],null,[[\"@subLabel\",\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"subLabel\"]],[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByText('Mon subLabel')).exists();
      });
      (0, _qunit.test)('it displays the astérisque when the composant ids required', async function (assert) {
        this.options = [{
          value: '1',
          label: 'Mache',
          category: 'Kebab'
        }, {
          value: '2',
          label: 'Tomate',
          category: 'Hamburger'
        }];
        this.label = 'Label de mon big composant trop compliqué';
        this.requiredLabel = 'Sélectionner un aliment';

        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixFilterableAndSearchableSelect
          @placeholder={{this.placeholder}}
          @options={{this.options}}
          @value='2'
          @onChange={{this.onChange}}
          @categoriesId={{this.categoriesId}}
          @categoriesPlaceholder={{this.categoriesPlaceholder}}
          @isSearchable={{true}}
          @requiredLabel={{this.requiredLabel}}
        >
          <:label>{{this.label}}</:label>
          <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
        </PixFilterableAndSearchableSelect>
        */
        {
          "id": "wy4Pk4YN",
          "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\",\"@isSearchable\",\"@requiredLabel\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]],true,[30,0,[\"requiredLabel\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByLabelText('Label de mon big composant trop compliqué *')).exists();
      });
    });
    (0, _qunit.test)('it displays error message', async function (assert) {
      this.options = [{
        value: '1',
        label: 'Mache',
        category: 'Kebab'
      }, {
        value: '2',
        label: 'Tomate',
        category: 'Hamburger'
      }];
      this.label = 'Label de mon big composant trop compliqué';
      this.requiredLabel = 'Sélectionner un aliment';
      this.errorMessage = 'Aliment non saisi. Veuillez en renseigner un !';

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @value='2'
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
        @searchLabel={{this.searchLabel}}
        @isSearchable={{true}}
        @requiredLabel={{this.requiredLabel}}
        @errorMessage={{this.errorMessage}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "5klXkGJr",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\",\"@searchLabel\",\"@isSearchable\",\"@requiredLabel\",\"@errorMessage\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]],[30,0,[\"searchLabel\"]],true,[30,0,[\"requiredLabel\"]],[30,0,[\"errorMessage\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\",\":label\",\":categoriesLabel\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByText(this.errorMessage)).exists();
    });
  });
});
define("dummy/tests/integration/components/pix-gauge-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-gauge', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('Big mode', function () {
      (0, _qunit.test)('it renders the correct visual for average and max levels', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixGauge
          @label='Niveau atteint de 1 sur un niveau maximum atteignable de 3'
          @reachedLevel={{1}}
          @maxLevel={{3}}
          @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
        />
        */
        {
          "id": "tT3zSw6C",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@reachedLevel\",\"@maxLevel\",\"@stepLabels\"],[\"Niveau atteint de 1 sur un niveau maximum atteignable de 3\",1,3,[28,[37,1],[\"Novice\",\"Intermédiaire\",\"Avancé\",\"Expert\"],null]]],null]],[],false,[\"pix-gauge\",\"array\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-gauge-test.js",
          "isStrictMode": false
        }));
        const generalGauge = screen.getByRole('progressbar', {
          name: /Niveau atteint de 1 sur un niveau maximum atteignable de 3/
        });
        const reachedLevelTextElement = screen.getByText('1');
        const maxLevelTextElement = screen.getByText('3');

        // then
        assert.ok(generalGauge);
        assert.ok(reachedLevelTextElement);
        assert.ok(maxLevelTextElement);
      });
      (0, _qunit.test)('it does not render mean level bar when average level is between 0 and 0.25', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixGauge
          @label='Niveau atteint de ...
          sur un niveau maximum atteignable de ...'
          @reachedLevel={{0.57}}
          @maxLevel={{3}}
          @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
        />
        */
        {
          "id": "8jCjpvqv",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@reachedLevel\",\"@maxLevel\",\"@stepLabels\"],[\"Niveau atteint de ...\\n  sur un niveau maximum atteignable de ...\",0.57,3,[28,[37,1],[\"Novice\",\"Intermédiaire\",\"Avancé\",\"Expert\"],null]]],null]],[],false,[\"pix-gauge\",\"array\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-gauge-test.js",
          "isStrictMode": false
        }));
        // then
        assert.notOk(screen.queryByText('1'));
      });
      (0, _qunit.test)('it renders the content of the labels and of the separators if isSmall prop is not filled in', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixGauge
          @label='Niveau atteint de ...
          sur un niveau maximum atteignable de ...'
          @reachedLevel={{1}}
          @maxLevel={{3}}
          @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
        />
        */
        {
          "id": "4woEcrWJ",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@reachedLevel\",\"@maxLevel\",\"@stepLabels\"],[\"Niveau atteint de ...\\n  sur un niveau maximum atteignable de ...\",1,3,[28,[37,1],[\"Novice\",\"Intermédiaire\",\"Avancé\",\"Expert\"],null]]],null]],[],false,[\"pix-gauge\",\"array\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-gauge-test.js",
          "isStrictMode": false
        }));
        // then
        assert.ok(screen.queryByText('Novice'));
        assert.ok(screen.queryByText('Intermédiaire'));
        assert.ok(screen.queryByText('Avancé'));
        assert.ok(screen.queryByText('Expert'));
      });
      (0, _qunit.test)('it hide values when hideValues is true', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixGauge
          @label='Niveau atteint de ...
          sur un niveau maximum atteignable de ...'
          @reachedLevel={{1}}
          @maxLevel={{3}}
          @hideValues={{true}}
          @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
        />
        */
        {
          "id": "00Px7/mR",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@reachedLevel\",\"@maxLevel\",\"@hideValues\",\"@stepLabels\"],[\"Niveau atteint de ...\\n  sur un niveau maximum atteignable de ...\",1,3,true,[28,[37,1],[\"Novice\",\"Intermédiaire\",\"Avancé\",\"Expert\"],null]]],null]],[],false,[\"pix-gauge\",\"array\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-gauge-test.js",
          "isStrictMode": false
        }));
        // then
        assert.notOk(screen.queryByLabelText('1'));
        assert.notOk(screen.queryByLabelText('3'));
      });
    });
    (0, _qunit.module)('Small mode', function () {
      (0, _qunit.test)('it renders the correct visual for average and max levels', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixGauge
          @label='Niveau atteint de 1 sur un niveau maximum atteignable de 3'
          @reachedLevel={{1}}
          @maxLevel={{3}}
          @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
        />
        */
        {
          "id": "tT3zSw6C",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@reachedLevel\",\"@maxLevel\",\"@stepLabels\"],[\"Niveau atteint de 1 sur un niveau maximum atteignable de 3\",1,3,[28,[37,1],[\"Novice\",\"Intermédiaire\",\"Avancé\",\"Expert\"],null]]],null]],[],false,[\"pix-gauge\",\"array\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-gauge-test.js",
          "isStrictMode": false
        }));
        const generalGauge = screen.getByRole('progressbar', {
          name: /Niveau atteint de 1 sur un niveau maximum atteignable de 3/
        });
        const reachedLevelTextElement = screen.getByText('1');
        const maxLevelTextElement = screen.getByText('3');

        // then
        assert.ok(generalGauge);
        assert.ok(reachedLevelTextElement);
        assert.ok(maxLevelTextElement);
      });
      (0, _qunit.test)('it renders the mean level bar when average level is lesser than 0', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixGauge @isSmall={{true}} @reachedLevel={{0.75}} @maxLevel={{3}} />
        */
        {
          "id": "v9DOu/oe",
          "block": "[[[8,[39,0],null,[[\"@isSmall\",\"@reachedLevel\",\"@maxLevel\"],[true,0.75,3]],null]],[],false,[\"pix-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-gauge-test.js",
          "isStrictMode": false
        }));
        // then
        assert.ok(screen.queryByText('0.8'));
      });
      (0, _qunit.test)('it does not renders content of the labels and the separators if hideValues is true', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixGauge
          @hideValues={{true}}
          @isSmall={{true}}
          @reachedLevel={{1}}
          @maxLevel={{3}}
          @stepLabels={{array 'novice' 'expert'}}
        />
        */
        {
          "id": "H4/WOnxQ",
          "block": "[[[8,[39,0],null,[[\"@hideValues\",\"@isSmall\",\"@reachedLevel\",\"@maxLevel\",\"@stepLabels\"],[true,true,1,3,[28,[37,1],[\"novice\",\"expert\"],null]]],null]],[],false,[\"pix-gauge\",\"array\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-gauge-test.js",
          "isStrictMode": false
        }));
        // then
        assert.notOk(screen.queryByText('1'));
        assert.notOk(screen.queryByText('3'));
        assert.notOk(screen.queryByLabelText('novice'));
        assert.notOk(screen.queryByLabelText('expert'));
      });
    });
  });
});
define("dummy/tests/integration/components/pix-icon-button-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | icon-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it should trigger action if given one', async function (assert) {
      // when
      this.set('count', 1);
      this.set('triggerAction', () => {
        this.count = this.count + 1;
      });
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixIconButton
        @triggerAction={{this.triggerAction}}
        @ariaLabel='action du bouton'
        @iconName='add'
      />
      */
      {
        "id": "6fqEEJF7",
        "block": "[[[8,[39,0],null,[[\"@triggerAction\",\"@ariaLabel\",\"@iconName\"],[[30,0,[\"triggerAction\"]],\"action du bouton\",\"add\"]],null]],[],false,[\"pix-icon-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-icon-button-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: 'action du bouton'
      }));

      // then
      assert.strictEqual(this.count, 2);
    });
    (0, _qunit.test)('it renders PixIconButton with disabled attribute', async function (assert) {
      // given
      this.set('triggerAction', () => {});

      //when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixIconButton
        @triggerAction={{this.triggerAction}}
        @iconName='add'
        disabled={{true}}
        @ariaLabel='action du bouton'
      />
      */
      {
        "id": "Lw4SFOwW",
        "block": "[[[8,[39,0],[[16,\"disabled\",true]],[[\"@triggerAction\",\"@iconName\",\"@ariaLabel\"],[[30,0,[\"triggerAction\"]],\"add\",\"action du bouton\"]],null]],[],false,[\"pix-icon-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-icon-button-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByRole('button', {
        name: 'action du bouton'
      })).isDisabled();
    });
    (0, _qunit.module)('When the attribute isDisabled is set to true', function () {
      (0, _qunit.test)('it should display the button as disabled and prevent triggerAction', async function (assert) {
        // given
        this.set('count', 1);
        this.set('triggerAction', () => {
          this.count = this.count + 1;
        });

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixIconButton
          @isDisabled={{true}}
          @triggerAction={{this.triggerAction}}
          @ariaLabel='action du bouton'
        />
        */
        {
          "id": "Sra9Xjdp",
          "block": "[[[8,[39,0],null,[[\"@isDisabled\",\"@triggerAction\",\"@ariaLabel\"],[true,[30,0,[\"triggerAction\"]],\"action du bouton\"]],null]],[],false,[\"pix-icon-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-icon-button-test.js",
          "isStrictMode": false
        }));
        const iconButton = screen.getByRole('button', {
          name: 'action du bouton'
        });

        // then
        await (0, _testHelpers.click)(iconButton);
        assert.dom(iconButton).hasAria('disabled', 'true');
        assert.strictEqual(this.count, 1);
      });
    });
    (0, _qunit.module)('when no variant is given', function () {
      (0, _qunit.test)('it renders PixIconButton with the default design', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixIconButton @iconName='add' @ariaLabel='action du bouton' />
        */
        {
          "id": "hiYwD4xf",
          "block": "[[[8,[39,0],null,[[\"@iconName\",\"@ariaLabel\"],[\"add\",\"action du bouton\"]],null]],[],false,[\"pix-icon-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-icon-button-test.js",
          "isStrictMode": false
        }));

        // then
        const pixIconButton = screen.getByRole('button', {
          name: 'action du bouton'
        });
        assert.dom(pixIconButton).doesNotHaveClass('pix-icon-button--secondary');
      });
    });
    (0, _qunit.module)('when variant is secondary', function () {
      (0, _qunit.test)('it renders PixIconButton with the secondary variant class', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixIconButton @iconName='add' @ariaLabel='action du bouton' @variant='secondary' />
        */
        {
          "id": "xckijpCz",
          "block": "[[[8,[39,0],null,[[\"@iconName\",\"@ariaLabel\",\"@variant\"],[\"add\",\"action du bouton\",\"secondary\"]],null]],[],false,[\"pix-icon-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-icon-button-test.js",
          "isStrictMode": false
        }));

        // then
        const pixIconButton = screen.getByRole('button', {
          name: 'action du bouton'
        });
        assert.dom(pixIconButton).hasClass('pix-icon-button--secondary');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-icons-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixIcons', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the default PixIcons title', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixIcon @title='my-title' @icon='help' />
      */
      {
        "id": "gCfPGdNO",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@icon\"],[\"my-title\",\"help\"]],null]],[],false,[\"pix-icon\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-icons-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByRole('img', {
        name: 'my-title'
      }));
    });
  });
});
define("dummy/tests/integration/components/pix-indicator-card-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixIndicatorCard', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    this.title = 'Hello Dedans';
    this.color = 'blue';
    this.icon = 'help';
    this.info = "Coucou la bulle d'info";
    this.loadingMessage = 'texte de chargement sr';
    (0, _qunit.test)('it renders', async function (assert) {
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixIndicatorCard @title={{this.title}} @color={{this.color}} @iconName={{this.icon}}>
        <:default>42</:default>
        <:sub>
          En cours : 1
        </:sub>
      </PixIndicatorCard>
      */
      {
        "id": "GnlLigh/",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@color\",\"@iconName\"],[[30,0,[\"title\"]],[30,0,[\"color\"]],[30,0,[\"icon\"]]]],[[\"default\",\"sub\"],[[[[1,\"42\"]],[]],[[[1,\"\\n    En cours : 1\\n  \"]],[]]]]]],[],false,[\"pix-indicator-card\",\":default\",\":sub\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-indicator-card-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(screen.getByRole('term').textContent, this.title);
      assert.strictEqual(screen.getByRole('definition').textContent, '42');
      assert.dom(screen.getByText('En cours : 1')).exists();
    });
    (0, _qunit.test)('it shows the pop up info', async function (assert) {
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixIndicatorCard
        @title={{this.title}}
        @color={{this.color}}
        @iconName={{this.icon}}
        @info={{this.info}}
        @infoLabel='En savoir plus'
      >
        <:default>42</:default>
        <:sub>
          En cours : 1
        </:sub>
      </PixIndicatorCard>
      */
      {
        "id": "hS4YBMhr",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@color\",\"@iconName\",\"@info\",\"@infoLabel\"],[[30,0,[\"title\"]],[30,0,[\"color\"]],[30,0,[\"icon\"]],[30,0,[\"info\"]],\"En savoir plus\"]],[[\"default\",\"sub\"],[[[[1,\"42\"]],[]],[[[1,\"\\n    En cours : 1\\n  \"]],[]]]]]],[],false,[\"pix-indicator-card\",\":default\",\":sub\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-indicator-card-test.js",
        "isStrictMode": false
      }));
      screen.getByLabelText('En savoir plus').focus();
      const tooltip = await screen.findByRole('tooltip');
      assert.strictEqual(tooltip.innerText, this.info);
    });
    (0, _qunit.module)('#loadingMessage, when is loading', function () {
      (0, _qunit.test)("it didn't display card infos", async function () {
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixIndicatorCard
          @title={{this.title}}
          @color={{this.color}}
          @iconName={{this.icon}}
          @info={{this.info}}
          @isLoading={{true}}
          @loadingMessage={{this.loadingMessage}}
        >
          <:default>42</:default>
          <:sub>
            En cours : 1
          </:sub>
        </PixIndicatorCard>
        */
        {
          "id": "DfCKAyAB",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@color\",\"@iconName\",\"@info\",\"@isLoading\",\"@loadingMessage\"],[[30,0,[\"title\"]],[30,0,[\"color\"]],[30,0,[\"icon\"]],[30,0,[\"info\"]],true,[30,0,[\"loadingMessage\"]]]],[[\"default\",\"sub\"],[[[[1,\"42\"]],[]],[[[1,\"\\n    En cours : 1\\n  \"]],[]]]]]],[],false,[\"pix-indicator-card\",\":default\",\":sub\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-indicator-card-test.js",
          "isStrictMode": false
        }));
        const title = screen.queryByText(this.title);
        _qunit.assert.dom(title).doesNotExist();
      });
      (0, _qunit.test)('it display loading text', async function () {
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixIndicatorCard
          @title={{this.title}}
          @color={{this.color}}
          @iconName={{this.icon}}
          @info={{this.info}}
          @isLoading={{true}}
          @loadingMessage={{this.loadingMessage}}
        >
          <:default>42</:default>
          <:sub>
            En cours : 1
          </:sub>
        </PixIndicatorCard>
        */
        {
          "id": "DfCKAyAB",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@color\",\"@iconName\",\"@info\",\"@isLoading\",\"@loadingMessage\"],[[30,0,[\"title\"]],[30,0,[\"color\"]],[30,0,[\"icon\"]],[30,0,[\"info\"]],true,[30,0,[\"loadingMessage\"]]]],[[\"default\",\"sub\"],[[[[1,\"42\"]],[]],[[[1,\"\\n    En cours : 1\\n  \"]],[]]]]]],[],false,[\"pix-indicator-card\",\":default\",\":sub\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-indicator-card-test.js",
          "isStrictMode": false
        }));
        const loadingText = screen.queryByText(this.loadingMessage);
        _qunit.assert.dom(loadingText).exists();
      });
    });
  });
});
define("dummy/tests/integration/components/pix-input-code-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "dummy/tests/helpers/fill-in-by-label", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _fillInByLabel, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"dummy/tests/helpers/fill-in-by-label",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-input-code', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const COMPONENT_SELECTOR = '.pix-input-code';
    const INPUT_SELECTOR = '#code-input';
    (0, _qunit.test)('it renders the default PixInputCode with 6 inputs', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='Champ' />
      */
      {
        "id": "QQiLq/rk",
        "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"Champ\"]],null]],[],false,[\"pix-input-code\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(COMPONENT_SELECTOR).exists();
      const inputElementsFound = this.element.querySelectorAll('input');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(inputElementsFound.length, 6);
    });
    (0, _qunit.test)('it should have a fieldset with a legend for accessibility', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputCode @legend="Ce code est le code de vérification d'email" @ariaLabel='Champ' />
      */
      {
        "id": "ucZe+hUp",
        "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Ce code est le code de vérification d'email\",\"Champ\"]],null]],[],false,[\"pix-input-code\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom('fieldset').exists();
      assert.contains("Ce code est le code de vérification d'email");
    });
    (0, _qunit.test)('it should explain how PixInputCode can be eddited', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputCode
        @legend="Ce code est le code de vérification d'email"
        @ariaLabel='Champ'
        @explanationOfUse='Vous pouvez utiliser les flèches pour naviguer de champ en champ'
      />
      */
      {
        "id": "dAOdBeOp",
        "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\",\"@explanationOfUse\"],[\"Ce code est le code de vérification d'email\",\"Champ\",\"Vous pouvez utiliser les flèches pour naviguer de champ en champ\"]],null]],[],false,[\"pix-input-code\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Vous pouvez utiliser les flèches pour naviguer de champ en champ');
    });
    (0, _qunit.module)('when adding characters', function () {
      (0, _qunit.test)('it should focus on next input after inputting value', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='Champ' />
        */
        {
          "id": "QQiLq/rk",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"Champ\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _fillInByLabel.default)('Champ 1', '1');

        // then
        assert.dom(`${INPUT_SELECTOR}-1`).hasClass('filled');
        assert.dom(`${INPUT_SELECTOR}-2`).isFocused();
      });
      (0, _qunit.test)('it should truncate input to 1 digit', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='label' />
        */
        {
          "id": "UhYZYz8Y",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"label\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _fillInByLabel.default)('label 4', '12345');

        // then
        assert.dom(`${INPUT_SELECTOR}-5`).isFocused();
        assert.dom(`${INPUT_SELECTOR}-5`).isFocused();
        assert.dom(`${INPUT_SELECTOR}-4`).hasValue('1');
      });
      (0, _qunit.test)('it should not allow characters when type is number', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='label' />
        */
        {
          "id": "UhYZYz8Y",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"label\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _fillInByLabel.default)('label 4', 'a');

        // then
        assert.dom(`${INPUT_SELECTOR}-4`).isFocused();
        assert.dom(`${INPUT_SELECTOR}-4`).doesNotHaveClass('filled');
        assert.dom(`${INPUT_SELECTOR}-4`).hasValue('');
      });
      (0, _qunit.test)('it should truncate input to 1 character', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='label' @inputType='text' />
        */
        {
          "id": "XyfsAZjO",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\",\"@inputType\"],[\"Nom du PixInputCode\",\"label\",\"text\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _fillInByLabel.default)('label 4', 'abcdf');

        // then
        assert.dom(`${INPUT_SELECTOR}-5`).isFocused();
        assert.dom(`${INPUT_SELECTOR}-4`).hasValue('a');
      });
      (0, _qunit.test)('it should trigger function with entered code when all inputs are filled', async function (assert) {
        // given
        this.set('onAllInputsFilled', _sinon.default.spy());
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode
          @legend='Nom du PixInputCode'
          @ariaLabel='label'
          @onAllInputsFilled={{this.onAllInputsFilled}}
        />
        */
        {
          "id": "3LHmXjYZ",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\",\"@onAllInputsFilled\"],[\"Nom du PixInputCode\",\"label\",[30,0,[\"onAllInputsFilled\"]]]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _fillInByLabel.default)('label 1', '3');
        await (0, _fillInByLabel.default)('label 2', '5');
        await (0, _fillInByLabel.default)('label 3', '7');
        await (0, _fillInByLabel.default)('label 4', '2');
        await (0, _fillInByLabel.default)('label 5', '4');
        await (0, _fillInByLabel.default)('label 6', '6');

        // then
        assert.ok(this.onAllInputsFilled.calledOnce, 'the callback should be called once');
        assert.ok(this.onAllInputsFilled.calledWith, ['357246']);
      });
      (0, _qunit.test)('it should not trigger function with entered code when all inputs not filled', async function (assert) {
        // given
        this.set('onAllInputsFilled', _sinon.default.spy());
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode
          @legend='Nom du PixInputCode'
          @ariaLabel='label'
          @onAllInputsFilled={{this.onAllInputsFilled}}
        />
        */
        {
          "id": "3LHmXjYZ",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\",\"@onAllInputsFilled\"],[\"Nom du PixInputCode\",\"label\",[30,0,[\"onAllInputsFilled\"]]]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _fillInByLabel.default)('label 1', '3');
        await (0, _fillInByLabel.default)('label 2', '5');
        await (0, _fillInByLabel.default)('label 3', '7');
        await (0, _fillInByLabel.default)('label 5', '4');
        await (0, _fillInByLabel.default)('label 6', '6');

        // then
        assert.notOk(this.onAllInputsFilled.calledOnce);
      });
      (0, _qunit.test)('it should trigger function with entered code even if last entered value is not the last input', async function (assert) {
        // given
        this.set('onAllInputsFilled', _sinon.default.spy());
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode
          @legend='Nom du PixInputCode'
          @ariaLabel='label'
          @onAllInputsFilled={{this.onAllInputsFilled}}
        />
        */
        {
          "id": "3LHmXjYZ",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\",\"@onAllInputsFilled\"],[\"Nom du PixInputCode\",\"label\",[30,0,[\"onAllInputsFilled\"]]]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _fillInByLabel.default)('label 1', '3');
        await (0, _fillInByLabel.default)('label 2', '5');
        await (0, _fillInByLabel.default)('label 3', '7');
        await (0, _fillInByLabel.default)('label 5', '4');
        await (0, _fillInByLabel.default)('label 6', '6');
        await (0, _fillInByLabel.default)('label 4', '2');

        // then
        assert.ok(this.onAllInputsFilled.calledOnce, 'the callback should be called once');
        assert.ok(this.onAllInputsFilled.calledWith, ['357246']);
      });
    });
    (0, _qunit.module)('when deleting characters', function () {
      (0, _qunit.test)('it should focus on previous input after Backspace', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='label' />
        */
        {
          "id": "UhYZYz8Y",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"label\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.focus)(`${INPUT_SELECTOR}-4`);
        await (0, _testHelpers.triggerKeyEvent)(`${INPUT_SELECTOR}-4`, 'keyup', 'Backspace');

        // then
        assert.dom(`${INPUT_SELECTOR}-3`).isFocused();
      });
    });
    (0, _qunit.module)('when changing focus', function () {
      (0, _qunit.test)('it should focus on previous input after ArrowLeft', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='label' />
        */
        {
          "id": "UhYZYz8Y",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"label\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.focus)(`${INPUT_SELECTOR}-4`);
        await (0, _testHelpers.triggerKeyEvent)(`${INPUT_SELECTOR}-4`, 'keyup', 'ArrowLeft');

        // then
        assert.dom(`${INPUT_SELECTOR}-3`).isFocused();
      });
      (0, _qunit.test)('it should focus on next input after ArrowRight', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='label' />
        */
        {
          "id": "UhYZYz8Y",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"label\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.focus)(`${INPUT_SELECTOR}-4`);
        await (0, _testHelpers.triggerKeyEvent)(`${INPUT_SELECTOR}-4`, 'keyup', 'ArrowRight');

        // then
        assert.dom(`${INPUT_SELECTOR}-5`).isFocused();
      });
      (0, _qunit.test)('it should not focus on next input after ArrowUp or ArrowDown', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='label' />
        */
        {
          "id": "UhYZYz8Y",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"label\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.focus)(`${INPUT_SELECTOR}-4`);
        await (0, _testHelpers.triggerKeyEvent)(`${INPUT_SELECTOR}-4`, 'keydown', 'ArrowUp');
        await (0, _testHelpers.triggerKeyEvent)(`${INPUT_SELECTOR}-4`, 'keydown', 'ArrowUp');
        await (0, _testHelpers.triggerKeyEvent)(`${INPUT_SELECTOR}-4`, 'keydown', 'ArrowUp');
        await (0, _testHelpers.triggerKeyEvent)(`${INPUT_SELECTOR}-4`, 'keydown', 'ArrowDown');

        // then
        assert.dom(`${INPUT_SELECTOR}-4`).isFocused();
      });
    });
    (0, _qunit.module)('when filling inputs by copy paste', function () {
      (0, _qunit.test)('it should support paste filling all inputs', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode @legend='Nom du PixInputCode' @ariaLabel='label' />
        */
        {
          "id": "UhYZYz8Y",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\"],[\"Nom du PixInputCode\",\"label\"]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.triggerEvent)(`${INPUT_SELECTOR}-1`, 'paste', {
          clipboardData: {
            getData: () => '123456'
          }
        });

        // then
        [1, 2, 3, 4, 5, 6].forEach(index => {
          assert.dom(`${INPUT_SELECTOR}-${index}`).hasValue(`${index}`);
        });
      });
      (0, _qunit.test)('it should trigger function with entered code after paste', async function (assert) {
        // given
        this.set('onAllInputsFilled', _sinon.default.spy());
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputCode
          @legend='Nom du PixInputCode'
          @ariaLabel='label'
          @onAllInputsFilled={{this.onAllInputsFilled}}
        />
        */
        {
          "id": "3LHmXjYZ",
          "block": "[[[8,[39,0],null,[[\"@legend\",\"@ariaLabel\",\"@onAllInputsFilled\"],[\"Nom du PixInputCode\",\"label\",[30,0,[\"onAllInputsFilled\"]]]],null]],[],false,[\"pix-input-code\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-code-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.triggerEvent)(`${INPUT_SELECTOR}-1`, 'paste', {
          clipboardData: {
            getData: () => '‎ 357246'
          }
        });

        // then
        assert.ok(this.onAllInputsFilled.calledOnce, 'the callback should be called once');
        assert.ok(this.onAllInputsFilled.calledWith, ['357246']);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-input-password-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-input-password', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const INPUT_SELECTOR = '.pix-input-password input[type=password]';
    const BUTTON_SELECTOR = '.pix-input-password__button';
    (0, _qunit.test)('it should be possible to have an input label', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputPassword @id='password'><:label>Mot de passe</:label></PixInputPassword>
      */
      {
        "id": "2VAzhVIc",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"password\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText('Mot de passe'));
    });
    (0, _qunit.test)('it should be possible to add extra information to input', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputPassword @id='password' @subLabel='une brève information'><:label>Mot de passe</:label></PixInputPassword>
      */
      {
        "id": "RVZuTBXZ",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@subLabel\"],[\"password\",\"une brève information\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText('Mot de passe une brève information'));
    });
    (0, _qunit.test)('it should be possible to associate an error message to input', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputPassword
        @id='password'
        @errorMessage="Un message d'erreur."
        @validationStatus='error'
      ><:label>Mot de passe</:label></PixInputPassword>
      */
      {
        "id": "caIVtTLF",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@errorMessage\",\"@validationStatus\"],[\"password\",\"Un message d'erreur.\",\"error\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByText("Un message d'erreur.")).exists();
    });
    (0, _qunit.test)('it should display an input prefix if necessary', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputPassword @id='password' @prefix='A prefix'><:label>Mot de passe</:label></PixInputPassword>
      */
      {
        "id": "6aLx/G4N",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@prefix\"],[\"password\",\"A prefix\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('A prefix');
    });
    (0, _qunit.test)('it should be possible to add more params to input', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputPassword @id='password' autocomplete='off'><:label>Mot de passe</:label></PixInputPassword>
      */
      {
        "id": "E5SUvwhG",
        "block": "[[[8,[39,0],[[24,\"autocomplete\",\"off\"]],[[\"@id\"],[\"password\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      const selectorElement = this.element.querySelector(INPUT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(selectorElement.autocomplete, 'off');
    });
    (0, _qunit.test)('it renders PixInputPassword with password visibility button', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputPassword @id='password'><:label>Mot de passe</:label></PixInputPassword>
      */
      {
        "id": "2VAzhVIc",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"password\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      const passwordVisibilityButton = this.element.querySelector(BUTTON_SELECTOR);
      assert.dom(passwordVisibilityButton).exists();
    });
    (0, _qunit.test)('it should be possible to track value of input', async function (assert) {
      // given && when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputPassword @id='password' @value='pix123'><:label>Mot de passe</:label></PixInputPassword>
      */
      {
        "id": "Wyacwbtr",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@value\"],[\"password\",\"pix123\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      const selectorElement = this.element.querySelector(INPUT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(selectorElement.value, 'pix123');
    });
    (0, _qunit.test)('it should be possible to make pix input password required', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInputPassword @id='password' @requiredLabel='Champ obligatoire'><:label>Mot de passe</:label></PixInputPassword>
      */
      {
        "id": "2NvY9uC3",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@requiredLabel\"],[\"password\",\"Champ obligatoire\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      const requiredPasswordInput = screen.getByLabelText('Mot de passe *');
      assert.dom(requiredPasswordInput).isRequired();
    });
    (0, _qunit.module)('when the password visibility button is clicked', function () {
      (0, _qunit.test)('it should focus on input', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInputPassword @id='password' @requiredLabel='Champ obligatoire'><:label>Mot de passe</:label></PixInputPassword>
        */
        {
          "id": "2NvY9uC3",
          "block": "[[[8,[39,0],null,[[\"@id\",\"@requiredLabel\"],[\"password\",\"Champ obligatoire\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: 'Afficher le mot de passe'
        }));

        // then
        assert.dom(screen.getByLabelText('Mot de passe *')).isFocused();
      });
    });
  });
});
define("dummy/tests/integration/components/pix-input-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "dummy/tests/helpers/fill-in-by-label", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _fillInByLabel, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"dummy/tests/helpers/fill-in-by-label",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixInput', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const INPUT_SELECTOR = '.pix-input input';
    (0, _qunit.test)('it renders the default PixInput', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='first-name'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "DvtGupFO",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"first-name\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));
      await (0, _fillInByLabel.default)('Prénom', 'Jeanne');

      // then
      assert.contains('Jeanne');
    });
    (0, _qunit.test)('it should be possible to give a number as id', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id={{123}}><:label>Prénom</:label></PixInput>
      */
      {
        "id": "Eu+sT7U2",
        "block": "[[[8,[39,0],null,[[\"@id\"],[123]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      const selectorElement = this.element.querySelector(INPUT_SELECTOR);
      assert.strictEqual(selectorElement.id, '123');
    });
    (0, _qunit.test)('it should be possible to give a label to input', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='firstName'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "nOydcQO4",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"firstName\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText('Prénom'));
    });
    (0, _qunit.test)('it should be possible to give an extra information to input', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='firstName' @subLabel='a small information'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "f/8j/5a5",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@subLabel\"],[\"firstName\",\"a small information\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText('Prénom a small information'));
    });
    (0, _qunit.test)('it should be possible to give an error message to input', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput
        @id='firstName'
        @errorMessage='Seul les caractères alphanumériques sont autorisés'
        @validationStatus='error'
      ><:label>Prénom</:label></PixInput>
      */
      {
        "id": "CncsjxIo",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@errorMessage\",\"@validationStatus\"],[\"firstName\",\"Seul les caractères alphanumériques sont autorisés\",\"error\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByText('Seul les caractères alphanumériques sont autorisés')).exists();
    });
    (0, _qunit.test)('it should be possible to track value from input', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='firstName' @value='Jeanne'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "ygtQcAII",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@value\"],[\"firstName\",\"Jeanne\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      const selectorElement = this.element.querySelector(INPUT_SELECTOR);
      assert.strictEqual(selectorElement.value, 'Jeanne');
    });
    (0, _qunit.test)('it should be possible to give more params to input', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='firstName' autocomplete='on'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "H375R3xK",
        "block": "[[[8,[39,0],[[24,\"autocomplete\",\"on\"]],[[\"@id\"],[\"firstName\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      const selectorElement = this.element.querySelector(INPUT_SELECTOR);
      assert.strictEqual(selectorElement.autocomplete, 'on');
    });
    (0, _qunit.test)('it should be possible to make pix input required', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='firstName' @requiredLabel='Champ obligatoire'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "ofEBSABZ",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@requiredLabel\"],[\"firstName\",\"Champ obligatoire\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      const requiredInput = screen.getByLabelText('Prénom *');
      assert.dom(requiredInput).isRequired();
    });
    (0, _qunit.module)('root class computation', function () {
      const DIV_ROOT_SELECTOR = '.pix-input';
      (0, _qunit.test)('it should compute correct class for root when @isFullWidth param is true', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInput @id='firstName' @isFullWidth={{true}}><:label>Prénom</:label></PixInput>
        */
        {
          "id": "fu+9Y4wq",
          "block": "[[[8,[39,0],null,[[\"@id\",\"@isFullWidth\"],[\"firstName\",true]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
          "isStrictMode": false
        }));

        // then
        const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
        assert.strictEqual(selectorElement.classList.value, 'pix-input pix-input--full-width');
      });
      (0, _qunit.test)('it should compute correct class for root when @inlineLabel param is true', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInput @id='firstName' @inlineLabel={{true}}><:label>Prénom</:label></PixInput>
        */
        {
          "id": "L7MU/cep",
          "block": "[[[8,[39,0],null,[[\"@id\",\"@inlineLabel\"],[\"firstName\",true]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
          "isStrictMode": false
        }));

        // then
        const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
        assert.strictEqual(selectorElement.classList.value, 'pix-input pix-input--inline');
      });
      (0, _qunit.test)('it should compute correct class for root when @inlineLabel and @isFullWidth params are true', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixInput @id='firstName' @inlineLabel={{true}} @isFullWidth={{true}}>
          <:label>Prénom</:label>
        </PixInput>
        */
        {
          "id": "yKqcxVhl",
          "block": "[[[8,[39,0],null,[[\"@id\",\"@inlineLabel\",\"@isFullWidth\"],[\"firstName\",true,true]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
          "isStrictMode": false
        }));

        // then
        const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
        assert.strictEqual(selectorElement.classList.value, 'pix-input pix-input--inline pix-input--full-width');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-label-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixLabel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders PixLabel with for and content', async function (assert) {
      // given
      const label = 'Bonjour Pix !';
      this.set('label', label);

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixLabel @for='linkableElement'>{{this.label}}</PixLabel><input id='linkableElement' />
      */
      {
        "id": "1EKyI52D",
        "block": "[[[8,[39,0],null,[[\"@for\"],[\"linkableElement\"]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13]],[],false,[\"pix-label\",\"input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-label-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText(label));
    });
    (0, _qunit.test)('it renders PixLabel as legend with content', async function (assert) {
      // given
      const label = 'Bonjour Pix !';
      this.set('label', label);

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <fieldset><PixLabel @useAsLegend={{true}}>{{this.label}}</PixLabel>
        <label for='linkableElement'>linkable element</label><input id='linkableElement' /></fieldset>
      */
      {
        "id": "CVQEZJGJ",
        "block": "[[[10,\"fieldset\"],[12],[8,[39,1],null,[[\"@useAsLegend\"],[true]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[1,\"\\n  \"],[10,\"label\"],[14,\"for\",\"linkableElement\"],[12],[1,\"linkable element\"],[13],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13],[13]],[],false,[\"fieldset\",\"pix-label\",\"label\",\"input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-label-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByRole('group', {
        name: label
      }));
    });
    (0, _qunit.test)('it renders PixLabel with additional information', async function (assert) {
      // given
      const label = 'Bonjour Pix !';
      this.set('label', label);
      const subLabel = 'some explaination';
      this.set('subLabel', subLabel);

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixLabel @for='linkableElement' @subLabel={{this.subLabel}}>{{this.label}}</PixLabel><input
        id='linkableElement'
      />
      */
      {
        "id": "v2Up7QIZ",
        "block": "[[[8,[39,0],null,[[\"@for\",\"@subLabel\"],[\"linkableElement\",[30,0,[\"subLabel\"]]]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13]],[],false,[\"pix-label\",\"input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-label-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText([label, subLabel].join(' ')));
    });
    (0, _qunit.test)('it renders PixLabel with requiredLabel', async function (assert) {
      // given
      const label = 'Bonjour Pix !';
      this.set('label', label);
      this.set('requiredLabel', 'this field is required');

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixLabel
        @for='linkableElement'
        @requiredLabel={{this.requiredLabel}}
      >{{this.label}}</PixLabel><input id='linkableElement' />
      */
      {
        "id": "asoAeiYq",
        "block": "[[[8,[39,0],null,[[\"@for\",\"@requiredLabel\"],[\"linkableElement\",[30,0,[\"requiredLabel\"]]]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13]],[],false,[\"pix-label\",\"input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-label-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText([label, '*'].join(' ')));
    });
    (0, _qunit.test)('it still accessible when hidden label', async function (assert) {
      // given
      const label = 'Bonjour Pix !';
      this.set('label', label);

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixLabel @for='linkableElement' @screenReaderOnly={{true}}>{{this.label}}</PixLabel><input
        id='linkableElement'
      />
      */
      {
        "id": "zWRkmFse",
        "block": "[[[8,[39,0],null,[[\"@for\",\"@screenReaderOnly\"],[\"linkableElement\",true]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13]],[],false,[\"pix-label\",\"input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-label-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText(label));
    });
  });
});
define("dummy/tests/integration/components/pix-modal-header-test", ["@1024pix/ember-testing-library", "@1024pix/pix-ui/components/pix-modal-header", "ember-qunit", "qunit", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_emberTestingLibrary, _pixModalHeader, _emberQunit, _qunit, _component, _templateFactory, _templateOnly) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@1024pix/pix-ui/components/pix-modal-header",0,"ember-qunit",0,"qunit",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | modal-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('variants', function () {
      (0, _qunit.module)('when variant is not provided', function () {
        (0, _qunit.test)('it should apply default gradient header', async function (assert) {
          // given
          const title = 'Modal with no variant';
          // when
          await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixModalHeader @id="modal-title--1" @title={{title}} />
          */
          {
            "id": "7+0suku6",
            "block": "[[[8,[32,0],null,[[\"@id\",\"@title\"],[\"modal-title--1\",[32,1]]],null]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-header-test.js",
            "scope": () => [_pixModalHeader.default, title],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const header = this.element.querySelector('.pix-modal-header');
          assert.dom(header).hasClass('pix-modal-header--default');
        });
      });
      (0, _qunit.module)('when variant is "default"', function () {
        (0, _qunit.test)('it should apply default style', async function (assert) {
          // given
          const title = 'Modal with "default" variant';
          // when
          await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixModalHeader @title={{title}} @variant="default" />
          */
          {
            "id": "cppSfJpS",
            "block": "[[[8,[32,0],null,[[\"@title\",\"@variant\"],[[32,1],\"default\"]],null]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-header-test.js",
            "scope": () => [_pixModalHeader.default, title],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const header = this.element.querySelector('.pix-modal-header');
          assert.dom(header).hasClass('pix-modal-header--default');
        });
      });
      (0, _qunit.module)('when variant is "orga"', function () {
        (0, _qunit.test)('it should apply orga style', async function (assert) {
          // given
          const title = 'Modal with "orga" variant';
          // when
          await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixModalHeader @title={{title}} @variant="orga" />
          */
          {
            "id": "X0z6aSG6",
            "block": "[[[8,[32,0],null,[[\"@title\",\"@variant\"],[[32,1],\"orga\"]],null]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-header-test.js",
            "scope": () => [_pixModalHeader.default, title],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const header = this.element.querySelector('.pix-modal-header');
          assert.dom(header).hasClass('pix-modal-header--orga');
        });
      });
      (0, _qunit.module)('when variant is "certif"', function () {
        (0, _qunit.test)('it should apply certif style', async function (assert) {
          // given
          const title = 'Modal with "certif" variant';
          // when
          await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixModalHeader @title={{title}} @variant="certif" />
          */
          {
            "id": "VkRbru1x",
            "block": "[[[8,[32,0],null,[[\"@title\",\"@variant\"],[[32,1],\"certif\"]],null]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-header-test.js",
            "scope": () => [_pixModalHeader.default, title],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const header = this.element.querySelector('.pix-modal-header');
          assert.dom(header).hasClass('pix-modal-header--certif');
        });
      });
    });
    (0, _qunit.module)('when @iconName is provided', function () {
      (0, _qunit.test)('it should render icon in header', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixModalHeader @title="Titre" @iconName="lightBulb" />
        */
        {
          "id": "Lx7d3qXT",
          "block": "[[[8,[32,0],null,[[\"@title\",\"@iconName\"],[\"Titre\",\"lightBulb\"]],null]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-header-test.js",
          "scope": () => [_pixModalHeader.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        const headerTitleSection = this.element.querySelector('.pix-modal-header__title-section');
        const icon = (0, _emberTestingLibrary.within)(headerTitleSection).getByRole('img', {
          hidden: true
        });
        assert.true(icon.innerHTML.includes('lightBulb'));
      });
    });
    (0, _qunit.module)('when @iconName is not provided', function () {
      (0, _qunit.test)('it should not render icon', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixModalHeader @title="Titre" />
        */
        {
          "id": "utubAbR4",
          "block": "[[[8,[32,0],null,[[\"@title\"],[\"Titre\"]],null]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-header-test.js",
          "scope": () => [_pixModalHeader.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        const headerTitleSection = this.element.querySelector('.pix-modal-header__title-section');
        const icon = (0, _emberTestingLibrary.within)(headerTitleSection).queryByRole('img', {
          hidden: true
        });
        assert.dom(icon).doesNotExist();
      });
    });
    (0, _qunit.module)('when @subtitle is provided', function () {
      (0, _qunit.test)('it should render subtitle in header', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixModalHeader @title="Titre" @subtitle="Sous titre" />
        */
        {
          "id": "Gh8fRb8b",
          "block": "[[[8,[32,0],null,[[\"@title\",\"@subtitle\"],[\"Titre\",\"Sous titre\"]],null]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-header-test.js",
          "scope": () => [_pixModalHeader.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        const headerTitleSection = this.element.querySelector('.pix-modal-header__title-section');
        const subtitle = (0, _emberTestingLibrary.within)(headerTitleSection).getByText('Sous titre');
        assert.dom(subtitle).exists();
      });
    });
    (0, _qunit.module)('when @subtitle is not provided', function () {
      (0, _qunit.test)('it should not render subtitle', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixModalHeader @title="Titre" />
        */
        {
          "id": "utubAbR4",
          "block": "[[[8,[32,0],null,[[\"@title\"],[\"Titre\"]],null]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-header-test.js",
          "scope": () => [_pixModalHeader.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        const subtitleElement = this.element.querySelector('.pix-modal-headersubtitle');
        assert.dom(subtitleElement).doesNotExist();
      });
    });
  });
});
define("dummy/tests/integration/components/pix-modal-test", ["@1024pix/ember-testing-library", "@1024pix/pix-ui/components/pix-modal", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_emberTestingLibrary, _pixModal, _testHelpers, _emberQunit, _qunit, _sinon, _component, _templateFactory, _templateOnly) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@1024pix/pix-ui/components/pix-modal",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('when showModal is equal true', function () {
      (0, _qunit.test)('it renders the default PixModal', async function (assert) {
        // given
        const title = "It's a modal!";
        const showModal = true;
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixModal @title={{title}} @showModal={{showModal}}>
                    <:content>
                      content
                    </:content>
                    <:footer>
                      footer
                    </:footer>
                  </PixModal>
                
        */
        {
          "id": "wJti0bPB",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@title\",\"@showModal\"],[[32,1],[32,2]]],[[\"content\",\"footer\"],[[[[1,\"\\n              content\\n            \"]],[]],[[[1,\"\\n              footer\\n            \"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
          "scope": () => [_pixModal.default, title, showModal],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.ok(screen.getByRole('dialog'));
        assert.ok(screen.queryByRole('heading', {
          name: title
        }));
        assert.contains('content');
        assert.contains('footer');
      });
      (0, _qunit.module)('when close button is clicked', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          const title = 'Close me baby one more time';
          const showModal = true;
          const onCloseButtonClick = _sinon.default.stub();
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixModal
                        @title={{title}}
                        @onCloseButtonClick={{onCloseButtonClick}}
                        @showModal={{showModal}}
                      >
                        content
                      </PixModal>
                    
          */
          {
            "id": "Vxi0ZlLs",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@onCloseButtonClick\",\"@showModal\"],[[32,1],[32,2],[32,3]]],[[\"default\"],[[[[1,\"\\n              content\\n            \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
            "scope": () => [_pixModal.default, title, onCloseButtonClick, showModal],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          await (0, _testHelpers.click)(screen.getByRole('button', {
            name: /Fermer/
          }));
          // then
          assert.ok(onCloseButtonClick.calledOnce);
        });
      });
      (0, _qunit.module)('when the cancel event is triggered (escape key)', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          const title = 'Close me baby one more time';
          const showModal = true;
          const onCloseButtonClick = _sinon.default.stub();
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixModal
                        @title={{title}}
                        @onCloseButtonClick={{onCloseButtonClick}}
                        @showModal={{showModal}}
                      >
                        content
                      </PixModal>
                    
          */
          {
            "id": "Vxi0ZlLs",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@onCloseButtonClick\",\"@showModal\"],[[32,1],[32,2],[32,3]]],[[\"default\"],[[[[1,\"\\n              content\\n            \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
            "scope": () => [_pixModal.default, title, onCloseButtonClick, showModal],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          await (0, _testHelpers.triggerEvent)(screen.getByRole('dialog'), 'cancel');
          // then
          assert.ok(onCloseButtonClick.calledOnce);
        });
      });
    });
    (0, _qunit.module)('when showModal is false', function () {
      (0, _qunit.test)('it should not show modal', async function (assert) {
        // given
        const title = "It's a modal!";
        const showModal = false;
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixModal @title={{title}} @showModal={{showModal}}>
                    <:content>
                      content
                    </:content>
                    <:footer>
                      footer
                    </:footer>
                  </PixModal>
                
        */
        {
          "id": "wJti0bPB",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@title\",\"@showModal\"],[[32,1],[32,2]]],[[\"content\",\"footer\"],[[[[1,\"\\n              content\\n            \"]],[]],[[[1,\"\\n              footer\\n            \"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
          "scope": () => [_pixModal.default, title, showModal],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.notOk(screen.queryByRole('dialog'));
        assert.notOk(screen.queryByRole('heading', {
          name: title
        }));
      });
    });
    (0, _qunit.module)('variants', function () {
      (0, _qunit.module)('when variant is not provided', function () {
        (0, _qunit.test)('it should apply default style', async function (assert) {
          // given
          const title = 'Modal with no variant';
          const showModal = true;
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixModal @title={{title}} @showModal={{showModal}}>
                        <:content>
                          content
                        </:content>
                        <:footer>
                          footer
                        </:footer>
                      </PixModal>
                    
          */
          {
            "id": "C4gpISvg",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@showModal\"],[[32,1],[32,2]]],[[\"content\",\"footer\"],[[[[1,\"\\n                content\\n              \"]],[]],[[[1,\"\\n                footer\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
            "scope": () => [_pixModal.default, title, showModal],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const dialog = screen.getByRole('dialog', {
            name: 'Modal with no variant'
          });
          assert.dom(dialog.querySelector('.pix-modal')).hasClass('pix-modal--default');
        });
      });
      (0, _qunit.module)('when variant is "default"', function () {
        (0, _qunit.test)('it should apply default style', async function (assert) {
          // given
          const title = 'Modal with "default" variant';
          const showModal = true;
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixModal @title={{title}} @showModal={{showModal}} @variant="default">
                        <:content>
                          content
                        </:content>
                        <:footer>
                          footer
                        </:footer>
                      </PixModal>
                    
          */
          {
            "id": "HytpIWBj",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@showModal\",\"@variant\"],[[32,1],[32,2],\"default\"]],[[\"content\",\"footer\"],[[[[1,\"\\n                content\\n              \"]],[]],[[[1,\"\\n                footer\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
            "scope": () => [_pixModal.default, title, showModal],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const dialog = screen.getByRole('dialog', {
            name: 'Modal with "default" variant'
          });
          assert.dom(dialog.querySelector('.pix-modal')).hasClass('pix-modal--default');
        });
      });
      (0, _qunit.module)('when variant is "orga"', function () {
        (0, _qunit.test)('it should apply orga style', async function (assert) {
          // given
          const title = 'Modal with "orga" variant';
          const showModal = true;
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixModal @title={{title}} @showModal={{showModal}} @variant="orga">
                        <:content>
                          content
                        </:content>
                        <:footer>
                          footer
                        </:footer>
                      </PixModal>
                    
          */
          {
            "id": "Ghxwax7z",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@showModal\",\"@variant\"],[[32,1],[32,2],\"orga\"]],[[\"content\",\"footer\"],[[[[1,\"\\n                content\\n              \"]],[]],[[[1,\"\\n                footer\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
            "scope": () => [_pixModal.default, title, showModal],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const dialog = screen.getByRole('dialog', {
            name: 'Modal with "orga" variant'
          });
          assert.dom(dialog.querySelector('.pix-modal')).hasClass('pix-modal--orga');
        });
      });
      (0, _qunit.module)('when variant is "certif"', function () {
        (0, _qunit.test)('it should apply certif style', async function (assert) {
          // given
          const title = 'Modal with "certif" variant';
          const showModal = true;
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixModal @title={{title}} @showModal={{showModal}} @variant="certif">
                        <:content>
                          content
                        </:content>
                        <:footer>
                          footer
                        </:footer>
                      </PixModal>
                    
          */
          {
            "id": "J/QBY1rm",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@showModal\",\"@variant\"],[[32,1],[32,2],\"certif\"]],[[\"content\",\"footer\"],[[[[1,\"\\n                content\\n              \"]],[]],[[[1,\"\\n                footer\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
            "scope": () => [_pixModal.default, title, showModal],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const dialog = screen.getByRole('dialog', {
            name: 'Modal with "certif" variant'
          });
          assert.dom(dialog.querySelector('.pix-modal')).hasClass('pix-modal--certif');
        });
      });
    });
  });
});
define("dummy/tests/integration/components/pix-multi-select-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "@testing-library/dom", "@testing-library/user-event", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _dom, _userEvent, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"@testing-library/dom",0,"@testing-library/user-event",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | multi-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const DEFAULT_OPTIONS = [{
      value: '1',
      label: 'Salade'
    }, {
      value: '2',
      label: 'Tomate'
    }, {
      value: '3',
      label: 'Oignon'
    }];
    (0, _qunit.module)('common cases', function () {
      (0, _qunit.test)('it renders PixMultiSelect with hidden list', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.texts = {
          emptySearchMessage: 'no result',
          placeholder: 'MultiSelectTest'
        };
        this.id = 'id-MultiSelectTest';

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @values={{this.values}}
          @onChange={{this.onChange}}
          @id={{this.id}}
          @texts={{this.texts}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        
        </PixMultiSelect>
        */
        {
          "id": "fakT629k",
          "block": "[[[8,[39,0],null,[[\"@values\",\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.strictEqual(screen.queryAllByRole('checkbox').length, 0);
      });
      (0, _qunit.test)('it should updates selected items when @values is reset', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = ['2'];
        this.onChange = values => this.set('values', values);
        this.texts = {
          emptySearchMessage: 'no result',
          placeholder: 'MultiSelectTest'
        };
        this.id = 'id-MultiSelectTest';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @onChange={{this.onChange}}
          @texts={{this.texts}}
          @id={{this.id}}
          @values={{this.values}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "Wo5LRRVZ",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@texts\",\"@id\",\"@values\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"texts\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        this.set('values', []);
        await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');
        await screen.findByRole('menu');
        // then
        const checkboxElement = screen.queryAllByRole('checkbox');
        assert.false(checkboxElement[0].checked);
        assert.false(checkboxElement[1].checked);
        assert.false(checkboxElement[2].checked);
      });
      (0, _qunit.module)('onClick', function () {
        (0, _qunit.test)('it renders PixMultiSelect list', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.values = [];
          this.onChange = () => {};
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @values={{this.values}}
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "fakT629k",
            "block": "[[[8,[39,0],null,[[\"@values\",\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));
          await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');
          await screen.findByRole('menu');

          // then
          assert.strictEqual(screen.queryAllByRole('checkbox').length, 3);
        });
        (0, _qunit.test)('it renders the PixMultiSelect with empty message', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = [];
          this.values = [];
          this.onChange = () => {};
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @values={{this.values}}
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "fakT629k",
            "block": "[[[8,[39,0],null,[[\"@values\",\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));
          await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');
          await screen.findByRole('menu');
          // then
          assert.strictEqual(screen.queryAllByRole('checkbox').length, 0);
          assert.ok(screen.getByText('no result'));
        });
        (0, _qunit.test)('it renders the PixMultiSelect with default checked', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.onChange = () => {};
          this.values = ['2'];
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @values={{this.values}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "FVK32qRI",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@values\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));
          await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('menu');

          // then
          const checkboxElement = screen.queryAllByRole('checkbox');
          assert.strictEqual(checkboxElement.length, 3);
          assert.false(checkboxElement[0].checked);
          assert.true(checkboxElement[1].checked);
          assert.false(checkboxElement[2].checked);
        });
      });
      (0, _qunit.module)('display main text', function () {
        (0, _qunit.test)('it should display selected labels on MultiSelect', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.onChange = () => {};
          this.values = ['2', '3'];
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @values={{this.values}}
            @texts={{this.texts}}
            @isSearchable={{true}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "fhthSnSO",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@values\",\"@texts\",\"@isSearchable\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],[30,0,[\"texts\"]],true,[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));
          // then
          const inputElement = screen.getByLabelText('multiSelectLabel');
          assert.strictEqual(inputElement.innerText, 'Tomate, Oignon');
        });
      });
      (0, _qunit.module)('onChange', function () {
        (0, _qunit.test)('it should trigger onChange function when an item is selected', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "4d+R2X/u",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');
          await screen.findByRole('menu');
          await (0, _emberTestingLibrary.clickByName)('Salade');

          // then
          assert.true(screen.getByLabelText('Salade').checked);
          assert.ok(this.onChange.calledOnce, 'the callback should be called once');
          _sinon.default.assert.calledWithMatch(this.onChange, ['1']);
        });
        (0, _qunit.test)('it should unselect item and return selected item of the updated list', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.values = ['1', '2'];
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "4d+R2X/u",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');
          await screen.findByRole('menu');
          await (0, _emberTestingLibrary.clickByName)('Salade');

          // then
          _sinon.default.assert.calledWithMatch(this.onChange, ['1']);
          assert.ok(true);
        });
      });
      (0, _qunit.module)('a11y', function () {
        (0, _qunit.test)('it should display list, focus first element on arrow down press', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "4d+R2X/u",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('multiSelectLabel').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('menu');
          (0, _dom.fireEvent)(screen.getByRole('menu'), new Event('transitionend'));
          const checkboxes = screen.queryAllByRole('checkbox');
          assert.strictEqual(checkboxes.length, 3);
          assert.strictEqual(document.activeElement, checkboxes[0]);
        });
        (0, _qunit.test)('it should display list, focus last element on arrow up press', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "4d+R2X/u",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('multiSelectLabel').focus();
          await _userEvent.default.keyboard('[ArrowUp]');
          await screen.findByRole('menu');
          (0, _dom.fireEvent)(screen.getByRole('menu'), new Event('transitionend'));
          const checkboxes = screen.queryAllByRole('checkbox');
          assert.strictEqual(checkboxes.length, 3);
          assert.strictEqual(document.activeElement, checkboxes[2]);
        });
        (0, _qunit.test)('it should focus first element on arrow down press', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "4d+R2X/u",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('multiSelectLabel').focus();
          await _userEvent.default.keyboard('[Enter]');
          await screen.findByRole('menu');
          await _userEvent.default.keyboard('[ArrowDown]');
          const checkboxes = screen.queryAllByRole('checkbox');
          assert.strictEqual(document.activeElement, checkboxes[0]);
        });
        (0, _qunit.test)('it should focus last element on arrow up press', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "4d+R2X/u",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('multiSelectLabel').focus();
          await _userEvent.default.keyboard('[Enter]');
          await screen.findByRole('menu');
          await _userEvent.default.keyboard('[ArrowUp]');
          const checkboxes = screen.queryAllByRole('checkbox');
          // then
          assert.strictEqual(document.activeElement, checkboxes[2]);
        });
        _qunit.test.skip('it should call on select on enter press', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "4d+R2X/u",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('multiSelectLabel').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('menu');
          (0, _dom.fireEvent)(screen.getByRole('menu'), new Event('transitionend'));
          await _userEvent.default.keyboard('[Enter]');

          // then
          await (0, _emberTestingLibrary.waitForElementToBeRemoved)(() => screen.queryByRole('menu'));
          assert.strictEqual(screen.queryByRole('menu'), null);
          assert.ok(this.onChange.calledOnce, 'the callback should be called once');
          assert.strictEqual(document.activeElement, screen.getByLabelText('multiSelectLabel'));
        });
        (0, _qunit.test)('it should close menu on escape press, focus multiselect element', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.texts = {
            emptySearchMessage: 'no result',
            placeholder: 'MultiSelectTest'
          };
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "4d+R2X/u",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@texts\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          screen.getByLabelText('multiSelectLabel').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('menu');
          await _userEvent.default.keyboard('[Escape]');

          // then
          assert.strictEqual(document.activeElement, screen.getByLabelText('multiSelectLabel'));
          await (0, _emberTestingLibrary.waitForElementToBeRemoved)(() => screen.queryByRole('menu'));
          assert.strictEqual(screen.queryByRole('menu'), null);
        });
      });
    });
    (0, _qunit.module)('When it is a searchable multiselect', function () {
      (0, _qunit.module)('when @onSearch is passed', function () {
        (0, _qunit.test)('it should call @onSearch on text input', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.values = [];
          this.onChange = () => {};
          this.emptyMessage = 'no result';
          this.placeholder = 'MultiSelectTest';
          this.id = 'id-MultiSelectTest';
          this.isSearchable = true;
          this.texts = {
            searchLabel: 'Rechercher'
          };
          this.onSearch = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @isSearchable={{this.isSearchable}}
            @values={{this.values}}
            @onChange={{this.onChange}}
            @texts={{this.texts}}
            @id={{this.id}}
            @options={{this.options}}
            @onSearch={{this.onSearch}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "1o4MSWCQ",
            "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@texts\",\"@id\",\"@options\",\"@onSearch\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"texts\"]],[30,0,[\"id\"]],[30,0,[\"options\"]],[30,0,[\"onSearch\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await (0, _testHelpers.click)(screen.getByRole('button', {
            name: 'multiSelectLabel'
          }));
          await screen.findByRole('menu');
          await (0, _emberTestingLibrary.fillByLabel)('Rechercher', 'tomate');

          // then
          assert.ok(this.onSearch.calledOnce, 'the search callback should be called once');
          assert.deepEqual(this.onSearch.args[0], ['tomate']);
        });
        (0, _qunit.test)('it should not filter options by default', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.values = [];
          this.onChange = () => {};
          this.emptyMessage = 'no result';
          this.placeholder = 'MultiSelectTest';
          this.id = 'id-MultiSelectTest';
          this.isSearchable = true;
          this.onSearch = _sinon.default.stub();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @isSearchable={{this.isSearchable}}
            @values={{this.values}}
            @onChange={{this.onChange}}
            @id={{this.id}}
            @texts={{this.texts}}
            @options={{this.options}}
            @onSearch={{this.onSearch}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "SE4DdlDu",
            "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@id\",\"@texts\",\"@options\",\"@onSearch\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]],[30,0,[\"onSearch\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));

          // when
          await (0, _testHelpers.click)(screen.getByRole('button', {
            name: 'multiSelectLabel'
          }));
          await screen.findByRole('menu');
          await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', 'tomate');

          // then
          assert.strictEqual(screen.getAllByRole('checkbox').length, this.options.length);
        });
      });
    });
    (0, _qunit.module)('custom class name', function () {
      (0, _qunit.test)('it should use the added class name', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.onChange = () => {};
        this.values = ['2', '3'];
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.className = 'custom';

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @onChange={{this.onChange}}
          @id={{this.id}}
          @values={{this.values}}
          @texts={{this.texts}}
          @isSearchable={{true}}
          @className={{this.className}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "jd2mkS0x",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@values\",\"@texts\",\"@isSearchable\",\"@className\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],[30,0,[\"texts\"]],true,[30,0,[\"className\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));
        // then
        assert.dom('.custom').exists();
      });
    });
    (0, _qunit.module)('label', function () {
      (0, _qunit.test)('it focus the input on click on the label', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.onChange = () => {};
        this.values = [];
        this.placeholder = 'MultiSelectTest';

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @onChange={{this.onChange}}
          @id={{this.id}}
          @values={{this.values}}
          @isSearchable={{false}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "2YRV/bta",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@id\",\"@values\",\"@isSearchable\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],false,[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');

        // then
        assert.dom(screen.getByLabelText('multiSelectLabel')).isFocused();
      });
    });
    (0, _qunit.module)('disabled', function () {
      (0, _qunit.test)('it renders a disabled select', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isDisabled = true;

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @values={{this.values}}
          @onChange={{this.onChange}}
          @id={{this.id}}
          @texts={{this.texts}}
          @options={{this.options}}
          @isDisabled={{this.isDisabled}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        
        </PixMultiSelect>
        */
        {
          "id": "aGM1QN/n",
          "block": "[[[8,[39,0],null,[[\"@values\",\"@onChange\",\"@id\",\"@texts\",\"@options\",\"@isDisabled\"],[[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"id\"]],[30,0,[\"texts\"]],[30,0,[\"options\"]],[30,0,[\"isDisabled\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\",\":label\",\":default\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.true(screen.queryByRole('button').disabled);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-navigation-button-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-navigation-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.owner.setupRouter();
    });
    (0, _qunit.test)('it renders an HTML link', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationButton href='https://pix.fr'>content</PixNavigationButton>
      */
      {
        "id": "1rzokd04",
        "block": "[[[8,[39,0],[[24,6,\"https://pix.fr\"]],null,[[\"default\"],[[[[1,\"content\"]],[]]]]]],[],false,[\"pix-navigation-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link', {
        name: 'content'
      });
      assert.strictEqual(link.getAttribute('href'), 'https://pix.fr');
    });
    (0, _qunit.test)('it renders an icon for an HTML link ', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationButton
        href='https://pix.fr'
        title='pix.fr'
        @target='_blank'
      >content</PixNavigationButton>
      */
      {
        "id": "LwaqugsH",
        "block": "[[[8,[39,0],[[24,6,\"https://pix.fr\"],[24,\"title\",\"pix.fr\"]],[[\"@target\"],[\"_blank\"]],[[\"default\"],[[[[1,\"content\"]],[]]]]]],[],false,[\"pix-navigation-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link', {
        name: 'content'
      });
      assert.ok((0, _emberTestingLibrary.within)(link).getByRole('img', {
        hidden: true
      }));
    });
    (0, _qunit.test)('it renders an EmberJS link', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationButton @route='hello'>content</PixNavigationButton>
      */
      {
        "id": "Djk8LFUF",
        "block": "[[[8,[39,0],null,[[\"@route\"],[\"hello\"]],[[\"default\"],[[[[1,\"content\"]],[]]]]]],[],false,[\"pix-navigation-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link', {
        name: 'content'
      });
      assert.strictEqual(link.getAttribute('href'), '/hello-world');
    });
    (0, _qunit.test)('it renders an EmberJS link  with model', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationButton @route='bye' @model='bye'>content</PixNavigationButton>
      */
      {
        "id": "TVZcxknn",
        "block": "[[[8,[39,0],null,[[\"@route\",\"@model\"],[\"bye\",\"bye\"]],[[\"default\"],[[[[1,\"content\"]],[]]]]]],[],false,[\"pix-navigation-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link', {
        name: 'content'
      });
      assert.strictEqual(link.getAttribute('href'), '/bye/bye');
    });
    (0, _qunit.test)('it renders an EmberJS link  with model and query params', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationButton
        @route='bye'
        @model='bye'
        @query={{hash page=3 per_page=20}}
      >content</PixNavigationButton>
      */
      {
        "id": "8ljue0PV",
        "block": "[[[8,[39,0],null,[[\"@route\",\"@model\",\"@query\"],[\"bye\",\"bye\",[28,[37,1],null,[[\"page\",\"per_page\"],[3,20]]]]],[[\"default\"],[[[[1,\"content\"]],[]]]]]],[],false,[\"pix-navigation-button\",\"hash\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link', {
        name: 'content'
      });
      assert.strictEqual(link.getAttribute('href'), '/bye/bye?page=3&per_page=20');
    });
    (0, _qunit.test)('it renders an icon', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationButton @route='hello' @icon='coversionPath'>content</PixNavigationButton>
      */
      {
        "id": "bJTKD8Fa",
        "block": "[[[8,[39,0],null,[[\"@route\",\"@icon\"],[\"hello\",\"coversionPath\"]],[[\"default\"],[[[[1,\"content\"]],[]]]]]],[],false,[\"pix-navigation-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link', {
        name: 'content'
      });
      assert.ok((0, _emberTestingLibrary.within)(link).getByRole('img', {
        hidden: true
      }));
    });
    (0, _qunit.test)('it renders an plainIcon icon when @route is current route ', async function (assert) {
      const routerService = this.owner.lookup('service:router');
      _sinon.default.stub(routerService, 'currentRouteName').value('hello');
      console.log(routerService.currentRouteName);
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationButton @route='hello' @icon='campaign'>content</PixNavigationButton>
      */
      {
        "id": "+oDvnXfj",
        "block": "[[[8,[39,0],null,[[\"@route\",\"@icon\"],[\"hello\",\"campaign\"]],[[\"default\"],[[[[1,\"content\"]],[]]]]]],[],false,[\"pix-navigation-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link', {
        name: 'content'
      });
      const image = (0, _emberTestingLibrary.within)(link).getByRole('img', {
        hidden: true
      });
      assert.ok(image.querySelector('use').getAttribute('href').endsWith('plain'));
    });
    (0, _qunit.module)('when navigation can be shrink', function () {
      (0, _qunit.test)(`should display the PixNavigationShrunkButton component`, async function (assert) {
        // given
        const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
        shrinkNavigationService.isShrunk = true;

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixNavigationButton @route='hello' @icon='power'>content</PixNavigationButton>
        */
        {
          "id": "WPmmf3o6",
          "block": "[[[8,[39,0],null,[[\"@route\",\"@icon\"],[\"hello\",\"power\"]],[[\"default\"],[[[[1,\"content\"]],[]]]]]],[],false,[\"pix-navigation-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-button-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByRole('link')).hasClass('navigation-shrunk-button');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-navigation-shrunk-button-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-navigation-shrunk-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders an EmberJS link', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationShrunkButton @route='hello'>Je suis dans un tooltip !</PixNavigationShrunkButton>
      */
      {
        "id": "0Je6tuCS",
        "block": "[[[8,[39,0],null,[[\"@route\"],[\"hello\"]],[[\"default\"],[[[[1,\"Je suis dans un tooltip !\"]],[]]]]]],[],false,[\"pix-navigation-shrunk-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-shrunk-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link');
      assert.strictEqual(link.getAttribute('href'), '/hello-world');
    });
    (0, _qunit.test)('it renders an icon', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNavigationShrunkButton @route='hello' @icon='power'>Je suis dans un tooltip !</PixNavigationShrunkButton>
      */
      {
        "id": "lCRO67M9",
        "block": "[[[8,[39,0],null,[[\"@route\",\"@icon\"],[\"hello\",\"power\"]],[[\"default\"],[[[[1,\"Je suis dans un tooltip !\"]],[]]]]]],[],false,[\"pix-navigation-shrunk-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-shrunk-button-test.js",
        "isStrictMode": false
      }));

      // then
      const link = screen.getByRole('link');
      assert.ok((0, _emberTestingLibrary.within)(link).getByRole('img', {
        hidden: true
      }));
    });
  });
});
define("dummy/tests/integration/components/pix-navigation-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-navigation', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const texts = {
      mainNavigation: 'Navigation Principale',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      shrinkNavigation: 'Réduire la largeur',
      expandNavigation: 'Revenir à la largeur initiale'
    };
    (0, _qunit.module)('Desktop', function () {
      (0, _qunit.test)('it renders the navigation in a sidebar', async function (assert) {
        //given
        this.set('texts', texts);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixNavigation @navigationAriaLabel='label' @texts={{this.texts}} />
        */
        {
          "id": "Fl4aE5GJ",
          "block": "[[[8,[39,0],null,[[\"@navigationAriaLabel\",\"@texts\"],[\"label\",[30,0,[\"texts\"]]]],null]],[],false,[\"pix-navigation\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
          "isStrictMode": false
        }));
        const aside = screen.getByRole('complementary');

        // then
        assert.ok((0, _emberTestingLibrary.within)(aside).getByRole('navigation', {
          name: texts.mainNavigation
        }));
      });
      (0, _qunit.test)('it renders content at the header of the aside', async function (assert) {
        //given
        this.set('texts', texts);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixNavigation @texts={{this.texts}}>
          <:brand>
            <svg role='img'><title>logo</title></svg>
          </:brand>
        </PixNavigation>
        */
        {
          "id": "QmsmoTG2",
          "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],[[\"brand\"],[[[[1,\"\\n    \"],[10,\"svg\"],[14,\"role\",\"img\"],[12],[10,\"title\"],[12],[1,\"logo\"],[13],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-navigation\",\":brand\",\"svg\",\"title\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
          "isStrictMode": false
        }));
        const aside = screen.getByRole('complementary');
        const header = (0, _emberTestingLibrary.within)(aside).getByRole('banner');
        // then
        assert.ok((0, _emberTestingLibrary.within)(header).getByRole('img', {
          name: 'logo'
        }));
      });
      (0, _qunit.test)('it renders content in the navigation', async function (assert) {
        //given
        this.set('texts', texts);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixNavigation @texts={{this.texts}}>
          <:navElements>
            <a href='toto'>mon lien</a>
          </:navElements>
        </PixNavigation>
        */
        {
          "id": "kElfOjQI",
          "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],[[\"navElements\"],[[[[1,\"\\n    \"],[10,3],[14,6,\"toto\"],[12],[1,\"mon lien\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-navigation\",\":navElements\",\"a\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
          "isStrictMode": false
        }));
        const navBar = screen.getByRole('navigation', {
          name: 'Navigation Principale'
        });

        // then
        assert.ok((0, _emberTestingLibrary.within)(navBar).getByRole('link', {
          name: 'mon lien'
        }));
      });
      (0, _qunit.test)('it renders content in the footer', async function (assert) {
        //given
        this.set('texts', texts);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixNavigation @texts={{this.texts}}>
          <:footer>
            <a href='toto'>mon lien</a>
          </:footer>
        </PixNavigation>
        */
        {
          "id": "hMkvmrWS",
          "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],[[\"footer\"],[[[[1,\"\\n    \"],[10,3],[14,6,\"toto\"],[12],[1,\"mon lien\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-navigation\",\":footer\",\"a\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
          "isStrictMode": false
        }));
        const navBar = screen.getByRole('complementary');
        const footer = (0, _emberTestingLibrary.within)(navBar).getByRole('contentinfo');

        // then
        assert.ok((0, _emberTestingLibrary.within)(footer).getByRole('link', {
          name: 'mon lien'
        }));
      });
      (0, _qunit.test)('it hides the burger menu', async function (assert) {
        //given
        this.set('texts', texts);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixNavigation @texts={{this.texts}} />
        */
        {
          "id": "5X/VyzjY",
          "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],null]],[],false,[\"pix-navigation\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
          "isStrictMode": false
        }));
        assert.notOk(screen.queryByRole('button', {
          name: 'Ouvrir le menu'
        }));
      });
      (0, _qunit.module)('when navigation can be shrink', function () {
        (0, _qunit.test)(`should display the button`, async function (assert) {
          // given
          const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
          shrinkNavigationService.canNavigationBeShrunk = true;
          this.set('texts', texts);

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixNavigation @texts={{this.texts}} />
          */
          {
            "id": "5X/VyzjY",
            "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],null]],[],false,[\"pix-navigation\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
            "isStrictMode": false
          }));

          // then
          assert.dom(screen.getByRole('button', {
            name: texts.shrinkNavigation
          })).exists();
        });
        (0, _qunit.module)(`when the shrink button is clicked`, function () {
          (0, _qunit.test)(`should display an other aria label`, async function (assert) {
            // given
            const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
            shrinkNavigationService.canNavigationBeShrunk = true;
            this.set('texts', texts);

            // when
            const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
            /*
              <PixNavigation @texts={{this.texts}} />
            */
            {
              "id": "5X/VyzjY",
              "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],null]],[],false,[\"pix-navigation\"]]",
              "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
              "isStrictMode": false
            }));
            await (0, _testHelpers.click)(screen.getByRole('button', {
              name: texts.shrinkNavigation
            }));

            // then
            assert.dom(screen.getByRole('button', {
              name: texts.expandkNavigation
            })).exists();
          });
          (0, _qunit.test)(`should hide footer elements except the navigation button`, async function (assert) {
            // given
            const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
            shrinkNavigationService.canNavigationBeShrunk = true;
            this.set('triggerAction', () => {});
            this.set('texts', texts);

            // when
            const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
            /*
              <PixNavigation @texts={{this.texts}}>
              <:footer>
                <p>
                  Martin Dupond
                </p>
                <PixNavigationButton @icon='power' @triggerAction={{this.triggerAction}}>Se déconnecter</PixNavigationButton>
              </:footer>
            </PixNavigation>
            */
            {
              "id": "+suX27YD",
              "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],[[\"footer\"],[[[[1,\"\\n    \"],[10,2],[12],[1,\"\\n      Martin Dupond\\n    \"],[13],[1,\"\\n    \"],[8,[39,3],null,[[\"@icon\",\"@triggerAction\"],[\"power\",[30,0,[\"triggerAction\"]]]],[[\"default\"],[[[[1,\"Se déconnecter\"]],[]]]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-navigation\",\":footer\",\"p\",\"pix-navigation-button\"]]",
              "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
              "isStrictMode": false
            }));
            await (0, _testHelpers.click)(screen.getByRole('button', {
              name: texts.shrinkNavigation
            }));

            // then
            assert.dom(screen.getByText('Martin Dupond')).isNotVisible();
            assert.dom(screen.getByText('Se déconnecter')).isVisible();
          });
        });
      });
    });
    (0, _qunit.module)('Mobile', function () {
      (0, _qunit.module)('when a button is disabled on menu', function () {
        (0, _qunit.test)('it should not close the menu when clicking on this button', async function (assert) {
          // given
          const disabledButtonLabel = 'bouton désactivé';
          this.set('label', disabledButtonLabel);
          this.set('texts', texts);
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixNavigation @texts={{this.texts}}>
            <:navElements>
              <PixButton
                aria-disabled='true'
                @iconBefore='cancel'
                @isDisabled={{true}}
                @variant='primary'
              ><span>{{this.label}}</span></PixButton>
            </:navElements>
          </PixNavigation>
          */
          {
            "id": "6iuVb+Bu",
            "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],[[\"navElements\"],[[[[1,\"\\n    \"],[8,[39,2],[[24,\"aria-disabled\",\"true\"]],[[\"@iconBefore\",\"@isDisabled\",\"@variant\"],[\"cancel\",true,\"primary\"]],[[\"default\"],[[[[10,1],[12],[1,[30,0,[\"label\"]]],[13]],[]]]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-navigation\",\":navElements\",\"pix-button\",\"span\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
            "isStrictMode": false
          }));
          const openMenuButton = screen.getByText(texts.openMenu).closest('button');
          await (0, _testHelpers.click)(openMenuButton);
          const spanElement = screen.getByText(this.label);
          await (0, _testHelpers.click)(spanElement);

          // then
          assert.ok(screen.queryByText(texts.closeMenu));
        });
      });
      (0, _qunit.test)('it should close the menu on route change', async function (assert) {
        // given
        this.set('texts', texts);
        const router = this.owner.lookup('service:router');
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixNavigation @texts={{this.texts}} />
        */
        {
          "id": "5X/VyzjY",
          "block": "[[[8,[39,0],null,[[\"@texts\"],[[30,0,[\"texts\"]]]],null]],[],false,[\"pix-navigation\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-navigation-test.js",
          "isStrictMode": false
        }));

        // when
        const openMenuButton = screen.getByText(texts.openMenu).closest('button');
        await (0, _testHelpers.click)(openMenuButton);
        router.trigger('routeDidChange');
        await (0, _testHelpers.settled)();

        // then
        assert.notOk(screen.queryByText(texts.closeMenu));
        assert.ok(screen.getByText(texts.openMenu).closest('button'));
      });
    });
  });
});
define("dummy/tests/integration/components/pix-notification-alert-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pixNotificationAlert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given content', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNotificationAlert>Message text</PixNotificationAlert>
      */
      {
        "id": "4l5FcEYr",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"Message text\"]],[]]]]]],[],false,[\"pix-notification-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-notification-alert-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Message text');
    });
    (0, _qunit.test)('it renders with the given type', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNotificationAlert @type='info' />
      */
      {
        "id": "FTJxal3g",
        "block": "[[[8,[39,0],null,[[\"@type\"],[\"info\"]],null]],[],false,[\"pix-notification-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-notification-alert-test.js",
        "isStrictMode": false
      }));

      // then
      const pixNotificationAlertElement = this.element.querySelector('.pix-notification-alert');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(pixNotificationAlertElement.classList.toString(), 'pix-notification-alert pix-notification-alert--info');
    });
    (0, _qunit.test)('it renders with attributes override', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNotificationAlert aria-label='world' />
      */
      {
        "id": "NC9XGozr",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"world\"]],null,null]],[],false,[\"pix-notification-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-notification-alert-test.js",
        "isStrictMode": false
      }));

      // then
      const pixNotificationAlertElement = this.element.querySelector('.pix-notification-alert');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(pixNotificationAlertElement.getAttribute('aria-label'), 'world');
    });
    (0, _qunit.test)('it renders with an icon', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNotificationAlert @withIcon='true' />
      */
      {
        "id": "pIdv0Ueu",
        "block": "[[[8,[39,0],null,[[\"@withIcon\"],[\"true\"]],null]],[],false,[\"pix-notification-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-notification-alert-test.js",
        "isStrictMode": false
      }));

      // then
      const icon = screen.getByRole('img', {
        hidden: true
      });
      assert.true(icon.innerHTML.includes('info'));
    });
    (0, _qunit.test)('it renders with a warning icon for warning type', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNotificationAlert @type='warning' @withIcon='true' />
      */
      {
        "id": "Y2CzFuf/",
        "block": "[[[8,[39,0],null,[[\"@type\",\"@withIcon\"],[\"warning\",\"true\"]],null]],[],false,[\"pix-notification-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-notification-alert-test.js",
        "isStrictMode": false
      }));

      // then
      const icon = screen.getByRole('img', {
        hidden: true
      });
      assert.true(icon.innerHTML.includes('#warning'));
    });
    (0, _qunit.test)('it renders with a success icon for success type', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNotificationAlert @type='success' @withIcon='true' />
      */
      {
        "id": "KY5XHSyi",
        "block": "[[[8,[39,0],null,[[\"@type\",\"@withIcon\"],[\"success\",\"true\"]],null]],[],false,[\"pix-notification-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-notification-alert-test.js",
        "isStrictMode": false
      }));

      // then
      const icon = screen.getByRole('img', {
        hidden: true
      });
      assert.true(icon.innerHTML.includes('#checkCircle'));
    });
    (0, _qunit.test)('it renders with a alert icon for error type', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixNotificationAlert @type='error' @withIcon='true' />
      */
      {
        "id": "cazc/zeh",
        "block": "[[[8,[39,0],null,[[\"@type\",\"@withIcon\"],[\"error\",\"true\"]],null]],[],false,[\"pix-notification-alert\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-notification-alert-test.js",
        "isStrictMode": false
      }));

      // then
      const icon = screen.getByRole('img', {
        hidden: true
      });
      assert.true(icon.innerHTML.includes('#error'));
    });
    ['communication', 'communication-certif', 'communication-orga'].forEach(type => {
      (0, _qunit.test)(`it renders with a "campaign" icon for ${type} type`, async function (assert) {
        // given
        this.set('type', type);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixNotificationAlert @type={{this.type}} @withIcon='true' />
        */
        {
          "id": "+x8Zf5Qj",
          "block": "[[[8,[39,0],null,[[\"@type\",\"@withIcon\"],[[30,0,[\"type\"]],\"true\"]],null]],[],false,[\"pix-notification-alert\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-notification-alert-test.js",
          "isStrictMode": false
        }));

        // then
        const icon = screen.getByRole('img', {
          hidden: true
        });
        const container = screen.getByRole('paragraph');
        assert.true(icon.innerHTML.includes('#campaign'));
        assert.true(container.classList.contains(`pix-notification-alert--${type}`));
      });
    });
  });
});
define("dummy/tests/integration/components/pix-overlay-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "dummy/tests/helpers/wait-for", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _waitFor, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"dummy/tests/helpers/wait-for",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | Overlay', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('when isVisible is equal true', function () {
      (0, _qunit.test)('it shows the content to the user', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixOverlay @isVisible={{true}}>
          Main content
        </PixOverlay>
        */
        {
          "id": "mFX1jxBu",
          "block": "[[[8,[39,0],null,[[\"@isVisible\"],[true]],[[\"default\"],[[[[1,\"\\n  Main content\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(screen.getByRole('dialog'));
        assert.contains('Main content');
      });
      (0, _qunit.test)('it keeps the focus inside the overlay when trying to reach the content behind it', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <button type='button'>Behind the overlay</button>
        <PixOverlay @isVisible={{true}}>
          <button type='button'>Inside the overlay</button>
        </PixOverlay>
        */
        {
          "id": "uRmaL5Cm",
          "block": "[[[10,\"button\"],[14,4,\"button\"],[12],[1,\"Behind the overlay\"],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@isVisible\"],[true]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"button\"],[14,4,\"button\"],[12],[1,\"Inside the overlay\"],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"button\",\"pix-overlay\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
          "isStrictMode": false
        }));

        // when
        screen.getByRole('button', {
          name: 'Behind the overlay'
        }).focus();

        // then
        assert.true(screen.getByRole('dialog').contains(document.activeElement));
      });
      (0, _qunit.module)('when overlay is clicked', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          this.onCloseCallback = _sinon.default.stub();

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
            content
          </PixOverlay>
          */
          {
            "id": "FcH2ItZH",
            "block": "[[[8,[39,0],null,[[\"@isVisible\",\"@onClose\"],[true,[30,0,[\"onCloseCallback\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)(screen.getByRole('dialog'), 'click');

          // then
          assert.ok(this.onCloseCallback.calledOnce);
        });
      });
      (0, _qunit.module)('when the cancel event is triggered (escape key)', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          this.onCloseCallback = _sinon.default.stub();

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
            content
          </PixOverlay>
          */
          {
            "id": "FcH2ItZH",
            "block": "[[[8,[39,0],null,[[\"@isVisible\",\"@onClose\"],[true,[30,0,[\"onCloseCallback\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)(screen.getByRole('dialog'), 'cancel');

          // then
          assert.ok(this.onCloseCallback.calledOnce);
        });
      });
      (0, _qunit.module)('when the user asks to close an overlay without an onClose function', function () {
        (0, _qunit.test)('it should not keep the user trapped inside the overlay', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixOverlay @isVisible={{true}}>
            Main content
          </PixOverlay>
          */
          {
            "id": "mFX1jxBu",
            "block": "[[[8,[39,0],null,[[\"@isVisible\"],[true]],[[\"default\"],[[[[1,\"\\n  Main content\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
            "isStrictMode": false
          }));

          // when
          screen.getByRole('dialog').requestClose();
          await (0, _waitFor.waitForDialogClose)();

          // then
          assert.notOk(screen.queryByRole('dialog'));
        });
      });
      (0, _qunit.module)('when the user dismisses the file picker of an upload field', function () {
        (0, _qunit.test)('it should not call onClose function passed in argument', async function (assert) {
          // given
          this.onCloseCallback = _sinon.default.stub();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
            <input type='file' aria-label='Upload a file' />
          </PixOverlay>
          */
          {
            "id": "G1t4ojd3",
            "block": "[[[8,[39,0],null,[[\"@isVisible\",\"@onClose\"],[true,[30,0,[\"onCloseCallback\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"input\"],[14,\"aria-label\",\"Upload a file\"],[14,4,\"file\"],[12],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"pix-overlay\",\"input\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
            "isStrictMode": false
          }));

          // when
          await (0, _testHelpers.triggerEvent)(screen.getByLabelText('Upload a file'), 'cancel');

          // then
          assert.ok(this.onCloseCallback.notCalled);
        });
      });
      (0, _qunit.module)('when the browser closes the overlay on its own', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          this.onCloseCallback = _sinon.default.stub();

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
            <form method='dialog'><button type='submit'>Submit</button></form>
          </PixOverlay>
          */
          {
            "id": "XLMrhblV",
            "block": "[[[8,[39,0],null,[[\"@isVisible\",\"@onClose\"],[true,[30,0,[\"onCloseCallback\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"form\"],[14,\"method\",\"dialog\"],[12],[10,\"button\"],[14,4,\"submit\"],[12],[1,\"Submit\"],[13],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"pix-overlay\",\"form\",\"button\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
            "isStrictMode": false
          }));
          await (0, _testHelpers.click)(screen.getByRole('button', {
            name: 'Submit'
          }));
          await (0, _testHelpers.waitUntil)(() => this.onCloseCallback.called);

          // then
          assert.ok(this.onCloseCallback.calledOnce);
        });
      });
    });
    (0, _qunit.module)('when isVisible is false', function () {
      (0, _qunit.test)('it does not show the content to the user', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixOverlay @isVisible={{false}}>
          Main content
        </PixOverlay>
        */
        {
          "id": "RKesqGVh",
          "block": "[[[8,[39,0],null,[[\"@isVisible\"],[false]],[[\"default\"],[[[[1,\"\\n  Main content\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
          "isStrictMode": false
        }));

        // then
        assert.notOk(screen.queryByRole('dialog'));
      });
    });
    (0, _qunit.module)('when isVisible becomes false', function () {
      (0, _qunit.test)('it stops showing the content to the user', async function (assert) {
        // given
        this.isVisible = true;
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixOverlay @isVisible={{this.isVisible}}>
          Main content
        </PixOverlay>
        */
        {
          "id": "RJxMYnHn",
          "block": "[[[8,[39,0],null,[[\"@isVisible\"],[[30,0,[\"isVisible\"]]]],[[\"default\"],[[[[1,\"\\n  Main content\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
          "isStrictMode": false
        }));

        // when
        this.set('isVisible', false);
        await (0, _waitFor.waitForDialogClose)();

        // then
        assert.notOk(screen.queryByRole('dialog'));
      });
      (0, _qunit.test)('it should not call onClose function passed in argument', async function (assert) {
        // given
        this.isVisible = true;
        this.onCloseCallback = _sinon.default.stub();
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixOverlay @isVisible={{this.isVisible}} @onClose={{this.onCloseCallback}}>
          Main content
        </PixOverlay>
        */
        {
          "id": "8TqzCeWT",
          "block": "[[[8,[39,0],null,[[\"@isVisible\",\"@onClose\"],[[30,0,[\"isVisible\"]],[30,0,[\"onCloseCallback\"]]]],[[\"default\"],[[[[1,\"\\n  Main content\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
          "isStrictMode": false
        }));

        // when
        this.set('isVisible', false);
        await (0, _waitFor.waitForDialogClose)();

        // then
        assert.ok(this.onCloseCallback.notCalled);
      });
    });
    (0, _qunit.module)('when several overlays are stacked', function () {
      (0, _qunit.test)('it should keep the page behind locked while one of them is still open', async function (assert) {
        // given
        this.isFirstVisible = true;
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixOverlay @isVisible={{this.isFirstVisible}}>
          First
        </PixOverlay>
        <PixOverlay @isVisible={{true}}>
          Second
        </PixOverlay>
        */
        {
          "id": "cyKdbb79",
          "block": "[[[8,[39,0],null,[[\"@isVisible\"],[[30,0,[\"isFirstVisible\"]]]],[[\"default\"],[[[[1,\"\\n  First\\n\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@isVisible\"],[true]],[[\"default\"],[[[[1,\"\\n  Second\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
          "isStrictMode": false
        }));

        // when
        this.set('isFirstVisible', false);
        await (0, _testHelpers.settled)();

        // then
        assert.strictEqual(getComputedStyle(document.body).overflowY, 'hidden');
      });
      (0, _qunit.test)('it should let the user scroll the page again once all of them are closed', async function (assert) {
        // given
        this.areVisible = true;
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixOverlay @isVisible={{this.areVisible}}>
          First
        </PixOverlay>
        <PixOverlay @isVisible={{this.areVisible}}>
          Second
        </PixOverlay>
        */
        {
          "id": "susukVXn",
          "block": "[[[8,[39,0],null,[[\"@isVisible\"],[[30,0,[\"areVisible\"]]]],[[\"default\"],[[[[1,\"\\n  First\\n\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@isVisible\"],[[30,0,[\"areVisible\"]]]],[[\"default\"],[[[[1,\"\\n  Second\\n\"]],[]]]]]],[],false,[\"pix-overlay\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-overlay-test.js",
          "isStrictMode": false
        }));

        // when
        this.set('areVisible', false);
        await (0, _testHelpers.settled)();

        // then
        assert.notStrictEqual(getComputedStyle(document.body).overflowY, 'hidden');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-pagination-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pagination', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('PixPagination controls', function (hooks) {
      let onChangeStub, router;
      hooks.beforeEach(function () {
        onChangeStub = _sinon.default.stub();
        router = this.owner.lookup('service:router');
        router.replaceWith = _sinon.default.stub();
      });
      (0, _qunit.test)('should call onChange on pageSize change', async function (assert) {
        // given
        const paginationData = {
          page: 1,
          pageSize: 10,
          rowCount: 12,
          pageCount: 2
        };
        const texts = {
          pageSize: "Nombre d'élément à afficher par page"
        };
        this.set('pagination', paginationData);
        this.set('onChange', onChangeStub);
        this.set('texts', texts);
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixPagination @pagination={{this.pagination}} @onChange={{this.onChange}} @texts={{this.texts}} />
        */
        {
          "id": "A2jKd24M",
          "block": "[[[8,[39,0],null,[[\"@pagination\",\"@onChange\",\"@texts\"],[[30,0,[\"pagination\"]],[30,0,[\"onChange\"]],[30,0,[\"texts\"]]]],null]],[],false,[\"pix-pagination\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-pagination-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)(screen.getByLabelText(texts.pageSize));
        const optionLine = await screen.findByRole('option', {
          name: '50'
        });
        await (0, _testHelpers.click)(optionLine);

        // then
        assert.ok(router.replaceWith.calledWithExactly({
          queryParams: {
            pageSize: 50,
            pageNumber: 1
          }
        }));
        assert.ok(onChangeStub.called);
      });
      (0, _qunit.test)('should call onChange on nextPage action', async function (assert) {
        // given
        const paginationData = {
          page: 1,
          pageSize: 10,
          rowCount: 12,
          pageCount: 2
        };
        const texts = {
          nextPage: 'Page Suivante'
        };
        this.set('texts', texts);
        this.set('pagination', paginationData);
        this.set('onChange', onChangeStub);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixPagination @pagination={{this.pagination}} @onChange={{this.onChange}} @texts={{this.texts}} />
        */
        {
          "id": "A2jKd24M",
          "block": "[[[8,[39,0],null,[[\"@pagination\",\"@onChange\",\"@texts\"],[[30,0,[\"pagination\"]],[30,0,[\"onChange\"]],[30,0,[\"texts\"]]]],null]],[],false,[\"pix-pagination\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-pagination-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: texts.nextPage,
          exact: false
        }));
        // then
        assert.ok(router.replaceWith.calledWithExactly({
          queryParams: {
            pageNumber: 2
          }
        }));
        assert.ok(onChangeStub.called);
      });
      (0, _qunit.test)('should call onChange on previousPage action', async function (assert) {
        // given
        const paginationData = {
          page: 2,
          pageSize: 10,
          rowCount: 12,
          pageCount: 2
        };
        const texts = {
          previousPage: 'Page Précédente'
        };
        this.set('texts', texts);
        this.set('pagination', paginationData);
        this.set('onChange', onChangeStub);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixPagination @pagination={{this.pagination}} @onChange={{this.onChange}} @texts={{this.texts}} />
        */
        {
          "id": "A2jKd24M",
          "block": "[[[8,[39,0],null,[[\"@pagination\",\"@onChange\",\"@texts\"],[[30,0,[\"pagination\"]],[30,0,[\"onChange\"]],[30,0,[\"texts\"]]]],null]],[],false,[\"pix-pagination\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-pagination-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: texts.previousPage,
          exact: false
        }));
        // then
        assert.ok(router.replaceWith.calledWithExactly({
          queryParams: {
            pageNumber: 1
          }
        }));
        assert.ok(onChangeStub.called);
      });
    });
    (0, _qunit.test)('When pagination params have options to display several pages', async function (assert) {
      // given
      const paginationData = {
        page: 2,
        pageSize: 10,
        rowCount: 12,
        pageCount: 2
      };
      const texts = {
        title: 'Voir',
        pageElementCount: '11-12 sur 12 éléments',
        pageNumber: 'Page 2 / 2'
      };
      const onChangeStub = _sinon.default.stub();
      this.set('texts', texts);
      this.set('pagination', paginationData);
      this.set('onChange', onChangeStub);
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixPagination @pagination={{this.pagination}} @texts={{this.texts}} @onChange={{this.onChange}} />
      */
      {
        "id": "yn/sfBER",
        "block": "[[[8,[39,0],null,[[\"@pagination\",\"@texts\",\"@onChange\"],[[30,0,[\"pagination\"]],[30,0,[\"texts\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"pix-pagination\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-pagination-test.js",
        "isStrictMode": false
      }));

      //then
      assert.notOk(screen.queryByRole('text', {
        name: texts.title
      }));
      assert.ok(screen.getByText(texts.pageElementCount));
      assert.ok(screen.getByText(texts.pageNumber));
    });
    (0, _qunit.test)('When params isCondensed is true', async function (assert) {
      // given
      const paginationData = {
        page: 2,
        pageSize: 10,
        rowCount: 12,
        pageCount: 2
      };
      this.set('pagination', paginationData);
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixPagination @pagination={{this.pagination}} @isCondensed='true' />
      */
      {
        "id": "cLR0E3tz",
        "block": "[[[8,[39,0],null,[[\"@pagination\",\"@isCondensed\"],[[30,0,[\"pagination\"]],\"true\"]],null]],[],false,[\"pix-pagination\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-pagination-test.js",
        "isStrictMode": false
      }));
      const PixPaginationCondensedElement = this.element.querySelector('.pix-pagination-condensed');
      //then
      assert.ok(PixPaginationCondensedElement);
    });
  });
});
define("dummy/tests/integration/components/pix-progress-bar-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixProgressBar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const PROGRESS_BAR_SELECTOR = '.pix-progress-bar';
    (0, _qunit.module)('Attributes @value', function () {
      (0, _qunit.test)('it renders the value with percentage', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @percentageValue='50%' />
        */
        {
          "id": "gKT+UngF",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@percentageValue\"],[0.5,\"50%\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        assert.strictEqual(screen.getByRole('presentation').innerText, '50%');
      });
    });
    (0, _qunit.module)('Attributes @color', function () {
      (0, _qunit.test)('it renders the progress bar by default with primary class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} />
        */
        {
          "id": "cPxJDnRy",
          "block": "[[[8,[39,0],null,[[\"@value\"],[0.5]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--content-primary'));
      });
      (0, _qunit.test)('it renders the progress bar with primary class when color not exists', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @color='vert-lychen' />
        */
        {
          "id": "sBjF3ruA",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@color\"],[0.5,\"vert-lychen\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--content-primary'));
      });
      (0, _qunit.test)('it renders the progress bar with tertiary class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @color='tertiary' />
        */
        {
          "id": "LWUWeQAd",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@color\"],[0.5,\"tertiary\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--content-tertiary'));
      });
      (0, _qunit.test)('it renders the progress bar with success class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @color='success' />
        */
        {
          "id": "niP3JyL+",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@color\"],[0.5,\"success\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--content-success'));
      });
      (0, _qunit.test)('it renders the progress bar with primary class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @color='primary' />
        */
        {
          "id": "oRHyuRAu",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@color\"],[0.5,\"primary\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--content-primary'));
      });
    });
    (0, _qunit.module)('Attributes @themeMode', function () {
      (0, _qunit.test)('it renders the progress bar by default with light mode', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} />
        */
        {
          "id": "cPxJDnRy",
          "block": "[[[8,[39,0],null,[[\"@value\"],[0.5]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--theme-light'));
      });
      (0, _qunit.test)('it renders the progress bar with light mode when value not exists', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @themeMode='darken-light' />
        */
        {
          "id": "eDkVYkyt",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@themeMode\"],[0.5,\"darken-light\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--theme-light'));
      });
      (0, _qunit.test)('it renders the progress bar with light mode', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @themeMode='light' />
        */
        {
          "id": "SroQAjGM",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@themeMode\"],[0.5,\"light\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--theme-light'));
      });
      (0, _qunit.test)('it renders the progress bar with dark mode', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @themeMode='dark' />
        */
        {
          "id": "rLGLYm1r",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@themeMode\"],[0.5,\"dark\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
        assert.true(componentElement.classList.contains('pix-progress-bar--theme-dark'));
      });
    });
    (0, _qunit.module)('Attributes @subtitle', function () {
      (0, _qunit.test)('it does not render the progress bar sub-title', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} />
        */
        {
          "id": "cPxJDnRy",
          "block": "[[[8,[39,0],null,[[\"@value\"],[0.5]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector('.pix-progress-bar__sub-title');
        assert.false(!!componentElement);
      });
      (0, _qunit.test)('it renders the progress bar sub-title', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @subtitle='toto' />
        */
        {
          "id": "BTdVTrIA",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@subtitle\"],[0.5,\"toto\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector('.pix-progress-bar__sub-title');
        assert.strictEqual(componentElement.textContent.trim(), 'toto');
      });
    });
    (0, _qunit.module)('Attributes @hidePercentage', function () {
      (0, _qunit.test)('it renders the progress bar percentage by default', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @percentageValue='50%' />
        */
        {
          "id": "gKT+UngF",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@percentageValue\"],[0.5,\"50%\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByRole('presentation', {
          hidden: true
        })).hasText('50%');
      });
      (0, _qunit.test)('it renders the progress bar percentage when attribute is false', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @hidePercentage={{false}} @percentageValue='50%' />
        */
        {
          "id": "QX7jssWN",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@hidePercentage\",\"@percentageValue\"],[0.5,false,\"50%\"]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then

        assert.dom(screen.getByRole('presentation', {
          hidden: true
        })).hasText('50%');
      });
      (0, _qunit.test)('it does not render the progress bar percentage when attribute is true', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressBar @value={{0.5}} @hidePercentage={{true}} />
        */
        {
          "id": "nae9ckDq",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@hidePercentage\"],[0.5,true]],null]],[],false,[\"pix-progress-bar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-bar-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom('.pix-progress-bar__text').doesNotExist();
      });
    });
  });
});
define("dummy/tests/integration/components/pix-radio-button-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-radio-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('it should be possible to check the radiobutton', function () {
      (0, _qunit.test)('when label is displayed', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton><:label>Abricot</:label></PixRadioButton>
        */
        {
          "id": "CXtW1q2P",
          "block": "[[[8,[39,0],null,null,[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByName)('Abricot');

        // then
        assert.true(screen.getByLabelText('Abricot').checked);
      });
      (0, _qunit.test)('when label is hidden', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton @screenReaderOnly={{true}}><:label>Abricot</:label></PixRadioButton>
        */
        {
          "id": "9g3RBm0t",
          "block": "[[[8,[39,0],null,[[\"@screenReaderOnly\"],[true]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByName)('Abricot');

        // then
        assert.true(screen.getByLabelText('Abricot').checked);
      });
    });
    (0, _qunit.test)('it should be possible to add more params to PixRadioButton', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixRadioButton disabled checked><:label>Abricot</:label></PixRadioButton>
      */
      {
        "id": "hLyEzAU8",
        "block": "[[[8,[39,0],[[24,\"disabled\",\"\"],[24,\"checked\",\"\"]],null,[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
        "isStrictMode": false
      }));

      // when & then
      assert.true(screen.getByLabelText('Abricot').checked);
    });
    (0, _qunit.module)('@isDisabled', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)(`it should not be possible to interact when @isDisabled={{true}}`, async function (assert) {
        // given
        this.set('isDisabled', true);
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>
        */
        {
          "id": "tpvP08hk",
          "block": "[[[8,[39,0],null,[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
          "isStrictMode": false
        }));
        const radiobutton = screen.getByRole('radio', {
          name: 'Abricot',
          disabled: true
        });
        assert.false(warnStub.called);
        assert.false(radiobutton.checked, 'Radiobutton is not checked by default');
        assert.strictEqual(radiobutton.getAttribute('aria-disabled'), 'true', '`aria-disabled` should be forced to "true" else VoiceOver don\'t consider the input as "dimmed"');

        // when
        await (0, _emberTestingLibrary.clickByName)('Abricot'); // should not throw!

        // then
        assert.false(radiobutton.checked, "Radiobutton has changed state, but shouldn't have");
      });
      (0, _qunit.test)(`it should read success state info if given`, async function (assert) {
        // given
        this.set('isDisabled', true);
        this.texts = {
          stateSuccess: 'Sélection correcte'
        };
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton
          checked
          @isDisabled={{this.isDisabled}}
          @state='success'
          @texts={{this.texts}}
        ><:label>Recevoir la newsletter</:label></PixRadioButton>
        */
        {
          "id": "yTzVEouq",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\",\"@texts\"],[[30,0,[\"isDisabled\"]],\"success\",[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
          "isStrictMode": false
        })); // then
        assert.dom(screen.getByRole('radio', {
          description: 'Sélection correcte',
          hidden: true
        })).exists();
      });
      (0, _qunit.test)(`it should read error state info if given`, async function (assert) {
        // given
        this.set('isDisabled', true);
        this.texts = {
          stateError: 'Sélection incorrecte'
        };
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton checked @isDisabled={{this.isDisabled}} @state='error' @texts={{this.texts}}><:label
          >Recevoir la newsletter</:label></PixRadioButton>
        */
        {
          "id": "8xCa/voU",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\",\"@texts\"],[[30,0,[\"isDisabled\"]],\"error\",[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByRole('radio', {
          description: 'Sélection incorrecte',
          hidden: true
        })).exists();
      });
      ['true', 'false', 'null', 'undefined'].forEach(function (testCase) {
        (0, _qunit.test)(`it should not be possible to interact when @isDisabled="${testCase}"`, async function (assert) {
          // given
          this.set('isDisabled', testCase);
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>
          */
          {
            "id": "tpvP08hk",
            "block": "[[[8,[39,0],null,[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
            "isStrictMode": false
          }));
          assert.ok(warnStub.calledWithExactly('WARNING: PixRadioButton: @isDisabled attribute should be a boolean.'));
          const radiobutton = screen.getByRole('radio', {
            name: 'Abricot',
            disabled: true
          });
          assert.false(radiobutton.checked, 'Radiobutton is not checked by default');
          assert.strictEqual(radiobutton.getAttribute('aria-disabled'), 'true', '`aria-disabled` should be forced to "true" else VoiceOver don\'t consider the input as "dimmed"');

          // when
          await (0, _emberTestingLibrary.clickByName)('Abricot'); // should not throw!

          // then
          assert.false(radiobutton.checked, "Radiobutton has changed state, but shouldn't have");
        });
      });
      [false, null, undefined].forEach(function (testCase) {
        (0, _qunit.test)(`it should be possible to interact when @isDisabled={{${testCase}}}`, async function (assert) {
          // given
          this.set('isDisabled', testCase);
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>
          */
          {
            "id": "tpvP08hk",
            "block": "[[[8,[39,0],null,[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
            "isStrictMode": false
          }));
          assert.false(warnStub.called);
          const radiobutton = screen.getByRole('radio', {
            name: 'Abricot',
            disabled: true
          });
          assert.false(radiobutton.checked, 'Radiobutton is not checked by default');
          assert.strictEqual(radiobutton.getAttribute('aria-disabled'), null, '`aria-disabled` should not be set');

          // when
          await (0, _emberTestingLibrary.clickByName)('Abricot');

          // then
          assert.true(radiobutton.checked, 'Radiobutton should have changed state');
        });
      });
    });
    (0, _qunit.module)('@variant modulix', function () {
      (0, _qunit.test)(`it should be functional`, async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton @variant='modulix' @state='neutral'><:label>Abricot</:label></PixRadioButton>
        */
        {
          "id": "poopH7W0",
          "block": "[[[8,[39,0],null,[[\"@variant\",\"@state\"],[\"modulix\",\"neutral\"]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
          "isStrictMode": false
        }));
        const radiobutton = screen.getByRole('radio', {
          name: 'Abricot'
        });

        // when
        await (0, _testHelpers.click)(radiobutton);

        // then
        assert.true(radiobutton.checked);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-search-input-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixSearchInput', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    let clock;
    hooks.beforeEach(function () {
      clock = _sinon.default.useFakeTimers({
        toFake: ['setTimeout', 'clearTimeout']
      });
    });
    (0, _qunit.test)('it renders the default PixSearchInput with given id and label', async function (assert) {
      // given
      this.set('triggerFiltering', _sinon.default.stub());

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSearchInput
        @id='pix-123'
        @debounceTimeInMs='1000'
        @triggerFiltering={{this.triggerFiltering}}
      ><:label>Mon super input qui filtre</:label></PixSearchInput>
      */
      {
        "id": "jkpqw+su",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@debounceTimeInMs\",\"@triggerFiltering\"],[\"pix-123\",\"1000\",[30,0,[\"triggerFiltering\"]]]],[[\"label\"],[[[[1,\"Mon super input qui filtre\"]],[]]]]]],[],false,[\"pix-search-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-search-input-test.js",
        "isStrictMode": false
      }));

      // then
      const inputFound = screen.getByLabelText('Mon super input qui filtre');
      assert.dom(inputFound).exists();
      assert.strictEqual(inputFound.id, 'pix-123');
    });
    (0, _qunit.test)('it triggers the filter when a text is searched', async function (assert) {
      // given
      const triggerFiltering = _sinon.default.stub().resolves();
      this.set('triggerFiltering', triggerFiltering);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSearchInput
        @id='pix-123'
        @debounceTimeInMs='0'
        @triggerFiltering={{this.triggerFiltering}}
      ><:label>Champ de recherche de fruits</:label></PixSearchInput>
      */
      {
        "id": "S+UafpgK",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@debounceTimeInMs\",\"@triggerFiltering\"],[\"pix-123\",\"0\",[30,0,[\"triggerFiltering\"]]]],[[\"label\"],[[[[1,\"Champ de recherche de fruits\"]],[]]]]]],[],false,[\"pix-search-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-search-input-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.fillByLabel)('Champ de recherche de fruits', 'Mangue');
      clock.tick(0);

      // then
      assert.ok(triggerFiltering.calledWith('pix-123', 'Mangue'));
    });
    (0, _qunit.test)('it does not call triggerFiltering until debounce time is elapsed', async function (assert) {
      // given
      const triggerFiltering = _sinon.default.stub().resolves();
      this.set('triggerFiltering', triggerFiltering);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSearchInput
        @id='pix-123'
        @debounceTimeInMs='200'
        @triggerFiltering={{this.triggerFiltering}}
      ><:label>Champ de recherche de fruits</:label></PixSearchInput>
      */
      {
        "id": "GHPBEia2",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@debounceTimeInMs\",\"@triggerFiltering\"],[\"pix-123\",\"200\",[30,0,[\"triggerFiltering\"]]]],[[\"label\"],[[[[1,\"Champ de recherche de fruits\"]],[]]]]]],[],false,[\"pix-search-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-search-input-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.fillByLabel)('Champ de recherche de fruits', 'Man');
      clock.tick(150);
      // then
      assert.ok(triggerFiltering.notCalled);

      // when
      await (0, _emberTestingLibrary.fillByLabel)('Champ de recherche de fruits', 'gue');
      clock.tick(150);
      // then
      assert.ok(triggerFiltering.notCalled);

      // when
      clock.tick(50);
      // then
      assert.ok(triggerFiltering.calledOnce);
    });
    (0, _qunit.test)("doesn't update value when input value is udpated", async function (assert) {
      // given
      this.set('triggerFiltering', _sinon.default.stub());
      this.set('dynamicValue', 'init');
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSearchInput
        @id='pix-123'
        @debounceTimeInMs='0'
        @triggerFiltering={{this.triggerFiltering}}
        @value={{this.dynamicValue}}
      ><:label>Champ de recherche de fruits</:label></PixSearchInput>
      */
      {
        "id": "6RskwIeq",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@debounceTimeInMs\",\"@triggerFiltering\",\"@value\"],[\"pix-123\",\"0\",[30,0,[\"triggerFiltering\"]],[30,0,[\"dynamicValue\"]]]],[[\"label\"],[[[[1,\"Champ de recherche de fruits\"]],[]]]]]],[],false,[\"pix-search-input\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-search-input-test.js",
        "isStrictMode": false
      }));

      // when
      await (0, _emberTestingLibrary.fillByLabel)('Champ de recherche de fruits', 'Mangue');
      this.set('dynamicValue', 'dynamicValue');

      // then
      const inputFound = screen.getByLabelText('Champ de recherche de fruits');
      assert.dom(inputFound).exists();
      assert.strictEqual(inputFound.value, 'Mangue');
    });
  });
});
define("dummy/tests/integration/components/pix-segmented-control-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "@testing-library/user-event", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _userEvent, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"@testing-library/user-event",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixSegmentedControl', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    this.label = 'Mon bouton toggle';
    this.viewAText = 'Oui';
    this.viewBText = 'Non';
    this.onChange = _sinon.default.spy();
    (0, _qunit.test)('it renders PixSegmentedControl', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSegmentedControl>
        <:label>{{this.label}}</:label>
        <:viewA>{{this.viewAText}}</:viewA>
        <:viewB>{{this.viewBText}}</:viewB>
      </PixSegmentedControl>
      */
      {
        "id": "tTgKqSUK",
        "block": "[[[8,[39,0],null,null,[[\"label\",\"viewA\",\"viewB\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"viewAText\"]]]],[]],[[[1,[30,0,[\"viewBText\"]]]],[]]]]]],[],false,[\"pix-segmented-control\",\":label\",\":viewA\",\":viewB\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-segmented-control-test.js",
        "isStrictMode": false
      }));
      assert.dom(screen.getByRole('radiogroup', {
        name: this.label
      })).exists();
      assert.dom(screen.getByRole('radio', {
        name: this.viewAText
      })).exists();
      assert.dom(screen.getByRole('radio', {
        name: this.viewBText
      })).exists();
    });
    (0, _qunit.test)('it calls onChange when change', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSegmentedControl @onChange={{this.onChange}}>
        <:label>{{this.label}}</:label>
        <:viewA>{{this.viewAText}}</:viewA>
        <:viewB>{{this.viewBText}}</:viewB>
      </PixSegmentedControl>
      */
      {
        "id": "OJ7cWJqw",
        "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],[[\"label\",\"viewA\",\"viewB\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"viewAText\"]]]],[]],[[[1,[30,0,[\"viewBText\"]]]],[]]]]]],[],false,[\"pix-segmented-control\",\":label\",\":viewA\",\":viewB\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-segmented-control-test.js",
        "isStrictMode": false
      }));
      assert.true(screen.getByLabelText(this.viewAText).checked);
      await (0, _testHelpers.click)(screen.getByRole('radio', {
        name: this.viewBText
      }));

      // then
      assert.false(screen.getByLabelText(this.viewAText).checked);
      assert.true(screen.getByLabelText(this.viewBText).checked);
      _sinon.default.assert.calledWith(this.onChange, true);
    });
    (0, _qunit.test)('it calls onChange when Enter is pressed', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSegmentedControl @onChange={{this.onChange}}>
        <:label>{{this.label}}</:label>
        <:viewA>{{this.viewAText}}</:viewA>
        <:viewB>{{this.viewBText}}</:viewB>
      </PixSegmentedControl>
      */
      {
        "id": "OJ7cWJqw",
        "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],[[\"label\",\"viewA\",\"viewB\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"viewAText\"]]]],[]],[[[1,[30,0,[\"viewBText\"]]]],[]]]]]],[],false,[\"pix-segmented-control\",\":label\",\":viewA\",\":viewB\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-segmented-control-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('radio', {
        name: this.viewBText
      }));
      await _userEvent.default.keyboard('[Enter]');

      // then
      assert.false(screen.getByLabelText(this.viewAText).checked);
      assert.true(screen.getByLabelText(this.viewBText).checked);
      _sinon.default.assert.calledWith(this.onChange, true);
    });
    (0, _qunit.test)('it calls onChange when Space is pressed', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSegmentedControl @onChange={{this.onChange}}>
        <:label>{{this.label}}</:label>
        <:viewA>{{this.viewAText}}</:viewA>
        <:viewB>{{this.viewBText}}</:viewB>
      </PixSegmentedControl>
      */
      {
        "id": "OJ7cWJqw",
        "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],[[\"label\",\"viewA\",\"viewB\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"viewAText\"]]]],[]],[[[1,[30,0,[\"viewBText\"]]]],[]]]]]],[],false,[\"pix-segmented-control\",\":label\",\":viewA\",\":viewB\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-segmented-control-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('radio', {
        name: this.viewBText
      }));
      await _userEvent.default.keyboard('[Space]');

      // then
      assert.false(screen.getByLabelText(this.viewAText).checked);
      assert.true(screen.getByLabelText(this.viewBText).checked);
      _sinon.default.assert.calledWith(this.onChange, true);
    });
  });
});
define("dummy/tests/integration/components/pix-select-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "@testing-library/dom", "@testing-library/user-event", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _dom, _userEvent, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"@testing-library/dom",0,"@testing-library/user-event",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixSelect', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    this.options = [{
      value: '1',
      label: 'Salade',
      category: 'Kebab'
    }, {
      value: '2',
      label: 'Tomate',
      category: 'Kebab'
    }, {
      value: '3',
      label: 'Oignon',
      category: 'Kebab'
    }];
    this.label = 'Mon menu déroulant';
    this.texts = {
      placeholder: 'Choisissez une option',
      selectSearchLabel: 'Rechercher',
      searchPlaceholder: 'Placeholder de la recherche'
    };
    (0, _qunit.test)('it renders Select', async function (assert) {
      // given & when
      this.texts = {
        ...this.texts,
        subLabel: 'Mon sous label'
      };
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
        >{{this.label}}</:label></PixSelect>
      */
      {
        "id": "w4lFnb6f",
        "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
        "isStrictMode": false
      }));

      // then
      assert.strictEqual(screen.getByLabelText('Mon menu déroulant Mon sous label').innerText, 'Choisissez une option');
    });
    (0, _qunit.module)('#id', function () {
      (0, _qunit.test)('it puts a custom id on pix-select', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @id='custom' @options={{this.options}} @texts={{this.texts}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "GI5cLszF",
          "block": "[[[8,[39,0],null,[[\"@id\",\"@options\",\"@texts\"],[\"custom\",[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom('#custom').exists();
      });
    });
    (0, _qunit.module)('listbox', function () {
      (0, _qunit.test)('it hides the dropdown unless there is a click on the button', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "w4lFnb6f",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.queryByRole('option', {
          name: 'Oignon'
        })).doesNotExist();
      });
      (0, _qunit.test)('it keeps the closed dropdown hidden despite floating ui inline styles', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "w4lFnb6f",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        const dropdown = document.querySelector('.pix-select__dropdown');
        assert.strictEqual(getComputedStyle(dropdown).visibility, 'hidden');
      });
      (0, _qunit.test)('it opens the dropdown', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "w4lFnb6f",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');
        // then
        assert.dom(screen.getByRole('option', {
          name: 'Oignon'
        })).exists();
      });
      (0, _qunit.test)('it hides default option', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @texts={{this.texts}} @hideDefaultOption={{true}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "cekSYJlN",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@hideDefaultOption\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],true]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');
        // then
        assert.strictEqual(screen.queryByRole('option', {
          name: this.texts.placeholder
        }), null);
      });
    });
    (0, _qunit.module)('category', function () {
      (0, _qunit.test)('it render categories when there are categories', async function (assert) {
        // given
        this.options = [{
          value: '2',
          label: 'Tomate',
          category: 'Fruit'
        }, {
          value: '1',
          label: 'Salade',
          category: 'Autre'
        }, {
          value: '3',
          label: 'Oignon',
          category: 'Autre'
        }];
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "w4lFnb6f",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');

        // then
        assert.dom(screen.getByRole('group', {
          name: 'Fruit'
        })).exists();
        assert.dom(screen.getByRole('group', {
          name: 'Autre'
        })).exists();
      });
    });
    (0, _qunit.module)('a11y', function () {
      (0, _qunit.module)('disabled dropdown', function () {
        (0, _qunit.test)('it should not display list on click', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @texts={{this.texts}} @isDisabled={{true}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "ja+7IDhm",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isDisabled\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],true]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await (0, _testHelpers.click)(await screen.getByLabelText('Mon menu déroulant'));

          // then
          assert.dom(await screen.findByRole('listbox', {
            hidden: true
          })).exists();
        });
      });
      (0, _qunit.module)('closed dropdown', function () {
        (0, _qunit.test)('it should display list, focus selected element on arrow up press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @value='3' @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "m+ONT6j0",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@value\",\"@texts\"],[[30,0,[\"options\"]],\"3\",[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[ArrowUp]');
          await screen.findByRole('listbox');
          (0, _dom.fireEvent)(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));
          const selectedOption = screen.getByRole('option', {
            name: 'Oignon'
          });

          // then
          assert.dom(selectedOption).isFocused();
        });
        (0, _qunit.test)('it should display list, focus selected element on arrow down press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @value='2' @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "T0t8XzFf",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@value\",\"@texts\"],[[30,0,[\"options\"]],\"2\",[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('listbox');
          (0, _dom.fireEvent)(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));
          const selectedOption = screen.getByRole('option', {
            name: 'Tomate'
          });

          // then
          assert.dom(selectedOption).isFocused();
        });
        (0, _qunit.test)('it should display list, focus selected element on space press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @value='1' @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "sW8z/meO",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@value\",\"@texts\"],[[30,0,[\"options\"]],\"1\",[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[Space]');
          await screen.findByRole('listbox');
          (0, _dom.fireEvent)(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));
          const selectedOption = screen.getByRole('option', {
            name: 'Salade'
          });

          // then
          assert.dom(selectedOption).isFocused();
        });
      });
      (0, _qunit.module)('opened dropdown', function () {
        (0, _qunit.test)('it should focus first element on arrow down press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "w4lFnb6f",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[Enter]');
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[ArrowDown]');
          const option = screen.getByRole('option', {
            name: 'Choisissez une option'
          });
          // then
          assert.dom(option).isFocused();
        });
        (0, _qunit.test)('it should focus last element on arrow up press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "w4lFnb6f",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[Enter]');
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[ArrowUp]');
          const option = screen.getByRole('option', {
            name: 'Oignon'
          });
          // then
          assert.dom(option).isFocused();
        });
        (0, _qunit.test)('it should close menu on escape press, focus select element', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "w4lFnb6f",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[Escape]');

          // then
          assert.strictEqual(document.activeElement, screen.getByLabelText('Mon menu déroulant'));
          await (0, _emberTestingLibrary.waitForElementToBeRemoved)(() => screen.queryByRole('listbox'));
          assert.strictEqual(screen.queryByRole('listbox'), null);
        });
        (0, _qunit.test)('it should call on select on enter press', async function (assert) {
          // given
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @texts={{this.texts}} @onChange={{this.onChange}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "j+f9wIAX",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"onChange\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[Space]');
          await screen.findByRole('listbox');
          await screen.getByText('Tomate').focus();
          await _userEvent.default.keyboard('[Enter]');

          // then
          _sinon.default.assert.calledWith(this.onChange, '2');
          assert.dom(screen.getByLabelText('Mon menu déroulant')).isFocused();
        });
        (0, _qunit.test)('it should not focus select on click outside', async function (assert) {
          // given
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <button id='focus' type='button'>Focus me</button><PixSelect
            @options={{this.options}}
            @texts={{this.texts}}
            @onChange={{this.onChange}}
          ><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "y5fiGBrb",
            "block": "[[[10,\"button\"],[14,1,\"focus\"],[14,4,\"button\"],[12],[1,\"Focus me\"],[13],[8,[39,1],null,[[\"@options\",\"@texts\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"onChange\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"button\",\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[Space]');
          await screen.findByRole('listbox');
          await screen.getByText('Tomate').focus();
          await (0, _testHelpers.click)(screen.getByRole('button', {
            name: 'Focus me'
          }));

          // then
          assert.dom(screen.getByRole('button', {
            name: 'Focus me'
          })).isFocused();
        });
        (0, _qunit.test)('it should call on select on space press', async function (assert) {
          // given
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @texts={{this.texts}} @onChange={{this.onChange}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "j+f9wIAX",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"onChange\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[Space]');
          await screen.findByRole('listbox');
          await screen.getByText('Tomate').focus();
          await _userEvent.default.keyboard('[Space]');

          // then
          _sinon.default.assert.calledWith(this.onChange, '2');
          assert.dom(screen.getByLabelText('Mon menu déroulant')).isFocused();
        });
        (0, _qunit.test)('it should focus on the search input when tab is pressed', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @isSearchable={{true}} @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "M0hcypKs",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@isSearchable\",\"@texts\"],[[30,0,[\"options\"]],true,[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[Tab]');

          // then
          assert.dom(screen.getByLabelText('Rechercher')).isFocused();
        });
        (0, _qunit.test)('it should focus on the input when escape is pressed', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}} @isSearchable={{true}} @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "M0hcypKs",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@isSearchable\",\"@texts\"],[[30,0,[\"options\"]],true,[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('listbox');
          (0, _dom.fireEvent)(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));
          await _userEvent.default.keyboard('[Escape]');
          const select = await screen.getByLabelText(this.label);
          // then
          assert.dom(select).isFocused();
        });
        (0, _qunit.test)("it should focus first element of Pix Select even when there's an aria-selected=true somewhere", async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <div class='tab-interface'>
            <div role='tablist' aria-label='Sample Tabs'>
              <span role='tab' aria-selected='true' aria-controls='panel-1' id='tab-1' tabindex='0'>
                Je ne dois pas être focus !
              </span>
            </div>
          </div>
          <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "92p4xAvh",
            "block": "[[[10,0],[14,0,\"tab-interface\"],[12],[1,\"\\n  \"],[10,0],[14,\"role\",\"tablist\"],[14,\"aria-label\",\"Sample Tabs\"],[12],[1,\"\\n    \"],[10,1],[14,\"role\",\"tab\"],[14,\"aria-selected\",\"true\"],[14,\"aria-controls\",\"panel-1\"],[14,1,\"tab-1\"],[14,\"tabindex\",\"0\"],[12],[1,\"\\n      Je ne dois pas être focus !\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"div\",\"span\",\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('listbox');
          (0, _dom.fireEvent)(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));
          const option = screen.getByRole('option', {
            name: 'Choisissez une option'
          });

          // then
          assert.dom(option).isFocused();
        });
      });
    });
    (0, _qunit.module)('#onChange', function () {
      (0, _qunit.test)('it should trigger onChange function when an item is selected', async function (assert) {
        // given
        this.onChange = _sinon.default.spy();
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @texts={{this.texts}} @onChange={{this.onChange}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "j+f9wIAX",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"onChange\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');
        await (0, _testHelpers.click)(screen.getByRole('option', {
          name: 'Oignon'
        }));

        // then
        _sinon.default.assert.calledWithMatch(this.onChange, '3');
        assert.ok(this.onChange.called);
      });
    });
    (0, _qunit.module)('#value', function () {
      (0, _qunit.test)('it should mark the item as selected when there is a value', async function (assert) {
        // given
        this.onChange = _sinon.default.spy();
        this.value = '3';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @onChange={{this.onChange}}
          @value={{this.value}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "8T6US3/I",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@onChange\",\"@value\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"onChange\"]],[30,0,[\"value\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');

        // then
        assert.strictEqual(screen.getByRole('option', {
          selected: true
        }).innerText, 'Oignon');
      });
    });
    (0, _qunit.module)('#defaultOption', function () {
      (0, _qunit.test)('should display searchable input', async function (assert) {
        this.onChange = _sinon.default.spy();
        this.isSearchable = false;
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @onChange={{this.onChange}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "y4hR5yZT",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@onChange\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"onChange\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');
        await (0, _testHelpers.click)(screen.getByRole('option', {
          name: 'Choisissez une option'
        }));

        // then
        _sinon.default.assert.calledWithMatch(this.onChange, '');
        assert.ok(this.onChange.called);
      });
    });
    (0, _qunit.module)('#isSearchable', function () {
      (0, _qunit.test)('should display searchable input', async function (assert) {
        this.isSearchable = true;
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "cR/KHuCw",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');
        assert.dom(screen.getByLabelText('Rechercher')).exists();
      });
      (0, _qunit.test)('should focus on search input', async function (assert) {
        this.isSearchable = true;
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "cR/KHuCw",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');
        (0, _dom.fireEvent)(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));
        assert.dom(screen.getByLabelText('Rechercher')).isFocused();
      });
      (0, _qunit.test)('should filter the option corresponding to the string', async function (assert) {
        this.isSearchable = true;
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "cR/KHuCw",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await (0, _emberTestingLibrary.fillByLabel)('Rechercher', 'Sal');
        await screen.findByRole('listbox');
        const filteredOptions = screen.queryAllByRole('option');
        assert.strictEqual(filteredOptions.length, 1);
        assert.strictEqual(filteredOptions[0].innerText, 'Salade');
      });
      (0, _qunit.test)('should filter without taking care of the case', async function (assert) {
        this.isSearchable = true;
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "cR/KHuCw",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await (0, _emberTestingLibrary.fillByLabel)('Rechercher', 'sal');
        await screen.findByRole('listbox');
        assert.strictEqual(screen.queryAllByRole('option').length, 1);
      });
      (0, _qunit.test)('should trim empty space before and after searched value', async function (assert) {
        this.isSearchable = true;
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "cR/KHuCw",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await (0, _emberTestingLibrary.fillByLabel)('Rechercher', ' sal ');
        await screen.findByRole('listbox');
        assert.strictEqual(screen.queryAllByRole('option').length, 1);
      });
      (0, _qunit.test)('should display placeholder text', async function (assert) {
        this.isSearchable = true;
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "cR/KHuCw",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');
        assert.dom(screen.getByPlaceholderText('Placeholder de la recherche')).exists();
      });
      (0, _qunit.test)('when there is no options found it displays the empty search result message', async function (assert) {
        this.isSearchable = true;
        this.texts = {
          ...this.texts,
          emptySearchMessage: 'Aucune option'
        };
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "cR/KHuCw",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: 'Mon menu déroulant'
        }));
        await (0, _testHelpers.fillIn)(await screen.findByRole('textbox', {
          name: 'Rechercher'
        }), 'Cheddar');
        assert.ok(screen.getByText('Aucune option'));
      });
      (0, _qunit.module)('when @onSearch is supplied', function () {
        (0, _qunit.test)('should call @onSearch on search input', async function (assert) {
          this.isSearchable = true;
          this.onSearch = _sinon.default.spy();
          await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect
            @options={{this.options}}
            @texts={{this.texts}}
            @isSearchable={{this.isSearchable}}
            @onSearch={{this.onSearch}}
          >
            <:label>{{this.label}}</:label>
          </PixSelect>
          */
          {
            "id": "pOZ17cpY",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\",\"@onSearch\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]],[30,0,[\"onSearch\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
          await (0, _emberTestingLibrary.fillByLabel)('Rechercher', 'Sal');
          assert.ok(this.onSearch.calledOnce);
          assert.deepEqual(this.onSearch.args[0], ['Sal']);
        });
        (0, _qunit.test)('should not filter by default', async function (assert) {
          this.isSearchable = true;
          this.onSearch = _sinon.default.stub();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect
            @options={{this.options}}
            @texts={{this.texts}}
            @isSearchable={{this.isSearchable}}
            @onSearch={{this.onSearch}}
          >
            <:label>{{this.label}}</:label>
          </PixSelect>
          */
          {
            "id": "pOZ17cpY",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@isSearchable\",\"@onSearch\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"isSearchable\"]],[30,0,[\"onSearch\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
          await (0, _emberTestingLibrary.fillByLabel)('Rechercher', 'Sal');
          await screen.findByRole('listbox');
          const filteredOptions = screen.queryAllByRole('option');
          assert.strictEqual(filteredOptions.length, 4);
        });
      });
    });
    (0, _qunit.module)('#required', function () {
      (0, _qunit.test)('it displays the astérisque', async function (assert) {
        this.texts = {
          ...this.texts,
          requiredLabel: 'Title requis'
        };
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @texts={{this.texts}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "w4lFnb6f",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));
        assert.dom(screen.getByLabelText('Mon menu déroulant *')).exists();
      });
    });
    (0, _qunit.module)('#errorMesssage', function () {
      (0, _qunit.test)('it displays the error message', async function (assert) {
        this.errorMessage = "Tu t'es trompé !";
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @texts={{this.texts}}
          @errorMessage={{this.errorMessage}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "pI0Pcuz0",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\",\"@errorMessage\"],[[30,0,[\"options\"]],[30,0,[\"texts\"]],[30,0,[\"errorMessage\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));
        assert.dom(screen.getByText("Tu t'es trompé !")).exists();
      });
    });
    (0, _qunit.module)('#className', function () {
      (0, _qunit.test)('it adds a custom class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @className='some-custom-class' @options={{this.options}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "8ZhnOKYx",
          "block": "[[[8,[39,0],null,[[\"@className\",\"@options\"],[\"some-custom-class\",[30,0,[\"options\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom('.some-custom-class').exists();
      });
    });
    (0, _qunit.module)('#icon', function () {
      (0, _qunit.module)('when an icon name is provided', function () {
        (0, _qunit.test)('displays an icon', async function (assert) {
          // given & when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @iconName='globe' @options={{this.options}}><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "qCJm5GIv",
            "block": "[[[8,[39,0],null,[[\"@iconName\",\"@options\"],[\"globe\",[30,0,[\"options\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));
          const svg = screen.getAllByRole('img', {
            hidden: true
          })[0].innerHTML;
          // then
          assert.true(svg.includes('#globe'));
        });
      });
      (0, _qunit.module)('option icon', function () {
        (0, _qunit.test)('should display option icon with title provided', async function (assert) {
          // given
          this.selectOptions = [{
            value: '1',
            label: 'Pika',
            icon: 'play',
            iconTitle: 'title play icon'
          }, {
            value: '2',
            label: 'Chu',
            icon: 'warning',
            iconTitle: 'title warning icon'
          }];

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.selectOptions}} @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "XHDTNK1T",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"selectOptions\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // then

          assert.ok(screen.getByTitle('title play icon'));
          assert.ok(screen.getByTitle('title warning icon'));
        });
        (0, _qunit.test)('should not display title if icon property does not exists', async function (assert) {
          // given
          this.selectOptions = [{
            value: '1',
            label: 'Pika',
            iconTitle: 'title play icon'
          }, {
            value: '2',
            label: 'Chu',
            iconTitle: 'title warning icon'
          }];

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.selectOptions}} @texts={{this.texts}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "XHDTNK1T",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@texts\"],[[30,0,[\"selectOptions\"]],[30,0,[\"texts\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // then
          assert.notOk(screen.queryByTitle('title play icon'));
          assert.notOk(screen.queryByTitle('title warning icon'));
        });
      });
    });
    (0, _qunit.module)('root class computation', function () {
      const DIV_ROOT_SELECTOR = '.pix-select';
      (0, _qunit.test)('it should compute correct class for root when @isFullWidth param is true', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @isFullWidth={{true}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "w2sSI4vs",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@isFullWidth\"],[[30,0,[\"options\"]],true]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
        assert.strictEqual(selectorElement.classList.value, 'pix-select pix-select--full-width');
      });
      (0, _qunit.test)('it should compute correct class for root when @inlineLabel param is true', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @inlineLabel={{true}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "zH07HghT",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@inlineLabel\"],[[30,0,[\"options\"]],true]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
        assert.strictEqual(selectorElement.classList.value, 'pix-select pix-select--inline');
      });
      (0, _qunit.test)('it should compute correct class for root when @inlineLabel and @isFullWidth params are true', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @inlineLabel={{true}} @isFullWidth={{true}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "wn7D/Hsp",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@inlineLabel\",\"@isFullWidth\"],[[30,0,[\"options\"]],true,true]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\",\":label\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
        assert.strictEqual(selectorElement.classList.value, 'pix-select pix-select--inline pix-select--full-width');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-selectable-tag-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | selectable-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders PixSelectableTag component with label attribute', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSelectableTag @label='test PixSelectableTag'>
        content
      </PixSelectableTag>
      */
      {
        "id": "7ALWlQq0",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"test PixSelectableTag\"]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-selectable-tag\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-selectable-tag-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('test PixSelectableTag');
    });
    (0, _qunit.test)('it renders PixSelectableTag component with id attribute', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSelectableTag @label='test PixSelectableTag' @id='testId'>
        content
      </PixSelectableTag>
      */
      {
        "id": "/eSrsJaa",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@id\"],[\"test PixSelectableTag\",\"testId\"]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-selectable-tag\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-selectable-tag-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom('#testId').exists();
    });
    (0, _qunit.test)('it renders PixSelectableTag component with checked attribute', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSelectableTag @label='test PixSelectableTag' @id='testId' @checked='true'>
        content
      </PixSelectableTag>
      */
      {
        "id": "OPrdZH2R",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@id\",\"@checked\"],[\"test PixSelectableTag\",\"testId\",\"true\"]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-selectable-tag\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-selectable-tag-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom('#testId').isChecked();
    });
  });
});
define("dummy/tests/integration/components/pix-side-panel-test", ["@1024pix/ember-testing-library", "@1024pix/pix-ui/components/pix-side-panel", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory", "@ember/component", "@ember/component/template-only"], function (_emberTestingLibrary, _pixSidePanel, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory, _component, _templateOnly) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@1024pix/pix-ui/components/pix-side-panel",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory",0,"@ember/component",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | SidePanel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('when showSidePanel is equal true', function () {
      (0, _qunit.test)('it renders the default PixSidePanel', async function (assert) {
        // given
        this.title = "It's a sidepanel!";
        this.showSidePanel = true;
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSidePanel @title={{this.title}} @showSidePanel={{this.showSidePanel}}>
          <:content>
            content
          </:content>
          <:footer>
            footer
          </:footer>
        </PixSidePanel>
        */
        {
          "id": "BkaasY5j",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@showSidePanel\"],[[30,0,[\"title\"]],[30,0,[\"showSidePanel\"]]]],[[\"content\",\"footer\"],[[[[1,\"\\n    content\\n  \"]],[]],[[[1,\"\\n    footer\\n  \"]],[]]]]]],[],false,[\"pix-side-panel\",\":content\",\":footer\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
          "isStrictMode": false
        }));
        // then
        assert.ok(screen.getByRole('dialog'));
        assert.ok(screen.getByRole('heading', {
          name: this.title
        }));
        assert.contains('content');
        assert.contains('footer');
      });
      (0, _qunit.test)('it should slide in from the right edge of the screen', async function (assert) {
        // given
        this.title = "It's a sidepanel!";
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSidePanel @title={{this.title}} @showSidePanel={{true}}>
          <:content>
            content
          </:content>
        </PixSidePanel>
        */
        {
          "id": "4ahdJ0gM",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@showSidePanel\"],[[30,0,[\"title\"]],true]],[[\"content\"],[[[[1,\"\\n    content\\n  \"]],[]]]]]],[],false,[\"pix-side-panel\",\":content\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
          "isStrictMode": false
        }));
        const title = screen.getByRole('heading', {
          name: this.title
        });
        const leftOnOpening = title.getBoundingClientRect().left;
        await Promise.all(screen.getByRole('dialog').getAnimations({
          subtree: true
        }).map(animation => animation.finished));
        // then
        assert.true(leftOnOpening > title.getBoundingClientRect().left, 'the side panel travels from the right edge instead of appearing in place');
      });
      (0, _qunit.module)('when close button is clicked', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          const title = 'Close me baby one more time';
          const showSidePanel = true;
          const onClose = _sinon.default.stub();
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixSidePanel @title={{title}} @onClose={{onClose}} @showSidePanel={{showSidePanel}}>
                        <:content>
                          content
                        </:content>
                      </PixSidePanel>
                    
          */
          {
            "id": "FwKrUhVC",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@onClose\",\"@showSidePanel\"],[[32,1],[32,2],[32,3]]],[[\"content\"],[[[[1,\"\\n                content\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
            "scope": () => [_pixSidePanel.default, title, onClose, showSidePanel],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          await (0, _testHelpers.click)(screen.getByRole('button', {
            name: /Fermer/
          }));
          // then
          assert.ok(onClose.calledOnce);
        });
      });
      (0, _qunit.module)('when the cancel event is triggered (escape key)', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          const title = 'Close me baby one more time';
          const showSidePanel = true;
          const onClose = _sinon.default.stub();
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixSidePanel @title={{title}} @onClose={{onClose}} @showSidePanel={{showSidePanel}}>
                        <:content>
                          content
                        </:content>
                      </PixSidePanel>
                    
          */
          {
            "id": "FwKrUhVC",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@onClose\",\"@showSidePanel\"],[[32,1],[32,2],[32,3]]],[[\"content\"],[[[[1,\"\\n                content\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
            "scope": () => [_pixSidePanel.default, title, onClose, showSidePanel],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          await (0, _testHelpers.triggerEvent)(screen.getByRole('dialog'), 'cancel');
          // then
          assert.ok(onClose.calledOnce);
        });
      });
    });
    (0, _qunit.module)('when showSidePanel is false', function () {
      (0, _qunit.test)('it should not show sidepanel', async function (assert) {
        // given
        const title = "It's a sidepanel!";
        const showSidePanel = false;
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}}>
                    <:content>
                      content
                    </:content>
                    <:footer>
                      footer
                    </:footer>
                  </PixSidePanel>
                
        */
        {
          "id": "tUXwx813",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@title\",\"@showSidePanel\"],[[32,1],[32,2]]],[[\"content\",\"footer\"],[[[[1,\"\\n              content\\n            \"]],[]],[[[1,\"\\n              footer\\n            \"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
          "scope": () => [_pixSidePanel.default, title, showSidePanel],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.notOk(screen.queryByRole('dialog'));
        assert.notOk(screen.queryByRole('heading', {
          name: title
        }));
      });
    });
    (0, _qunit.module)('variants', function () {
      (0, _qunit.module)('when variant is not provided', function () {
        (0, _qunit.test)('it should apply default style for global and footer', async function (assert) {
          // given
          const title = 'SidePanel with no variant';
          const showSidePanel = true;
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}}>
                        <:content>
                          content
                        </:content>
                        <:footer>
                          footer
                        </:footer>
                      </PixSidePanel>
                    
          */
          {
            "id": "bLh55bAY",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@showSidePanel\"],[[32,1],[32,2]]],[[\"content\",\"footer\"],[[[[1,\"\\n                content\\n              \"]],[]],[[[1,\"\\n                footer\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
            "scope": () => [_pixSidePanel.default, title, showSidePanel],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const dialog = screen.getByRole('dialog', {
            name: 'SidePanel with no variant'
          });
          const footer = this.element.querySelector('.pix-side-panel__footer');
          assert.dom(dialog.querySelector('.pix-side-panel')).hasClass('pix-side-panel--default');
          assert.dom(footer).hasClass('pix-side-panel__footer--default');
        });
      });
      (0, _qunit.module)('when variant is "default"', function () {
        (0, _qunit.test)('it should apply default style for global and footer', async function (assert) {
          // given
          const title = 'SidePanel with default variant';
          const showSidePanel = true;
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}} @variant="default">
                        <:content>
                          content
                        </:content>
                        <:footer>
                          footer
                        </:footer>
                      </PixSidePanel>
                    
          */
          {
            "id": "7bnujebl",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@showSidePanel\",\"@variant\"],[[32,1],[32,2],\"default\"]],[[\"content\",\"footer\"],[[[[1,\"\\n                content\\n              \"]],[]],[[[1,\"\\n                footer\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
            "scope": () => [_pixSidePanel.default, title, showSidePanel],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const dialog = screen.getByRole('dialog', {
            name: 'SidePanel with default variant'
          });
          const footer = this.element.querySelector('.pix-side-panel__footer');
          assert.dom(dialog.querySelector('.pix-side-panel')).hasClass('pix-side-panel--default');
          assert.dom(footer).hasClass('pix-side-panel__footer--default');
        });
      });
      (0, _qunit.module)('when variant is "orga"', function () {
        (0, _qunit.test)('it should apply orga style for global and footer', async function (assert) {
          // given
          const title = 'SidePanel with orga variant';
          const showSidePanel = true;
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}} @variant="orga">
                        <:content>
                          content
                        </:content>
                        <:footer>
                          footer
                        </:footer>
                      </PixSidePanel>
                    
          */
          {
            "id": "+QzIB982",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@showSidePanel\",\"@variant\"],[[32,1],[32,2],\"orga\"]],[[\"content\",\"footer\"],[[[[1,\"\\n                content\\n              \"]],[]],[[[1,\"\\n                footer\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
            "scope": () => [_pixSidePanel.default, title, showSidePanel],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const dialog = screen.getByRole('dialog', {
            name: 'SidePanel with orga variant'
          });
          const footer = this.element.querySelector('.pix-side-panel__footer');
          assert.dom(dialog.querySelector('.pix-side-panel')).hasClass('pix-side-panel--orga');
          assert.dom(footer).hasClass('pix-side-panel__footer--orga');
        });
      });
      (0, _qunit.module)('when variant is "certif"', function () {
        (0, _qunit.test)('it should apply certif style for global and footer', async function (assert) {
          // given
          const title = 'SidePanel with certif variant';
          const showSidePanel = true;
          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}} @variant="certif">
                        <:content>
                          content
                        </:content>
                        <:footer>
                          footer
                        </:footer>
                      </PixSidePanel>
                    
          */
          {
            "id": "e0W2GTeL",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,[[\"@title\",\"@showSidePanel\",\"@variant\"],[[32,1],[32,2],\"certif\"]],[[\"content\",\"footer\"],[[[[1,\"\\n                content\\n              \"]],[]],[[[1,\"\\n                footer\\n              \"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-side-panel-test.js",
            "scope": () => [_pixSidePanel.default, title, showSidePanel],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // then
          const dialog = screen.getByRole('dialog', {
            name: 'SidePanel with certif variant'
          });
          const footer = this.element.querySelector('.pix-side-panel__footer');
          assert.dom(dialog.querySelector('.pix-side-panel')).hasClass('pix-side-panel--certif');
          assert.dom(footer).hasClass('pix-side-panel__footer--certif');
        });
      });
    });
  });
});
define("dummy/tests/integration/components/pix-stars-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | stars', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the default PixStars', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStars />
      */
      {
        "id": "fvu609AX",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"pix-stars\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stars-test.js",
        "isStrictMode": false
      }));
      const stars = this.element.querySelectorAll('.pix-stars__item');

      // then
      assert.strictEqual(stars.length, 0);
    });
    (0, _qunit.test)('it renders a total of 5 empty stars', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStars @total={{5}} />
      */
      {
        "id": "HUJf4hUx",
        "block": "[[[8,[39,0],null,[[\"@total\"],[5]],null]],[],false,[\"pix-stars\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stars-test.js",
        "isStrictMode": false
      }));
      const stars = this.element.querySelectorAll('.pix-stars__item');
      const acquiredStars = this.element.querySelectorAll('[data-acquired]');

      // then
      assert.strictEqual(stars.length, 5);
      assert.strictEqual(acquiredStars.length, 0);
    });
    (0, _qunit.test)('it renders 3 stars acquired on a total of 5', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStars @count={{3}} @total={{5}} />
      */
      {
        "id": "A9Jy/s6W",
        "block": "[[[8,[39,0],null,[[\"@count\",\"@total\"],[3,5]],null]],[],false,[\"pix-stars\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stars-test.js",
        "isStrictMode": false
      }));
      const stars = this.element.querySelectorAll('.pix-stars__item');
      const acquiredStars = this.element.querySelectorAll('[data-acquired]');

      // then
      assert.strictEqual(stars.length, 5);
      assert.strictEqual(acquiredStars.length, 3);
    });
    (0, _qunit.test)('it renders message', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStars @total={{3}} @alt='message' />
      */
      {
        "id": "hDq9P58t",
        "block": "[[[8,[39,0],null,[[\"@total\",\"@alt\"],[3,\"message\"]],null]],[],false,[\"pix-stars\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stars-test.js",
        "isStrictMode": false
      }));
      // then
      assert.dom(screen.getByText('message')).exists();
    });
    (0, _qunit.test)('it renders the acquired start but hide unacquired', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStars @count={{3}} />
      */
      {
        "id": "Rl4a4fU+",
        "block": "[[[8,[39,0],null,[[\"@count\"],[3]],null]],[],false,[\"pix-stars\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stars-test.js",
        "isStrictMode": false
      }));
      const stars = this.element.querySelectorAll('.pix-stars__item');
      const acquiredStars = this.element.querySelectorAll('[data-acquired]');

      // then
      assert.strictEqual(stars.length, 3);
      assert.strictEqual(acquiredStars.length, 3);
    });
    (0, _qunit.test)('it renders the color', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStars @count={{3}} @total={{5}} @color='blue' />
      */
      {
        "id": "JJqcicZf",
        "block": "[[[8,[39,0],null,[[\"@count\",\"@total\",\"@color\"],[3,5,\"blue\"]],null]],[],false,[\"pix-stars\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stars-test.js",
        "isStrictMode": false
      }));
      const component = this.element.querySelector('.pix-stars__item--color-blue');

      // then
      assert.ok(component);
    });
  });
});
define("dummy/tests/integration/components/pix-step-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixStep', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders as a listitem with title and index', async function (assert) {
      // given
      this.set('index', 0);
      this.set('title', 'Informations');

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStep @index={{this.index}} @title={{this.title}} />
      */
      {
        "id": "lnh98IqQ",
        "block": "[[[8,[39,0],null,[[\"@index\",\"@title\"],[[30,0,[\"index\"]],[30,0,[\"title\"]]]],null]],[],false,[\"pix-step\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-step-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByRole('listitem')).exists();
      assert.dom(screen.getByText('Informations')).exists();
    });
    (0, _qunit.test)('it displays index starting at 1', async function (assert) {
      // given
      this.set('index', 2);
      this.set('title', 'Validation');

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStep @index={{this.index}} @title={{this.title}} />
      */
      {
        "id": "lnh98IqQ",
        "block": "[[[8,[39,0],null,[[\"@index\",\"@title\"],[[30,0,[\"index\"]],[30,0,[\"title\"]]]],null]],[],false,[\"pix-step\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-step-test.js",
        "isStrictMode": false
      }));

      // then
      const index = this.element.querySelector('.pix-step__index');
      assert.strictEqual(index.textContent.trim(), '3');
    });
    (0, _qunit.test)('it sets aria-current="step" when current', async function (assert) {
      // given
      this.set('index', 0);
      this.set('title', 'Étape 1');
      this.set('isCurrent', true);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStep @index={{this.index}} @title={{this.title}} @isCurrent={{this.isCurrent}} />
      */
      {
        "id": "0gyhN57m",
        "block": "[[[8,[39,0],null,[[\"@index\",\"@title\",\"@isCurrent\"],[[30,0,[\"index\"]],[30,0,[\"title\"]],[30,0,[\"isCurrent\"]]]],null]],[],false,[\"pix-step\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-step-test.js",
        "isStrictMode": false
      }));

      // then
      const step = this.element.querySelector('.pix-step');
      assert.dom(step).hasAttribute('aria-current', 'step');
      assert.dom(step).hasClass('pix-step--current');
    });
    (0, _qunit.test)('it does not set aria-current when not current', async function (assert) {
      // given
      this.set('index', 1);
      this.set('title', 'Étape 2');
      this.set('isCurrent', false);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStep @index={{this.index}} @title={{this.title}} @isCurrent={{this.isCurrent}} />
      */
      {
        "id": "0gyhN57m",
        "block": "[[[8,[39,0],null,[[\"@index\",\"@title\",\"@isCurrent\"],[[30,0,[\"index\"]],[30,0,[\"title\"]],[30,0,[\"isCurrent\"]]]],null]],[],false,[\"pix-step\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-step-test.js",
        "isStrictMode": false
      }));

      // then
      const step = this.element.querySelector('.pix-step');
      assert.dom(step).doesNotHaveAttribute('aria-current');
      assert.dom(step).doesNotHaveClass('pix-step--current');
    });
    (0, _qunit.test)('it renders subtitle when provided', async function (assert) {
      // given
      this.set('index', 0);
      this.set('title', 'Informations');
      this.set('subtitle', 'Renseignez vos informations');

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStep @index={{this.index}} @title={{this.title}} @subtitle={{this.subtitle}} />
      */
      {
        "id": "w7JRkEQI",
        "block": "[[[8,[39,0],null,[[\"@index\",\"@title\",\"@subtitle\"],[[30,0,[\"index\"]],[30,0,[\"title\"]],[30,0,[\"subtitle\"]]]],null]],[],false,[\"pix-step\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-step-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByText('Renseignez vos informations')).exists();
    });
    (0, _qunit.test)('it does not render subtitle when not provided', async function (assert) {
      // given
      this.set('index', 0);
      this.set('title', 'Étape 1');

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStep @index={{this.index}} @title={{this.title}} />
      */
      {
        "id": "lnh98IqQ",
        "block": "[[[8,[39,0],null,[[\"@index\",\"@title\"],[[30,0,[\"index\"]],[30,0,[\"title\"]]]],null]],[],false,[\"pix-step\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-step-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom('.pix-step__subtitle').doesNotExist();
    });
    (0, _qunit.test)('it hides visual index from screen readers', async function (assert) {
      // given
      this.set('index', 0);
      this.set('title', 'Étape 1');

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStep @index={{this.index}} @title={{this.title}} />
      */
      {
        "id": "lnh98IqQ",
        "block": "[[[8,[39,0],null,[[\"@index\",\"@title\"],[[30,0,[\"index\"]],[30,0,[\"title\"]]]],null]],[],false,[\"pix-step\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-step-test.js",
        "isStrictMode": false
      }));

      // then
      const index = this.element.querySelector('.pix-step__index');
      assert.dom(index).hasAttribute('aria-hidden', 'true');
    });
    (0, _qunit.test)('it spreads attributes on the root element', async function (assert) {
      // given
      this.set('index', 0);
      this.set('title', 'Étape 1');

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStep @index={{this.index}} @title={{this.title}} data-test='custom' />
      */
      {
        "id": "/L0mlMx2",
        "block": "[[[8,[39,0],[[24,\"data-test\",\"custom\"]],[[\"@index\",\"@title\"],[[30,0,[\"index\"]],[30,0,[\"title\"]]]],null]],[],false,[\"pix-step\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-step-test.js",
        "isStrictMode": false
      }));

      // then
      const step = this.element.querySelector('.pix-step');
      assert.dom(step).hasAttribute('data-test', 'custom');
    });
  });
});
define("dummy/tests/integration/components/pix-stepper-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixStepper', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders as an accessible list with all steps', async function (assert) {
      // given
      this.set('steps', [{
        title: 'Informations',
        subtitle: 'Renseignez vos informations'
      }, {
        title: 'Confirmation',
        subtitle: 'Vérifiez vos données'
      }, {
        title: 'Validation',
        subtitle: 'Finalisez votre inscription'
      }]);
      this.set('currentStep', 1);

      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />
      */
      {
        "id": "nB0KzWP1",
        "block": "[[[8,[39,0],null,[[\"@steps\",\"@currentStep\"],[[30,0,[\"steps\"]],[30,0,[\"currentStep\"]]]],null]],[],false,[\"pix-stepper\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stepper-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByRole('list')).exists();
      const items = screen.getAllByRole('listitem');
      assert.strictEqual(items.length, 3);
      assert.dom(screen.getByText('Informations')).exists();
      assert.dom(screen.getByText('Confirmation')).exists();
      assert.dom(screen.getByText('Validation')).exists();
    });
    (0, _qunit.module)('accessibility', function () {
      (0, _qunit.test)('it has a translated aria-label with current step and total', async function (assert) {
        // given
        this.set('steps', [{
          title: 'Étape 1'
        }, {
          title: 'Étape 2'
        }, {
          title: 'Étape 3'
        }]);
        this.set('currentStep', 2);
        this.set('texts', {
          ariaLabel: 'Étape 2 sur 3'
        });

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStepper @steps={{this.steps}} @texts={{this.texts}} @currentStep={{this.currentStep}} />
        */
        {
          "id": "Pdvrzb/J",
          "block": "[[[8,[39,0],null,[[\"@steps\",\"@texts\",\"@currentStep\"],[[30,0,[\"steps\"]],[30,0,[\"texts\"]],[30,0,[\"currentStep\"]]]],null]],[],false,[\"pix-stepper\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stepper-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByRole('list', {
          name: this.texts.ariaLabel
        })).exists();
      });
    });
    (0, _qunit.module)('current step', function () {
      (0, _qunit.test)('it marks the first step as current when @currentStep is 1', async function (assert) {
        // given
        this.set('steps', [{
          title: 'Étape 1'
        }, {
          title: 'Étape 2'
        }, {
          title: 'Étape 3'
        }]);
        this.set('currentStep', 1);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />
        */
        {
          "id": "nB0KzWP1",
          "block": "[[[8,[39,0],null,[[\"@steps\",\"@currentStep\"],[[30,0,[\"steps\"]],[30,0,[\"currentStep\"]]]],null]],[],false,[\"pix-stepper\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stepper-test.js",
          "isStrictMode": false
        }));

        // then
        const steps = this.element.querySelectorAll('.pix-step');
        assert.dom(steps[0]).hasClass('pix-step--current');
        assert.dom(steps[1]).doesNotHaveClass('pix-step--current');
        assert.dom(steps[2]).doesNotHaveClass('pix-step--current');
      });
      (0, _qunit.test)('it marks the second step as current when @currentStep is 2', async function (assert) {
        // given
        this.set('steps', [{
          title: 'Étape 1'
        }, {
          title: 'Étape 2'
        }, {
          title: 'Étape 3'
        }]);
        this.set('currentStep', 2);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />
        */
        {
          "id": "nB0KzWP1",
          "block": "[[[8,[39,0],null,[[\"@steps\",\"@currentStep\"],[[30,0,[\"steps\"]],[30,0,[\"currentStep\"]]]],null]],[],false,[\"pix-stepper\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stepper-test.js",
          "isStrictMode": false
        }));

        // then
        const steps = this.element.querySelectorAll('.pix-step');
        assert.dom(steps[0]).doesNotHaveClass('pix-step--current');
        assert.dom(steps[1]).hasClass('pix-step--current');
        assert.dom(steps[2]).doesNotHaveClass('pix-step--current');
      });
      (0, _qunit.test)('it marks the last step as current when @currentStep equals step count', async function (assert) {
        // given
        this.set('steps', [{
          title: 'Étape 1'
        }, {
          title: 'Étape 2'
        }, {
          title: 'Étape 3'
        }]);
        this.set('currentStep', 3);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />
        */
        {
          "id": "nB0KzWP1",
          "block": "[[[8,[39,0],null,[[\"@steps\",\"@currentStep\"],[[30,0,[\"steps\"]],[30,0,[\"currentStep\"]]]],null]],[],false,[\"pix-stepper\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stepper-test.js",
          "isStrictMode": false
        }));

        // then
        const steps = this.element.querySelectorAll('.pix-step');
        assert.dom(steps[0]).doesNotHaveClass('pix-step--current');
        assert.dom(steps[1]).doesNotHaveClass('pix-step--current');
        assert.dom(steps[2]).hasClass('pix-step--current');
      });
    });
    (0, _qunit.module)('CSS classes', function () {
      (0, _qunit.test)('it has default class for 3 steps or less', async function (assert) {
        // given
        this.set('steps', [{
          title: 'Étape 1'
        }, {
          title: 'Étape 2'
        }, {
          title: 'Étape 3'
        }]);
        this.set('currentStep', 1);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />
        */
        {
          "id": "nB0KzWP1",
          "block": "[[[8,[39,0],null,[[\"@steps\",\"@currentStep\"],[[30,0,[\"steps\"]],[30,0,[\"currentStep\"]]]],null]],[],false,[\"pix-stepper\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stepper-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom('.pix-stepper').exists();
        assert.dom('.pix-stepper').doesNotHaveClass('pix-stepper--long');
      });
      (0, _qunit.test)('it adds long modifier class for more than 3 steps', async function (assert) {
        // given
        this.set('steps', [{
          title: 'Étape 1'
        }, {
          title: 'Étape 2'
        }, {
          title: 'Étape 3'
        }, {
          title: 'Étape 4'
        }]);
        this.set('currentStep', 1);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />
        */
        {
          "id": "nB0KzWP1",
          "block": "[[[8,[39,0],null,[[\"@steps\",\"@currentStep\"],[[30,0,[\"steps\"]],[30,0,[\"currentStep\"]]]],null]],[],false,[\"pix-stepper\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stepper-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom('.pix-stepper').hasClass('pix-stepper--long');
      });
    });
    (0, _qunit.module)('edge cases', function () {
      (0, _qunit.test)('it renders with a single step', async function (assert) {
        // given
        this.set('steps', [{
          title: 'Unique'
        }]);
        this.set('currentStep', 1);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />
        */
        {
          "id": "nB0KzWP1",
          "block": "[[[8,[39,0],null,[[\"@steps\",\"@currentStep\"],[[30,0,[\"steps\"]],[30,0,[\"currentStep\"]]]],null]],[],false,[\"pix-stepper\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-stepper-test.js",
          "isStrictMode": false
        }));

        // then
        const items = screen.getAllByRole('listitem');
        assert.strictEqual(items.length, 1);
        assert.dom(screen.getByText('Unique')).exists();
        assert.dom(items[0]).hasClass('pix-step--current');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-structure-switcher-test", ["@1024pix/ember-testing-library", "@testing-library/user-event", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _userEvent, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@testing-library/user-event",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-structure-switcher', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    this.structures = [{
      value: '1',
      label: 'Salade'
    }, {
      value: '2',
      label: 'Tomate'
    }, {
      value: '3',
      label: 'Oignon'
    }];
    (0, _qunit.test)('it renders the component', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />
      */
      {
        "id": "XaS+vwmZ",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByRole('button', {
        name: 'Changer de structure'
      }));
    });
    (0, _qunit.module)('listbox', function () {
      (0, _qunit.test)('it hides the dropdown by default', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />
        */
        {
          "id": "XaS+vwmZ",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
          "isStrictMode": false
        }));

        // then
        assert.notOk(screen.queryByRole('listbox'));
      });
      (0, _qunit.test)('it shows the dropdown when button is clicked', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />
        */
        {
          "id": "XaS+vwmZ",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
          "isStrictMode": false
        }));

        // when
        const button = screen.getByRole('button', {
          name: 'Changer de structure'
        });
        await _userEvent.default.click(button);
        await screen.findByRole('option', {
          name: 'Tomate'
        });

        // then
        assert.ok(screen.getByRole('option', {
          name: 'Tomate'
        }));
      });
      (0, _qunit.test)('it not display default option', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />
        */
        {
          "id": "XaS+vwmZ",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
          "isStrictMode": false
        }));

        // when
        const button = screen.getByRole('button', {
          name: 'Changer de structure'
        });
        await _userEvent.default.click(button);

        // then
        assert.notOk(screen.queryByRole('option', {
          name: 'Changer de structure'
        }));
      });
    });
    (0, _qunit.module)('when option is clicked', function () {
      (0, _qunit.test)('it calls onChange handler with clicked selected', async function (assert) {
        // given
        this.onChangeHandler = _sinon.default.spy();
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStructureSwitcher
          @label='Changer de structure'
          @onChange={{this.onChangeHandler}}
          @structures={{this.structures}}
        />
        */
        {
          "id": "/QLUjNyT",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onChange\",\"@structures\"],[\"Changer de structure\",[30,0,[\"onChangeHandler\"]],[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
          "isStrictMode": false
        }));
        const button = screen.getByRole('button', {
          name: 'Changer de structure'
        });
        _emberTestingLibrary.fireEvent.click(button);

        // when
        const structureSalade = await screen.findByRole('option', {
          name: 'Salade'
        });
        _emberTestingLibrary.fireEvent.click(structureSalade);

        // then
        assert.ok(this.onChangeHandler.calledOnceWithExactly({
          value: '1',
          label: 'Salade'
        }));
      });
      (0, _qunit.test)('the selected option is active', async function (assert) {
        //given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStructureSwitcher @label='Changer de structure' @value='1' @structures={{this.structures}} />
        */
        {
          "id": "6zSpXupz",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@structures\"],[\"Changer de structure\",\"1\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
          "isStrictMode": false
        }));

        //when
        const button = screen.getByRole('button', {
          name: 'Changer de structure'
        });
        _emberTestingLibrary.fireEvent.click(button);
        const selectedOption = await screen.findByRole('option', {
          selected: true
        });

        // then
        assert.strictEqual(selectedOption.innerText, 'Salade');
      });
      (0, _qunit.test)('it closes the dropdown when an option is clicked and focuses back on switcher button', async function (assert) {
        // given
        this.onChangeHandler = _sinon.default.spy();
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixStructureSwitcher
          @structures={{this.structures}}
          @label='Changer de structure'
          @onChange={{this.onChangeHandler}}
        />
        */
        {
          "id": "qMreg/9B",
          "block": "[[[8,[39,0],null,[[\"@structures\",\"@label\",\"@onChange\"],[[30,0,[\"structures\"]],\"Changer de structure\",[30,0,[\"onChangeHandler\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
          "isStrictMode": false
        }));
        const button = screen.getByRole('button', {
          name: 'Changer de structure'
        });
        await _userEvent.default.click(button);
        const option = await screen.findByRole('option', {
          name: 'Salade'
        });

        //when
        await _userEvent.default.click(option);

        // then
        assert.strictEqual(document.activeElement, button);
        assert.strictEqual(screen.queryByRole('listbox'), null);
      });
    });
    (0, _qunit.module)('a11y', function () {
      (0, _qunit.module)('closed dropdown', function () {
        (0, _qunit.test)('it should display list, focus selected element on arrow up press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher @label='Changer de structure' @value='2' @structures={{this.structures}} />
          */
          {
            "id": "TTGRt5pE",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@structures\"],[\"Changer de structure\",\"2\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));
          //  when
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          button.focus();
          await _userEvent.default.keyboard('[ArrowUp]');

          //then
          const selectedOption = await screen.findByRole('option', {
            name: 'Tomate',
            selected: true
          });
          assert.ok(selectedOption);
        });
        (0, _qunit.test)('it should display list, focus selected element on arrow down press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher @label='Changer de structure' @value='2' @structures={{this.structures}} />
          */
          {
            "id": "TTGRt5pE",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@structures\"],[\"Changer de structure\",\"2\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));
          //  when
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          button.focus();
          await _userEvent.default.keyboard('[ArrowDown]');

          //then
          const selectedOption = await screen.findByRole('option', {
            name: 'Tomate',
            selected: true
          });
          assert.ok(selectedOption);
        });
        (0, _qunit.test)('it should display list, focus selected element on space press', async function (assert) {
          //given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher @label='Changer de structure' @value='2' @structures={{this.structures}} />
          */
          {
            "id": "TTGRt5pE",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@structures\"],[\"Changer de structure\",\"2\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));

          //  when
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          button.focus();
          await _userEvent.default.keyboard('[Space]');

          //then
          const selectedOption = await screen.findByRole('option', {
            name: 'Tomate',
            selected: true
          });
          assert.ok(selectedOption);
        });
      });
      (0, _qunit.module)('opened dropdown', function () {
        (0, _qunit.test)('it should focus first element on arrow down press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />
          */
          {
            "id": "XaS+vwmZ",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));
          //  when
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          await _userEvent.default.click(button);
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[ArrowDown]');

          //then
          const selectedOption = screen.getByRole('option', {
            name: 'Salade'
          });
          assert.strictEqual(document.activeElement, selectedOption);
        });
        (0, _qunit.test)('it should focus on last element on arrow up press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />
          */
          {
            "id": "XaS+vwmZ",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));

          //  when
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          await _userEvent.default.click(button);
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[ArrowUp]');

          //then
          const selectedOption = screen.getByRole('option', {
            name: 'Oignon'
          });
          assert.strictEqual(document.activeElement, selectedOption);
        });
        (0, _qunit.test)('it should close menu an focus back to button on escape press', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />
          */
          {
            "id": "XaS+vwmZ",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));

          //  when
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          await _userEvent.default.click(button);
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[Escape]');

          // then
          assert.strictEqual(document.activeElement, button);
        });
        (0, _qunit.test)('it should call onChange handler on enter press', async function (assert) {
          // given
          this.onChangeSpy = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher
            @label='Changer de structure'
            @onChange={{this.onChangeSpy}}
            @structures={{this.structures}}
          />
          */
          {
            "id": "wfl3Pe8V",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@onChange\",\"@structures\"],[\"Changer de structure\",[30,0,[\"onChangeSpy\"]],[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));

          //  when
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          await _userEvent.default.click(button);
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[ArrowDown]');
          await _userEvent.default.keyboard('[Enter]');

          // then
          assert.ok(this.onChangeSpy.calledWith({
            value: '1',
            label: 'Salade'
          }));
          assert.notOk(screen.queryByRole('listbox'));
          assert.strictEqual(document.activeElement, button);
        });
        (0, _qunit.test)('it should call onChange handler on space press', async function (assert) {
          // given
          this.onChangeSpy = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher
            @label='Changer de structure'
            @onChange={{this.onChangeSpy}}
            @structures={{this.structures}}
          />
          */
          {
            "id": "wfl3Pe8V",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@onChange\",\"@structures\"],[\"Changer de structure\",[30,0,[\"onChangeSpy\"]],[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));

          //  when
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          await _userEvent.default.click(button);
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[ArrowDown]');
          await _userEvent.default.keyboard('[Space]');

          // then
          assert.ok(this.onChangeSpy.calledWith({
            value: '1',
            label: 'Salade'
          }));
          assert.notOk(screen.queryByRole('listbox'));
          assert.strictEqual(document.activeElement, button);
        });
        (0, _qunit.test)('it should not focus back button on click outside', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <button type='button'>Click outside</button><PixStructureSwitcher
            @label='Changer de structure'
            @structures={{this.structures}}
          />
          */
          {
            "id": "nA9GJNAn",
            "block": "[[[10,\"button\"],[14,4,\"button\"],[12],[1,\"Click outside\"],[13],[8,[39,1],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"button\",\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          await _userEvent.default.click(button);
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[ArrowDown]');
          assert.strictEqual(document.activeElement, screen.getByRole('option', {
            name: 'Salade'
          }));

          //  when
          const externalButton = screen.getByRole('button', {
            name: 'Click outside'
          });
          await _userEvent.default.click(externalButton);
          assert.strictEqual(document.activeElement, externalButton);
          assert.notOk(screen.queryByRole('listbox'));
        });
        (0, _qunit.test)('it should block tab when menu is open', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />
          */
          {
            "id": "XaS+vwmZ",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@structures\"],[\"Changer de structure\",[30,0,[\"structures\"]]]],null]],[],false,[\"pix-structure-switcher\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-structure-switcher-test.js",
            "isStrictMode": false
          }));
          const button = screen.getByRole('button', {
            name: 'Changer de structure'
          });
          await _userEvent.default.click(button);
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[ArrowDown]');
          assert.strictEqual(document.activeElement, screen.getByRole('option', {
            name: 'Salade'
          }));

          //when
          await _userEvent.default.keyboard('[Tab]');

          //then
          assert.strictEqual(document.activeElement, screen.getByRole('option', {
            name: 'Salade'
          }));
        });
      });
    });
  });
});
define("dummy/tests/integration/components/pix-table-column-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  //! template-lint-disable
  (0, _qunit.module)('Integration | Component | table-column', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.data = [{
        name: 'jean',
        description: 'fort au jungle speed',
        age: 15
      }, {
        name: 'brian',
        description: 'travail au peach pit',
        age: 25
      }];
    });
    (0, _qunit.module)('#warn', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)('should warn when provided incorrect type', async function (assert) {
        this.wrongType = 'wrong type';

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn @context={{context}} @type={{this.wrongType}}>
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "rLnlFXjB",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@type\"],[[30,2],[30,0,[\"wrongType\"]]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-column-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(warnStub.calledWithExactly('WARNING: PixTableColumn: you need to provide a valid type'));
      });
    });
    (0, _qunit.module)('when type is text', function () {
      (0, _qunit.test)('it renders a text column by default', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn @context={{context}}>
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "LMahzMEh",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-column-test.js",
          "isStrictMode": false
        }));

        // then
        const cell = screen.queryByRole('cell', {
          name: 'jean'
        });
        assert.dom(cell).exists();
        const textAlign = window.getComputedStyle(cell).getPropertyValue('text-align');
        assert.strictEqual(textAlign, 'start');
      });
    });
    (0, _qunit.module)('when type is number', function () {
      (0, _qunit.test)('it renders a number column', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn @context={{context}} @type='number'>
              <:header>
                Âge
              </:header>
              <:cell>
                {{row.age}}
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "ZoW9PmJ9",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@type\"],[[30,2],\"number\"]],[[\"header\",\"cell\"],[[[[1,\"\\n        Âge\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"age\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-column-test.js",
          "isStrictMode": false
        }));

        // then
        const cell = screen.queryByRole('cell', {
          name: '15'
        });
        assert.dom(cell).exists();
        const textAlign = window.getComputedStyle(cell).getPropertyValue('text-align');
        assert.strictEqual(textAlign, 'left');
      });
    });
    (0, _qunit.module)('when isMainRow defined', function () {
      (0, _qunit.test)('it renders a defined row title', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn @context={{context}} @isMainRow={{true}}>
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}} @type='number'>
              <:header>
                Âge
              </:header>
              <:cell>
                {{row.age}}
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "ve7HsY7k",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@isMainRow\"],[[30,2],true]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@type\"],[[30,2],\"number\"]],[[\"header\",\"cell\"],[[[[1,\"\\n        Âge\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"age\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-column-test.js",
          "isStrictMode": false
        }));

        // then
        const row = screen.getByRole('row', {
          name: 'jean 15'
        });
        assert.ok(row);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-table-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  //! template-lint-disable
  (0, _qunit.module)('Integration | Component | table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.data = [{
        name: 'jean',
        description: 'fort au jungle speed',
        age: 15
      }, {
        name: 'brian',
        description: 'travail au peach pit',
        age: 14
      }, {
        name: 'zoé',
        description: 'travail aux affaires non classées',
        age: 70
      }];
    });
    (0, _qunit.test)('it renders the default PixTable', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
        <:columns as |row context|>
          <PixTableColumn @context={{context}}>
            <:header>
              Nom
            </:header>
            <:cell>
              {{row.name}}
            </:cell>
          </PixTableColumn>
          <PixTableColumn @context={{context}}>
            <:header>
              Description
            </:header>
            <:cell>
              {{row.description}}
            </:cell>
          </PixTableColumn>
          <PixTableColumn @context={{context}}>
            <:header>
              Age
            </:header>
            <:cell>
              il a
              {{row.age}}
              ans
            </:cell>
          </PixTableColumn>
        </:columns>
      </PixTable>
      */
      {
        "id": "1XXn35fe",
        "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Description\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"description\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Age\\n      \"]],[]],[[[1,\"\\n        il a\\n        \"],[1,[30,1,[\"age\"]]],[1,\"\\n        ans\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.queryByRole('columnheader', {
        name: 'Nom'
      })).exists();
      assert.dom(screen.queryByRole('columnheader', {
        name: 'Description'
      })).exists();
      assert.dom(screen.queryByRole('columnheader', {
        name: 'Age'
      })).exists();
      assert.dom(screen.queryByRole('cell', {
        name: 'jean'
      })).exists();
      assert.dom(screen.queryByRole('cell', {
        name: 'fort au jungle speed'
      })).exists();
      assert.dom(screen.queryByRole('cell', {
        name: 'il a 15 ans'
      })).exists();
      assert.dom(screen.queryByRole('caption', {
        name: 'Ceci est le caption de notre table'
      })).exists();
    });
    ['orga', 'primary', 'certif'].forEach(function (variant) {
      (0, _qunit.test)(`it add the correct className from ${variant}`, async function (assert) {
        // when
        this.variant = variant;
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable
          @caption='Ceci est le caption de notre table'
          @data={{this.data}}
          @variant={{this.variant}}
        >
          <:columns as |row context|>
            <PixTableColumn @context={{context}}>
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}}>
              <:header>
                Description
              </:header>
              <:cell>
                {{row.description}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}}>
              <:header>
                Age
              </:header>
              <:cell>
                il a
                {{row.age}}
                ans
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "tx00+r2c",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\",\"@variant\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]],[30,0,[\"variant\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Description\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"description\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Age\\n      \"]],[]],[[[1,\"\\n        il a\\n        \"],[1,[30,1,[\"age\"]]],[1,\"\\n        ans\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));
        // then
        assert.strictEqual(this.element.querySelector('thead').getAttribute('class'), `pix-table-header pix-table-header--${variant}`);
      });
    });
    (0, _qunit.module)('#condensed', function () {
      (0, _qunit.test)('it should not be condensed by default', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn @context={{context}}>
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}}>
              <:header>
                Description
              </:header>
              <:cell>
                {{row.description}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}}>
              <:header>
                Age
              </:header>
              <:cell>
                il a
                {{row.age}}
                ans
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "1XXn35fe",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Description\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"description\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Age\\n      \"]],[]],[[[1,\"\\n        il a\\n        \"],[1,[30,1,[\"age\"]]],[1,\"\\n        ans\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        const mainElement = screen.getByRole('table').closest('div');
        assert.notOk(mainElement.classList.value.includes('pix-table--condensed'));
      });
      (0, _qunit.test)('it should be condensed', async function (assert) {
        // given
        this.condensed = true;

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable
          @caption='Ceci est le caption de notre table'
          @data={{this.data}}
          @condensed={{this.condensed}}
        >
          <:columns as |row context|>
            <PixTableColumn @context={{context}}>
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}}>
              <:header>
                Description
              </:header>
              <:cell>
                {{row.description}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}}>
              <:header>
                Age
              </:header>
              <:cell>
                il a
                {{row.age}}
                ans
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "GbZuxSLm",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\",\"@condensed\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]],[30,0,[\"condensed\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Description\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"description\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Age\\n      \"]],[]],[[[1,\"\\n        il a\\n        \"],[1,[30,1,[\"age\"]]],[1,\"\\n        ans\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        const mainElement = screen.getByRole('table').closest('div');
        assert.ok(mainElement.classList.value.includes('pix-table--condensed'));
      });
    });
    (0, _qunit.module)('#onRowClick', function () {
      (0, _qunit.test)('should call onClick on clicked row', async function (assert) {
        this.onClick = _sinon.default.stub();
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable
          @caption='Ceci est le caption de notre table'
          @data={{this.data}}
          @onRowClick={{this.onClick}}
        >
          <:columns as |row context|>
            <PixTableColumn @context={{context}}>
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}}>
              <:header>
                Description
              </:header>
              <:cell>
                {{row.description}}
              </:cell>
            </PixTableColumn>
            <PixTableColumn @context={{context}}>
              <:header>
                Age
              </:header>
              <:cell>
                il a
                {{row.age}}
                ans
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "wvRuCZ2G",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\",\"@onRowClick\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]],[30,0,[\"onClick\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Description\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"description\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Age\\n      \"]],[]],[[[1,\"\\n        il a\\n        \"],[1,[30,1,[\"age\"]]],[1,\"\\n        ans\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        //when
        await (0, _testHelpers.click)(screen.getByText('jean'));

        // then
        assert.ok(this.onClick.calledWithExactly(this.data[0]));
      });
    });
    (0, _qunit.module)('#sort', function () {
      (0, _qunit.test)('it should call @onSort on click', async function (assert) {
        // given
        const sortStub = _sinon.default.stub();
        this.onSort = sortStub;
        const arialLabelDefaultSort = 'default label sort';
        this.arialLabelDefaultSort = arialLabelDefaultSort;

        // when

        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn
              @context={{context}}
              @onSort={{this.onSort}}
              @sortOrder={{null}}
              @ariaLabelDefaultSort={{this.arialLabelDefaultSort}}
              @ariaLabelSortAsc='asc label sort'
              @ariaLabelSortDesc='desc label sort'
            >
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "0f98riUa",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@onSort\",\"@sortOrder\",\"@ariaLabelDefaultSort\",\"@ariaLabelSortAsc\",\"@ariaLabelSortDesc\"],[[30,2],[30,0,[\"onSort\"]],null,[30,0,[\"arialLabelDefaultSort\"]],\"asc label sort\",\"desc label sort\"]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        await (0, _testHelpers.click)(await screen.getByRole('button', {
          name: arialLabelDefaultSort
        }));
        assert.ok(sortStub.calledOnce);
      });
      (0, _qunit.test)('it should display `ariaLabelSortAsc` when sortOrder is `desc`', async function (assert) {
        // given
        const sortStub = _sinon.default.stub();
        this.onSort = sortStub;
        this.sortOrder = 'desc';
        const ariaLabelSortAsc = "clicker pour trié dans l'ordre desc";
        this.ariaLabelSortAsc = ariaLabelSortAsc;

        // when

        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn
              @context={{context}}
              @onSort={{this.onSort}}
              @sortOrder={{this.sortOrder}}
              @ariaLabelDefaultSort='default label sort'
              @ariaLabelSortAsc={{this.ariaLabelSortAsc}}
              @ariaLabelSortDesc='desc label sort'
            >
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "ioLbVXg2",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@onSort\",\"@sortOrder\",\"@ariaLabelDefaultSort\",\"@ariaLabelSortAsc\",\"@ariaLabelSortDesc\"],[[30,2],[30,0,[\"onSort\"]],[30,0,[\"sortOrder\"]],\"default label sort\",[30,0,[\"ariaLabelSortAsc\"]],\"desc label sort\"]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(await screen.getByRole('button', {
          name: ariaLabelSortAsc
        }));
      });
      (0, _qunit.test)('it should display `ariaLabelSortDesc` when sortOrder is `asc`', async function (assert) {
        // given
        const sortStub = _sinon.default.stub();
        this.onSort = sortStub;
        this.sortOrder = 'asc';
        const ariaLabelSortDesc = "clicker pour trié dans l'ordre asc";
        this.ariaLabelSortDesc = ariaLabelSortDesc;

        // when

        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn
              @context={{context}}
              @onSort={{this.onSort}}
              @sortOrder={{this.sortOrder}}
              @ariaLabelDefaultSort='default label sort'
              @ariaLabelSortDesc={{this.ariaLabelSortDesc}}
              @ariaLabelSortAsc='asc label sort'
            >
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "Fgxo63Ms",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@onSort\",\"@sortOrder\",\"@ariaLabelDefaultSort\",\"@ariaLabelSortDesc\",\"@ariaLabelSortAsc\"],[[30,2],[30,0,[\"onSort\"]],[30,0,[\"sortOrder\"]],\"default label sort\",[30,0,[\"ariaLabelSortDesc\"]],\"asc label sort\"]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(await screen.getByRole('button', {
          name: ariaLabelSortDesc
        }));
      });
      (0, _qunit.test)('it should not display sortlabel when `@onSort` is not provided', async function (assert) {
        // given
        const arialLabelDefaultSort = 'default label sort';
        this.arialLabelDefaultSort = arialLabelDefaultSort;

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
          <:columns as |row context|>
            <PixTableColumn @context={{context}} @ariaLabelDefaultSort={{this.arialLabelDefaultSort}}>
              <:header>
                Nom
              </:header>
              <:cell>
                {{row.name}}
              </:cell>
            </PixTableColumn>
          </:columns>
        </PixTable>
        */
        {
          "id": "B747mEBi",
          "block": "[[[8,[39,0],null,[[\"@caption\",\"@data\"],[\"Ceci est le caption de notre table\",[30,0,[\"data\"]]]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@ariaLabelDefaultSort\"],[[30,2],[30,0,[\"arialLabelDefaultSort\"]]]],[[\"header\",\"cell\"],[[[[1,\"\\n        Nom\\n      \"]],[]],[[[1,\"\\n        \"],[1,[30,1,[\"name\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\",\":header\",\":cell\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        assert.notOk(await screen.queryByRole('button', {
          name: arialLabelDefaultSort
        }));
      });
    });
    (0, _qunit.module)('#warn', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)('it should warn when @variant is incorrect', async function (assert) {
        // when
        this.data = [];
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @data={{this.data}} @caption='A caption' @variant='wrong variant' />
        */
        {
          "id": "UkIcVZS3",
          "block": "[[[8,[39,0],null,[[\"@data\",\"@caption\",\"@variant\"],[[30,0,[\"data\"]],\"A caption\",\"wrong variant\"]],null]],[],false,[\"pix-table\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(warnStub.calledWithExactly('WARNING: PixTable: @variant "wrong variant" should be primary, orga, certif, admin, modulix'));
      });
      (0, _qunit.test)('it should warn when @caption is not provided', async function (assert) {
        // when
        this.data = [];
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @data={{this.data}} />
        */
        {
          "id": "GoUsmRbP",
          "block": "[[[8,[39,0],null,[[\"@data\"],[[30,0,[\"data\"]]]],null]],[],false,[\"pix-table\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(warnStub.calledWithExactly('WARNING: PixTable: @caption is required'));
      });
      (0, _qunit.test)('it should warn when @sortOrder is incorrect', async function (assert) {
        // when
        this.data = [];
        this.onSort = () => {};
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @data={{this.data}} @caption='On sort?'>
          <:columns as |row context|>
            <PixTableColumn @context={{context}} @onSort={{this.onSort}} @sortOrder='eeuuuuh' />
          </:columns>
        </PixTable>
        */
        {
          "id": "iTPHlx8C",
          "block": "[[[8,[39,0],null,[[\"@data\",\"@caption\"],[[30,0,[\"data\"]],\"On sort?\"]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@onSort\",\"@sortOrder\"],[[30,2],[30,0,[\"onSort\"]],\"eeuuuuh\"]],null],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(warnStub.calledWithExactly('WARNING: PixTableColumn: you need to provide a valid sortOrder'));
      });
      (0, _qunit.test)('it should warn when @condensed is incorrect', async function (assert) {
        // when
        this.data = [];
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTable @data={{this.data}} @condensed={{null}} @caption='On condense ?'>
          <:columns as |row context|>
            <PixTableColumn @context={{context}} />
          </:columns>
        </PixTable>
        */
        {
          "id": "3V5kl2mP",
          "block": "[[[8,[39,0],null,[[\"@data\",\"@condensed\",\"@caption\"],[[30,0,[\"data\"]],null,\"On condense ?\"]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\"],[[30,2]]],null],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(warnStub.calledWithExactly('WARNING: PixTable: @condensed must be a boolean, default undefined'));
      });
      [{
        ariaLabelDefaultSort: 'tri',
        ariaLabelSortDesc: 'tri',
        ariaLabelSortAsc: undefined
      }, {
        ariaLabelDefaultSort: 'tri',
        ariaLabelSortDesc: undefined,
        ariaLabelSortAsc: 'tri'
      }, {
        ariaLabelDefaultSort: undefined,
        ariaLabelSortDesc: 'tri',
        ariaLabelSortAsc: 'tri'
      }].forEach(function (sortAriaLabels) {
        const [missingLabel] = Object.entries(sortAriaLabels).find(([, value]) => !value);
        (0, _qunit.test)(`it should warn when ${missingLabel} is not provided`, async function (assert) {
          // when
          this.data = [];
          this.onSort = () => {};
          this.ariaLabelDefaultSort = sortAriaLabels.ariaLabelDefaultSort;
          this.ariaLabelSortDesc = sortAriaLabels.ariaLabelSortDesc;
          this.ariaLabelSortAsc = sortAriaLabels.ariaLabelSortAsc;
          await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixTable @data={{this.data}} @caption='Mon tableau et pas le tien'>
            <:columns as |row context|>
              <PixTableColumn
                @context={{context}}
                @onSort={{this.onSort}}
                @ariaLabelDefaultSort={{this.ariaLabelDefaultSort}}
                @ariaLabelSortDesc={{this.ariaLabelSortDesc}}
                @ariaLabelSortAsc={{this.ariaLabelSortAsc}}
              />
            </:columns>
          </PixTable>
          */
          {
            "id": "ZKHuO1+b",
            "block": "[[[8,[39,0],null,[[\"@data\",\"@caption\"],[[30,0,[\"data\"]],\"Mon tableau et pas le tien\"]],[[\"columns\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@context\",\"@onSort\",\"@ariaLabelDefaultSort\",\"@ariaLabelSortDesc\",\"@ariaLabelSortAsc\"],[[30,2],[30,0,[\"onSort\"]],[30,0,[\"ariaLabelDefaultSort\"]],[30,0,[\"ariaLabelSortDesc\"]],[30,0,[\"ariaLabelSortAsc\"]]]],null],[1,\"\\n  \"]],[1,2]]]]]],[\"row\",\"context\"],false,[\"pix-table\",\":columns\",\"pix-table-column\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-table-test.js",
            "isStrictMode": false
          }));

          // then
          assert.ok(warnStub.calledWithExactly('WARNING: PixTableColumn: parameters `@ariaLabelDefaultSort`, `@ariaLabelSortDesc` and `@ariaLabelSortAsc` are required for sort buttons'));
        });
      });
    });
  });
});
define("dummy/tests/integration/components/pix-tabs-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixTabs', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders PixTabs', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTabs @ariaLabel='Navigation secondaire'><LinkTo @route=''>Lien</LinkTo></PixTabs>
      */
      {
        "id": "kdcDBCj8",
        "block": "[[[8,[39,0],null,[[\"@ariaLabel\"],[\"Navigation secondaire\"]],[[\"default\"],[[[[8,[39,1],null,[[\"@route\"],[\"\"]],[[\"default\"],[[[[1,\"Lien\"]],[]]]]]],[]]]]]],[],false,[\"pix-tabs\",\"link-to\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tabs-test.js",
        "isStrictMode": false
      }));

      // when
      // then
      const navigation = screen.getByRole('navigation', {
        name: 'Navigation secondaire'
      });
      assert.dom((0, _emberTestingLibrary.within)(navigation).getByText('Lien')).exists();
    });
    (0, _qunit.module)('@variant', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)('it should warn when @variant is incorrect', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTabs @variant='PIX UI' @ariaLabel='Navigation secondaire'><LinkTo
            @route=''
          >Lien</LinkTo></PixTabs>
        */
        {
          "id": "EDf+SZ0g",
          "block": "[[[8,[39,0],null,[[\"@variant\",\"@ariaLabel\"],[\"PIX UI\",\"Navigation secondaire\"]],[[\"default\"],[[[[8,[39,1],null,[[\"@route\"],[\"\"]],[[\"default\"],[[[[1,\"Lien\"]],[]]]]]],[]]]]]],[],false,[\"pix-tabs\",\"link-to\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tabs-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(warnStub.calledWithExactly('WARNING: PixTabs: @variant "PIX UI" should be certif, orga or primary'));
      });
    });
    (0, _qunit.module)('@ariaLabel', function (hooks) {
      let warnStub;
      hooks.beforeEach(function () {
        warnStub = _sinon.default.stub(console, 'warn');
      });
      hooks.afterEach(function () {
        warnStub.restore();
      });
      (0, _qunit.test)('it should warn when @ariaLabel is not valid', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTabs @variant='orga' @ariaLabel=''><LinkTo @route=''>Lien</LinkTo></PixTabs>
        */
        {
          "id": "xIOPGeLw",
          "block": "[[[8,[39,0],null,[[\"@variant\",\"@ariaLabel\"],[\"orga\",\"\"]],[[\"default\"],[[[[8,[39,1],null,[[\"@route\"],[\"\"]],[[\"default\"],[[[[1,\"Lien\"]],[]]]]]],[]]]]]],[],false,[\"pix-tabs\",\"link-to\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tabs-test.js",
          "isStrictMode": false
        }));

        // then
        assert.ok(warnStub.calledWithExactly('WARNING: PixTabs: @ariaLabel is required.'));
      });
    });
  });
});
define("dummy/tests/integration/components/pix-tag-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given content', async function (assert) {
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTag>tag text</PixTag>
      */
      {
        "id": "rIHMaVJA",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"tag text\"]],[]]]]]],[],false,[\"pix-tag\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tag-test.js",
        "isStrictMode": false
      }));
      assert.contains('tag text');
    });
    (0, _qunit.test)('it renders with the given color class', async function (assert) {
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTag @color='primary' />
      */
      {
        "id": "WTQzolWm",
        "block": "[[[8,[39,0],null,[[\"@color\"],[\"primary\"]],null]],[],false,[\"pix-tag\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tag-test.js",
        "isStrictMode": false
      }));
      const pixTagElement = this.element.querySelector('.pix-tag');
      assert.ok(pixTagElement.classList.contains('pix-tag--primary'));
    });
    (0, _qunit.test)('it renders with attributes override', async function (assert) {
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTag @color='secondary' aria-label='world' />
      */
      {
        "id": "Vn/jqiv3",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"world\"]],[[\"@color\"],[\"secondary\"]],null]],[],false,[\"pix-tag\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tag-test.js",
        "isStrictMode": false
      }));
      assert.dom(screen.getByLabelText('world')).exists();
    });
    (0, _qunit.test)('it displays remove button when displayRemoveButton is true', async function (assert) {
      this.texts = {
        removeButtonLabel: 'Supprimer le tag'
      };
      this.onRemove = _sinon.default.stub();
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTag @texts={{this.texts}} @onRemove={{this.onRemove}}>tag text</PixTag>
      */
      {
        "id": "8eGzYwOM",
        "block": "[[[8,[39,0],null,[[\"@texts\",\"@onRemove\"],[[30,0,[\"texts\"]],[30,0,[\"onRemove\"]]]],[[\"default\"],[[[[1,\"tag text\"]],[]]]]]],[],false,[\"pix-tag\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tag-test.js",
        "isStrictMode": false
      }));
      assert.dom(screen.getByRole('button', {
        name: this.texts.removeButtonLabel
      })).exists();
    });
    (0, _qunit.test)('it calls onRemove when button is clicked', async function (assert) {
      this.texts = {
        removeButtonLabel: 'Supprimer le tag'
      };
      this.onRemove = _sinon.default.stub();
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTag @texts={{this.texts}} @onRemove={{this.onRemove}}>text</PixTag>
      */
      {
        "id": "k0/GcMVl",
        "block": "[[[8,[39,0],null,[[\"@texts\",\"@onRemove\"],[[30,0,[\"texts\"]],[30,0,[\"onRemove\"]]]],[[\"default\"],[[[[1,\"text\"]],[]]]]]],[],false,[\"pix-tag\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tag-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: this.texts.removeButtonLabel
      }));
      assert.ok(this.onRemove.calledOnce);
    });
  });
});
define("dummy/tests/integration/components/pix-textarea-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "dummy/tests/helpers/fill-in-by-label", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _fillInByLabel, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"dummy/tests/helpers/fill-in-by-label",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | textarea', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const TEXTAREA_SELECTOR = '.pix-textarea textarea';
    const ABBR_SELECTOR = '.mandatory-mark';
    (0, _qunit.test)('it renders PixTextarea with correct id and content', async function (assert) {
      // given
      const newContent = 'Bonjour Pix !';

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTextarea @id='7' @value='old value'><:label>label</:label></PixTextarea>
      */
      {
        "id": "BF27c6I5",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@value\"],[\"7\",\"old value\"]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-textarea-test.js",
        "isStrictMode": false
      }));
      await (0, _fillInByLabel.default)('label', newContent);

      // then
      const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
      assert.contains('Bonjour Pix !');
      assert.strictEqual(textarea.id, '7');
    });
    (0, _qunit.test)('it should count textarea characters length', async function (assert) {
      // given
      const defaultValue = '';
      this.set('value', defaultValue);
      const maxlength = 20;
      this.set('maxlength', maxlength);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTextarea @value={{this.value}} @maxlength={{this.maxlength}} @id='textarea-id'><:label
        >label</:label></PixTextarea>
      */
      {
        "id": "GJMXqjHl",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@maxlength\",\"@id\"],[[30,0,[\"value\"]],[30,0,[\"maxlength\"]],\"textarea-id\"]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-textarea-test.js",
        "isStrictMode": false
      }));
      await (0, _fillInByLabel.default)('label', 'Hello Pix !');

      // then
      const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
      await (0, _testHelpers.triggerEvent)(textarea, 'keyup', {
        code: 'Enter'
      });
      assert.strictEqual(textarea.maxLength, maxlength);
      assert.contains('11 / 20');
    });
    (0, _qunit.test)('it should be possible to add required attributes to PixTextarea', async function (assert) {
      // given
      const defaultValue = '';
      this.set('value', defaultValue);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTextarea @value={{this.value}} required='true'><:label>label</:label></PixTextarea>
      */
      {
        "id": "1LJpKaqD",
        "block": "[[[8,[39,0],[[24,\"required\",\"true\"]],[[\"@value\"],[[30,0,[\"value\"]]]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-textarea-test.js",
        "isStrictMode": false
      }));

      // then
      const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
      assert.true(textarea.required);
    });
    (0, _qunit.test)('it should add requiredLabel message in label', async function (assert) {
      // given
      const requiredLabel = 'Obligatoire';
      this.set('requiredLabel', requiredLabel);

      // when{{
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTextarea @value={{this.value}} @id='pix-textarea' @requiredLabel={{this.requiredLabel}}><:label
        >label</:label></PixTextarea>
      */
      {
        "id": "eQT0VWOM",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@id\",\"@requiredLabel\"],[[30,0,[\"value\"]],\"pix-textarea\",[30,0,[\"requiredLabel\"]]]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-textarea-test.js",
        "isStrictMode": false
      }));

      // then
      const abbr = this.element.querySelector(ABBR_SELECTOR);
      assert.deepEqual(abbr.title, requiredLabel);
    });
    (0, _qunit.test)('it should add required html attributes when given a requiredLabel argument', async function (assert) {
      // given
      const defaultValue = '';
      this.set('value', defaultValue);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTextarea @value={{this.value}} @requiredLabel='Obligatoire' @id='id'><:label
        >label</:label></PixTextarea>
      */
      {
        "id": "J+qF6Lhl",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@requiredLabel\",\"@id\"],[[30,0,[\"value\"]],\"Obligatoire\",\"id\"]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-textarea-test.js",
        "isStrictMode": false
      }));

      // then
      const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
      assert.true(textarea.required);
      assert.strictEqual(textarea.ariaRequired, 'true');
    });
    (0, _qunit.test)('it should be possible to give a label', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTextarea @id='pix-select-with-label'><:label>Décrivez votre problème</:label></PixTextarea>
      */
      {
        "id": "4FReUnpV",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"pix-select-with-label\"]],[[\"label\"],[[[[1,\"Décrivez votre problème\"]],[]]]]]],[],false,[\"pix-textarea\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-textarea-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Décrivez votre problème');
    });
    (0, _qunit.test)('it should be possible to show an error message', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTextarea @id='pix-textarea-with-error' @errorMessage='Veuillez remplir ce champ.'><:label
        >label</:label></PixTextarea>
      */
      {
        "id": "M9XsaupF",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@errorMessage\"],[\"pix-textarea-with-error\",\"Veuillez remplir ce champ.\"]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\",\":label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-textarea-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Veuillez remplir ce champ.');
    });
  });
});
define("dummy/tests/integration/components/pix-toast-container-test", ["@1024pix/ember-testing-library", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | toast-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('when toast service content is not empty', function (hooks) {
      const toasts = [];
      hooks.beforeEach(function () {
        toasts.push({
          message: 'this is a toast',
          type: 'success'
        }, {
          message: 'this is another toast',
          type: 'error'
        });
        const pixToastService = this.owner.lookup('service:pixToast');
        pixToastService.addNotification(toasts[0]);
        pixToastService.addNotification(toasts[1]);
      });
      (0, _qunit.test)('it renders its content as toast component', async function (assert) {
        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixToastContainer @closeButtonAriaLabel='Fermer la notification' />
        */
        {
          "id": "//A2cEkP",
          "block": "[[[8,[39,0],null,[[\"@closeButtonAriaLabel\"],[\"Fermer la notification\"]],null]],[],false,[\"pix-toast-container\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toast-container-test.js",
          "isStrictMode": false
        }));
        // then
        assert.dom(screen.queryByText(toasts[0].message)).exists();
        assert.dom(screen.queryByText(toasts[1].message)).exists();
        assert.strictEqual(screen.getAllByRole('alert').length, 2);
        assert.strictEqual(screen.getAllByText('Fermer la notification').length, 2);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-toast-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | toast', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    let ariaLabel, message, toast;
    hooks.beforeEach(function () {
      ariaLabel = 'ariaLabel';
      message = 'message';
      toast = {
        message,
        type: 'success'
      };
      this.set('toast', toast);
      this.set('closeButtonAriaLabel', ariaLabel);
    });
    (0, _qunit.test)('renders a component with a container, an icon, a message and a "close" icon button', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixToast @toast={{this.toast}} @closeButtonAriaLabel={{this.closeButtonAriaLabel}} />
      */
      {
        "id": "Eyo4FESC",
        "block": "[[[8,[39,0],null,[[\"@toast\",\"@closeButtonAriaLabel\"],[[30,0,[\"toast\"]],[30,0,[\"closeButtonAriaLabel\"]]]],null]],[],false,[\"pix-toast\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toast-test.js",
        "isStrictMode": false
      }));

      // then
      const icons = await screen.getAllByRole('img', {
        hidden: true
      });
      assert.dom(screen.getByRole('alert')).exists();
      assert.dom(screen.queryByText(ariaLabel)).exists();
      assert.dom(screen.queryByText(message)).exists();
      assert.dom(screen.getByRole('button')).exists();
      assert.strictEqual(icons.length, 2);
    });
    (0, _qunit.module)('when user clicks on "close" icon button', function () {
      (0, _qunit.test)('it calls toast service "removeNotification" method', async function (assert) {
        // given
        const pixToastService = this.owner.lookup('service:pixToast');
        pixToastService.removeNotification = _sinon.default.stub();

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixToast @toast={{this.toast}} />
        */
        {
          "id": "pl58mMMg",
          "block": "[[[8,[39,0],null,[[\"@toast\"],[[30,0,[\"toast\"]]]],null]],[],false,[\"pix-toast\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toast-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)(screen.getByRole('button'));

        // then
        _sinon.default.assert.calledOnceWithExactly(pixToastService.removeNotification, toast);
        assert.ok(true);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-toggle-test", ["@1024pix/ember-testing-library", "@1024pix/pix-ui/components/pix-toggle", "@ember/modifier", "@ember/test-helpers", "@glimmer/tracking", "@testing-library/user-event", "ember-qunit", "qunit", "sinon", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_emberTestingLibrary, _pixToggle, _modifier, _testHelpers, _tracking, _userEvent, _emberQunit, _qunit, _sinon, _component, _templateFactory, _templateOnly) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@1024pix/pix-ui/components/pix-toggle",0,"@ember/modifier",0,"@ember/test-helpers",0,"@glimmer/tracking",0,"@testing-library/user-event",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  (0, _qunit.module)('Integration | Component | toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it changes state when the user activates it', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <PixToggle>Recevoir la newsletter</PixToggle>
            
      */
      {
        "id": "JcNq6CY3",
        "block": "[[[1,\"\\n        \"],[8,[32,0],null,null,[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n      \"]],[],false,[]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "scope": () => [_pixToggle.default],
        "isStrictMode": true
      }), (0, _templateOnly.default)(undefined, undefined)));
      const toggle = screen.getByRole('switch', {
        name: 'Recevoir la newsletter',
        checked: false
      });
      // when
      await (0, _testHelpers.click)(toggle);
      // then
      assert.ok(screen.getByRole('switch', {
        name: 'Recevoir la newsletter',
        checked: true
      }));
    });
    (0, _qunit.test)('it changes state when the user deactivates it', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <PixToggle @checked={{true}}>Recevoir la newsletter</PixToggle>
            
      */
      {
        "id": "NZ071ApM",
        "block": "[[[1,\"\\n        \"],[8,[32,0],null,[[\"@checked\"],[true]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n      \"]],[],false,[]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "scope": () => [_pixToggle.default],
        "isStrictMode": true
      }), (0, _templateOnly.default)(undefined, undefined)));
      const toggle = screen.getByRole('switch', {
        name: 'Recevoir la newsletter',
        checked: true
      });
      // when
      await (0, _testHelpers.click)(toggle);
      // then
      assert.ok(screen.getByRole('switch', {
        name: 'Recevoir la newsletter',
        checked: false
      }));
    });
    (0, _qunit.module)('when the user presses the space bar', function () {
      (0, _qunit.test)('it changes state', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle>Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "TUwl6U1k",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,null,[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        const toggle = screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: false
        });
        await (0, _testHelpers.focus)(toggle);
        // when
        await _userEvent.default.keyboard('[Space]');
        // then
        assert.ok(screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: true
        }));
      });
    });
    (0, _qunit.test)('it notifies the consumer when the user changes its state', async function (assert) {
      // given
      const onChange = _sinon.default.stub();
      const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <PixToggle {{on "change" onChange}}>Recevoir la newsletter</PixToggle>
            
      */
      {
        "id": "52indhx/",
        "block": "[[[1,\"\\n        \"],[8,[32,0],[[4,[32,1],[\"change\",[32,2]],null]],null,[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n      \"]],[],false,[]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "scope": () => [_pixToggle.default, _modifier.on, onChange],
        "isStrictMode": true
      }), (0, _templateOnly.default)(undefined, undefined)));
      // when
      await (0, _testHelpers.click)(screen.getByRole('switch', {
        name: 'Recevoir la newsletter'
      }));
      // then
      assert.true(onChange.calledOnce);
    });
    (0, _qunit.module)('label', function () {
      (0, _qunit.module)('when the user clicks on the label', function () {
        (0, _qunit.test)('it changes state', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixToggle>Recevoir la newsletter</PixToggle>
                    
          */
          {
            "id": "VHQS81/P",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,null,[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
            "scope": () => [_pixToggle.default],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          screen.getByRole('switch', {
            name: 'Recevoir la newsletter',
            checked: false
          });
          // when
          await (0, _testHelpers.click)(screen.getByText('Recevoir la newsletter'));
          // then
          assert.ok(screen.getByRole('switch', {
            name: 'Recevoir la newsletter',
            checked: true
          }));
        });
      });
      (0, _qunit.module)('when the consumer provides no visible label', function () {
        (0, _qunit.test)('it can be named and operated', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixToggle aria-label="Recevoir la newsletter" />
          */
          {
            "id": "voAIq7D7",
            "block": "[[[8,[32,0],[[24,\"aria-label\",\"Recevoir la newsletter\"]],null,null]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
            "scope": () => [_pixToggle.default],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          const toggle = screen.getByRole('switch', {
            name: 'Recevoir la newsletter',
            checked: false
          });
          // when
          await (0, _testHelpers.click)(toggle);
          // then
          assert.ok(screen.getByRole('switch', {
            name: 'Recevoir la newsletter',
            checked: true
          }));
        });
      });
    });
    (0, _qunit.module)('@checked', function () {
      var _class, _descriptor;
      let Consumer = (_class = class Consumer {
        constructor(isChecked) {
          _initializerDefineProperty(this, "isChecked", _descriptor, this);
          this.isChecked = isChecked;
        }
      }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "isChecked", [_tracking.tracked], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class);
      (0, _qunit.test)('it turns on when the consumer turns it on', async function (assert) {
        // given
        const consumer = new Consumer(false);
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @checked={{consumer.isChecked}}>Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "Uc429al6",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@checked\"],[[32,1,[\"isChecked\"]]]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default, consumer],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: false
        });
        // when
        consumer.isChecked = true;
        await (0, _testHelpers.settled)();
        // then
        assert.ok(screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: true
        }));
      });
      (0, _qunit.test)('it turns off when the consumer turns it off', async function (assert) {
        // given
        const consumer = new Consumer(true);
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @checked={{consumer.isChecked}}>Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "Uc429al6",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@checked\"],[[32,1,[\"isChecked\"]]]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default, consumer],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: true
        });
        // when
        consumer.isChecked = false;
        await (0, _testHelpers.settled)();
        // then
        assert.ok(screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: false
        }));
      });
    });
    (0, _qunit.module)('@id', function () {
      (0, _qunit.test)('it gives the switch the id provided by the consumer', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @id="newsletter-toggle">Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "/9IAra99",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@id\"],[\"newsletter-toggle\"]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.dom(screen.getByRole('switch', {
          name: 'Recevoir la newsletter'
        })).hasAttribute('id', 'newsletter-toggle');
      });
      (0, _qunit.module)('when no id is set by the consumer', function () {
        (0, _qunit.test)('it activates only the switch whose label the user clicks', async function (assert) {
          // given
          const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <PixToggle>Recevoir la newsletter</PixToggle>
                      <PixToggle>Recevoir les actualités</PixToggle>
                    
          */
          {
            "id": "YEBvoqyo",
            "block": "[[[1,\"\\n            \"],[8,[32,0],null,null,[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n            \"],[8,[32,0],null,null,[[\"default\"],[[[[1,\"Recevoir les actualités\"]],[]]]]],[1,\"\\n          \"]],[],false,[]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
            "scope": () => [_pixToggle.default],
            "isStrictMode": true
          }), (0, _templateOnly.default)(undefined, undefined)));
          // when
          await (0, _testHelpers.click)(screen.getByText('Recevoir les actualités'));
          // then
          assert.ok(screen.getByRole('switch', {
            name: 'Recevoir les actualités',
            checked: true
          }));
          assert.ok(screen.queryByRole('switch', {
            name: 'Recevoir la newsletter',
            checked: false
          }));
        });
      });
    });
    (0, _qunit.module)('@class', function () {
      (0, _qunit.test)('it applies the given class to the whole component', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @class="newsletter-toggle">Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "l0ZS1DWB",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@class\"],[\"newsletter-toggle\"]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        const toggle = screen.getByRole('switch', {
          name: 'Recevoir la newsletter'
        });
        const styledElement = this.element.querySelector('.newsletter-toggle');
        assert.true(styledElement.contains(toggle));
        assert.dom(styledElement).hasText('Recevoir la newsletter');
      });
    });
    (0, _qunit.module)('@isDisabled', function () {
      (0, _qunit.test)('it does not change state when the user activates it', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @checked={{true}} @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "QV2ksysU",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@checked\",\"@isDisabled\"],[true,true]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        const toggle = screen.getByRole('switch', {
          name: 'Recevoir la newsletter'
        });
        // when
        await (0, _testHelpers.click)(toggle);
        // then
        assert.true(toggle.checked);
      });
      (0, _qunit.test)('it exposes the disabled state to assistive technologies', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "vL3uGTgU",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@isDisabled\"],[true]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        assert.strictEqual(screen.getByRole('switch', {
          name: 'Recevoir la newsletter'
        }).ariaDisabled, 'true');
      });
      (0, _qunit.test)('it does not change state when the user activates the label', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @checked={{true}} @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "QV2ksysU",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@checked\",\"@isDisabled\"],[true,true]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        const toggle = screen.getByRole('switch', {
          name: 'Recevoir la newsletter'
        });
        // when
        await (0, _testHelpers.click)(screen.getByText('Recevoir la newsletter'));
        // then
        assert.true(toggle.checked);
      });
      (0, _qunit.test)('it stays reachable with the keyboard', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "vL3uGTgU",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@isDisabled\"],[true]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        const toggle = screen.getByRole('switch', {
          name: 'Recevoir la newsletter'
        });
        // when
        await (0, _testHelpers.focus)(toggle);
        // then
        assert.dom(toggle).isFocused();
      });
      (0, _qunit.test)('it does not change state when the user presses the space bar', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @checked={{true}} @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
                
        */
        {
          "id": "QV2ksysU",
          "block": "[[[1,\"\\n          \"],[8,[32,0],null,[[\"@checked\",\"@isDisabled\"],[true,true]],[[\"default\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        const toggle = screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: true
        });
        await (0, _testHelpers.focus)(toggle);
        // when
        await _userEvent.default.keyboard('[Space]');
        // then
        assert.ok(screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: true
        }));
      });
      (0, _qunit.test)('it does not notify the consumer when the user tries to change its state', async function (assert) {
        // given
        const onChange = _sinon.default.stub();
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @checked={{true}} @isDisabled={{true}} {{on "change" onChange}}>
                    Recevoir la newsletter
                  </PixToggle>
                
        */
        {
          "id": "zsRoGqPy",
          "block": "[[[1,\"\\n          \"],[8,[32,0],[[4,[32,1],[\"change\",[32,2]],null]],[[\"@checked\",\"@isDisabled\"],[true,true]],[[\"default\"],[[[[1,\"\\n            Recevoir la newsletter\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default, _modifier.on, onChange],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // when
        await (0, _testHelpers.click)(screen.getByRole('switch', {
          name: 'Recevoir la newsletter'
        }));
        // then
        assert.false(onChange.called);
      });
    });
    (0, _qunit.module)('@size', function () {
      (0, _qunit.test)('it renders a bigger switch when the size is large', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <PixToggle @size="large" aria-label="Recevoir la newsletter" />
                  <PixToggle aria-label="Recevoir les actualités" />
                
        */
        {
          "id": "Iq9fquAc",
          "block": "[[[1,\"\\n          \"],[8,[32,0],[[24,\"aria-label\",\"Recevoir la newsletter\"]],[[\"@size\"],[\"large\"]],null],[1,\"\\n          \"],[8,[32,0],[[24,\"aria-label\",\"Recevoir les actualités\"]],null,null],[1,\"\\n        \"]],[],false,[]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
          "scope": () => [_pixToggle.default],
          "isStrictMode": true
        }), (0, _templateOnly.default)(undefined, undefined)));
        // then
        const large = screen.getByRole('switch', {
          name: 'Recevoir la newsletter'
        });
        const regular = screen.getByRole('switch', {
          name: 'Recevoir les actualités'
        });
        assert.true(large.getBoundingClientRect().width > regular.getBoundingClientRect().width);
      });
    });
  });
});
define("dummy/tests/integration/components/pix-tooltip-test", ["@1024pix/ember-testing-library", "@testing-library/user-event", "ember-qunit", "qunit", "@ember/template-factory"], function (_emberTestingLibrary, _userEvent, _emberQunit, _qunit, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@testing-library/user-event",0,"ember-qunit",0,"qunit",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-tooltip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const TOOLTIP_SELECTOR = '.pix-tooltip__content';
    const text = 'Un texte à afficher au survol du contenu de la tooltip';
    (0, _qunit.test)('it renders the tooltip text', async function (assert) {
      // given
      this.set('text', text);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTooltip>
        <:triggerElement>
          template block text
        </:triggerElement>
      
        <:tooltip>
          {{this.text}}
        </:tooltip>
      </PixTooltip>
      */
      {
        "id": "cwLpFdEU",
        "block": "[[[8,[39,0],null,null,[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    template block text\\n  \"]],[]],[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":triggerElement\",\":tooltip\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains(text);
    });
    (0, _qunit.test)('it renders only the inner data if there is no tooltip text', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTooltip>
        <:triggerElement>
          template block text
        </:triggerElement>
      </PixTooltip>
      */
      {
        "id": "By68HBAL",
        "block": "[[[8,[39,0],null,null,[[\"triggerElement\"],[[[[1,\"\\n    template block text\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":triggerElement\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
        "isStrictMode": false
      }));

      // then
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      assert.contains('template block text');
      assert.notOk(tooltipContentElement);
    });
    (0, _qunit.test)('it renders only the inner data if hide is true', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTooltip @hide={{true}}>
        <:triggerElement>
          template block text
        </:triggerElement>
        <:tooltip></:tooltip>
      </PixTooltip>
      */
      {
        "id": "6tV2qoKQ",
        "block": "[[[8,[39,0],null,[[\"@hide\"],[true]],[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    template block text\\n  \"]],[]],[[],[]]]]]],[],false,[\"pix-tooltip\",\":triggerElement\",\":tooltip\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
        "isStrictMode": false
      }));

      // then
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      assert.contains('template block text');
      assert.notOk(tooltipContentElement);
    });
    (0, _qunit.module)('trigger element tabindex', function () {
      const TRIGGER_ELEMENT_SELECTOR = '.pix-tooltip__trigger-element';
      (0, _qunit.test)('it adds a tabindex to the trigger element by default', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip>
          <:triggerElement>
            template block text
          </:triggerElement>
          <:tooltip>Some tooltip</:tooltip>
        </PixTooltip>
        */
        {
          "id": "7hu31Ivf",
          "block": "[[[8,[39,0],null,null,[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    template block text\\n  \"]],[]],[[[1,\"Some tooltip\"]],[]]]]]],[],false,[\"pix-tooltip\",\":triggerElement\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(TRIGGER_ELEMENT_SELECTOR).hasAttribute('tabindex', '0');
      });
      (0, _qunit.test)('it does not add a tabindex to the trigger element when it is already focusable', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip @isTriggerElementFocusable={{true}}>
          <:triggerElement>
            template block text
          </:triggerElement>
          <:tooltip>Some tooltip</:tooltip>
        </PixTooltip>
        */
        {
          "id": "o6sdJT7g",
          "block": "[[[8,[39,0],null,[[\"@isTriggerElementFocusable\"],[true]],[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    template block text\\n  \"]],[]],[[[1,\"Some tooltip\"]],[]]]]]],[],false,[\"pix-tooltip\",\":triggerElement\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(TRIGGER_ELEMENT_SELECTOR).doesNotHaveAttribute('tabindex');
      });
      (0, _qunit.test)('it adds a tabindex to the trigger element when isTriggerElementFocusable is false', async function (assert) {
        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip @isTriggerElementFocusable={{false}}>
          <:triggerElement>
            template block text
          </:triggerElement>
          <:tooltip>Some tooltip</:tooltip>
        </PixTooltip>
        */
        {
          "id": "21H8tQvB",
          "block": "[[[8,[39,0],null,[[\"@isTriggerElementFocusable\"],[false]],[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    template block text\\n  \"]],[]],[[[1,\"Some tooltip\"]],[]]]]]],[],false,[\"pix-tooltip\",\":triggerElement\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(TRIGGER_ELEMENT_SELECTOR).hasAttribute('tabindex', '0');
      });
    });
    (0, _qunit.test)('it dismissed tooltip on escape keyup', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixTooltip @position='bottom'>
        <:triggerElement>
          <PixButton>Trigger</PixButton>
        </:triggerElement>
        <:tooltip>Some tooltip</:tooltip>
      </PixTooltip>
      */
      {
        "id": "u+oE+muk",
        "block": "[[[8,[39,0],null,[[\"@position\"],[\"bottom\"]],[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    \"],[8,[39,2],null,null,[[\"default\"],[[[[1,\"Trigger\"]],[]]]]],[1,\"\\n  \"]],[]],[[[1,\"Some tooltip\"]],[]]]]]],[],false,[\"pix-tooltip\",\":triggerElement\",\"pix-button\",\":tooltip\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
        "isStrictMode": false
      }));

      // when
      await screen.getByRole('button', {
        name: 'Trigger'
      }).focus();
      await _userEvent.default.keyboard('[Escape]');

      // then
      assert.dom('.pix-tooltip').doesNotHaveClass('pix-tooltip--visible');
    });
    (0, _qunit.module)('tooltip position', function () {
      const TOOLTIP_POSITION_SELECTOR = 'pix-tooltip__content--';
      ['top', 'top-left', 'top-right', 'right', 'left', 'bottom', 'bottom-left', 'bottom-right'].forEach(function (position) {
        (0, _qunit.test)(`it can render ${position}`, async function (assert) {
          // given
          this.set('text', text);
          this.set('position', position);

          // when
          await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixTooltip @position={{this.position}}>
            <:tooltip>
              {{this.text}}
            </:tooltip>
          </PixTooltip>
          */
          {
            "id": "Q5/7/7hT",
            "block": "[[[8,[39,0],null,[[\"@position\"],[[30,0,[\"position\"]]]],[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":tooltip\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
            "isStrictMode": false
          }));

          // then
          const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
          assert.ok(tooltipContentElement.classList.toString().includes(TOOLTIP_POSITION_SELECTOR + position));
        });
      });
    });
    (0, _qunit.module)('tooltip light display', function () {
      const LIGHT_CLASS = 'pix-tooltip__content--light';
      (0, _qunit.test)('it can render in dark mode', async function (assert) {
        // given
        this.set('text', text);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
        */
        {
          "id": "MvgyrDq+",
          "block": "[[[8,[39,0],null,null,[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));

        // then
        const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
        const tooltipContentClasses = tooltipContentElement.classList.toString().trim();
        assert.false(tooltipContentClasses.includes(LIGHT_CLASS));
      });
      (0, _qunit.test)('it can render in light mode', async function (assert) {
        // given
        this.set('text', text);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip @isLight={{true}}>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
        */
        {
          "id": "imvpI6ou",
          "block": "[[[8,[39,0],null,[[\"@isLight\"],[true]],[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));

        // then
        const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
        assert.ok(tooltipContentElement.classList.toString().includes(LIGHT_CLASS));
      });
    });
    (0, _qunit.module)('tooltip inline display', function () {
      const INLINE_CLASS = 'pix-tooltip__content--inline';
      (0, _qunit.test)('it can render in multiple lines', async function (assert) {
        // given
        this.set('text', text);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
        */
        {
          "id": "MvgyrDq+",
          "block": "[[[8,[39,0],null,null,[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));
        const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
        const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

        // then
        assert.false(tooltipContentClasses.includes(INLINE_CLASS));
      });
      (0, _qunit.test)('it can render inline', async function (assert) {
        // given
        this.set('text', text);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip @isInline={{true}}>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
        */
        {
          "id": "t53fCs/B",
          "block": "[[[8,[39,0],null,[[\"@isInline\"],[true]],[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));

        // then
        const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
        assert.ok(tooltipContentElement.classList.toString().includes(INLINE_CLASS));
      });
    });
    (0, _qunit.module)('tooltip wide display', function () {
      const WIDE_CLASS = 'pix-tooltip__content--wide';
      (0, _qunit.test)('it can render not widely', async function (assert) {
        // given
        this.set('text', text);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
        */
        {
          "id": "MvgyrDq+",
          "block": "[[[8,[39,0],null,null,[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));

        // then
        const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
        const tooltipContentClasses = tooltipContentElement.classList.toString().trim();
        assert.false(tooltipContentClasses.includes(WIDE_CLASS));
      });
      (0, _qunit.test)('it can render widely', async function (assert) {
        // given
        this.set('text', text);

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixTooltip @isWide={{true}}>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
        */
        {
          "id": "aEeZc9Is",
          "block": "[[[8,[39,0],null,[[\"@isWide\"],[true]],[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\",\":tooltip\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
          "isStrictMode": false
        }));

        // then
        const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
        assert.ok(tooltipContentElement.classList.toString().includes(WIDE_CLASS));
      });
    });
  });
});
define("dummy/tests/integration/modifiers/on-escape-action-test", ["@1024pix/ember-testing-library", "@ember/test-helpers", "ember-qunit", "qunit", "sinon", "@ember/template-factory"], function (_emberTestingLibrary, _testHelpers, _emberQunit, _qunit, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"ember-qunit",0,"qunit",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Modifier | on-escape-action', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it fires action on escape keyup', async function (assert) {
      // given
      this.onCloseCallback = _sinon.default.stub();

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <div class='escapable' {{on-escape-action this.onCloseCallback}}>content</div>
      */
      {
        "id": "CuayAqi4",
        "block": "[[[11,0],[24,0,\"escapable\"],[4,[38,1],[[30,0,[\"onCloseCallback\"]]],null],[12],[1,\"content\"],[13]],[],false,[\"div\",\"on-escape-action\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/modifiers/on-escape-action-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerKeyEvent)('.escapable', 'keyup', 'Escape');

      // then
      assert.ok(this.onCloseCallback.calledOnce);
    });
  });
});
define("dummy/tests/test-helper", ["@ember/test-helpers", "dummy/app", "dummy/config/environment", "ember-qunit", "ember-qunit/test-loader", "qunit", "qunit-dom", "sinon", "dummy/tests/helpers/contains"], function (_testHelpers, _app, _environment, _emberQunit, _testLoader, QUnit, _qunitDom, _sinon, _contains) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@ember/test-helpers",0,"dummy/app",0,"dummy/config/environment",0,"ember-qunit",0,"ember-qunit/test-loader",0,"qunit",0,"qunit-dom",0,"sinon",0,"dummy/tests/helpers/contains"eaimeta@70e063a35619d71f
  // Restore all sinon stubs after each test to avoid side-effects
  QUnit.hooks.afterEach(function () {
    _sinon.default.restore();
  });
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _testLoader.loadTests)();
  (0, _emberQunit.start)();
  QUnit.assert.contains = _contains.contains;
});
define("dummy/tests/unit/services/pix-toast-test", ["@1024pix/pix-ui/services/pix-toast", "ember-qunit", "qunit", "sinon"], function (_pixToast, _emberQunit, _qunit, _sinon) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@1024pix/pix-ui/services/pix-toast",0,"ember-qunit",0,"qunit",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | toast', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    let toastService;
    let warnStub;
    hooks.beforeEach(function () {
      toastService = new _pixToast.default();
      warnStub = _sinon.default.stub(console, 'warn');
    });
    hooks.afterEach(function () {
      warnStub.restore();
    });
    (0, _qunit.module)('#addNotification', function () {
      (0, _qunit.test)('it adds a new toast object in content array', function (assert) {
        // given
        const notification = {
          message: 'test success message',
          type: 'success'
        };

        // when
        toastService.addNotification(notification);

        // then
        assert.strictEqual(toastService.content.length, 1);
        assert.deepEqual(toastService.content, [notification]);
      });
      (0, _qunit.module)("when there is no 'message' in the parameters", function () {
        (0, _qunit.test)("it calls 'EmberDebug.warn' method and does not insert invalid notification", function (assert) {
          // given
          const invalidNotification = {
            type: 'error'
          };
          // when
          toastService.addNotification(invalidNotification);

          // then
          _sinon.default.assert.calledWith(warnStub, 'WARNING: Message mandatory attribute is missing');
          assert.ok(warnStub.calledOnce);
          assert.strictEqual(toastService.content.length, 0);
        });
      });
      (0, _qunit.module)('when toast to be added already exist in content array', function () {
        (0, _qunit.test)('it removes existing toast and insert the new one at the end of the content array', function (assert) {
          // given
          const message = 'message';
          const errorNotification = {
            message,
            type: 'error'
          };
          const informationNotification = {
            message,
            type: 'information'
          };
          toastService.addNotification(errorNotification);
          toastService.addNotification(informationNotification);

          // when
          toastService.addNotification(errorNotification);

          // then
          assert.strictEqual(toastService.content.length, 2);
          assert.deepEqual(toastService.content, [informationNotification, errorNotification]);
        });
      });
    });
    (0, _qunit.module)('#exists', function (hooks) {
      let errorNotification, informationNotification;
      hooks.beforeEach(function () {
        const message = 'message';
        errorNotification = {
          message,
          type: 'error'
        };
        informationNotification = {
          message,
          type: 'information'
        };
      });
      (0, _qunit.test)('it returns true when toast in parameter exist in content array', function (assert) {
        // given
        toastService.addNotification(errorNotification);
        toastService.addNotification(informationNotification);

        // when
        // then
        assert.true(toastService.exists(informationNotification));
      });
      (0, _qunit.test)('it returns false when toast in parameter does not exist in content array', function (assert) {
        // given
        toastService.addNotification(errorNotification);

        // when
        // then
        assert.false(toastService.exists(informationNotification));
      });
    });
    (0, _qunit.module)('#sendErrorNotification', function () {
      (0, _qunit.test)("it adds a new toast object with type 'error' in content array", function (assert) {
        // given
        const notification = {
          message: 'test success message'
        };

        // when
        toastService.sendErrorNotification(notification);

        // then
        const expectedContent = {
          ...notification,
          type: 'error'
        };
        assert.strictEqual(toastService.content.length, 1);
        assert.deepEqual(toastService.content, [expectedContent]);
      });
    });
    (0, _qunit.module)('#sendSuccessNotification', function () {
      (0, _qunit.test)("it adds a new toast object with type 'success' in content array", function (assert) {
        // given
        const notification = {
          message: 'test success message'
        };

        // when
        toastService.sendSuccessNotification(notification);

        // then
        const expectedContent = {
          ...notification,
          type: 'success'
        };
        assert.strictEqual(toastService.content.length, 1);
        assert.deepEqual(toastService.content, [expectedContent]);
      });
    });
    (0, _qunit.module)('#sendInformationNotification', function () {
      (0, _qunit.test)("it adds a new toast object with type 'information' in content array", function (assert) {
        // given
        const notification = {
          message: 'test success message'
        };

        // when
        toastService.sendInformationNotification(notification);

        // then
        const expectedContent = {
          ...notification,
          type: 'information'
        };
        assert.strictEqual(toastService.content.length, 1);
        assert.deepEqual(toastService.content, [expectedContent]);
      });
    });
    (0, _qunit.module)('#sendWarningNotification', function () {
      (0, _qunit.test)("it adds a new toast object with type 'warning' in content array", function (assert) {
        // given
        const notification = {
          message: 'test success message'
        };

        // when
        toastService.sendWarningNotification(notification);

        // then
        const expectedContent = {
          ...notification,
          type: 'warning'
        };
        assert.strictEqual(toastService.content.length, 1);
        assert.deepEqual(toastService.content, [expectedContent]);
      });
    });
    (0, _qunit.module)('#removeNotification', function () {
      (0, _qunit.test)('it removes correct toast notification from content array', function (assert) {
        // given
        const message = 'message';
        const notificationToBeRemove = {
          message,
          type: 'success'
        };
        const errorNotification = {
          message,
          type: 'error'
        };
        const informationNotification = {
          message,
          type: 'information'
        };
        const warningNotification = {
          message,
          type: 'warning'
        };
        toastService.addNotification(notificationToBeRemove);
        toastService.addNotification(errorNotification);
        toastService.addNotification(informationNotification);
        toastService.addNotification(warningNotification);

        // when
        toastService.removeNotification(notificationToBeRemove);

        // then
        assert.strictEqual(toastService.content.length, 3);
        assert.deepEqual(toastService.content, [errorNotification, informationNotification, warningNotification]);
      });
      (0, _qunit.module)('when toast notification does not exist', function () {
        (0, _qunit.test)('it does nothing', function (assert) {
          // given
          const message = 'message';
          const notExistingNotification = {
            message,
            type: 'success'
          };
          const errorNotification = {
            message,
            type: 'error'
          };
          toastService.addNotification(errorNotification);

          // when
          toastService.removeNotification(notExistingNotification);

          // then
          assert.strictEqual(toastService.content.length, 1);
          assert.deepEqual(toastService.content, [errorNotification]);
        });
      });
      (0, _qunit.module)('when toast notification in parameter is undefined', function () {
        (0, _qunit.test)('it does nothing', function (assert) {
          // given
          const message = 'message';
          const errorNotification = {
            message,
            type: 'error'
          };
          toastService.addNotification(errorNotification);

          // when
          toastService.removeNotification(undefined);

          // then
          assert.strictEqual(toastService.content.length, 1);
          assert.deepEqual(toastService.content, [errorNotification]);
        });
      });
    });
    (0, _qunit.module)('#removeAllNotifications', function () {
      (0, _qunit.test)('Removes all notification from content array', function (assert) {
        // given
        const message = 'message';
        const notificationToBeRemove = {
          message,
          type: 'success'
        };
        const errorNotification = {
          message,
          type: 'error'
        };
        const informationNotification = {
          message,
          type: 'information'
        };
        const warningNotification = {
          message,
          type: 'warning'
        };
        toastService.addNotification(notificationToBeRemove);
        toastService.addNotification(errorNotification);
        toastService.addNotification(informationNotification);
        toastService.addNotification(warningNotification);

        // when
        toastService.removeAllNotifications();

        // then
        assert.strictEqual(toastService.content.length, 0);
      });
    });
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
