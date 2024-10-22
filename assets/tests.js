'use strict';

define("dummy/tests/acceptance/pix-modal-page-test", ["@ember/test-helpers", "@1024pix/ember-testing-library", "ember-qunit", "qunit", "dummy/tests/helpers/wait-for"], function (_testHelpers, _emberTestingLibrary, _emberQunit, _qunit, _waitFor) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"dummy/tests/helpers/wait-for"eaimeta@70e063a35619d71f
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
define("dummy/tests/acceptance/pix-sidebar-page-test", ["@ember/test-helpers", "@1024pix/ember-testing-library", "ember-qunit", "qunit", "dummy/tests/helpers/wait-for"], function (_testHelpers, _emberTestingLibrary, _emberQunit, _qunit, _waitFor) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"ember-qunit",0,"qunit",0,"dummy/tests/helpers/wait-for"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | PixSidebarPageTest', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('Should redirect to link', async function (assert) {
      // given
      const screen = await (0, _emberTestingLibrary.visit)('/sidebar');
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: 'Ouvrir la sidebar'
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
define("dummy/tests/helpers/create-glimmer-component", ["exports", "@ember/test-helpers", "@glimmer/component/-private/ember-component-manager"], function (_exports, _testHelpers, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = createComponent;
  0; //eaimeta@70e063a35619d71f0,"@ember/test-helpers",0,"@glimmer/component/-private/ember-component-manager",0,"@embroider/macros"eaimeta@70e063a35619d71f
  function createComponent(lookupPath, named = {}) {
    const {
      owner
    } = (0, _testHelpers.getContext)();
    let componentClass;
    {
      const result = owner.factoryFor(`component:${lookupPath}`);
      componentClass = result.class;
    }
    const componentManager = new _emberComponentManager.default(owner);
    return componentManager.createComponent(componentClass, {
      named
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
  0; //eaimeta@70e063a35619d71f0,"@1024pix/ember-testing-library",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  async function waitForDialog() {
    const screen = await (0, _emberTestingLibrary.getScreen)();
    await (0, _testHelpers.waitUntil)(() => {
      try {
        screen.getByRole('dialog');
        return true;
      } catch {
        return false;
      }
    });
  }
});
define("dummy/tests/integration/components/pix-background-header-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(backgroundHeaderElement.className, 'pix-background-header');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(backgroundElement.className, 'pix-background-header__background');
    });
    (0, _qunit.module)('when there is PixBloc inside PixBackgroundHeader component', function () {
      (0, _qunit.test)('first PixBlock render', async function (assert) {
        // given
        this.set('shadowWeight', 'heavy');

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixBackgroundHeader>
          <PixBlock @shadow={{this.shadowWeight}}>Je suis un beau bloc foncé</PixBlock>
          <PixBlock>Je suis un deuxième bloc</PixBlock>
        </PixBackgroundHeader>
        */
        {
          "id": "D+AhAvmb",
          "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@shadow\"],[[30,0,[\"shadowWeight\"]]]],[[\"default\"],[[[[1,\"Je suis un beau bloc foncé\"]],[]]]]],[1,\"\\n  \"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"Je suis un deuxième bloc\"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"pix-background-header\",\"pix-block\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-background-header-test.js",
          "isStrictMode": false
        }));
        const firstBlockElement = this.element.querySelector(BACKGROUND_CONTENT_SELECTOR).children[0];
        const lastBlockElement = this.element.querySelector(BACKGROUND_CONTENT_SELECTOR).children[1];

        // then
        // TODO: Fix this the next time the file is edited.
        // eslint-disable-next-line qunit/no-assert-equal
        assert.equal(firstBlockElement.className, 'pix-block pix-block--shadow-heavy');
        assert.contains('Je suis un beau bloc foncé');
        // TODO: Fix this the next time the file is edited.
        // eslint-disable-next-line qunit/no-assert-equal
        assert.equal(lastBlockElement.className, 'pix-block pix-block--shadow-light');
        assert.contains('Je suis un deuxième bloc');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-banner-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | Pix Banner', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const COMPONENT_SELECTOR = '.pix-banner';
    (0, _qunit.test)('it renders the default PixBanner', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner>
        Mon texte
      </PixBanner>
      */
      {
        "id": "GMh43EDo",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  Mon texte\\n\"]],[]]]]]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Mon texte');
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--information');
    });
    (0, _qunit.test)('it renders the PixBanner with type warning', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner @type='warning'>
        Mon texte
      </PixBanner>
      */
      {
        "id": "noMI5FUD",
        "block": "[[[8,[39,0],null,[[\"@type\"],[\"warning\"]],[[\"default\"],[[[[1,\"\\n  Mon texte\\n\"]],[]]]]]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--warning');
    });
    (0, _qunit.test)('it renders the PixBanner with type error', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner @type='error'>
        Mon texte
      </PixBanner>
      */
      {
        "id": "d3wiXU0k",
        "block": "[[[8,[39,0],null,[[\"@type\"],[\"error\"]],[[\"default\"],[[[[1,\"\\n  Mon texte\\n\"]],[]]]]]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--error');
    });
    (0, _qunit.test)('it renders the PixBanner with type communication', async function (assert) {
      // given

      this.set('type', 'communication');

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner @color={{this.color}} @type={{this.type}} />
      */
      {
        "id": "AFOCpzpS",
        "block": "[[[8,[39,0],null,[[\"@color\",\"@type\"],[[30,0,[\"color\"]],[30,0,[\"type\"]]]],null]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom('.pix-banner--communication').exists();
    });
    (0, _qunit.test)('it renders the PixBanner with type communication-orga', async function (assert) {
      // given

      this.set('type', 'communication-orga');

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner @color={{this.color}} @type={{this.type}} />
      */
      {
        "id": "AFOCpzpS",
        "block": "[[[8,[39,0],null,[[\"@color\",\"@type\"],[[30,0,[\"color\"]],[30,0,[\"type\"]]]],null]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom('.pix-banner--communication-orga').exists();
    });
    (0, _qunit.test)('it renders the PixBanner  with type communication-certif', async function (assert) {
      // given

      this.set('type', 'communication-certif');

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner @color={{this.color}} @type={{this.type}} />
      */
      {
        "id": "AFOCpzpS",
        "block": "[[[8,[39,0],null,[[\"@color\",\"@type\"],[[30,0,[\"color\"]],[30,0,[\"type\"]]]],null]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom('.pix-banner--communication-certif').exists();
    });
    (0, _qunit.test)('it renders the PixBanner with external url', async function (assert) {
      // given
      this.set('actionUrl', 'www.test.fr/');
      this.set('actionLabel', 'Explorer');

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />
      */
      {
        "id": "0yh+43Ez",
        "block": "[[[8,[39,0],null,[[\"@actionUrl\",\"@actionLabel\"],[[30,0,[\"actionUrl\"]],[30,0,[\"actionLabel\"]]]],null]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Explorer');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(this.element.querySelector('a').getAttribute('href'), 'www.test.fr/');
    });
    (0, _qunit.test)('it renders the PixBanner with internal link', async function (assert) {
      // given

      this.set('actionUrl', 'campaign.participants');
      this.set('actionLabel', 'Explorer');

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />
      */
      {
        "id": "0yh+43Ez",
        "block": "[[[8,[39,0],null,[[\"@actionUrl\",\"@actionLabel\"],[[30,0,[\"actionUrl\"]],[30,0,[\"actionLabel\"]]]],null]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Explorer');
    });
    (0, _qunit.test)('it renders the PixBanner with close icon', async function (assert) {
      // given
      this.set('canCloseBanner', true);

      //when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBanner @type='warning' @canCloseBanner={{this.canCloseBanner}}>
        Mon texte
      </PixBanner>
      */
      {
        "id": "87R9zSbP",
        "block": "[[[8,[39,0],null,[[\"@type\",\"@canCloseBanner\"],[\"warning\",[30,0,[\"canCloseBanner\"]]]],[[\"default\"],[[[[1,\"\\n  Mon texte\\n\"]],[]]]]]],[],false,[\"pix-banner\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-banner-test.js",
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
define("dummy/tests/integration/components/pix-block-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-block', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const BLOCK_SELECTOR = '.pix-block';
    (0, _qunit.test)('it renders the default PixBlock', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBlock>
        Je suis un beau bloc avec une ombre légere
      </PixBlock>
      */
      {
        "id": "wNxEDHKd",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  Je suis un beau bloc avec une ombre légere\\n\"]],[]]]]]],[],false,[\"pix-block\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-block-test.js",
        "isStrictMode": false
      }));
      const blockElement = this.element.querySelector(BLOCK_SELECTOR);

      // then
      assert.contains('Je suis un beau bloc avec une ombre légere');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(blockElement.className, 'pix-block pix-block--shadow-light');
    });
    (0, _qunit.test)('it can have heavy shadow', async function (assert) {
      // given
      this.set('shadowWeight', 'heavy');

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBlock @shadow={{this.shadowWeight}}>
        Je suis trop d4rk
      </PixBlock>
      */
      {
        "id": "21GjR81B",
        "block": "[[[8,[39,0],null,[[\"@shadow\"],[[30,0,[\"shadowWeight\"]]]],[[\"default\"],[[[[1,\"\\n  Je suis trop d4rk\\n\"]],[]]]]]],[],false,[\"pix-block\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-block-test.js",
        "isStrictMode": false
      }));
      const blockElement = this.element.querySelector(BLOCK_SELECTOR);

      // then
      assert.contains('Je suis trop d4rk');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(blockElement.className, 'pix-block pix-block--shadow-heavy');
    });
    (0, _qunit.test)('it give light bloc even if there is wrong parameters', async function (assert) {
      // given
      this.set('shadowWeight', 'normal');

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixBlock @shadow={{this.shadowWeight}}>
        Joli bloc quand même
      </PixBlock>
      */
      {
        "id": "/0g5pk5R",
        "block": "[[[8,[39,0],null,[[\"@shadow\"],[[30,0,[\"shadowWeight\"]]]],[[\"default\"],[[[[1,\"\\n  Joli bloc quand même\\n\"]],[]]]]]],[],false,[\"pix-block\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-block-test.js",
        "isStrictMode": false
      }));
      const blockElement = this.element.querySelector(BLOCK_SELECTOR);

      // then
      assert.contains('Joli bloc quand même');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(blockElement.className, 'pix-block pix-block--shadow-light');
    });
  });
});
define("dummy/tests/integration/components/pix-button-link-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
define("dummy/tests/integration/components/pix-button-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "sinon", "dummy/tests/helpers/click-by-label", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _sinon, _clickByLabel, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"sinon",0,"dummy/tests/helpers/click-by-label",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const COMPONENT_SELECTOR = '.pix-button';
    (0, _qunit.test)('it renders the default PixButton', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
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
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      assert.contains('Mon bouton');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.type, 'button');
    });
    (0, _qunit.test)('it renders the PixButton component with the given type', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
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
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.type, 'submit');
    });
    (0, _qunit.test)('it renders the PixButton component with isDisabled attribute', async function (assert) {
      // given
      this.set('count', 1);
      this.set('triggerAction', () => {
        this.count = this.count + 1;
      });

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButton @isDisabled={{true}} @triggerAction={{this.triggerAction}} aria-label='button label'>
        Mon bouton
      </PixButton>
      */
      {
        "id": "F30+1tts",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"button label\"]],[[\"@isDisabled\",\"@triggerAction\"],[true,[30,0,[\"triggerAction\"]]]],[[\"default\"],[[[[1,\"\\n  Mon bouton\\n\"]],[]]]]]],[],false,[\"pix-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      assert.true(componentElement.disabled);
    });
    (0, _qunit.test)('it should call the action', async function (assert) {
      // given
      this.set('count', 1);
      this.set('triggerAction', () => {
        this.count = this.count + 1;
      });

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixButton @triggerAction={{this.triggerAction}} aria-label='button label' />
      */
      {
        "id": "tEVHGxIK",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"button label\"]],[[\"@triggerAction\"],[[30,0,[\"triggerAction\"]]]],null]],[],false,[\"pix-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
        "isStrictMode": false
      }));
      await (0, _clickByLabel.default)('button label');

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      assert.strictEqual(this.count, 2);
      assert.false(componentElement.disabled);
    });
    (0, _qunit.module)('when type is submit, if no trigger action is defined', () => {
      (0, _qunit.test)('if clicked, it should do nothing', async function (assert) {
        // given
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixButton @type='submit' aria-label='button label' />
        */
        {
          "id": "TyqSWGjI",
          "block": "[[[8,[39,0],[[24,\"aria-label\",\"button label\"]],[[\"@type\"],[\"submit\"]],null]],[],false,[\"pix-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
          "isStrictMode": false
        }));

        //  when
        await (0, _clickByLabel.default)('button label');

        // then
        const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
        assert.strictEqual(componentElement.type, 'submit');
      });
    });
    (0, _qunit.module)('when the button has a trigger action with a promise', function (hooks) {
      let clock;
      hooks.beforeEach(function () {
        clock = _sinon.default.useFakeTimers();
      });
      hooks.afterEach(function () {
        clock.restore();
      });
      (0, _qunit.test)('should display a loading state', async function (assert) {
        // given
        this.set('triggerAction', () => {
          return new Promise(resolve => {
            let wait = setTimeout(() => {
              clearTimeout(wait);
              resolve();
            }, 1);
          });
        });

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixButton @triggerAction={{this.triggerAction}} aria-label='button label' />
        */
        {
          "id": "tEVHGxIK",
          "block": "[[[8,[39,0],[[24,\"aria-label\",\"button label\"]],[[\"@triggerAction\"],[[30,0,[\"triggerAction\"]]]],null]],[],false,[\"pix-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-button-test.js",
          "isStrictMode": false
        }));
        await (0, _clickByLabel.default)('button label');

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
define("dummy/tests/integration/components/pix-button-upload-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
define("dummy/tests/integration/components/pix-checkbox-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/debug", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _debug, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/debug",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
          "id": "pMtSgk4Q",
          "block": "[[[8,[39,0],null,null,[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
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
          "id": "R9kq/TC/",
          "block": "[[[8,[39,0],null,[[\"@screenReaderOnly\"],[true]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
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
        "id": "/sv0xxNh",
        "block": "[[[8,[39,0],null,null,[[\"label\"],[[[[1,\"Accepter les cgu,\\n    \"],[10,3],[14,6,\"https://cgu.example.net\"],[12],[1,\"voir ici\"],[13]],[]]]]]],[],false,[\"pix-checkbox\"]]",
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
        "id": "dIqd2nzz",
        "block": "[[[8,[39,0],null,[[\"@checked\"],[[30,0,[\"checked\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
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
      let sandbox;
      hooks.beforeEach(function () {
        sandbox = _sinon.default.createSandbox();
        sandbox.stub(_debug.default, 'warn');
      });
      hooks.afterEach(function () {
        sandbox.restore();
      });
      (0, _qunit.test)(`it should not be possible to interact when @isDisabled={{true}}`, async function (assert) {
        // given
        this.set('isDisabled', true);
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox checked @isDisabled={{this.isDisabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "JwQNfwmI",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        }));
        sandbox.assert.calledWith(_debug.default.warn, 'PixCheckbox: @isDisabled attribute should be a boolean.', true, {
          id: 'pix-ui.checkbox.is-disabled.not-boolean'
        });
        const checkbox = screen.getByRole('checkbox', {
          name: 'Recevoir la newsletter',
          disabled: true
        });
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

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox checked @isDisabled={{this.isDisabled}} @state='success'><:label>Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "6mDzRkUi",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\"],[[30,0,[\"isDisabled\"]],\"success\"]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
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

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixCheckbox checked @isDisabled={{this.isDisabled}} @state='error'><:label>Recevoir la newsletter</:label></PixCheckbox>
        */
        {
          "id": "8mhHulMt",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\"],[[30,0,[\"isDisabled\"]],\"error\"]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByRole('checkbox', {
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
            <PixCheckbox checked @isDisabled={{this.isDisabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>
          */
          {
            "id": "JwQNfwmI",
            "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
            "isStrictMode": false
          }));
          sandbox.assert.calledWith(_debug.default.warn, 'PixCheckbox: @isDisabled attribute should be a boolean.', false, {
            id: 'pix-ui.checkbox.is-disabled.not-boolean'
          });
          const checkbox = screen.getByRole('checkbox', {
            name: 'Recevoir la newsletter',
            disabled: true
          });
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
            "id": "JwQNfwmI",
            "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-checkbox-test.js",
            "isStrictMode": false
          }));
          sandbox.assert.calledWith(_debug.default.warn, 'PixCheckbox: @isDisabled attribute should be a boolean.', true, {
            id: 'pix-ui.checkbox.is-disabled.not-boolean'
          });
          const checkbox = screen.getByRole('checkbox', {
            name: 'Recevoir la newsletter',
            disabled: true
          });
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
          "id": "Yp7ajpf7",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"],[16,\"disabled\",[30,0,[\"disabled\"]]]],null,[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
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
        } catch (error) {
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
            "id": "Yp7ajpf7",
            "block": "[[[8,[39,0],[[24,\"checked\",\"\"],[16,\"disabled\",[30,0,[\"disabled\"]]]],null,[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
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
          } catch (error) {
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
            "id": "Yp7ajpf7",
            "block": "[[[8,[39,0],[[24,\"checked\",\"\"],[16,\"disabled\",[30,0,[\"disabled\"]]]],null,[[\"label\"],[[[[1,\"Recevoir la newsletter\"]],[]]]]]],[],false,[\"pix-checkbox\"]]",
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
define("dummy/tests/integration/components/pix-collapsible-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "dummy/tests/helpers/create-glimmer-component", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _createGlimmerComponent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"dummy/tests/helpers/create-glimmer-component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixCollapsible', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it should only render PixCollapsible title by default', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCollapsible>
        <:title>
          Titre de mon élément déroulable
        </:title>
        <:default>
          <p>Contenu de mon élément</p>
        </:default>
      </PixCollapsible>
      */
      {
        "id": "CX+I+gX5",
        "block": "[[[8,[39,0],null,null,[[\"title\",\"default\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-collapsible\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-collapsible-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
    });
    (0, _qunit.test)('it should render and show content on click on PixCollapsible title', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCollapsible aria-label='collapsible label'>
        <:title>
          Titre de mon élément déroulable
        </:title>
        <:default>
          <p>Contenu de mon élément</p>
        </:default>
      </PixCollapsible>
      */
      {
        "id": "P7iEHhub",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"collapsible label\"]],null,[[\"title\",\"default\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-collapsible\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-collapsible-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');

      // then
      assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
    });
    (0, _qunit.test)('it should not show PixCollapsible if title is not provided', async function (assert) {
      // given
      const componentParams = {
        title: '  '
      };
      const component = (0, _createGlimmerComponent.default)('pix-collapsible', componentParams);

      // when & then
      const expectedError = new Error('ERROR in PixCollapsible component, @title param is not provided');
      assert.throws(function () {
        component.title;
      }, expectedError);
    });
    (0, _qunit.test)('it should not destroy content when uncollapsed then collapsed again', async function (assert) {
      // when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixCollapsible aria-label='collapsible label'>
        <:title>
          Titre de mon élément déroulable
        </:title>
        <:default>
          <p>Contenu de mon élément</p>
        </:default>
      </PixCollapsible>
      */
      {
        "id": "P7iEHhub",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"collapsible label\"]],null,[[\"title\",\"default\"],[[[[1,\"\\n    Titre de mon élément déroulable\\n  \"]],[]],[[[1,\"\\n    \"],[10,2],[12],[1,\"Contenu de mon élément\"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-collapsible\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-collapsible-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');
      await (0, _emberTestingLibrary.clickByText)('Titre de mon élément déroulable');

      // then
      assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).exists();
    });
  });
});
define("dummy/tests/integration/components/pix-filter-banner-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | filter-banner', function (hooks) {
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
  });
});
define("dummy/tests/integration/components/pix-filterable-and-searchable-select-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@1024pix/ember-testing-library", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _emberTestingLibrary, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
        "id": "8ae1O1VE",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
        "id": "t9HwpghI",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
        "id": "t9HwpghI",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
        "id": "8ae1O1VE",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
        "id": "t9HwpghI",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
        "id": "t9HwpghI",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
        "id": "t9HwpghI",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
      this.searchLabel = 'Recherche';

      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixFilterableAndSearchableSelect
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
        @searchLabel={{this.searchLabel}}
        @isSearchable={{true}}
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "UMeKqsPL",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\",\"@searchLabel\",\"@isSearchable\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]],[30,0,[\"searchLabel\"]],true]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button', {
        name: this.label
      }));
      await (0, _emberTestingLibrary.fillByLabel)(this.searchLabel, 'Tom');
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
      this.searchLabel = 'Recherche';

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
      >
        <:label>{{this.label}}</:label>
        <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
      </PixFilterableAndSearchableSelect>
      */
      {
        "id": "LR/9DKBK",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\",\"@searchLabel\",\"@isSearchable\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]],[30,0,[\"searchLabel\"]],true]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
          "id": "+ex9b6Yl",
          "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
          "id": "dUFQ+dWp",
          "block": "[[[8,[39,0],null,[[\"@subLabel\",\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\"],[[30,0,[\"subLabel\"]],[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
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
          @searchLabel={{this.searchLabel}}
          @isSearchable={{true}}
          @requiredLabel={{this.requiredLabel}}
        >
          <:label>{{this.label}}</:label>
          <:categoriesLabel>{{this.categoriesLabel}}</:categoriesLabel>
        </PixFilterableAndSearchableSelect>
        */
        {
          "id": "90M6mCHD",
          "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\",\"@searchLabel\",\"@isSearchable\",\"@requiredLabel\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]],[30,0,[\"searchLabel\"]],true,[30,0,[\"requiredLabel\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByLabelText('* Label de mon big composant trop compliqué')).exists();
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
        "id": "Yl21dAak",
        "block": "[[[8,[39,0],null,[[\"@placeholder\",\"@options\",\"@value\",\"@onChange\",\"@categoriesId\",\"@categoriesPlaceholder\",\"@searchLabel\",\"@isSearchable\",\"@requiredLabel\",\"@errorMessage\"],[[30,0,[\"placeholder\"]],[30,0,[\"options\"]],\"2\",[30,0,[\"onChange\"]],[30,0,[\"categoriesId\"]],[30,0,[\"categoriesPlaceholder\"]],[30,0,[\"searchLabel\"]],true,[30,0,[\"requiredLabel\"]],[30,0,[\"errorMessage\"]]]],[[\"label\",\"categoriesLabel\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"categoriesLabel\"]]]],[]]]]]],[],false,[\"pix-filterable-and-searchable-select\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-filterable-and-searchable-select-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByText(this.errorMessage)).exists();
    });
  });
});
define("dummy/tests/integration/components/pix-icon-button-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "dummy/tests/helpers/click-by-label", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _clickByLabel, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"dummy/tests/helpers/click-by-label",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | icon-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const COMPONENT_SELECTOR = '.pix-icon-button';
    (0, _qunit.test)('it should trigger action if given one', async function (assert) {
      // when
      this.set('count', 1);
      this.set('triggerAction', () => {
        this.count = this.count + 1;
      });
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
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
      await (0, _clickByLabel.default)('action du bouton');

      // then
      assert.strictEqual(this.count, 2);
    });
    (0, _qunit.test)('it renders PixIconButton with disabled attribute', async function (assert) {
      // given
      this.set('triggerAction', () => {});

      //when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixIconButton
        @triggerAction={{this.triggerAction}}
        @iconName='add'
        disabled={{true}}
        @ariaLabel="L'action du bouton"
      />
      */
      {
        "id": "WolSQTUb",
        "block": "[[[8,[39,0],[[16,\"disabled\",true]],[[\"@triggerAction\",\"@iconName\",\"@ariaLabel\"],[[30,0,[\"triggerAction\"]],\"add\",\"L'action du bouton\"]],null]],[],false,[\"pix-icon-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-icon-button-test.js",
        "isStrictMode": false
      }));

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      assert.true(componentElement.disabled);
    });
  });
});
define("dummy/tests/integration/components/pix-indicator-card-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
        "id": "RVdOTeHm",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@color\",\"@iconName\"],[[30,0,[\"title\"]],[30,0,[\"color\"]],[30,0,[\"icon\"]]]],[[\"default\",\"sub\"],[[[[1,\"42\"]],[]],[[[1,\"\\n    En cours : 1\\n  \"]],[]]]]]],[],false,[\"pix-indicator-card\"]]",
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
        "id": "YTZYussK",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@color\",\"@iconName\",\"@info\",\"@infoLabel\"],[[30,0,[\"title\"]],[30,0,[\"color\"]],[30,0,[\"icon\"]],[30,0,[\"info\"]],\"En savoir plus\"]],[[\"default\",\"sub\"],[[[[1,\"42\"]],[]],[[[1,\"\\n    En cours : 1\\n  \"]],[]]]]]],[],false,[\"pix-indicator-card\"]]",
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
          "id": "K3sl/w6P",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@color\",\"@iconName\",\"@info\",\"@isLoading\",\"@loadingMessage\"],[[30,0,[\"title\"]],[30,0,[\"color\"]],[30,0,[\"icon\"]],[30,0,[\"info\"]],true,[30,0,[\"loadingMessage\"]]]],[[\"default\",\"sub\"],[[[[1,\"42\"]],[]],[[[1,\"\\n    En cours : 1\\n  \"]],[]]]]]],[],false,[\"pix-indicator-card\"]]",
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
          "id": "K3sl/w6P",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@color\",\"@iconName\",\"@info\",\"@isLoading\",\"@loadingMessage\"],[[30,0,[\"title\"]],[30,0,[\"color\"]],[30,0,[\"icon\"]],[30,0,[\"info\"]],true,[30,0,[\"loadingMessage\"]]]],[[\"default\",\"sub\"],[[[[1,\"42\"]],[]],[[[1,\"\\n    En cours : 1\\n  \"]],[]]]]]],[],false,[\"pix-indicator-card\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-indicator-card-test.js",
          "isStrictMode": false
        }));
        const loadingText = screen.queryByText(this.loadingMessage);
        _qunit.assert.dom(loadingText).exists();
      });
    });
  });
});
define("dummy/tests/integration/components/pix-input-code-test", ["qunit", "ember-qunit", "sinon", "@ember/test-helpers", "@1024pix/ember-testing-library", "dummy/tests/helpers/create-glimmer-component", "dummy/tests/helpers/fill-in-by-label", "@ember/template-factory"], function (_qunit, _emberQunit, _sinon, _testHelpers, _emberTestingLibrary, _createGlimmerComponent, _fillInByLabel, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"sinon",0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"dummy/tests/helpers/create-glimmer-component",0,"dummy/tests/helpers/fill-in-by-label",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
    (0, _qunit.test)('it should throw an error if PixInputCode does not have an ariaLabel', async function (assert) {
      // given
      const componentParams = {
        ariaLabel: null,
        legend: 'super legende'
      };
      const component = (0, _createGlimmerComponent.default)('pix-input-code', componentParams);

      // when & then
      const expectedError = new Error('ERROR in PixInputCode component, you must provide an @ariaLabel and a @legend');
      assert.throws(function () {
        component.ariaLabel;
      }, expectedError);
    });
    (0, _qunit.test)('it should throw an error if PixInputCode does not have a legend', async function (assert) {
      // given
      const componentParams = {
        ariaLabel: 'Champ',
        legend: null
      };
      const component = (0, _createGlimmerComponent.default)('pix-input-code', componentParams);

      // when & then
      const expectedError = new Error('ERROR in PixInputCode component, you must provide an @ariaLabel and a @legend');
      assert.throws(function () {
        component.legend;
      }, expectedError);
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
define("dummy/tests/integration/components/pix-input-password-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
        "id": "bVRhRsk+",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"password\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
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
        "id": "rwSQMRhE",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@subLabel\"],[\"password\",\"une brève information\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
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
        "id": "YxX8EXMR",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@errorMessage\",\"@validationStatus\"],[\"password\",\"Un message d'erreur.\",\"error\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
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
        "id": "OrJi7+nb",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@prefix\"],[\"password\",\"A prefix\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
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
        "id": "78FAW6je",
        "block": "[[[8,[39,0],[[24,\"autocomplete\",\"off\"]],[[\"@id\"],[\"password\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
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
        "id": "bVRhRsk+",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"password\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
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
        "id": "rgwD9/Ui",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@value\"],[\"password\",\"pix123\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
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
        "id": "xAY6H2T2",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@requiredLabel\"],[\"password\",\"Champ obligatoire\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
        "isStrictMode": false
      }));

      // then
      const requiredPasswordInput = screen.getByLabelText('* Mot de passe');
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
          "id": "xAY6H2T2",
          "block": "[[[8,[39,0],null,[[\"@id\",\"@requiredLabel\"],[\"password\",\"Champ obligatoire\"]],[[\"label\"],[[[[1,\"Mot de passe\"]],[]]]]]],[],false,[\"pix-input-password\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-password-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _testHelpers.click)(screen.getByRole('button', {
          name: 'Afficher le mot de passe'
        }));

        // then
        assert.dom(screen.getByLabelText('* Mot de passe')).isFocused();
      });
    });
  });
});
define("dummy/tests/integration/components/pix-input-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "dummy/tests/helpers/fill-in-by-label", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _fillInByLabel, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"dummy/tests/helpers/fill-in-by-label",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
        "id": "N9FXXmju",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"first-name\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\"]]",
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
        "id": "4ynuR+eR",
        "block": "[[[8,[39,0],null,[[\"@id\"],[123]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      const selectorElement = this.element.querySelector(INPUT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(selectorElement.id, '123');
    });
    (0, _qunit.test)('it should be possible to give a label to input', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='firstName'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "9kENiG7T",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"firstName\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\"]]",
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
        "id": "jT+S9xIT",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@subLabel\"],[\"firstName\",\"a small information\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\"]]",
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
        "id": "bESKcVMv",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@errorMessage\",\"@validationStatus\"],[\"firstName\",\"Seul les caractères alphanumériques sont autorisés\",\"error\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\"]]",
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
        "id": "ME2q6I88",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@value\"],[\"firstName\",\"Jeanne\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      const selectorElement = this.element.querySelector(INPUT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(selectorElement.value, 'Jeanne');
    });
    (0, _qunit.test)('it should be possible to give more params to input', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='firstName' autocomplete='on'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "mRGlHZfE",
        "block": "[[[8,[39,0],[[24,\"autocomplete\",\"on\"]],[[\"@id\"],[\"firstName\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      const selectorElement = this.element.querySelector(INPUT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(selectorElement.autocomplete, 'on');
    });
    (0, _qunit.test)('it should be possible to make pix input required', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixInput @id='firstName' @requiredLabel='Champ obligatoire'><:label>Prénom</:label></PixInput>
      */
      {
        "id": "zuw8v15i",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@requiredLabel\"],[\"firstName\",\"Champ obligatoire\"]],[[\"label\"],[[[[1,\"Prénom\"]],[]]]]]],[],false,[\"pix-input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-input-test.js",
        "isStrictMode": false
      }));

      // then
      const requiredInput = screen.getByLabelText('* Prénom');
      assert.dom(requiredInput).isRequired();
    });
  });
});
define("dummy/tests/integration/components/pix-label-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
        "id": "D64lhhh0",
        "block": "[[[8,[39,0],null,[[\"@for\"],[\"linkableElement\"]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13]],[],false,[\"pix-label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-label-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText(label));
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
        "id": "s/Q1j5Z3",
        "block": "[[[8,[39,0],null,[[\"@for\",\"@subLabel\"],[\"linkableElement\",[30,0,[\"subLabel\"]]]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13]],[],false,[\"pix-label\"]]",
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
        "id": "9itBsXEq",
        "block": "[[[8,[39,0],null,[[\"@for\",\"@requiredLabel\"],[\"linkableElement\",[30,0,[\"requiredLabel\"]]]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13]],[],false,[\"pix-label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-label-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText(['*', label].join(' ')));
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
        "id": "KSRzAq+w",
        "block": "[[[8,[39,0],null,[[\"@for\",\"@screenReaderOnly\"],[\"linkableElement\",true]],[[\"default\"],[[[[1,[30,0,[\"label\"]]]],[]]]]],[10,\"input\"],[14,1,\"linkableElement\"],[12],[13]],[],false,[\"pix-label\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-label-test.js",
        "isStrictMode": false
      }));

      // then
      assert.ok(screen.getByLabelText(label));
    });
  });
});
define("dummy/tests/integration/components/pix-message-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-message', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given content', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixMessage>Message text</PixMessage>
      */
      {
        "id": "lOff7vrZ",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"Message text\"]],[]]]]]],[],false,[\"pix-message\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-message-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Message text');
    });
    (0, _qunit.test)('it renders with the given type', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixMessage @type='info' />
      */
      {
        "id": "bHZoI+SE",
        "block": "[[[8,[39,0],null,[[\"@type\"],[\"info\"]],null]],[],false,[\"pix-message\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-message-test.js",
        "isStrictMode": false
      }));

      // then
      const pixMessageElement = this.element.querySelector('.pix-message');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(pixMessageElement.classList.toString(), 'pix-message pix-message--info');
    });
    (0, _qunit.test)('it renders with attributes override', async function (assert) {
      // given & when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixMessage aria-label='world' />
      */
      {
        "id": "MQkWXRoq",
        "block": "[[[8,[39,0],[[24,\"aria-label\",\"world\"]],null,null]],[],false,[\"pix-message\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-message-test.js",
        "isStrictMode": false
      }));

      // then
      const pixMessageElement = this.element.querySelector('.pix-message');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(pixMessageElement.getAttribute('aria-label'), 'world');
    });
    (0, _qunit.test)('it renders with an icon', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixMessage @withIcon='true' />
      */
      {
        "id": "Z7zG9ZeD",
        "block": "[[[8,[39,0],null,[[\"@withIcon\"],[\"true\"]],null]],[],false,[\"pix-message\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-message-test.js",
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
        <PixMessage @type='warning' @withIcon='true' />
      */
      {
        "id": "AgyAKl3A",
        "block": "[[[8,[39,0],null,[[\"@type\",\"@withIcon\"],[\"warning\",\"true\"]],null]],[],false,[\"pix-message\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-message-test.js",
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
        <PixMessage @type='success' @withIcon='true' />
      */
      {
        "id": "UV3IYQbM",
        "block": "[[[8,[39,0],null,[[\"@type\",\"@withIcon\"],[\"success\",\"true\"]],null]],[],false,[\"pix-message\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-message-test.js",
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
        <PixMessage @type='error' @withIcon='true' />
      */
      {
        "id": "BMWRx65t",
        "block": "[[[8,[39,0],null,[[\"@type\",\"@withIcon\"],[\"error\",\"true\"]],null]],[],false,[\"pix-message\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-message-test.js",
        "isStrictMode": false
      }));

      // then
      const icon = screen.getByRole('img', {
        hidden: true
      });
      assert.true(icon.innerHTML.includes('#error'));
    });
  });
});
define("dummy/tests/integration/components/pix-modal-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@1024pix/ember-testing-library", "sinon", "dummy/tests/helpers/create-glimmer-component", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _emberTestingLibrary, _sinon, _createGlimmerComponent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"sinon",0,"dummy/tests/helpers/create-glimmer-component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('when showModal is equal true', function () {
      (0, _qunit.test)('it renders the default PixModal', async function (assert) {
        // given
        this.title = "It's a modal!";
        this.showModal = true;

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixModal @title={{this.title}} @showModal={{this.showModal}}>
          <:content>
            content
          </:content>
          <:footer>
            footer
          </:footer>
        </PixModal>
        */
        {
          "id": "0tEqPv5+",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@showModal\"],[[30,0,[\"title\"]],[30,0,[\"showModal\"]]]],[[\"content\",\"footer\"],[[[[1,\"\\n    content\\n  \"]],[]],[[[1,\"\\n    footer\\n  \"]],[]]]]]],[],false,[\"pix-modal\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
          "isStrictMode": false
        }));

        // then
        assert.contains("It's a modal!");
        assert.contains('content');
        assert.contains('footer');
        assert.dom('.pix-modal__overlay--hidden').doesNotExist();
      });
      (0, _qunit.module)('when close button is clicked', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          this.title = 'Close me baby one more time';
          this.showModal = true;
          this.onCloseButtonClick = _sinon.default.stub();

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixModal
            @title={{this.title}}
            @onCloseButtonClick={{this.onCloseButtonClick}}
            @showModal={{this.showModal}}
          >
            content
          </PixModal>
          */
          {
            "id": "Ca3bJE2H",
            "block": "[[[8,[39,0],null,[[\"@title\",\"@onCloseButtonClick\",\"@showModal\"],[[30,0,[\"title\"]],[30,0,[\"onCloseButtonClick\"]],[30,0,[\"showModal\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-modal\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
            "isStrictMode": false
          }));
          await (0, _testHelpers.click)(screen.getByRole('button', {
            name: /Fermer/
          }));

          // then
          assert.ok(this.onCloseButtonClick.calledOnce);
        });
      });
      (0, _qunit.module)('when escape button is clicked', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          this.title = 'Close me baby one more time';
          this.showModal = true;
          this.onCloseButtonClick = _sinon.default.stub();

          // when
          await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixModal
            @title={{this.title}}
            @onCloseButtonClick={{this.onCloseButtonClick}}
            @showModal={{this.showModal}}
          >
            content
          </PixModal>
          */
          {
            "id": "Ca3bJE2H",
            "block": "[[[8,[39,0],null,[[\"@title\",\"@onCloseButtonClick\",\"@showModal\"],[[30,0,[\"title\"]],[30,0,[\"onCloseButtonClick\"]],[30,0,[\"showModal\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-modal\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerKeyEvent)('.pix-modal__overlay', 'keyup', 'Escape');

          // then
          assert.ok(this.onCloseButtonClick.calledOnce);
        });
      });
    });
    (0, _qunit.module)('when showModal is false', function () {
      (0, _qunit.test)('it should not show modal', async function (assert) {
        // given
        this.title = "It's a modal!";
        this.showModal = false;

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixModal @title={{this.title}} @showModal={{this.showModal}}>
          <:content>
            content
          </:content>
          <:footer>
            footer
          </:footer>
        </PixModal>
        */
        {
          "id": "0tEqPv5+",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@showModal\"],[[30,0,[\"title\"]],[30,0,[\"showModal\"]]]],[[\"content\",\"footer\"],[[[[1,\"\\n    content\\n  \"]],[]],[[[1,\"\\n    footer\\n  \"]],[]]]]]],[],false,[\"pix-modal\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-modal-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom('.pix-modal__overlay--hidden').exists();
      });
    });
    (0, _qunit.test)('it should throw an error if require @title argument is missing', async function (assert) {
      // given
      const componentParams = {};

      // when
      const renderComponent = function () {
        (0, _createGlimmerComponent.default)('pix-modal', componentParams);
      };

      // then
      const expectedError = new Error('ERROR in PixModal component: @title argument is required.');
      assert.throws(renderComponent, expectedError);
    });
  });
});
define("dummy/tests/integration/components/pix-multi-select-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@testing-library/user-event", "@testing-library/dom", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _userEvent, _dom, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@testing-library/user-event",0,"@testing-library/dom",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        
        </PixMultiSelect>
        */
        {
          "id": "aOZkpFYN",
          "block": "[[[8,[39,0],null,[[\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @values={{this.values}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "wolFMg8j",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@values\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.emptyMessage = 'no result';
          this.placeholder = 'MultiSelectTest';
          this.id = 'id-MultiSelectTest';

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @values={{this.values}}
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "aOZkpFYN",
            "block": "[[[8,[39,0],null,[[\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.emptyMessage = 'no result';
          this.placeholder = 'MultiSelectTest';
          this.id = 'id-MultiSelectTest';

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @values={{this.values}}
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "aOZkpFYN",
            "block": "[[[8,[39,0],null,[[\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));
          await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');
          await screen.findByRole('menu');
          // then
          assert.strictEqual(screen.queryAllByRole('checkbox').length, 0);
          assert.contains('no result');
        });
        (0, _qunit.test)('it renders the PixMultiSelect with default checked', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.onChange = () => {};
          this.values = ['2'];
          this.emptyMessage = 'no result';
          this.placeholder = 'MultiSelectTest';
          this.id = 'id-MultiSelectTest';

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @values={{this.values}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "wolFMg8j",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@values\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.emptyMessage = 'no result';
          this.placeholder = 'MultiSelectTest';
          this.id = 'id-MultiSelectTest';

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @values={{this.values}}
            @emptyMessage={{this.emptyMessage}}
            @isSearchable={{true}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "DijQJw5M",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@values\",\"@emptyMessage\",\"@isSearchable\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],[30,0,[\"emptyMessage\"]],true,[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
            "isStrictMode": false
          }));
          // then
          const inputElement = screen.getByLabelText('multiSelectLabel');
          assert.strictEqual(inputElement.placeholder, 'Tomate, Oignon');
        });
      });
      (0, _qunit.module)('onChange', function () {
        (0, _qunit.test)('it should trigger onChange function when an item is selected', async function (assert) {
          // given
          this.label = 'multiSelectLabel';
          this.options = DEFAULT_OPTIONS;
          this.placeholder = 'MultiSelectTest';
          this.emptyMessage = 'no result';
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "S/aUmGcA",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.placeholder = 'MultiSelectTest';
          this.emptyMessage = 'no result';
          this.values = ['1', '2'];
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "S/aUmGcA",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.placeholder = 'MultiSelectTest';
          this.emptyMessage = 'no result';
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "S/aUmGcA",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.placeholder = 'MultiSelectTest';
          this.emptyMessage = 'no result';
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "S/aUmGcA",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.placeholder = 'MultiSelectTest';
          this.emptyMessage = 'no result';
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "S/aUmGcA",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.placeholder = 'MultiSelectTest';
          this.emptyMessage = 'no result';
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "S/aUmGcA",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.placeholder = 'MultiSelectTest';
          this.emptyMessage = 'no result';
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "S/aUmGcA",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          this.placeholder = 'MultiSelectTest';
          this.emptyMessage = 'no result';
          this.id = 'id-MultiSelectTest';
          this.onChange = _sinon.default.spy();
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}}
          >
            <:label>{{this.label}}</:label>
            <:default as |option|>{{option.label}}</:default>
          </PixMultiSelect>
          */
          {
            "id": "S/aUmGcA",
            "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
      (0, _qunit.test)('it should renders searchable PixMultiSelect multi select list', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "2uEaRJa2",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', '');
        await screen.findByRole('menu');

        // then

        assert.strictEqual(screen.getByLabelText('multiSelectLabel').placeholder, this.placeholder);
        assert.strictEqual(screen.getAllByRole('checkbox').length, 3);
      });
      (0, _qunit.test)('it should renders filtered given case insensitive', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;
        this.placeholder = 'Placeholder test';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "2uEaRJa2",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', 'tomate');
        await screen.findByRole('menu');

        // then
        assert.strictEqual(screen.getAllByRole('checkbox').length, 1);
        assert.contains('Tomate');
      });
      (0, _qunit.test)('it should renders no result given case sensitive', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;
        this.strictSearch = true;
        this.placeholder = 'Placeholder test';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @strictSearch={{this.strictSearch}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "LjB15QZc",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@strictSearch\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"strictSearch\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', 'tomate');
        await screen.findByRole('menu');

        // then
        assert.contains('no result');
      });
      (0, _qunit.test)('it should display list PixMultiSelect on focus', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;
        this.placeholder = 'Placeholder test';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "2uEaRJa2",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', '');
        await screen.findByRole('menu');

        // then
        assert.strictEqual(screen.getByRole('menu').className.trim(), 'pix-multi-select-list');
      });
      (0, _qunit.test)('it should sort default selected items when focused', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = ['3'];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;
        this.placeholder = 'Placeholder test';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "2uEaRJa2",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', '');
        await screen.findByRole('menu');

        // then
        const listElement = screen.getAllByRole('checkbox');
        assert.strictEqual(listElement.length, 3);
        assert.strictEqual(listElement[0].labels[0].innerText.trim(), 'Oignon');
        assert.strictEqual(listElement[1].labels[0].innerText.trim(), 'Salade');
        assert.strictEqual(listElement[2].labels[0].innerText.trim(), 'Tomate');
      });
      (0, _qunit.test)('it should not sort when user select item', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;
        this.placeholder = 'Placeholder test';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "2uEaRJa2",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', '');
        await screen.findByRole('menu');
        await (0, _emberTestingLibrary.clickByName)(DEFAULT_OPTIONS[1].label);

        // then
        const listElement = screen.getAllByRole('checkbox');
        assert.strictEqual(listElement.length, 3);
        assert.strictEqual(listElement[0].labels[0].innerText.trim(), 'Salade');
        assert.strictEqual(listElement[1].labels[0].innerText.trim(), 'Tomate');
        assert.strictEqual(listElement[2].labels[0].innerText.trim(), 'Oignon');
      });
      (0, _qunit.test)('it should not sort when user search and select item', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;
        this.placeholder = 'Placeholder test';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "2uEaRJa2",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', 'Oi');
        await screen.findByRole('menu');
        await (0, _emberTestingLibrary.clickByName)('Oignon');
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', 'o');
        // then
        const listElement = screen.getAllByRole('checkbox');
        assert.strictEqual(listElement.length, 2);
        assert.strictEqual(listElement[0].labels[0].innerText.trim(), 'Tomate');
        assert.strictEqual(listElement[1].labels[0].innerText.trim(), 'Oignon');
      });
      (0, _qunit.test)('it should sort items when search is cleaned', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = values => this.set('values', values);
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;
        this.placeholder = 'Placeholder test';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "2uEaRJa2",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', 'Oi');
        await screen.findByRole('menu');
        await (0, _emberTestingLibrary.clickByName)('Oignon');
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', '');

        // then
        const listElement = screen.getAllByRole('checkbox');
        assert.strictEqual(listElement.length, 3);
        assert.strictEqual(listElement[0].labels[0].innerText.trim(), 'Oignon');
        assert.strictEqual(listElement[1].labels[0].innerText.trim(), 'Salade');
        assert.strictEqual(listElement[2].labels[0].innerText.trim(), 'Tomate');
      });
      (0, _qunit.test)('should not sort when there are default items selected and a new selected item', async function (assert) {
        // given
        this.label = 'multiSelectLabel';
        this.options = DEFAULT_OPTIONS;
        this.values = ['2'];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';
        this.isSearchable = true;
        this.placeholder = 'Placeholder test';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @showOptionsOnInput={{true}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "75V4Aq5l",
          "block": "[[[8,[39,0],null,[[\"@isSearchable\",\"@values\",\"@onChange\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@showOptionsOnInput\",\"@options\"],[[30,0,[\"isSearchable\"]],[30,0,[\"values\"]],[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"emptyMessage\"]],true,[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.fillByLabel)('multiSelectLabel', '');
        await screen.findByRole('menu');
        const listElement = screen.getAllByRole('checkbox');
        assert.strictEqual(listElement[0].labels[0].innerText.trim(), 'Tomate');
        await (0, _emberTestingLibrary.clickByName)('Oignon');

        // then
        const listElement2 = screen.getAllByRole('checkbox');
        assert.strictEqual(listElement2[0].labels[0].innerText.trim(), 'Tomate');
        assert.strictEqual(listElement2[2].labels[0].innerText.trim(), 'Oignon');
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
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @values={{this.values}}
          @emptyMessage={{this.emptyMessage}}
          @isSearchable={{true}}
          @className={{this.className}}
          @options={{this.options}}
        >
          <:label>{{this.label}}</:label>
          <:default as |option|>{{option.label}}</:default>
        </PixMultiSelect>
        */
        {
          "id": "9YmcLdO0",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@values\",\"@emptyMessage\",\"@isSearchable\",\"@className\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],[30,0,[\"emptyMessage\"]],true,[30,0,[\"className\"]],[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
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
          @placeholder={{this.placeholder}}
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
          "id": "Rx1bbCOF",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@placeholder\",\"@id\",\"@values\",\"@isSearchable\",\"@options\"],[[30,0,[\"onChange\"]],[30,0,[\"placeholder\"]],[30,0,[\"id\"]],[30,0,[\"values\"]],false,[30,0,[\"options\"]]]],[[\"label\",\"default\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,1,[\"label\"]]]],[1]]]]]],[\"option\"],false,[\"pix-multi-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-multi-select-test.js",
          "isStrictMode": false
        }));
        await (0, _emberTestingLibrary.clickByName)('multiSelectLabel');

        // then
        assert.dom(screen.getByLabelText('multiSelectLabel')).isFocused();
      });
    });
  });
});
define("dummy/tests/integration/components/pix-pagination-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pagination', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('Use PixPagination without locale params', async function (assert) {
      // given
      const paginationData = {
        page: 1,
        pageSize: 10,
        rowCount: 2,
        pageCount: 1
      };
      this.set('pagination', paginationData);
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixPagination @pagination={{this.pagination}} />
      */
      {
        "id": "RNoMB9fJ",
        "block": "[[[8,[39,0],null,[[\"@pagination\"],[[30,0,[\"pagination\"]]]],null]],[],false,[\"pix-pagination\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-pagination-test.js",
        "isStrictMode": false
      }));
      const PixPaginationElement = this.element.querySelector('.pix-pagination');
      //then
      assert.ok(PixPaginationElement);
      assert.contains('Voir');
      assert.contains('2 éléments');
      assert.contains('Page 1 / 1');
    });
    (0, _qunit.test)('Use locale params to translate component', async function (assert) {
      // given
      const paginationData = {
        page: 1,
        pageSize: 10,
        rowCount: 2,
        pageCount: 1
      };
      this.set('locale', 'en');
      this.set('pagination', paginationData);

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixPagination @pagination={{this.pagination}} @locale={{this.locale}} />
      */
      {
        "id": "jUwi3zKn",
        "block": "[[[8,[39,0],null,[[\"@pagination\",\"@locale\"],[[30,0,[\"pagination\"]],[30,0,[\"locale\"]]]],null]],[],false,[\"pix-pagination\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-pagination-test.js",
        "isStrictMode": false
      }));
      const PixPaginationElement = this.element.querySelector('.pix-pagination');
      //then
      assert.ok(PixPaginationElement);
      assert.contains('See');
      assert.contains('2 items');
      assert.contains('Page 1 / 1');
    });
    (0, _qunit.test)('When pagination params have options to display several pages', async function (assert) {
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
        <PixPagination @pagination={{this.pagination}} />
      */
      {
        "id": "RNoMB9fJ",
        "block": "[[[8,[39,0],null,[[\"@pagination\"],[[30,0,[\"pagination\"]]]],null]],[],false,[\"pix-pagination\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-pagination-test.js",
        "isStrictMode": false
      }));
      const PixPaginationElement = this.element.querySelector('.pix-pagination');
      //then
      assert.ok(PixPaginationElement);
      assert.contains('Voir');
      assert.contains('11-12 sur 12 éléments');
      assert.contains('Page 2 / 2');
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
define("dummy/tests/integration/components/pix-progress-gauge-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "dummy/tests/helpers/create-glimmer-component", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _createGlimmerComponent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"dummy/tests/helpers/create-glimmer-component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | progress-gauge', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const PROGRESS_GAUGE_SELECTOR = '.progress-gauge';
    (0, _qunit.module)('Attributes @value', function () {
      (0, _qunit.test)('it should throw an error if there is no value', async function (assert) {
        // given & when
        const componentParams = {
          value: undefined
        };
        const component = (0, _createGlimmerComponent.default)('pix-progress-gauge', componentParams);

        // then
        const expectedError = new Error('ERROR in PixProgressGauge component, @value param is not provided.');
        assert.throws(function () {
          component.value;
        }, expectedError);
      });
      (0, _qunit.test)('it renders the value with percentage', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' />
        */
        {
          "id": "6wjY2dty",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"50\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const frenchLocale = String(navigator.language).toLowerCase() === 'fr-fr';
        assert.strictEqual(screen.getByRole('presentation').innerText, frenchLocale ? '50\xA0%' : '50%');
      });
      (0, _qunit.test)('it renders the progress gauge with correct width never exceed 100%', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='110' />
        */
        {
          "id": "MBYuQHTA",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"110\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const progressbar = screen.getByRole('progressbar');
        assert.strictEqual(progressbar.value, 100);
      });
      (0, _qunit.test)('it renders the progress gauge with correct width never under 0%', async function (assert) {
        // given & when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='-20' />
        */
        {
          "id": "fvvMRvVT",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"-20\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const progressbar = screen.getByRole('progressbar');
        assert.strictEqual(progressbar.value, 0);
      });
    });
    (0, _qunit.module)('Attributes @label', function () {
      (0, _qunit.test)('it should throw an error if there is no label', async function (assert) {
        // given & when
        const componentParams = {
          label: null
        };
        const component = (0, _createGlimmerComponent.default)('pix-progress-gauge', componentParams);

        // then
        const expectedError = new Error('ERROR in PixProgressGauge component, @label param is not provided.');
        assert.throws(function () {
          component.label;
        }, expectedError);
      });
    });
    (0, _qunit.module)('Attributes @color', function () {
      (0, _qunit.test)('it renders the progress gauge by default with primary class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' />
        */
        {
          "id": "6wjY2dty",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"50\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--content-primary'));
      });
      (0, _qunit.test)('it renders the progress gauge with primary class when color not exists', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' @color='vert-lychen' />
        */
        {
          "id": "lvUc/k/h",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@color\"],[\"50\",\"vert-lychen\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--content-primary'));
      });
      (0, _qunit.test)('it renders the progress gauge with tertiary class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' @color='tertiary' />
        */
        {
          "id": "t5zswOt5",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@color\"],[\"50\",\"tertiary\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--content-tertiary'));
      });
      (0, _qunit.test)('it renders the progress gauge with success class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' @color='success' />
        */
        {
          "id": "bMH8FI8d",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@color\"],[\"50\",\"success\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--content-success'));
      });
      (0, _qunit.test)('it renders the progress gauge with primary class', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' @color='primary' />
        */
        {
          "id": "ouQPsdYf",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@color\"],[\"50\",\"primary\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--content-primary'));
      });
    });
    (0, _qunit.module)('Attributes @themeMode', function () {
      (0, _qunit.test)('it renders the progress gauge by default with light mode', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' />
        */
        {
          "id": "6wjY2dty",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"50\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--theme-light'));
      });
      (0, _qunit.test)('it renders the progress gauge with light mode when value not exists', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' @themeMode='darken-light' />
        */
        {
          "id": "3vbPvKry",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@themeMode\"],[\"50\",\"darken-light\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--theme-light'));
      });
      (0, _qunit.test)('it renders the progress gauge with light mode', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' @themeMode='light' />
        */
        {
          "id": "4RVUVqLj",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@themeMode\"],[\"50\",\"light\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--theme-light'));
      });
      (0, _qunit.test)('it renders the progress gauge with dark mode', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' @themeMode='dark' />
        */
        {
          "id": "NxDVX4ZJ",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@themeMode\"],[\"50\",\"dark\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
        assert.true(componentElement.classList.contains('progress-gauge--theme-dark'));
      });
    });
    (0, _qunit.module)('Attibutes @subtitle', function () {
      (0, _qunit.test)('it does not render the progress gauge sub-title', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' />
        */
        {
          "id": "6wjY2dty",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"50\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector('.progress-gauge__sub-title');
        assert.false(!!componentElement);
      });
      (0, _qunit.test)('it renders the progress gauge sub-title', async function (assert) {
        // given & when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixProgressGauge @value='50' @subtitle='toto' />
        */
        {
          "id": "Wi25cS49",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@subtitle\"],[\"50\",\"toto\"]],null]],[],false,[\"pix-progress-gauge\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-progress-gauge-test.js",
          "isStrictMode": false
        }));

        // then
        const componentElement = this.element.querySelector('.progress-gauge__sub-title');
        assert.strictEqual(componentElement.textContent.trim(), 'toto');
      });
    });
  });
});
define("dummy/tests/integration/components/pix-radio-button-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/debug", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _debug, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/debug",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
          "id": "R+zsCxcS",
          "block": "[[[8,[39,0],null,null,[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\"]]",
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
          "id": "+lJUyqRg",
          "block": "[[[8,[39,0],null,[[\"@screenReaderOnly\"],[true]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\"]]",
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
        "id": "SeME9CYn",
        "block": "[[[8,[39,0],[[24,\"disabled\",\"\"],[24,\"checked\",\"\"]],null,[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
        "isStrictMode": false
      }));

      // when & then
      assert.true(screen.getByLabelText('Abricot').checked);
    });
    (0, _qunit.module)('@isDisabled', function (hooks) {
      let sandbox;
      hooks.beforeEach(function () {
        sandbox = _sinon.default.createSandbox();
        sandbox.stub(_debug.default, 'warn');
      });
      hooks.afterEach(function () {
        sandbox.restore();
      });
      (0, _qunit.test)(`it should not be possible to interact when @isDisabled={{true}}`, async function (assert) {
        // given
        this.set('isDisabled', true);
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>
        */
        {
          "id": "GxJdIDRh",
          "block": "[[[8,[39,0],null,[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
          "isStrictMode": false
        }));
        sandbox.assert.calledWith(_debug.default.warn, 'PixRadioButton: @isDisabled attribute should be a boolean.', true, {
          id: 'pix-ui.radio-button.is-disabled.not-boolean'
        });
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
      (0, _qunit.test)(`it should read success state info if given`, async function (assert) {
        // given
        this.set('isDisabled', true);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton checked @isDisabled={{this.isDisabled}} @state='success'><:label>Recevoir la
            newsletter</:label></PixRadioButton>
        */
        {
          "id": "W5+REImH",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\"],[[30,0,[\"isDisabled\"]],\"success\"]],[[\"label\"],[[[[1,\"Recevoir la\\n    newsletter\"]],[]]]]]],[],false,[\"pix-radio-button\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.getByRole('radio', {
          description: 'Sélection correcte',
          hidden: true
        })).exists();
      });
      (0, _qunit.test)(`it should read error state info if given`, async function (assert) {
        // given
        this.set('isDisabled', true);

        // when
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixRadioButton checked @isDisabled={{this.isDisabled}} @state='error'><:label>Recevoir la
            newsletter</:label></PixRadioButton>
        */
        {
          "id": "5yUoteZs",
          "block": "[[[8,[39,0],[[24,\"checked\",\"\"]],[[\"@isDisabled\",\"@state\"],[[30,0,[\"isDisabled\"]],\"error\"]],[[\"label\"],[[[[1,\"Recevoir la\\n    newsletter\"]],[]]]]]],[],false,[\"pix-radio-button\"]]",
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
            "id": "GxJdIDRh",
            "block": "[[[8,[39,0],null,[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
            "isStrictMode": false
          }));
          sandbox.assert.calledWith(_debug.default.warn, 'PixRadioButton: @isDisabled attribute should be a boolean.', false, {
            id: 'pix-ui.radio-button.is-disabled.not-boolean'
          });
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
            "id": "GxJdIDRh",
            "block": "[[[8,[39,0],null,[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"label\"],[[[[1,\"Abricot\"]],[]]]]]],[],false,[\"pix-radio-button\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-radio-button-test.js",
            "isStrictMode": false
          }));
          sandbox.assert.calledWith(_debug.default.warn, 'PixRadioButton: @isDisabled attribute should be a boolean.', true, {
            id: 'pix-ui.radio-button.is-disabled.not-boolean'
          });
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
  });
});
define("dummy/tests/integration/components/pix-return-to-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pix-return-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const RETURN_TO_SELECTOR = '.pix-return-to';
    (0, _qunit.test)('it renders the default PixReturnTo', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixReturnTo @route='home'>Home</PixReturnTo>
      */
      {
        "id": "vuziH6oh",
        "block": "[[[8,[39,0],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Home\"]],[]]]]]],[],false,[\"pix-return-to\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-return-to-test.js",
        "isStrictMode": false
      }));

      // then
      const pixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
      assert.contains('Home');
      assert.ok(pixReturnToElement.classList.toString().includes('pix-return-to pix-return-to--black'));
    });
    (0, _qunit.test)('it renders with the given shade', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixReturnTo @route='home' @shade='white' />
      */
      {
        "id": "N7SVuVuS",
        "block": "[[[8,[39,0],null,[[\"@route\",\"@shade\"],[\"home\",\"white\"]],null]],[],false,[\"pix-return-to\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-return-to-test.js",
        "isStrictMode": false
      }));

      // then
      const pixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
      assert.ok(pixReturnToElement.classList.toString().includes('pix-return-to pix-return-to--white'));
    });
    (0, _qunit.test)('it renders without text', async function (assert) {
      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixReturnTo @route='home' />
      */
      {
        "id": "lAky+Zxq",
        "block": "[[[8,[39,0],null,[[\"@route\"],[\"home\"]],null]],[],false,[\"pix-return-to\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-return-to-test.js",
        "isStrictMode": false
      }));

      // then
      const pixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(pixReturnToElement.textContent.trim(), '');
    });
  });
});
define("dummy/tests/integration/components/pix-search-input-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixSearchInput', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
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
        "id": "9Y2xk23j",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@debounceTimeInMs\",\"@triggerFiltering\"],[\"pix-123\",\"1000\",[30,0,[\"triggerFiltering\"]]]],[[\"label\"],[[[[1,\"Mon super input qui filtre\"]],[]]]]]],[],false,[\"pix-search-input\"]]",
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
        "id": "I8lmut8T",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@debounceTimeInMs\",\"@triggerFiltering\"],[\"pix-123\",\"0\",[30,0,[\"triggerFiltering\"]]]],[[\"label\"],[[[[1,\"Champ de recherche de fruits\"]],[]]]]]],[],false,[\"pix-search-input\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-search-input-test.js",
        "isStrictMode": false
      }));
      await (0, _emberTestingLibrary.fillByLabel)('Champ de recherche de fruits', 'Mangue');

      // then
      assert.ok(triggerFiltering.calledWith('pix-123', 'Mangue'));
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
        "id": "5uyJcj4x",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@debounceTimeInMs\",\"@triggerFiltering\",\"@value\"],[\"pix-123\",\"0\",[30,0,[\"triggerFiltering\"]],[30,0,[\"dynamicValue\"]]]],[[\"label\"],[[[[1,\"Champ de recherche de fruits\"]],[]]]]]],[],false,[\"pix-search-input\"]]",
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
define("dummy/tests/integration/components/pix-select-test", ["qunit", "@ember/test-helpers", "ember-qunit", "@1024pix/ember-testing-library", "sinon", "@testing-library/user-event", "@testing-library/dom", "@ember/template-factory"], function (_qunit, _testHelpers, _emberQunit, _emberTestingLibrary, _sinon, _userEvent, _dom, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"sinon",0,"@testing-library/user-event",0,"@testing-library/dom",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
    this.subLabel = 'Mon sous label';
    this.placeholder = 'Choisissez une option';
    this.searchLabel = 'Rechercher';
    this.screenReaderOnly = 'Rechercher';
    this.searchPlaceholder = 'Placeholder de la recherche';
    (0, _qunit.test)('it renders Select', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixSelect
        @options={{this.options}}
        @subLabel={{this.subLabel}}
        @placeholder={{this.placeholder}}
      ><:label>{{this.label}}</:label></PixSelect>
      */
      {
        "id": "Ln+oHevI",
        "block": "[[[8,[39,0],null,[[\"@options\",\"@subLabel\",\"@placeholder\"],[[30,0,[\"options\"]],[30,0,[\"subLabel\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          <PixSelect @id='custom' @options={{this.options}} @placeholder={{this.placeholder}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "CLd/DC8w",
          "block": "[[[8,[39,0],null,[[\"@id\",\"@options\",\"@placeholder\"],[\"custom\",[30,0,[\"options\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          <PixSelect @options={{this.options}} @placeholder={{this.placeholder}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "dx3FKSEZ",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom(screen.queryByRole('option', {
          name: 'Oignon'
        })).doesNotExist();
      });
      (0, _qunit.test)('it opens the dropdown', async function (assert) {
        // given
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect @options={{this.options}} @placeholder={{this.placeholder}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "dx3FKSEZ",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          <PixSelect
          @options={{this.options}}
          @placeholder={{this.placeholder}}
          @hideDefaultOption={{true}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "BqvRsyAK",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@hideDefaultOption\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],true]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await screen.findByRole('listbox');

        // then
        assert.strictEqual(screen.queryByText(this.placeholder, {
          selector: 'li'
        }).tabIndex, -1);
        assert.strictEqual(screen.queryByRole('option', {
          name: this.placeholder
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
          <PixSelect @options={{this.options}} @placeholder={{this.placeholder}}><:label
          >{{this.label}}</:label></PixSelect>
        */
        {
          "id": "dx3FKSEZ",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect @options={{this.options}} @placeholder={{this.placeholder}} @isDisabled={{true}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "xJAlFC4l",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@isDisabled\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],true]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect @options={{this.options}} @value='3' @placeholder={{this.placeholder}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "ebhXn8l2",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@value\",\"@placeholder\"],[[30,0,[\"options\"]],\"3\",[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect @options={{this.options}} @value='2' @placeholder={{this.placeholder}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "iEv0X3fO",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@value\",\"@placeholder\"],[[30,0,[\"options\"]],\"2\",[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect @options={{this.options}} @value='1' @placeholder={{this.placeholder}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "T1he7rZ2",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@value\",\"@placeholder\"],[[30,0,[\"options\"]],\"1\",[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect @options={{this.options}} @placeholder={{this.placeholder}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "dx3FKSEZ",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect @options={{this.options}} @placeholder={{this.placeholder}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "dx3FKSEZ",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect @options={{this.options}} @placeholder={{this.placeholder}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "dx3FKSEZ",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect
            @options={{this.options}}
            @placeholder={{this.placeholder}}
            @onChange={{this.onChange}}
          ><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "wE+nZ332",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"onChange\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            @placeholder={{this.placeholder}}
            @onChange={{this.onChange}}
          ><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "j7nO8bAt",
            "block": "[[[10,\"button\"],[14,1,\"focus\"],[14,4,\"button\"],[12],[1,\"Focus me\"],[13],[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"onChange\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
            <PixSelect
            @options={{this.options}}
            @placeholder={{this.placeholder}}
            @onChange={{this.onChange}}
          ><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "wE+nZ332",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"onChange\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          this.searchLabel = 'Label du search';
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect
            @options={{this.options}}
            @isSearchable={{true}}
            @placeholder={{this.placeholder}}
            @searchLabel={{this.searchLabel}}
          ><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "gPJpOV8a",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@isSearchable\",\"@placeholder\",\"@searchLabel\"],[[30,0,[\"options\"]],true,[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // when
          screen.getByLabelText('Mon menu déroulant').focus();
          await _userEvent.default.keyboard('[ArrowDown]');
          await screen.findByRole('listbox');
          await _userEvent.default.keyboard('[Tab]');

          // then
          assert.dom(screen.getByLabelText(this.searchLabel)).isFocused();
        });
        (0, _qunit.test)('it should focus on the input when escape is pressed', async function (assert) {
          // given
          this.searchLabel = 'Label du search';
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect
            @options={{this.options}}
            @isSearchable={{true}}
            @placeholder={{this.placeholder}}
            @searchLabel={{this.searchLabel}}
          ><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "gPJpOV8a",
            "block": "[[[8,[39,0],null,[[\"@options\",\"@isSearchable\",\"@placeholder\",\"@searchLabel\"],[[30,0,[\"options\"]],true,[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          <PixSelect @options={{this.options}} @placeholder={{this.placeholder}}><:label
            >{{this.label}}</:label></PixSelect>
          */
          {
            "id": "04fbM3M+",
            "block": "[[[10,0],[14,0,\"tab-interface\"],[12],[1,\"\\n  \"],[10,0],[14,\"role\",\"tablist\"],[14,\"aria-label\",\"Sample Tabs\"],[12],[1,\"\\n    \"],[10,1],[14,\"role\",\"tab\"],[14,\"aria-selected\",\"true\"],[14,\"aria-controls\",\"panel-1\"],[14,1,\"tab-1\"],[14,\"tabindex\",\"0\"],[12],[1,\"\\n      Je ne dois pas être focus !\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@options\",\"@placeholder\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          <PixSelect
          @options={{this.options}}
          @placeholder={{this.placeholder}}
          @onChange={{this.onChange}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "wE+nZ332",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"onChange\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          @placeholder={{this.placeholder}}
          @onChange={{this.onChange}}
          @value={{this.value}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "dyRIg4B9",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@onChange\",\"@value\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"onChange\"]],[30,0,[\"value\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          @placeholder={{this.placeholder}}
          @onChange={{this.onChange}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "rtQ8nefr",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@onChange\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"onChange\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "WtI4UuVk",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@searchLabel\",\"@searchPlaceholder\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]],[30,0,[\"searchPlaceholder\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "WtI4UuVk",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@searchLabel\",\"@searchPlaceholder\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]],[30,0,[\"searchPlaceholder\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "WtI4UuVk",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@searchLabel\",\"@searchPlaceholder\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]],[30,0,[\"searchPlaceholder\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "WtI4UuVk",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@searchLabel\",\"@searchPlaceholder\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]],[30,0,[\"searchPlaceholder\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "WtI4UuVk",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@searchLabel\",\"@searchPlaceholder\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]],[30,0,[\"searchPlaceholder\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "WtI4UuVk",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@searchLabel\",\"@searchPlaceholder\",\"@isSearchable\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]],[30,0,[\"searchPlaceholder\"]],[30,0,[\"isSearchable\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
        this.emptySearchMessage = 'Aucune option';
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
          @emptySearchMessage={{this.emptySearchMessage}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "2FZm8rCp",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@searchLabel\",\"@searchPlaceholder\",\"@isSearchable\",\"@emptySearchMessage\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"searchLabel\"]],[30,0,[\"searchPlaceholder\"]],[30,0,[\"isSearchable\"]],[30,0,[\"emptySearchMessage\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // when
        await (0, _emberTestingLibrary.clickByName)('Mon menu déroulant');
        await (0, _emberTestingLibrary.fillByLabel)('Rechercher', 'Cheddar');
        assert.contains('Aucune option');
      });
    });
    (0, _qunit.module)('#required', function () {
      (0, _qunit.test)('it displays the astérisque', async function (assert) {
        this.requiredLabel = 'Title requis';
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @placeholder={{this.placeholder}}
          @requiredLabel={{this.requiredLabel}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "AhFyiz3l",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@requiredLabel\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"requiredLabel\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));
        assert.dom(screen.getByLabelText('* Mon menu déroulant')).exists();
      });
    });
    (0, _qunit.module)('#errorMesssage', function () {
      (0, _qunit.test)('it displays the error message', async function (assert) {
        this.errorMessage = "Tu t'es trompé !";
        const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSelect
          @options={{this.options}}
          @placeholder={{this.placeholder}}
          @errorMessage={{this.errorMessage}}
        ><:label>{{this.label}}</:label></PixSelect>
        */
        {
          "id": "kxGERVTV",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@placeholder\",\"@errorMessage\"],[[30,0,[\"options\"]],[30,0,[\"placeholder\"]],[30,0,[\"errorMessage\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
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
          "id": "a5zCmD5U",
          "block": "[[[8,[39,0],null,[[\"@className\",\"@options\"],[\"some-custom-class\",[30,0,[\"options\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom('.some-custom-class').exists();
      });
    });
    (0, _qunit.module)('#icon', function () {
      (0, _qunit.module)('when no icon name is provided', function () {
        (0, _qunit.test)('does not display any icon', async function (assert) {
          // given & when
          await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @options={{this.options}}><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "tGBXX48l",
            "block": "[[[8,[39,0],null,[[\"@options\"],[[30,0,[\"options\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));

          // then
          assert.dom('.fa-earth-europe').doesNotExist();
        });
      });
      (0, _qunit.module)('when an icon name is provided', function () {
        (0, _qunit.test)('displays an icon', async function (assert) {
          // given & when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSelect @iconName='globe' @options={{this.options}}><:label>{{this.label}}</:label></PixSelect>
          */
          {
            "id": "0nyIcgWL",
            "block": "[[[8,[39,0],null,[[\"@iconName\",\"@options\"],[\"globe\",[30,0,[\"options\"]]]],[[\"label\"],[[[[1,[30,0,[\"label\"]]]],[]]]]]],[],false,[\"pix-select\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-select-test.js",
            "isStrictMode": false
          }));
          const svg = screen.getAllByRole('img')[0].innerHTML;
          // then
          assert.true(svg.includes('#globe'));
        });
      });
    });
  });
});
define("dummy/tests/integration/components/pix-selectable-tag-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
define("dummy/tests/integration/components/pix-sidebar-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@1024pix/ember-testing-library", "sinon", "dummy/tests/helpers/create-glimmer-component", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _emberTestingLibrary, _sinon, _createGlimmerComponent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"sinon",0,"dummy/tests/helpers/create-glimmer-component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | Sidebar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('when showSidebar is equal true', function () {
      (0, _qunit.test)('it renders the default PixSidebar', async function (assert) {
        // given
        this.title = "It's a sidebar!";
        this.showSidebar = true;

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSidebar @title={{this.title}} @showSidebar={{this.showSidebar}}>
          <:content>
            content
          </:content>
          <:footer>
            footer
          </:footer>
        </PixSidebar>
        */
        {
          "id": "VqWFXiSy",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@showSidebar\"],[[30,0,[\"title\"]],[30,0,[\"showSidebar\"]]]],[[\"content\",\"footer\"],[[[[1,\"\\n    content\\n  \"]],[]],[[[1,\"\\n    footer\\n  \"]],[]]]]]],[],false,[\"pix-sidebar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-sidebar-test.js",
          "isStrictMode": false
        }));

        // then
        assert.contains("It's a sidebar!");
        assert.contains('content');
        assert.contains('footer');
        assert.dom('.pix-sidebar--hidden').doesNotExist();
        assert.dom('.pix-sidebar__overlay--hidden').doesNotExist();
      });
      (0, _qunit.module)('when close button is clicked', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          this.title = 'Close me baby one more time';
          this.showSidebar = true;
          this.onClose = _sinon.default.stub();

          // when
          const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSidebar @title={{this.title}} @onClose={{this.onClose}} @showSidebar={{this.showSidebar}}>
            <:content>
              content
            </:content>
          </PixSidebar>
          */
          {
            "id": "asHuUGYK",
            "block": "[[[8,[39,0],null,[[\"@title\",\"@onClose\",\"@showSidebar\"],[[30,0,[\"title\"]],[30,0,[\"onClose\"]],[30,0,[\"showSidebar\"]]]],[[\"content\"],[[[[1,\"\\n    content\\n  \"]],[]]]]]],[],false,[\"pix-sidebar\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-sidebar-test.js",
            "isStrictMode": false
          }));
          await (0, _testHelpers.click)(screen.getByRole('button', {
            name: /Fermer/
          }));

          // then
          assert.ok(this.onClose.calledOnce);
        });
      });
      (0, _qunit.module)('when escape button is clicked', function () {
        (0, _qunit.test)('it should call onClose function passed in argument', async function (assert) {
          // given
          this.title = 'Close me baby one more time';
          this.showSidebar = true;
          this.onClose = _sinon.default.stub();

          // when
          await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <PixSidebar @title={{this.title}} @onClose={{this.onClose}} @showSidebar={{this.showSidebar}}>
            <:content>
              content
            </:content>
          </PixSidebar>
          */
          {
            "id": "asHuUGYK",
            "block": "[[[8,[39,0],null,[[\"@title\",\"@onClose\",\"@showSidebar\"],[[30,0,[\"title\"]],[30,0,[\"onClose\"]],[30,0,[\"showSidebar\"]]]],[[\"content\"],[[[[1,\"\\n    content\\n  \"]],[]]]]]],[],false,[\"pix-sidebar\"]]",
            "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-sidebar-test.js",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerKeyEvent)('.pix-sidebar__overlay', 'keyup', 'Escape');

          // then
          assert.ok(this.onClose.calledOnce);
        });
      });
    });
    (0, _qunit.module)('when showSidebar is false', function () {
      (0, _qunit.test)('it should not show sidebar', async function (assert) {
        // given
        this.title = "It's a sidebar!";
        this.showSidebar = false;

        // when
        await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <PixSidebar @title={{this.title}} @showSidebar={{this.showSidebar}}>
          <:content>
            content
          </:content>
          <:footer>
            footer
          </:footer>
        </PixSidebar>
        */
        {
          "id": "VqWFXiSy",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@showSidebar\"],[[30,0,[\"title\"]],[30,0,[\"showSidebar\"]]]],[[\"content\",\"footer\"],[[[[1,\"\\n    content\\n  \"]],[]],[[[1,\"\\n    footer\\n  \"]],[]]]]]],[],false,[\"pix-sidebar\"]]",
          "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-sidebar-test.js",
          "isStrictMode": false
        }));

        // then
        assert.dom('.pix-sidebar--hidden').exists();
        assert.dom('.pix-sidebar__overlay--hidden').exists();
      });
    });
    (0, _qunit.test)('it should throw an error if require @title argument is missing', async function (assert) {
      // given
      const componentParams = {};

      // when
      const renderComponent = function () {
        (0, _createGlimmerComponent.default)('pix-sidebar', componentParams);
      };

      // then
      const expectedError = new Error('ERROR in PixSidebar component: @title argument is required.');
      assert.throws(renderComponent, expectedError);
    });
  });
});
define("dummy/tests/integration/components/pix-stars-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
define("dummy/tests/integration/components/pix-tag-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
  });
});
define("dummy/tests/integration/components/pix-textarea-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@1024pix/ember-testing-library", "dummy/tests/helpers/fill-in-by-label", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _emberTestingLibrary, _fillInByLabel, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"dummy/tests/helpers/fill-in-by-label",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
        "id": "dSMr1rY9",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@value\"],[\"7\",\"old value\"]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\"]]",
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
        "id": "YV2iAFcy",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@maxlength\",\"@id\"],[[30,0,[\"value\"]],[30,0,[\"maxlength\"]],\"textarea-id\"]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\"]]",
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
        "id": "NPg4uxWY",
        "block": "[[[8,[39,0],[[24,\"required\",\"true\"]],[[\"@value\"],[[30,0,[\"value\"]]]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\"]]",
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
        "id": "ZTqPapWp",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@id\",\"@requiredLabel\"],[[30,0,[\"value\"]],\"pix-textarea\",[30,0,[\"requiredLabel\"]]]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\"]]",
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
        "id": "MAa5lac6",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@requiredLabel\",\"@id\"],[[30,0,[\"value\"]],\"Obligatoire\",\"id\"]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\"]]",
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
        "id": "zU8n7fLx",
        "block": "[[[8,[39,0],null,[[\"@id\"],[\"pix-select-with-label\"]],[[\"label\"],[[[[1,\"Décrivez votre problème\"]],[]]]]]],[],false,[\"pix-textarea\"]]",
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
        "id": "EDtDESdT",
        "block": "[[[8,[39,0],null,[[\"@id\",\"@errorMessage\"],[\"pix-textarea-with-error\",\"Veuillez remplir ce champ.\"]],[[\"label\"],[[[[1,\"label\"]],[]]]]]],[],false,[\"pix-textarea\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-textarea-test.js",
        "isStrictMode": false
      }));

      // then
      assert.contains('Veuillez remplir ce champ.');
    });
  });
});
define("dummy/tests/integration/components/pix-toggle-test", ["qunit", "@ember/test-helpers", "ember-qunit", "@1024pix/ember-testing-library", "sinon", "@testing-library/user-event", "@ember/template-factory"], function (_qunit, _testHelpers, _emberQunit, _emberTestingLibrary, _sinon, _userEvent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"sinon",0,"@testing-library/user-event",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | PixToggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    this.label = 'Mon bouton toggle';
    this.onLabel = 'Oui';
    this.offLabel = 'Non';
    (0, _qunit.test)('it renders PixToggle', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixToggle>
        <:label>{{this.label}}</:label>
        <:on>{{this.onLabel}}</:on>
        <:off>{{this.offLabel}}</:off>
      </PixToggle>
      */
      {
        "id": "S0LtIlYj",
        "block": "[[[8,[39,0],null,null,[[\"label\",\"on\",\"off\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"onLabel\"]]]],[]],[[[1,[30,0,[\"offLabel\"]]]],[]]]]]],[],false,[\"pix-toggle\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "isStrictMode": false
      }));
      assert.dom(screen.getByText(this.label)).exists();
      assert.dom(screen.getByText(this.onLabel)).exists();
      assert.dom(screen.getByText(this.offLabel)).exists();
    });
    (0, _qunit.test)('it pressed PixToggle', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixToggle @toggled={{true}}>
        <:label>{{this.label}}</:label>
        <:on>{{this.onLabel}}</:on>
        <:off>{{this.offLabel}}</:off>
      </PixToggle>
      */
      {
        "id": "HHjZkkPU",
        "block": "[[[8,[39,0],null,[[\"@toggled\"],[true]],[[\"label\",\"on\",\"off\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"onLabel\"]]]],[]],[[[1,[30,0,[\"offLabel\"]]]],[]]]]]],[],false,[\"pix-toggle\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByRole('button', {
        pressed: true
      })).exists();
    });
    (0, _qunit.test)('it does not press PixToggle', async function (assert) {
      // given & when
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixToggle @toggled={{false}}>
        <:label>{{this.label}}</:label>
        <:on>{{this.onLabel}}</:on>
        <:off>{{this.offLabel}}</:off>
      </PixToggle>
      */
      {
        "id": "x5+7i2qL",
        "block": "[[[8,[39,0],null,[[\"@toggled\"],[false]],[[\"label\",\"on\",\"off\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"onLabel\"]]]],[]],[[[1,[30,0,[\"offLabel\"]]]],[]]]]]],[],false,[\"pix-toggle\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "isStrictMode": false
      }));

      // then
      assert.dom(screen.getByRole('button', {
        pressed: false
      })).exists();
    });
    (0, _qunit.test)('it calls onChange when PixToggle is not pressed with value true', async function (assert) {
      // given & when
      this.onChange = _sinon.default.spy();
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixToggle @toggled={{false}} @onChange={{this.onChange}}>
        <:label>{{this.label}}</:label>
        <:on>{{this.onLabel}}</:on>
        <:off>{{this.offLabel}}</:off>
      
      </PixToggle>
      */
      {
        "id": "cJfV15qE",
        "block": "[[[8,[39,0],null,[[\"@toggled\",\"@onChange\"],[false,[30,0,[\"onChange\"]]]],[[\"label\",\"on\",\"off\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"onLabel\"]]]],[]],[[[1,[30,0,[\"offLabel\"]]]],[]]]]]],[],false,[\"pix-toggle\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button'));

      // then
      _sinon.default.assert.calledWith(this.onChange, true);
      assert.ok(this.onChange.called);
    });
    (0, _qunit.test)('it calls onChange when PixToggle is pressed with value false', async function (assert) {
      // given & when
      this.onChange = _sinon.default.spy();
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixToggle @toggled={{true}} @onChange={{this.onChange}}>
        <:label>{{this.label}}</:label>
        <:on>{{this.onLabel}}</:on>
        <:off>{{this.offLabel}}</:off>
      </PixToggle>
      */
      {
        "id": "L9nx5B44",
        "block": "[[[8,[39,0],null,[[\"@toggled\",\"@onChange\"],[true,[30,0,[\"onChange\"]]]],[[\"label\",\"on\",\"off\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"onLabel\"]]]],[]],[[[1,[30,0,[\"offLabel\"]]]],[]]]]]],[],false,[\"pix-toggle\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(screen.getByRole('button'));

      // then
      _sinon.default.assert.calledWith(this.onChange, false);
      assert.ok(this.onChange.called);
    });
    (0, _qunit.test)('it calls onChange when Enter is pressed', async function (assert) {
      // given & when
      this.onChange = _sinon.default.spy();
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixToggle @onChange={{this.onChange}}>
        <:label>{{this.label}}</:label>
        <:on>{{this.onLabel}}</:on>
        <:off>{{this.offLabel}}</:off>
      
      </PixToggle>
      */
      {
        "id": "hE+pt2Ud",
        "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],[[\"label\",\"on\",\"off\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"onLabel\"]]]],[]],[[[1,[30,0,[\"offLabel\"]]]],[]]]]]],[],false,[\"pix-toggle\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "isStrictMode": false
      }));
      await screen.getByRole('button').focus();
      await _userEvent.default.keyboard('[Enter]');

      // then
      assert.ok(this.onChange.called);
    });
    (0, _qunit.test)('it calls onChange when Space is pressed', async function (assert) {
      // given & when
      this.onChange = _sinon.default.spy();
      const screen = await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixToggle @onChange={{this.onChange}}>
        <:label>{{this.label}}</:label>
        <:on>{{this.onLabel}}</:on>
        <:off>{{this.offLabel}}</:off>
      
      </PixToggle>
      */
      {
        "id": "hE+pt2Ud",
        "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],[[\"label\",\"on\",\"off\"],[[[[1,[30,0,[\"label\"]]]],[]],[[[1,[30,0,[\"onLabel\"]]]],[]],[[[1,[30,0,[\"offLabel\"]]]],[]]]]]],[],false,[\"pix-toggle\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-toggle-test.js",
        "isStrictMode": false
      }));
      await screen.getByRole('button').focus();
      await _userEvent.default.keyboard('[Space]');

      // then
      assert.ok(this.onChange.called);
    });
  });
});
define("dummy/tests/integration/components/pix-tooltip-test", ["qunit", "ember-qunit", "@1024pix/ember-testing-library", "@testing-library/user-event", "@ember/template-factory"], function (_qunit, _emberQunit, _emberTestingLibrary, _userEvent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@1024pix/ember-testing-library",0,"@testing-library/user-event",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
        "id": "S8ZSSEEe",
        "block": "[[[8,[39,0],null,null,[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    template block text\\n  \"]],[]],[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
        "id": "jub7rcmx",
        "block": "[[[8,[39,0],null,null,[[\"triggerElement\"],[[[[1,\"\\n    template block text\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
        "id": "KcJz9oDa",
        "block": "[[[8,[39,0],null,[[\"@hide\"],[true]],[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    template block text\\n  \"]],[]],[[],[]]]]]],[],false,[\"pix-tooltip\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/components/pix-tooltip-test.js",
        "isStrictMode": false
      }));

      // then
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      assert.contains('template block text');
      assert.notOk(tooltipContentElement);
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
        "id": "Uz3tJrmJ",
        "block": "[[[8,[39,0],null,[[\"@position\"],[\"bottom\"]],[[\"triggerElement\",\"tooltip\"],[[[[1,\"\\n    \"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"Trigger\"]],[]]]]],[1,\"\\n  \"]],[]],[[[1,\"Some tooltip\"]],[]]]]]],[],false,[\"pix-tooltip\",\"pix-button\"]]",
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
            "id": "MyT2RJFA",
            "block": "[[[8,[39,0],null,[[\"@position\"],[[30,0,[\"position\"]]]],[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
          "id": "5TGg6C/I",
          "block": "[[[8,[39,0],null,null,[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
          "id": "g488XR1V",
          "block": "[[[8,[39,0],null,[[\"@isLight\"],[true]],[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
          "id": "5TGg6C/I",
          "block": "[[[8,[39,0],null,null,[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
          "id": "2tioRO3E",
          "block": "[[[8,[39,0],null,[[\"@isInline\"],[true]],[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
          "id": "5TGg6C/I",
          "block": "[[[8,[39,0],null,null,[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
          "id": "4ILl2Sqf",
          "block": "[[[8,[39,0],null,[[\"@isWide\"],[true]],[[\"tooltip\"],[[[[1,\"\\n    \"],[1,[30,0,[\"text\"]]],[1,\"\\n  \"]],[]]]]]],[],false,[\"pix-tooltip\"]]",
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
define("dummy/tests/integration/modifiers/on-escape-action-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@1024pix/ember-testing-library", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _emberTestingLibrary, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@1024pix/ember-testing-library",0,"sinon",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Modifier | on-escape-action', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it fires action on escape keyup', async function (assert) {
      // given
      this.title = 'Close me baby one more time';
      this.onCloseButtonClick = _sinon.default.stub();

      // when
      await (0, _emberTestingLibrary.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PixModal
        @title={{this.title}}
        @onCloseButtonClick={{this.onCloseButtonClick}}
        {{on-escape-action this.onCloseButtonClick}}
        {{trap-focus}}
      >
        content
      </PixModal>
      */
      {
        "id": "wK/vQSSf",
        "block": "[[[8,[39,0],[[4,[38,1],[[30,0,[\"onCloseButtonClick\"]]],null],[4,[38,2],null,null]],[[\"@title\",\"@onCloseButtonClick\"],[[30,0,[\"title\"]],[30,0,[\"onCloseButtonClick\"]]]],[[\"default\"],[[[[1,\"\\n  content\\n\"]],[]]]]]],[],false,[\"pix-modal\",\"on-escape-action\",\"trap-focus\"]]",
        "moduleName": "/home/runner/work/pix-ui/pix-ui/dummy/tests/integration/modifiers/on-escape-action-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerKeyEvent)('.pix-modal__overlay', 'keyup', 'Escape');

      // then
      assert.ok(this.onCloseButtonClick.calledOnce);
    });
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit", "dummy/tests/helpers/contains"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit, _contains) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"dummy/app",0,"dummy/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit",0,"dummy/tests/helpers/contains"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
  QUnit.assert.contains = _contains.contains;
});
define("dummy/tests/unit/components/pix-banner-test", ["qunit", "ember-qunit", "dummy/tests/helpers/create-glimmer-component", "sinon"], function (_qunit, _emberQunit, _createGlimmerComponent, _sinon) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"dummy/tests/helpers/create-glimmer-component",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Component | PixBanner', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.module)('#closeBanner', function () {
      (0, _qunit.module)('when onCloseBannerTriggerAction is set', function () {
        (0, _qunit.test)('it should call the custom action', async function (assert) {
          // given
          const params = Symbol();
          const onCloseBannerTriggerAction = _sinon.default.stub();
          const componentParams = {
            canCloseBanner: true,
            onCloseBannerTriggerAction
          };
          const component = (0, _createGlimmerComponent.default)('pix-banner', componentParams);

          // when
          await component.closeBanner(params);

          // then
          _sinon.default.assert.calledWith(onCloseBannerTriggerAction, params);
          assert.ok(true);
        });
      });
    });
  });
});
define("dummy/tests/unit/components/pix-radio-button-test", ["qunit", "ember-qunit", "dummy/tests/helpers/create-glimmer-component"], function (_qunit, _emberQunit, _createGlimmerComponent) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"dummy/tests/helpers/create-glimmer-component"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Component | PixRadioButton', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.module)('#isDisabled', function () {
      (0, _qunit.module)('when @isDisabled is a boolean', function () {
        (0, _qunit.module)('when @isDisabled is true', function () {
          (0, _qunit.test)('it should return "true"', function (assert) {
            // given
            const isDisabled = true;
            const component = (0, _createGlimmerComponent.default)('pix-radio-button', {
              isDisabled
            });

            // when
            const result = component.isDisabled;

            // then
            assert.strictEqual(result, 'true');
          });
        });
        (0, _qunit.module)('when @isDisabled is false', function () {
          (0, _qunit.test)('it should return null', function (assert) {
            // given
            const isDisabled = false;
            const component = (0, _createGlimmerComponent.default)('pix-radio-button', {
              isDisabled
            });

            // when
            const result = component.isDisabled;

            // then
            assert.strictEqual(result, null);
          });
        });
      });
      (0, _qunit.module)('when @isDisabled is a string', function () {
        (0, _qunit.module)('when @isDisabled is "true"', function () {
          (0, _qunit.test)('it should return "true"', function (assert) {
            // given
            const isDisabled = 'true';
            const component = (0, _createGlimmerComponent.default)('pix-radio-button', {
              isDisabled
            });

            // when
            const result = component.isDisabled;

            // then
            assert.strictEqual(result, 'true');
          });
        });
        (0, _qunit.module)('when @isDisabled is "false"', function () {
          (0, _qunit.test)('it should return "true"', function (assert) {
            // given
            const isDisabled = 'false';
            const component = (0, _createGlimmerComponent.default)('pix-radio-button', {
              isDisabled
            });

            // when
            const result = component.isDisabled;

            // then
            assert.strictEqual(result, 'true');
          });
        });
      });
    });
    (0, _qunit.module)('#stateWarning', function () {
      (0, _qunit.module)('when @isDisabled is false and @state is success', function () {
        (0, _qunit.test)('it should return false', function (assert) {
          // given
          const isDisabled = false;
          const state = 'success';
          const component = (0, _createGlimmerComponent.default)('pix-radio-button', {
            isDisabled,
            state
          });

          // when
          const result = component.stateWarning;

          // then
          assert.false(result);
        });
      });
    });
  });
});
define("dummy/tests/unit/components/pix-return-to-test", ["qunit", "ember-qunit", "dummy/tests/helpers/create-glimmer-component"], function (_qunit, _emberQunit, _createGlimmerComponent) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"dummy/tests/helpers/create-glimmer-component"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Component | pix-return-to', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('its default color is black', function (assert) {
      // given
      const componentParams = {
        route: 'uneRoute',
        shade: 'test'
      };
      const expectedShade = 'black';
      const component = (0, _createGlimmerComponent.default)('pix-return-to', componentParams);

      // when & then
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(component.shade, expectedShade);
    });
    (0, _qunit.test)('it can be white', function (assert) {
      // given
      const componentParams = {
        route: 'uneRoute',
        shade: 'white'
      };
      const expectedShade = 'white';
      const component = (0, _createGlimmerComponent.default)('pix-return-to', componentParams);

      // when & then
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(component.shade, expectedShade);
    });
    (0, _qunit.test)('it throws if route param is undefined or empty', function (assert) {
      // given
      const componentParams = {
        route: '  '
      };
      const expectedError = new Error('ERROR in PixReturnTo component, @route param is not provided');
      const component = (0, _createGlimmerComponent.default)('pix-return-to', componentParams);

      // when & then
      assert.throws(function () {
        component.route;
      }, expectedError);
    });
  });
});
define("dummy/tests/unit/components/pix-search-input-test", ["qunit", "ember-qunit", "dummy/tests/helpers/create-glimmer-component", "sinon"], function (_qunit, _emberQunit, _createGlimmerComponent, _sinon) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"dummy/tests/helpers/create-glimmer-component",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Component | pix-search-input', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.module)('when there are errors in params', function () {
      (0, _qunit.test)('it should throw an error if there is no triggerFiltering given', async function (assert) {
        // given
        const componentParams = {
          label: 'Super label',
          debounceTimeInMs: 1000,
          triggerFiltering: null
        };

        // when & then
        assert.throws(function () {
          (0, _createGlimmerComponent.default)('pix-search-input', componentParams);
        }, new Error('ERROR in PixSearchInput component, @triggerFiltering param is not provided'));
      });
      (0, _qunit.test)('it should throw an error if there is no debounce time given', async function (assert) {
        // given
        const componentParams = {
          label: 'Super label',
          debounceTimeInMs: null,
          triggerFiltering: _sinon.default.stub()
        };

        // when & then
        assert.throws(function () {
          (0, _createGlimmerComponent.default)('pix-search-input', componentParams);
        }, new Error('ERROR in PixSearchInput component, @debounceTimeInMs param is not provided'));
      });
    });
  });
});
define("dummy/tests/unit/components/pix-select-test", ["qunit", "ember-qunit", "dummy/tests/helpers/create-glimmer-component"], function (_qunit, _emberQunit, _createGlimmerComponent) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"dummy/tests/helpers/create-glimmer-component"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Component | pix-select', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('its should return the default className', function (assert) {
      // given
      const componentParams = {
        label: 'Un label',
        options: []
      };
      const component = (0, _createGlimmerComponent.default)('pix-select', componentParams);

      // when & then
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(component.className, 'pix-select-button');
    });
    (0, _qunit.test)('it should add a custom class name', function (assert) {
      // given
      const componentParams = {
        label: 'Un label',
        options: [],
        className: 'custom-class'
      };
      const component = (0, _createGlimmerComponent.default)('pix-select', componentParams);

      // when & then
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(component.className, 'pix-select-button custom-class');
    });
    (0, _qunit.test)('it should add an error class name', function (assert) {
      // given
      const componentParams = {
        label: 'Un label',
        options: [],
        errorMessage: 'there is an error'
      };
      const component = (0, _createGlimmerComponent.default)('pix-select', componentParams);

      // when & then
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(component.className, 'pix-select-button pix-select-button--error');
    });
    (0, _qunit.test)('it should add an error class name and a custom class', function (assert) {
      // given
      const componentParams = {
        label: 'Un label',
        options: [],
        errorMessage: 'there is an error',
        className: 'custom-class'
      };
      const component = (0, _createGlimmerComponent.default)('pix-select', componentParams);

      // when & then
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(component.className, 'pix-select-button custom-class pix-select-button--error');
    });
  });
});
define("dummy/tests/unit/translations/flatten-object-test", ["qunit", "@1024pix/pix-ui/translations"], function (_qunit, _translations) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@1024pix/pix-ui/translations"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Translations', function () {
    (0, _qunit.module)('#flattenObject', function () {
      (0, _qunit.test)('it should deeply flatten an object using dot notation', function (assert) {
        // given
        const object = {
          nested1: {
            nested11: {
              nested111: 'nested111'
            },
            nested12: 'nested12'
          },
          nested2: {
            nested21: {
              nested211: 'nested211',
              nested212: 'nested212'
            }
          },
          nested3: 'nested3'
        };

        // when
        const result = (0, _translations.flattenObject)(object);

        // then
        assert.deepEqual(result, {
          'nested1.nested11.nested111': 'nested111',
          'nested1.nested12': 'nested12',
          'nested2.nested21.nested211': 'nested211',
          'nested2.nested21.nested212': 'nested212',
          nested3: 'nested3'
        });
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
