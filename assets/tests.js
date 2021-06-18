'use strict';

define("dummy/tests/helpers/create-glimmer-component", ["exports", "@ember/test-helpers", "@glimmer/component/-private/ember-component-manager"], function (_exports, _testHelpers, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = createComponent;

  function createComponent(lookupPath) {
    var named = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _getContext = (0, _testHelpers.getContext)(),
        owner = _getContext.owner;

    var _owner$factoryFor = owner.factoryFor(lookupPath),
        componentClass = _owner$factoryFor.class;

    var componentManager = new _emberComponentManager.default(owner);
    return componentManager.createComponent(componentClass, {
      named: named
    });
  }
});
define("dummy/tests/integration/components/pix-background-header-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | pix-background-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var BACKGROUND_HEADER_SELECTOR = '.pix-background-header';
    var BACKGROUND_SELECTOR = "".concat(BACKGROUND_HEADER_SELECTOR, " .pix-background-header__background");
    (0, _qunit.test)('it renders the default PixBackgroundHeader', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var backgroundHeaderElement, backgroundElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBackgroundHeader>
                        Je suis un beau background bleu
                      </PixBackgroundHeader>
                    
                */
                {
                  "id": "lwEdoFYE",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-background-header\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Je suis un beau background bleu\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                backgroundHeaderElement = this.element.querySelector(BACKGROUND_HEADER_SELECTOR);
                backgroundElement = this.element.querySelector(BACKGROUND_SELECTOR); // then

                assert.equal(backgroundHeaderElement.textContent.trim(), 'Je suis un beau background bleu');
                assert.equal(backgroundHeaderElement.className, 'pix-background-header');
                assert.equal(backgroundElement.className, 'pix-background-header__background');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('when there is PixBloc inside PixBackgroundHeader component', function () {
      (0, _qunit.test)('first PixBlock render', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          var firstBlockElement, lastBlockElement;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // given
                  this.set('shadowWeight', 'heavy'); // when

                  _context2.next = 3;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixBackgroundHeader>
                            <PixBlock @shadow={{this.shadowWeight}}>Je suis un beau bloc foncé</PixBlock>
                            <PixBlock>Je suis deuxième bloc</PixBlock>
                          </PixBackgroundHeader>
                        
                  */
                  {
                    "id": "y2UC1DPc",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-background-header\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,\"pix-block\",[],[[\"@shadow\"],[[32,0,[\"shadowWeight\"]]]],[[\"default\"],[{\"statements\":[[2,\"Je suis un beau bloc foncé\"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,\"pix-block\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Je suis deuxième bloc\"]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 3:
                  firstBlockElement = this.element.querySelector(BACKGROUND_HEADER_SELECTOR).children[1];
                  lastBlockElement = this.element.querySelector(BACKGROUND_HEADER_SELECTOR).children[2]; // then

                  assert.equal(firstBlockElement.className, 'pix-block pix-block--shadow-heavy');
                  assert.equal(firstBlockElement.textContent.trim(), 'Je suis un beau bloc foncé');
                  assert.equal(lastBlockElement.className, 'pix-block pix-block--shadow-light');
                  assert.equal(lastBlockElement.textContent.trim(), 'Je suis deuxième bloc');

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/pix-banner-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | Pix Banner', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var COMPONENT_SELECTOR = '.pix-banner';
    (0, _qunit.test)('it renders the default PixBanner', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBanner>
                        Mon texte
                      </PixBanner>
                    
                */
                {
                  "id": "/RXbZ3YD",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-banner\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Mon texte\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                assert.equal(componentElement.textContent.trim(), 'Mon texte');
                assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--information');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixBanner with type warning', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBanner @type='warning'>
                        Mon texte
                      </PixBanner>
                    
                */
                {
                  "id": "518N4Qt7",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-banner\",[],[[\"@type\"],[\"warning\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        Mon texte\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--warning');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixBanner with type error', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBanner @type='error'>
                        Mon texte
                      </PixBanner>
                    
                */
                {
                  "id": "d8HdkXUt",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-banner\",[],[[\"@type\"],[\"error\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        Mon texte\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--error');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixBanner with type communication', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // given
                this.set('type', 'communication'); //when

                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBanner @color={{this.color}} @type={{type}} />
                    
                */
                {
                  "id": "OYsMAFbH",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-banner\",[],[[\"@color\",\"@type\"],[[32,0,[\"color\"]],[34,0]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"type\"]}",
                  "meta": {}
                }));

              case 3:
                // then
                assert.dom('.pix-banner--communication').exists();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixBanner with type communication-orga', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // given
                this.set('type', 'communication-orga'); //when

                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBanner @color={{this.color}} @type={{type}} />
                    
                */
                {
                  "id": "OYsMAFbH",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-banner\",[],[[\"@color\",\"@type\"],[[32,0,[\"color\"]],[34,0]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"type\"]}",
                  "meta": {}
                }));

              case 3:
                // then
                assert.dom('.pix-banner--communication-orga').exists();

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixBanner  with type communication-certif', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // given
                this.set('type', 'communication-certif'); //when

                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBanner @color={{this.color}} @type={{type}} />
                    
                */
                {
                  "id": "OYsMAFbH",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-banner\",[],[[\"@color\",\"@type\"],[[32,0,[\"color\"]],[34,0]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"type\"]}",
                  "meta": {}
                }));

              case 3:
                // then
                assert.dom('.pix-banner--communication-certif').exists();

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixBanner with external url', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // given
                this.set('actionUrl', 'www.test.fr/');
                this.set('actionLabel', 'Explorer'); //when

                _context7.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBanner @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />
                    
                */
                {
                  "id": "8j2R4ALG",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-banner\",[],[[\"@actionUrl\",\"@actionLabel\"],[[32,0,[\"actionUrl\"]],[32,0,[\"actionLabel\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 4:
                // then
                assert.equal(this.element.querySelector('a').textContent.trim(), 'Explorer');
                assert.equal(this.element.querySelector('a').getAttribute('href'), 'www.test.fr/');

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixBanner with internal link', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // given
                this.set('actionUrl', 'campaign.participants');
                this.set('actionLabel', 'Explorer'); //when

                _context8.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBanner @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />
                    
                */
                {
                  "id": "8j2R4ALG",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-banner\",[],[[\"@actionUrl\",\"@actionLabel\"],[[32,0,[\"actionUrl\"]],[32,0,[\"actionLabel\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 4:
                // then
                assert.equal(this.element.querySelector('a').textContent.trim(), 'Explorer');

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-block-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | pix-block', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var BLOCK_SELECTOR = '.pix-block';
    (0, _qunit.test)('it renders the default PixBlock', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var blockElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBlock>
                        Je suis un beau bloc avec une ombre légere
                      </PixBlock>
                    
                */
                {
                  "id": "jTBNrJOc",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-block\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Je suis un beau bloc avec une ombre légere\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                blockElement = this.element.querySelector(BLOCK_SELECTOR); // then

                assert.equal(blockElement.textContent.trim(), 'Je suis un beau bloc avec une ombre légere');
                assert.equal(blockElement.className, 'pix-block pix-block--shadow-light');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can have heavy shadow', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var blockElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // given
                this.set('shadowWeight', 'heavy'); // when

                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBlock @shadow={{this.shadowWeight}}>
                        Je suis trop d4rk
                      </PixBlock>
                    
                */
                {
                  "id": "sYxbTzKy",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-block\",[],[[\"@shadow\"],[[32,0,[\"shadowWeight\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Je suis trop d4rk\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 3:
                blockElement = this.element.querySelector(BLOCK_SELECTOR); // then

                assert.equal(blockElement.textContent.trim(), 'Je suis trop d4rk');
                assert.equal(blockElement.className, 'pix-block pix-block--shadow-heavy');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it give light bloc even if there is wrong parameters', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var blockElement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // given
                this.set('shadowWeight', 'normal'); // when

                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixBlock @shadow={{this.shadowWeight}}>
                        Joli bloc quand même
                      </PixBlock>
                    
                */
                {
                  "id": "oONP4H04",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-block\",[],[[\"@shadow\"],[[32,0,[\"shadowWeight\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Joli bloc quand même\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 3:
                blockElement = this.element.querySelector(BLOCK_SELECTOR); // then

                assert.equal(blockElement.textContent.trim(), 'Joli bloc quand même');
                assert.equal(blockElement.className, 'pix-block pix-block--shadow-light');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var COMPONENT_SELECTOR = '.pix-button';
    (0, _qunit.test)('it renders the default PixButton', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixButton>
                        Mon bouton
                      </PixButton>
                    
                */
                {
                  "id": "6VP3jVhS",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-button\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Mon bouton\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                assert.equal(componentElement.textContent.trim(), 'Mon bouton');
                assert.equal(componentElement.type, 'button');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixButton component with the given type', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixButton @type="submit">
                        Mon bouton
                      </PixButton>
                    
                */
                {
                  "id": "NKKXPg3v",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-button\",[],[[\"@type\"],[\"submit\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        Mon bouton\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                assert.equal(componentElement.type, 'submit');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixButton component with isDisabled attribute', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var _this = this;

        var componentElement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // given
                this.set('count', 1);
                this.set('triggerAction', function () {
                  _this.count = _this.count + 1;
                }); //when

                _context3.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixButton
                      @isDisabled={{true}}
                      @triggerAction={{this.triggerAction}}>
                        Mon bouton
                      </PixButton>
                    
                */
                {
                  "id": "TypTtXxR",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-button\",[],[[\"@isDisabled\",\"@triggerAction\"],[true,[32,0,[\"triggerAction\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Mon bouton\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 4:
                _context3.next = 6;
                return (0, _testHelpers.click)('button');

              case 6:
                // then
                componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                assert.equal(this.count, 1);
                assert.equal(componentElement.disabled, true);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should call the action', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var _this2 = this;

        var componentElement;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // given
                this.set('count', 1);
                this.set('triggerAction', function () {
                  _this2.count = _this2.count + 1;
                }); //when

                _context4.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixButton @triggerAction={{this.triggerAction}} />
                    
                */
                {
                  "id": "ozLu9I9o",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-button\",[],[[\"@triggerAction\"],[[32,0,[\"triggerAction\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 4:
                _context4.next = 6;
                return (0, _testHelpers.click)('button');

              case 6:
                // then
                componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                assert.equal(this.count, 2);
                assert.equal(componentElement.disabled, false);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('when type is submit, if no trigger action is defined', function () {
      (0, _qunit.test)('if clicked, it should do nothing', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                        <PixButton @type="submit" />
                        
                  */
                  {
                    "id": "Pue92+nu",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-button\",[],[[\"@type\"],[\"submit\"]],null],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  _context5.next = 4;
                  return (0, _testHelpers.click)('button');

                case 4:
                  // then
                  componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                  assert.equal(componentElement.type, 'submit');

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('it renders the PixButton link component', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixButton
                      @isLink={{true}}
                      @route='profile'>
                        Mon lien
                      </PixButton>
                    
                */
                {
                  "id": "2oDWQE88",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-button\",[],[[\"@isLink\",\"@route\"],[true,\"profile\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        Mon lien\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                assert.dom('a').exists();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-collapsible-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/create-glimmer-component"], function (_qunit, _emberQunit, _testHelpers, _createGlimmerComponent) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | collapsible', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var COLLAPSIBLE_TITLE_SELECTOR = '.pix-collapsible__title';
    var COLLAPSIBLE_CONTENT_SELECTOR = '.pix-collapsible__content';
    (0, _qunit.test)('it show only PixCollapsible title by default', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixCollapsible @title="Titre de mon élément déroulable">
                        <p>Contenu de mon élément</p>
                      </PixCollapsible>
                    
                */
                {
                  "id": "ZAy5hTuM",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-collapsible\",[],[[\"@title\"],[\"Titre de mon élément déroulable\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"p\"],[12],[2,\"Contenu de mon élément\"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                componentElement = this.element.querySelector(COLLAPSIBLE_TITLE_SELECTOR);
                assert.equal(componentElement.textContent.trim(), 'Titre de mon élément déroulable');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it shows content on click on PixCollapsible title', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixCollapsible @title="Titre de mon élément déroulable">
                        <p>Contenu de mon élément</p>
                      </PixCollapsible>
                    
                */
                {
                  "id": "ZAy5hTuM",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-collapsible\",[],[[\"@title\"],[\"Titre de mon élément déroulable\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"p\"],[12],[2,\"Contenu de mon élément\"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                _context2.next = 4;
                return (0, _testHelpers.click)(COLLAPSIBLE_TITLE_SELECTOR);

              case 4:
                // then
                assert.dom(COLLAPSIBLE_TITLE_SELECTOR).hasText('Titre de mon élément déroulable');
                assert.dom(COLLAPSIBLE_CONTENT_SELECTOR).hasText('Contenu de mon élément');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should not show PixCollapsible if title is not provided', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var componentParams, component, expectedError;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // given
                componentParams = {
                  title: '  '
                };
                component = (0, _createGlimmerComponent.default)('component:pix-collapsible', componentParams); // when & then

                expectedError = new Error('ERROR in PixCollapsible component, @title param is not provided');
                assert.throws(function () {
                  component.title;
                }, expectedError);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-filter-banner-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | filter-banner', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var COMPONENT_SELECTOR = '.pix-filter-banner';
    (0, _qunit.test)('it renders the default PixFilterBanner', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixFilterBanner>
                        content
                      </PixFilterBanner>
                    
                */
                {
                  "id": "zbde44B+",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-filter-banner\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                componentElement = this.element.querySelector(COMPONENT_SELECTOR); // then

                assert.equal(componentElement.textContent.trim(), 'content');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixFilterBanner with title', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixFilterBanner @title="Titre de la bannière">
                        content
                      </PixFilterBanner>
                    
                */
                {
                  "id": "pzku/3/y",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-filter-banner\",[],[[\"@title\"],[\"Titre de la bannière\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                componentElement = this.element.querySelector('.pix-filter-banner__title'); // then

                assert.equal(componentElement.textContent.trim(), 'Titre de la bannière');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixFilterBanner with details', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixFilterBanner @details="5 participants filtrés">
                        content
                      </PixFilterBanner>
                    
                */
                {
                  "id": "+Q90oqE7",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-filter-banner\",[],[[\"@details\"],[\"5 participants filtrés\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                componentElement = this.element.querySelector('.pix-filter-banner__details'); // then

                assert.equal(componentElement.textContent.trim(), '5 participants filtrés');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixFilterBanner with a clearFiltersLabel button', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var button;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //given
                this.clearFiltersLabel = 'Effacer les filtres';
                this.onClearFilters = _sinon.default.spy(); // when

                _context4.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixFilterBanner @clearFiltersLabel={{clearFiltersLabel}} @onClearFilters={{onClearFilters}}>
                       content
                      </PixFilterBanner>
                    
                */
                {
                  "id": "kJd3Dc4C",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-filter-banner\",[],[[\"@clearFiltersLabel\",\"@onClearFilters\"],[[34,0],[34,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n       content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"clearFiltersLabel\",\"onClearFilters\"]}",
                  "meta": {}
                }));

              case 4:
                // then
                button = this.element.querySelector('button');
                assert.equal(button.textContent.trim(), this.clearFiltersLabel);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should trigger onClearFilters when button clicked', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // given
                this.clearFiltersLabel = 'some label';
                this.onClearFilters = _sinon.default.spy(); //when

                _context5.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixFilterBanner @clearFiltersLabel={{clearFiltersLabel}} @onClearFilters={{onClearFilters}}>
                        content
                      </PixFilterBanner>
                    
                */
                {
                  "id": "VlgSz8wH",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-filter-banner\",[],[[\"@clearFiltersLabel\",\"@onClearFilters\"],[[34,0],[34,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n        content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"clearFiltersLabel\",\"onClearFilters\"]}",
                  "meta": {}
                }));

              case 4:
                _context5.next = 6;
                return (0, _testHelpers.click)('button');

              case 6:
                // then
                assert.ok(this.onClearFilters.calledOnce, 'the callback should be called once');

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-icon-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | icon-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var COMPONENT_SELECTOR = '.pix-icon-button';
    var iconClass = "".concat(COMPONENT_SELECTOR, " > svg");
    (0, _qunit.test)('it renders PixIconButton with a default fa-icon', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var iconElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixIconButton></PixIconButton>
                    
                */
                {
                  "id": "GqB26LZA",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-icon-button\",[],[[],[]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                iconElement = this.element.querySelector(iconClass); // then

                assert.ok(iconElement.classList.contains('fa-plus'));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders PixIconButton with the specified FaIcon', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var iconElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixIconButton @icon='times'></PixIconButton>
                    
                */
                {
                  "id": "mVLIOqMb",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-icon-button\",[],[[\"@icon\"],[\"times\"]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                iconElement = this.element.querySelector(iconClass); // then

                assert.ok(iconElement.classList.contains('fa-times'));
                assert.notOk(iconElement.classList.contains('fa-plus'));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should trigger action if given one', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // when
                this.set('count', 1);
                this.set('triggerAction', function () {
                  _this.count = _this.count + 1;
                });
                _context3.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixIconButton @triggerAction={{this.triggerAction}} />
                    
                */
                {
                  "id": "s3eh/lsH",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-icon-button\",[],[[\"@triggerAction\"],[[32,0,[\"triggerAction\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 4:
                _context3.next = 6;
                return (0, _testHelpers.click)('button');

              case 6:
                // then
                assert.equal(this.count, 2);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders PixIconButton with disabled attribute', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var componentElement;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // given
                this.set('triggerAction', function () {}); //when

                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixIconButton @triggerAction={{this.triggerAction}} disabled={{true}} />
                    
                */
                {
                  "id": "5DyOPWpC",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-icon-button\",[[16,\"disabled\",true]],[[\"@triggerAction\"],[[32,0,[\"triggerAction\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 3:
                _context4.next = 5;
                return (0, _testHelpers.click)('button');

              case 5:
                // then
                componentElement = this.element.querySelector(COMPONENT_SELECTOR);
                assert.equal(componentElement.disabled, true);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-message-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | pix-message', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given content', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixMessage>Message text</PixMessage>
                */
                {
                  "id": "hR2vXevq",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-message\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Message text\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), 'Message text');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with the given type', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var pixMessageElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixMessage @type="info" />
                */
                {
                  "id": "93130RCq",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-message\",[],[[\"@type\"],[\"info\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                pixMessageElement = this.element.querySelector('.pix-message');
                assert.equal(pixMessageElement.classList.toString(), 'pix-message pix-message--info');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with attributes override', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var pixMessageElement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixMessage aria-label="world" />
                */
                {
                  "id": "3QErqJkb",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-message\",[[24,\"aria-label\",\"world\"]],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                pixMessageElement = this.element.querySelector('.pix-message');
                assert.equal(pixMessageElement.getAttribute('aria-label'), 'world');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with an icon', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var icon;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixMessage @withIcon="true" />
                */
                {
                  "id": "hhdCKS8/",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-message\",[],[[\"@withIcon\"],[\"true\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                icon = this.element.querySelector('.pix-message svg');
                assert.dom('.pix-message svg').exists();
                assert.equal(icon.getAttribute('data-icon'), 'info-circle');

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with a warning icon for warning type', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var icon;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixMessage @type="warning" @withIcon="true" />
                */
                {
                  "id": "+UrxT5L4",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-message\",[],[[\"@type\",\"@withIcon\"],[\"warning\",\"true\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                icon = this.element.querySelector('.pix-message svg');
                assert.dom('.pix-message svg').exists();
                assert.equal(icon.getAttribute('data-icon'), 'exclamation-circle');

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with a success icon for success type', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        var icon;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixMessage @type="success" @withIcon="true" />
                */
                {
                  "id": "kL6mBZbG",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-message\",[],[[\"@type\",\"@withIcon\"],[\"success\",\"true\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                icon = this.element.querySelector('.pix-message svg');
                assert.dom('.pix-message svg').exists();
                assert.equal(icon.getAttribute('data-icon'), 'check-circle');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with a alert icon for alert type', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        var icon;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixMessage @type="alert" @withIcon="true" />
                */
                {
                  "id": "175zSTY8",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-message\",[],[[\"@type\",\"@withIcon\"],[\"alert\",\"true\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                icon = this.element.querySelector('.pix-message svg');
                assert.dom('.pix-message svg').exists();
                assert.equal(icon.getAttribute('data-icon'), 'exclamation-triangle');

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-multi-select-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | multi-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var DEFAULT_OPTIONS = [{
      value: '1',
      label: 'Salade'
    }, {
      value: '2',
      label: 'Tomate'
    }, {
      value: '3',
      label: 'Oignon'
    }];
    (0, _qunit.test)('it renders PixMultiSelect with list', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var _this = this;

        var buttonElement, listElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;
                this.selected = [];

                this.onSelect = function (selected) {
                  return _this.set('selected', selected);
                };

                this.emptyMessage = 'no result';
                this.title = 'MultiSelectTest';
                this.id = 'id-MultiSelectTest'; // when

                _context.next = 8;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixMultiSelect
                        @selected={{selected}}
                        @onSelect={{onSelect}}
                        @title={{title}}
                        @id={{id}}
                        @emptyMessage={{emptyMessage}}
                        @options={{options}} as |option|>
                        {{option.label}}
                      </PixMultiSelect>
                    
                */
                {
                  "id": "fyDwmpjC",
                  "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"pix-multi-select\",[],[[\"@selected\",\"@onSelect\",\"@title\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"label\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"selected\",\"onSelect\",\"title\",\"id\",\"emptyMessage\",\"options\"]}",
                  "meta": {}
                }));

              case 8:
                buttonElement = this.element.querySelector('.pix-multi-select-header');
                listElement = this.element.querySelectorAll('li'); // then

                assert.equal(buttonElement.textContent.trim(), this.title);
                assert.equal(listElement.length, 3);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixMultiSelect with empty message', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var _this2 = this;

        var buttonElement, listElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // given
                this.options = [];
                this.selected = [];

                this.onSelect = function (selected) {
                  return _this2.set('selected', selected);
                };

                this.emptyMessage = 'no result';
                this.title = 'MultiSelectTest';
                this.id = 'id-MultiSelectTest'; // when

                _context2.next = 8;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixMultiSelect
                        @selected={{selected}}
                        @onSelect={{onSelect}}
                        @title={{title}}
                        @id={{id}}
                        @emptyMessage={{emptyMessage}}
                        @options={{options}} as |option|>
                        {{option.label}}
                      </PixMultiSelect>
                    
                */
                {
                  "id": "fyDwmpjC",
                  "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"pix-multi-select\",[],[[\"@selected\",\"@onSelect\",\"@title\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"label\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"selected\",\"onSelect\",\"title\",\"id\",\"emptyMessage\",\"options\"]}",
                  "meta": {}
                }));

              case 8:
                _context2.next = 10;
                return (0, _testHelpers.click)('button');

              case 10:
                // then
                buttonElement = this.element.querySelector('.pix-multi-select-header');
                listElement = this.element.querySelectorAll('li');
                assert.equal(buttonElement.textContent.trim(), this.title);
                assert.equal(listElement.length, 1);
                assert.equal(listElement.item(0).textContent.trim(), 'no result');

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixMultiSelect with default checked', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var _this3 = this;

        var checkboxElement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;

                this.onSelect = function (selected) {
                  return _this3.set('selected', selected);
                };

                this.selected = ['2'];
                this.emptyMessage = 'no result';
                this.title = 'MultiSelectTest';
                this.id = 'id-MultiSelectTest'; // when

                _context3.next = 8;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixMultiSelect
                        @onSelect={{onSelect}}
                        @title={{title}}
                        @id={{id}}
                        @selected={{selected}}
                        @emptyMessage={{emptyMessage}}
                        @options={{options}} as |option|
                      >
                        {{option.label}}
                      </PixMultiSelect>
                    
                */
                {
                  "id": "3ykhzbTw",
                  "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"pix-multi-select\",[],[[\"@onSelect\",\"@title\",\"@id\",\"@selected\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"label\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"onSelect\",\"title\",\"id\",\"selected\",\"emptyMessage\",\"options\"]}",
                  "meta": {}
                }));

              case 8:
                _context3.next = 10;
                return (0, _testHelpers.click)('button');

              case 10:
                // then
                checkboxElement = this.element.querySelectorAll('input[type=checkbox]');
                assert.equal(checkboxElement.length, 3);
                assert.equal(checkboxElement.item(0).checked, false);
                assert.equal(checkboxElement.item(1).checked, true);
                assert.equal(checkboxElement.item(2).checked, false);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should updates selected items when @selected is changed', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var _this4 = this;

        var checkboxElement;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;
                this.selected = ['2'];

                this.onSelect = function (selected) {
                  return _this4.set('selected', selected);
                };

                this.emptyMessage = 'no result';
                this.title = 'MultiSelectTest';
                this.id = 'id-MultiSelectTest';
                _context4.next = 8;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixMultiSelect
                        @onSelect={{onSelect}}
                        @title={{title}}
                        @id={{id}}
                        @selected={{selected}}
                        @emptyMessage={{emptyMessage}}
                        @options={{options}} as |option|>
                        {{option.label}}
                      </PixMultiSelect>
                    
                */
                {
                  "id": "3ykhzbTw",
                  "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"pix-multi-select\",[],[[\"@onSelect\",\"@title\",\"@id\",\"@selected\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"label\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"onSelect\",\"title\",\"id\",\"selected\",\"emptyMessage\",\"options\"]}",
                  "meta": {}
                }));

              case 8:
                // when
                this.set('selected', []);
                _context4.next = 11;
                return (0, _testHelpers.click)('button');

              case 11:
                // then
                checkboxElement = this.element.querySelectorAll('input[type=checkbox]');
                assert.equal(checkboxElement.item(0).checked, false);
                assert.equal(checkboxElement.item(1).checked, false);
                assert.equal(checkboxElement.item(2).checked, false);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should trigger onSelect function when an item is selected', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var firstCheckbox;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;
                this.title = 'MultiSelectTest';
                this.emptyMessage = 'no result';
                this.id = 'id-MultiSelectTest';
                this.onSelect = _sinon.default.spy();
                _context5.next = 7;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                    <PixMultiSelect
                      @onSelect={{onSelect}}
                      @title={{title}}
                      @id={{id}}
                      @emptyMessage={{emptyMessage}}
                      @options={{options}} as |option|>
                      {{option.label}}
                    </PixMultiSelect>
                  
                */
                {
                  "id": "5Oe4FFPr",
                  "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n    \"],[8,\"pix-multi-select\",[],[[\"@onSelect\",\"@title\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[32,1,[\"label\"]]],[2,\"\\n    \"]],\"parameters\":[1]}]]],[2,\"\\n  \"]],\"hasEval\":false,\"upvars\":[\"onSelect\",\"title\",\"id\",\"emptyMessage\",\"options\"]}",
                  "meta": {}
                }));

              case 7:
                _context5.next = 9;
                return (0, _testHelpers.click)('button');

              case 9:
                firstCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
                _context5.next = 12;
                return (0, _testHelpers.click)(firstCheckbox);

              case 12:
                // then
                assert.equal(firstCheckbox.checked, true);
                assert.ok(this.onSelect.calledOnce, 'the callback should be called once');
                assert.ok(this.onSelect.calledWith, ['1']);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should unselect item and return selected item of the updated list', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        var firstCheckbox;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;
                this.title = 'MultiSelectTest';
                this.emptyMessage = 'no result';
                this.selected = ['1', '2'];
                this.id = 'id-MultiSelectTest';
                this.onSelect = _sinon.default.spy();
                _context6.next = 8;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixMultiSelect
                        @onSelect={{onSelect}}
                        @title={{title}}
                        @id={{id}}
                        @emptyMessage={{emptyMessage}}
                        @options={{options}} as |option|>
                        {{option.label}}
                      </PixMultiSelect>
                    
                */
                {
                  "id": "egfG5Miu",
                  "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"pix-multi-select\",[],[[\"@onSelect\",\"@title\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"label\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"onSelect\",\"title\",\"id\",\"emptyMessage\",\"options\"]}",
                  "meta": {}
                }));

              case 8:
                _context6.next = 10;
                return (0, _testHelpers.click)('button');

              case 10:
                firstCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
                _context6.next = 13;
                return (0, _testHelpers.click)(firstCheckbox);

              case 13:
                // then
                assert.ok(this.onSelect.calledWith, ['2']);

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('When it is a searchable multiselect', function () {
      (0, _qunit.test)('it should renders searchable PixMultiSelect multi select list', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          var _this5 = this;

          var labelElement, inputElement, listElement;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this5.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.placeholder = 'Placeholder test';
                  _context7.next = 10;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "KacRZQJZ",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 10:
                  // when
                  labelElement = this.element.querySelector('.pix-multi-select-header');
                  inputElement = this.element.querySelector('.pix-multi-select-header__search-input');
                  listElement = this.element.querySelectorAll('li'); // then

                  assert.equal(labelElement.textContent.trim(), this.title);
                  assert.equal(inputElement.placeholder, this.placeholder);
                  assert.equal(listElement.length, 3);

                case 16:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should renders filtered given case insensitive', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          var _this6 = this;

          var listElement;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this6.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.placeholder = 'Placeholder test';
                  _context8.next = 10;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "KacRZQJZ",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 10:
                  _context8.next = 12;
                  return (0, _testHelpers.fillIn)('input', 'tomate');

                case 12:
                  // when
                  listElement = this.element.querySelectorAll('.pix-multi-select-list__item'); // then

                  assert.equal(listElement.length, 1);
                  assert.equal(listElement.item(0).textContent.trim(), 'Tomate');

                case 15:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should renders no result given case sensitive', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          var _this7 = this;

          var listElement;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this7.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.strictSearch = true;
                  this.placeholder = 'Placeholder test';
                  _context9.next = 11;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @strictSearch={{strictSearch}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "0OxSIKww",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@strictSearch\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7],[34,8]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"strictSearch\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 11:
                  _context9.next = 13;
                  return (0, _testHelpers.fillIn)('input', 'tomate');

                case 13:
                  // then
                  listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
                  assert.equal(listElement.length, 1);
                  assert.equal(listElement.item(0).textContent.trim(), 'no result');

                case 16:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should display list PixMultiSelect on focus', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          var _this8 = this;

          var listElement;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this8.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.showOptionsOnInput = true;
                  this.placeholder = 'Placeholder test';
                  _context10.next = 11;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @showOptionsOnInput={{showOptionsOnInput}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "3Uq/oowl",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@showOptionsOnInput\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7],[34,8]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"showOptionsOnInput\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 11:
                  _context10.next = 13;
                  return (0, _testHelpers.focus)('input');

                case 13:
                  // then
                  listElement = this.element.querySelector('ul');
                  assert.equal(listElement.className.trim(), 'pix-multi-select-list');

                case 15:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should not display list PixMultiSelect on focus', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          var _this9 = this;

          var listElement;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this9.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.showOptionsOnInput = false;
                  this.placeholder = 'Placeholder test';
                  _context11.next = 11;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @showOptionsOnInput={{showOptionsOnInput}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "3Uq/oowl",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@showOptionsOnInput\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7],[34,8]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"showOptionsOnInput\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 11:
                  _context11.next = 13;
                  return (0, _testHelpers.focus)('input');

                case 13:
                  // then
                  listElement = this.element.querySelector('ul');
                  assert.equal(listElement.className, 'pix-multi-select-list pix-multi-select-list--hidden');

                case 15:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should sort default selected items when focused', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          var _this10 = this;

          var listElement;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this10.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.placeholder = 'Placeholder test';
                  this.defaultSelected = ['3'];
                  _context12.next = 11;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @selected={{defaultSelected}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "+e7ZAlgB",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@selected\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7],[34,8]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"defaultSelected\",\"options\"]}",
                    "meta": {}
                  }));

                case 11:
                  _context12.next = 13;
                  return (0, _testHelpers.focus)('input');

                case 13:
                  // then
                  listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
                  assert.equal(listElement.length, 3);
                  assert.equal(listElement.item(0).textContent.trim(), 'Oignon');
                  assert.equal(listElement.item(1).textContent.trim(), 'Salade');
                  assert.equal(listElement.item(2).textContent.trim(), 'Tomate');

                case 18:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should not sort when user select item', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          var _this11 = this;

          var thirdCheckbox, listElement;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this11.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.placeholder = 'Placeholder test';
                  _context13.next = 10;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "KacRZQJZ",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 10:
                  _context13.next = 12;
                  return (0, _testHelpers.click)('input[type=text]');

                case 12:
                  thirdCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(2);
                  _context13.next = 15;
                  return (0, _testHelpers.click)(thirdCheckbox);

                case 15:
                  // then
                  listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
                  assert.equal(listElement.length, 3);
                  assert.equal(listElement.item(0).textContent.trim(), 'Salade');
                  assert.equal(listElement.item(1).textContent.trim(), 'Tomate');
                  assert.equal(listElement.item(2).textContent.trim(), 'Oignon');

                case 20:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should not sort when user search and select item', /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
          var _this12 = this;

          var checkbox, listElement;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this12.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.placeholder = 'Placeholder test';
                  _context14.next = 10;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "KacRZQJZ",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 10:
                  _context14.next = 12;
                  return (0, _testHelpers.fillIn)('input', 'Oi');

                case 12:
                  checkbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
                  _context14.next = 15;
                  return (0, _testHelpers.click)(checkbox);

                case 15:
                  _context14.next = 17;
                  return (0, _testHelpers.fillIn)('input', 'o');

                case 17:
                  // then
                  listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
                  assert.equal(listElement.length, 2);
                  assert.equal(listElement.item(0).textContent.trim(), 'Tomate');
                  assert.equal(listElement.item(1).textContent.trim(), 'Oignon');

                case 21:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        return function (_x14) {
          return _ref15.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should sort items when search is cleaned', /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
          var _this13 = this;

          var checkbox, listElement;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this13.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.placeholder = 'Placeholder test';
                  _context15.next = 10;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "KacRZQJZ",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 10:
                  _context15.next = 12;
                  return (0, _testHelpers.fillIn)('input', 'Oi');

                case 12:
                  checkbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
                  _context15.next = 15;
                  return (0, _testHelpers.click)(checkbox);

                case 15:
                  _context15.next = 17;
                  return (0, _testHelpers.fillIn)('input', '');

                case 17:
                  // then
                  listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
                  assert.equal(listElement.length, 3);
                  assert.equal(listElement.item(0).textContent.trim(), 'Oignon');
                  assert.equal(listElement.item(1).textContent.trim(), 'Salade');
                  assert.equal(listElement.item(2).textContent.trim(), 'Tomate');

                case 22:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));

        return function (_x15) {
          return _ref16.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('should not sort when there are default items selected and a new selected item', /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
          var _this14 = this;

          var listElement, checkbox, listElement2;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = ['2'];

                  this.onSelect = function (selected) {
                    return _this14.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.placeholder = 'Placeholder test';
                  _context16.next = 10;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @showOptionsOnInput={{true}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "BlBNO4M1",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@showOptionsOnInput\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],true,[34,7]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 10:
                  _context16.next = 12;
                  return (0, _testHelpers.click)('input[type=text]');

                case 12:
                  listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
                  assert.equal(listElement.item(0).textContent.trim(), 'Tomate');
                  checkbox = this.element.querySelectorAll('input[type=checkbox]').item(2);
                  _context16.next = 17;
                  return (0, _testHelpers.click)(checkbox);

                case 17:
                  // then
                  listElement2 = this.element.querySelectorAll('.pix-multi-select-list__item');
                  assert.equal(listElement2.item(0).textContent.trim(), 'Tomate');
                  assert.equal(listElement2.item(1).textContent.trim(), 'Salade');
                  assert.equal(listElement2.item(2).textContent.trim(), 'Oignon');

                case 21:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));

        return function (_x16) {
          return _ref17.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should sort items when search is unfocus', /*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(assert) {
          var _this15 = this;

          var checkbox, listElement;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.selected = [];

                  this.onSelect = function (selected) {
                    return _this15.set('selected', selected);
                  };

                  this.emptyMessage = 'no result';
                  this.title = 'MultiSelectTest';
                  this.id = 'id-MultiSelectTest';
                  this.isSearchable = true;
                  this.placeholder = 'Placeholder test';
                  _context17.next = 10;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixMultiSelect
                            @isSearchable={{isSearchable}}
                            @selected={{selected}}
                            @onSelect={{onSelect}}
                            @title={{title}}
                            @placeholder={{placeholder}}
                            @id={{id}}
                            @emptyMessage={{emptyMessage}}
                            @options={{options}} as |option|>
                            {{option.label}}
                          </PixMultiSelect>
                        
                  */
                  {
                    "id": "KacRZQJZ",
                    "block": "{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n        \"],[8,\"pix-multi-select\",[],[[\"@isSearchable\",\"@selected\",\"@onSelect\",\"@title\",\"@placeholder\",\"@id\",\"@emptyMessage\",\"@options\"],[[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,1,[\"label\"]]],[2,\"\\n        \"]],\"parameters\":[1]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[\"isSearchable\",\"selected\",\"onSelect\",\"title\",\"placeholder\",\"id\",\"emptyMessage\",\"options\"]}",
                    "meta": {}
                  }));

                case 10:
                  _context17.next = 12;
                  return (0, _testHelpers.fillIn)('input', 'Oi');

                case 12:
                  checkbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
                  _context17.next = 15;
                  return (0, _testHelpers.click)(checkbox);

                case 15:
                  _context17.next = 17;
                  return (0, _testHelpers.blur)('input');

                case 17:
                  _context17.next = 19;
                  return (0, _testHelpers.fillIn)('input', '');

                case 19:
                  // then
                  listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
                  assert.equal(listElement.length, 3);
                  assert.equal(listElement.item(0).textContent.trim(), 'Oignon');
                  assert.equal(listElement.item(1).textContent.trim(), 'Salade');
                  assert.equal(listElement.item(2).textContent.trim(), 'Tomate');

                case 24:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17, this);
        }));

        return function (_x17) {
          return _ref18.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/pix-progress-gauge-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | progress-gauge', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('Attributes @value', function () {
      (0, _qunit.test)('it renders the progress gauge with correct width', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixProgressGauge @value="50"/>
                  */
                  {
                    "id": "/xesjgHH",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-progress-gauge\",[],[[\"@value\"],[\"50\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge__marker'); // then

                  assert.equal(componentElement.style.width, '50%');

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the progress tooltip with correct information', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixProgressGauge @value="50" @tooltipText="50%"/>
                  */
                  {
                    "id": "wSbSG1RA",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-progress-gauge\",[],[[\"@value\",\"@tooltipText\"],[\"50\",\"50%\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge__tooltip'); // then

                  assert.equal(componentElement.textContent.trim(), '50%');

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should not renders the progress tooltip if no tooltipText', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixProgressGauge @value="50" />
                  */
                  {
                    "id": "/xesjgHH",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-progress-gauge\",[],[[\"@value\"],[\"50\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge__tooltip'); // then

                  assert.notOk(componentElement);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x3) {
          return _ref4.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the progress gauge with correct width never exceed 100%', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          var markerComponent;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixProgressGauge @value="110"/>
                  */
                  {
                    "id": "2MJZ4dOQ",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-progress-gauge\",[],[[\"@value\"],[\"110\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  markerComponent = this.element.querySelector('.progress-gauge__marker'); // then

                  assert.equal(markerComponent.style.width, '100%');

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x4) {
          return _ref5.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the progress gauge with correct width never under 0%', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var markerComponent;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixProgressGauge @value="-1"/>
                  */
                  {
                    "id": "WCRkCQwn",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-progress-gauge\",[],[[\"@value\"],[\"-1\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  markerComponent = this.element.querySelector('.progress-gauge__marker'); // then

                  assert.equal(markerComponent.style.width, '0%');

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Attributes @isArrowLeft', function () {
      (0, _qunit.test)('it renders the progress gauge with default tootlip', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixProgressGauge @value="50" />
                  */
                  {
                    "id": "/xesjgHH",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-progress-gauge\",[],[[\"@value\"],[\"50\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge'); // then

                  assert.equal(componentElement.classList.contains('progress-gauge--tooltip-left'), false);

                case 4:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the progress gauge with tootlip left class', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixProgressGauge
                            @value="50"
                            @isArrowLeft="true"/>
                        
                  */
                  {
                    "id": "fuqoXeCZ",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-progress-gauge\",[],[[\"@value\",\"@isArrowLeft\"],[\"50\",\"true\"]],null],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge'); // then

                  assert.equal(componentElement.classList.contains('progress-gauge--tooltip-left'), true);

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Attributes @color', function () {
      (0, _qunit.test)('it renders the progress gauge by default with yellow class', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixProgressGauge @value="50" />
                  */
                  {
                    "id": "/xesjgHH",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-progress-gauge\",[],[[\"@value\"],[\"50\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge'); // then

                  assert.equal(componentElement.classList.contains('progress-gauge--yellow'), true);

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the progress gauge with yellow class when color not exists', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixProgressGauge
                            @value="50"
                            @color="vert-lychen" />
                        
                  */
                  {
                    "id": "cTyaUFsA",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-progress-gauge\",[],[[\"@value\",\"@color\"],[\"50\",\"vert-lychen\"]],null],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge'); // then

                  assert.equal(componentElement.classList.contains('progress-gauge--yellow'), true);

                case 4:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the progress gauge with yellow class', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixProgressGauge
                            @value="50"
                            @color="yellow"/>
                        
                  */
                  {
                    "id": "vOUhYapO",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-progress-gauge\",[],[[\"@value\",\"@color\"],[\"50\",\"yellow\"]],null],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge'); // then

                  assert.equal(componentElement.classList.contains('progress-gauge--yellow'), true);

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the progress gauge with white class', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixProgressGauge
                            @value="50"
                            @color="white"/>
                        
                  */
                  {
                    "id": "BHtTLAKA",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-progress-gauge\",[],[[\"@value\",\"@color\"],[\"50\",\"white\"]],null],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge'); // then

                  assert.equal(componentElement.classList.contains('progress-gauge--white'), true);

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Attibutes @subtitle', function () {
      (0, _qunit.test)('it does not render the progress gauge sub-title', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixProgressGauge
                            @value="50" />
                        
                  */
                  {
                    "id": "A2tvklGs",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-progress-gauge\",[],[[\"@value\"],[\"50\"]],null],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge__sub-title'); // then

                  assert.equal(!!componentElement, false);

                case 4:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the progress gauge sub-title', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          var componentElement;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixProgressGauge
                            @value="50"
                            @subtitle="toto"/>
                        
                  */
                  {
                    "id": "NhOPcTcT",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-progress-gauge\",[],[[\"@value\",\"@subtitle\"],[\"50\",\"toto\"]],null],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  componentElement = this.element.querySelector('.progress-gauge__sub-title'); // then

                  assert.equal(componentElement.textContent.trim(), 'toto');

                case 4:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/pix-return-to-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | pix-return-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var RETURN_TO_SELECTOR = '.pix-return-to';
    (0, _qunit.test)('it renders the default PixReturnTo', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var PixReturnToElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixReturnTo @route='home'>Home</PixReturnTo> 
                */
                {
                  "id": "vLhDTo0z",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-return-to\",[],[[\"@route\"],[\"home\"]],[[\"default\"],[{\"statements\":[[2,\"Home\"]],\"parameters\":[]}]]],[2,\" \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                PixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
                assert.equal(PixReturnToElement.textContent.trim(), 'Home');
                assert.ok(PixReturnToElement.classList.toString().includes('pix-return-to pix-return-to--black'));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with the given shade', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var PixReturnToElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixReturnTo @route='home' @shade="white" />
                */
                {
                  "id": "ADSKzNHR",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-return-to\",[],[[\"@route\",\"@shade\"],[\"home\",\"white\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                PixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
                assert.ok(PixReturnToElement.classList.toString().includes('pix-return-to pix-return-to--white'));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders without text', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var PixReturnToElement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixReturnTo @route='home' />
                */
                {
                  "id": "gtdPkeT5",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-return-to\",[],[[\"@route\"],[\"home\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                // then
                PixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
                assert.equal(PixReturnToElement.textContent.trim(), '');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-select-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var DEFAULT_OPTIONS = [{
      value: '1',
      label: 'Salade'
    }, {
      value: '2',
      label: 'Tomate'
    }, {
      value: '3',
      label: 'Oignon'
    }];

    var DEFAULT_ON_CHANGE = function DEFAULT_ON_CHANGE() {};

    var SEARCHABLE_SELECT_SELECTOR = '.pix-select input';
    (0, _qunit.test)('it renders the PixSelect with given options', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;
                this.onChange = DEFAULT_ON_CHANGE; // when

                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixSelect
                        @options={{options}}
                        @onChange={{onChange}}
                      />
                    
                */
                {
                  "id": "pGi3lBFQ",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-select\",[],[[\"@options\",\"@onChange\"],[[34,0],[34,1]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"options\",\"onChange\"]}",
                  "meta": {}
                }));

              case 4:
                // then
                options = this.element.querySelectorAll('option');
                assert.equal(options.length, 3);
                assert.equal(options.item(0).value, '1');
                assert.equal(options.item(0).text, 'Salade');

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixSelect with empty label option', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var options;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;
                this.onChange = DEFAULT_ON_CHANGE; // when

                _context2.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixSelect
                        @options={{options}}
                        @onChange={{onChange}}
                        @emptyOptionLabel="Empty label"
                      />
                    
                */
                {
                  "id": "XwGHQ+8E",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-select\",[],[[\"@options\",\"@onChange\",\"@emptyOptionLabel\"],[[34,0],[34,1],\"Empty label\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"options\",\"onChange\"]}",
                  "meta": {}
                }));

              case 4:
                // then
                options = this.element.querySelectorAll('option');
                assert.equal(options.length, 4);
                assert.equal(options.item(0).value, '');
                assert.equal(options.item(0).text, 'Empty label');

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the PixSelect with default value selected', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var options;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;
                this.onChange = DEFAULT_ON_CHANGE; // when

                _context3.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixSelect
                        @options={{options}}
                        @onChange={{onChange}}
                        @selectedOption="2"
                      />
                    
                */
                {
                  "id": "mbMM7B8G",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-select\",[],[[\"@options\",\"@onChange\",\"@selectedOption\"],[[34,0],[34,1],\"2\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"options\",\"onChange\"]}",
                  "meta": {}
                }));

              case 4:
                // then
                options = this.element.querySelectorAll('option');
                assert.equal(options.item(1).defaultSelected, true);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should trigger onChange function when an item is selected', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // given
                this.options = DEFAULT_OPTIONS;
                this.onChange = _sinon.default.spy();
                _context4.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixSelect
                        @options={{options}}
                        @onChange={{onChange}}
                      />
                    
                */
                {
                  "id": "pGi3lBFQ",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-select\",[],[[\"@options\",\"@onChange\"],[[34,0],[34,1]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"options\",\"onChange\"]}",
                  "meta": {}
                }));

              case 4:
                _context4.next = 6;
                return (0, _testHelpers.fillIn)('select', '2');

              case 6:
                // then
                assert.ok(this.onChange.calledOnce, "the callback should be called once");

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('searchable PixSelect', function () {
      (0, _qunit.test)('it should be binded datalist element', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var input, datalist, inputDefaultListAttribute;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.isSearchable = true; // when

                  _context5.next = 4;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixSelect @options={{options}} @isSearchable={{isSearchable}} />
                  */
                  {
                    "id": "GTLWyyNy",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-select\",[],[[\"@options\",\"@isSearchable\"],[[34,0],[34,1]]],null]],\"hasEval\":false,\"upvars\":[\"options\",\"isSearchable\"]}",
                    "meta": {}
                  }));

                case 4:
                  // then
                  input = this.element.querySelector(SEARCHABLE_SELECT_SELECTOR);
                  datalist = this.element.querySelector('datalist');
                  inputDefaultListAttribute = input.attributes.getNamedItem('list').value;
                  assert.equal(datalist.id, inputDefaultListAttribute);

                case 8:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should be searchable with given options', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var options;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  // given
                  this.options = DEFAULT_OPTIONS;
                  this.isSearchable = true; // when

                  _context6.next = 4;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    <PixSelect @options={{options}} @isSearchable={{isSearchable}} />
                  */
                  {
                    "id": "GTLWyyNy",
                    "block": "{\"symbols\":[],\"statements\":[[8,\"pix-select\",[],[[\"@options\",\"@isSearchable\"],[[34,0],[34,1]]],null]],\"hasEval\":false,\"upvars\":[\"options\",\"isSearchable\"]}",
                    "meta": {}
                  }));

                case 4:
                  // then
                  options = this.element.querySelectorAll('option');
                  assert.equal(options.length, 3);
                  assert.equal(options.item(1).label, 'Tomate');

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.module)('green validation', function () {
        (0, _qunit.test)('it should not have a green border', /*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    // given
                    this.options = DEFAULT_OPTIONS;
                    this.isSearchable = true; // when

                    _context7.next = 4;
                    return (0, _testHelpers.render)(Ember.HTMLBars.template(
                    /*
                      <PixSelect @options={{options}} @isSearchable={{isSearchable}} />
                    */
                    {
                      "id": "GTLWyyNy",
                      "block": "{\"symbols\":[],\"statements\":[[8,\"pix-select\",[],[[\"@options\",\"@isSearchable\"],[[34,0],[34,1]]],null]],\"hasEval\":false,\"upvars\":[\"options\",\"isSearchable\"]}",
                      "meta": {}
                    }));

                  case 4:
                    _context7.next = 6;
                    return (0, _testHelpers.fillIn)(SEARCHABLE_SELECT_SELECTOR, 'tomate');

                  case 6:
                    // then
                    assert.dom('.pix-select--is-valid').doesNotExist();

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          return function (_x7) {
            return _ref8.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('it should have a green border when a valid option is selected and isGreenValidationActive argument is given', /*#__PURE__*/function () {
          var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    // given
                    this.options = DEFAULT_OPTIONS;
                    this.isSearchable = true;
                    this.isValidationActive = true; // when

                    _context8.next = 5;
                    return (0, _testHelpers.render)(Ember.HTMLBars.template(
                    /*
                      
                              <PixSelect
                                @options={{options}}
                                @isSearchable={{isSearchable}}
                                @isValidationActive={{isValidationActive}}
                              />
                    */
                    {
                      "id": "pBEac2/S",
                      "block": "{\"symbols\":[],\"statements\":[[2,\"\\n          \"],[8,\"pix-select\",[],[[\"@options\",\"@isSearchable\",\"@isValidationActive\"],[[34,0],[34,1],[34,2]]],null]],\"hasEval\":false,\"upvars\":[\"options\",\"isSearchable\",\"isValidationActive\"]}",
                      "meta": {}
                    }));

                  case 5:
                    _context8.next = 7;
                    return (0, _testHelpers.fillIn)(SEARCHABLE_SELECT_SELECTOR, 'tomate');

                  case 7:
                    // then
                    assert.dom('.pix-select--is-valid').exists();

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          return function (_x8) {
            return _ref9.apply(this, arguments);
          };
        }());
      });
    });
  });
});
define("dummy/tests/integration/components/pix-stars-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | stars', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the default PixStars', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var stars;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixStars />
                */
                {
                  "id": "jzT4W6tQ",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-stars\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                stars = this.element.querySelectorAll('img'); // then

                assert.equal(stars.length, 0);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders a total of 5 empty stars', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var stars;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixStars @total={{5}}/>
                */
                {
                  "id": "Bjz9LE1e",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-stars\",[],[[\"@total\"],[5]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                stars = this.element.querySelectorAll('[data-test-status="unacquired"]'); // then

                assert.equal(stars.length, 5);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders 3 stars acquired on a total of 5', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var acquiredStars, unacquiredStars;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixStars @count={{3}} @total={{5}}/>
                */
                {
                  "id": "4+GY48bN",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-stars\",[],[[\"@count\",\"@total\"],[3,5]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                acquiredStars = this.element.querySelectorAll('[data-test-status="acquired"]');
                unacquiredStars = this.element.querySelectorAll('[data-test-status="unacquired"]'); // then

                assert.equal(acquiredStars.length, 3);
                assert.equal(unacquiredStars.length, 2);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders alternative message', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var srOnly;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixStars @total={{3}} @alt="message"/>
                */
                {
                  "id": "dCf8XvrN",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-stars\",[],[[\"@total\",\"@alt\"],[3,\"message\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                srOnly = this.element.querySelector('.sr-only'); // then

                assert.equal(srOnly.textContent.trim(), 'message');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the acquired start but hide unacquired', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var acquiredStars, unacquiredStars;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixStars @count={{3}} />
                */
                {
                  "id": "bSeK+vRE",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-stars\",[],[[\"@count\"],[3]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                acquiredStars = this.element.querySelectorAll('[data-test-status="acquired"]');
                unacquiredStars = this.element.querySelectorAll('[data-test-status="unacquired"]'); // then

                assert.equal(acquiredStars.length, 3);
                assert.equal(unacquiredStars.length, 0);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the color', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        var component;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixStars @count={{3}} @total={{5}} @color="blue" />
                */
                {
                  "id": "i2bz/QK4",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-stars\",[],[[\"@count\",\"@total\",\"@color\"],[3,5,\"blue\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                component = this.element.querySelector('.pix-stars--blue'); // then

                assert.ok(component);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-tag-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | pix-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given content', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixTag>tag text</PixTag>
                */
                {
                  "id": "jNNUcZ6L",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-tag\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"tag text\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), 'tag text');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with the given color class', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var pixTagElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixTag @color="purple" />
                */
                {
                  "id": "X6kXU4XZ",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-tag\",[],[[\"@color\"],[\"purple\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                pixTagElement = this.element.querySelector('.pix-tag');
                assert.ok(pixTagElement.classList.contains('pix-tag--purple'));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders a compact tag', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var pixTagElement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixTag @compact={{true}} />
                */
                {
                  "id": "hsbQKJoq",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-tag\",[],[[\"@compact\"],[true]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                pixTagElement = this.element.querySelector('.pix-tag');
                assert.ok(pixTagElement.classList.contains('pix-tag--compact'));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with attributes override', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var pixTagElement;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixTag @color="blue" aria-label="world" />
                */
                {
                  "id": "58bFQ6qR",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-tag\",[[24,\"aria-label\",\"world\"]],[[\"@color\"],[\"blue\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                pixTagElement = this.element.querySelector('.pix-tag');
                assert.equal(pixTagElement.getAttribute('aria-label'), 'world');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-textarea-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | textarea', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var TEXTAREA_SELECTOR = '.pix-textarea textarea';
    var CHAR_COUNT_SELECTOR = '.pix-textarea p';
    (0, _qunit.test)('it renders PixTextarea with correct id and content', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var newContent, textarea;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // given 
                newContent = 'Bonjour Pix !'; // when

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixTextarea @id=7 @value="old value" />
                */
                {
                  "id": "9pKM0UVn",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-textarea\",[],[[\"@id\",\"@value\"],[\"7\",\"old value\"]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 3:
                _context.next = 5;
                return (0, _testHelpers.fillIn)(TEXTAREA_SELECTOR, newContent);

              case 5:
                // then
                textarea = this.element.querySelector(TEXTAREA_SELECTOR);
                assert.equal(textarea.value.trim(), newContent);
                assert.equal(textarea.id, 7);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should count textarea characters length', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var defaultValue, maxlength, textarea;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // given
                defaultValue = '';
                this.set('value', defaultValue);
                maxlength = 20;
                this.set('maxlength', maxlength); // when

                _context2.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixTextarea @value={{value}} @maxlength={{maxlength}} />
                */
                {
                  "id": "AgWzkZXx",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-textarea\",[],[[\"@value\",\"@maxlength\"],[[34,0],[34,1]]],null]],\"hasEval\":false,\"upvars\":[\"value\",\"maxlength\"]}",
                  "meta": {}
                }));

              case 6:
                _context2.next = 8;
                return (0, _testHelpers.fillIn)(TEXTAREA_SELECTOR, 'Hello Pix !');

              case 8:
                // then
                textarea = this.element.querySelector(TEXTAREA_SELECTOR);
                assert.equal(textarea.maxLength, maxlength);
                assert.dom(CHAR_COUNT_SELECTOR).hasText('11 / 20');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should be possible to add required attributes to PixTextarea', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var defaultValue, textarea;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // given
                defaultValue = '';
                this.set('value', defaultValue); // when

                _context3.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PixTextarea @value={{value}} required="true" />
                */
                {
                  "id": "pFKIbSTZ",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"pix-textarea\",[[24,\"required\",\"true\"]],[[\"@value\"],[[34,0]]],null]],\"hasEval\":false,\"upvars\":[\"value\"]}",
                  "meta": {}
                }));

              case 4:
                // then
                textarea = this.element.querySelector(TEXTAREA_SELECTOR);
                assert.equal(textarea.required, true);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/pix-tooltip-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | pix-tooltip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var TOOLTIP_SELECTOR = '.pix-tooltip span';
    (0, _qunit.test)('it renders the default tooltip', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var tooltipContentElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixTooltip>
                        template block text
                      </PixTooltip>
                    
                */
                {
                  "id": "gLVCaMWL",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-tooltip\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 2:
                tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR); // then

                assert.equal(this.element.textContent.trim(), 'template block text');
                assert.equal(tooltipContentElement.classList.toString().trim(), 'pix-tooltip__content pix-tooltip__content--top');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders the tooltip text', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var text, tooltipContentElement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // given
                text = 'Un text à afficher au survol du contenu de la tooltip';
                this.set('text', text); // when

                _context2.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PixTooltip @text={{this.text}}>
                        template block text
                      </PixTooltip>
                    
                */
                {
                  "id": "f17vUrAV",
                  "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"pix-tooltip\",[],[[\"@text\"],[[32,0,[\"text\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 4:
                tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR); // then

                assert.equal(tooltipContentElement.innerHTML.trim(), text);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('tooltip position', function () {
      var TOOLTIP_POSITION_SELECTOR = 'pix-tooltip__content--';
      ['top', 'top-left', 'top-right', 'right', 'left', 'bottom', 'bottom-left', 'bottom-right'].forEach(function (position) {
        (0, _qunit.test)("it can render ".concat(position), /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
            var tooltipContentElement;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // given
                    this.set('position', position); // when

                    _context3.next = 3;
                    return (0, _testHelpers.render)(Ember.HTMLBars.template(
                    /*
                      
                              <PixTooltip @position={{this.position}}>
                              </PixTooltip>
                            
                    */
                    {
                      "id": "3n8vuuBs",
                      "block": "{\"symbols\":[],\"statements\":[[2,\"\\n          \"],[8,\"pix-tooltip\",[],[[\"@position\"],[[32,0,[\"position\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"hasEval\":false,\"upvars\":[]}",
                      "meta": {}
                    }));

                  case 3:
                    tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR); // then

                    assert.ok(tooltipContentElement.classList.toString().includes(TOOLTIP_POSITION_SELECTOR + position));

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          return function (_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.module)('tooltip light display', function () {
      var LIGHT_CLASS = 'pix-tooltip__content--light';
      (0, _qunit.test)('it can render in dark mode', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          var tooltipContentElement, tooltipContentClasses;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixTooltip>
                          </PixTooltip>
                        
                  */
                  {
                    "id": "A8/DAHzo",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-tooltip\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
                  tooltipContentClasses = tooltipContentElement.classList.toString().trim(); // then

                  assert.equal(tooltipContentClasses.includes(LIGHT_CLASS), false);

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x4) {
          return _ref5.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it can render in light mode', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var tooltipContentElement;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixTooltip @isLight={{true}}>
                          </PixTooltip>
                        
                  */
                  {
                    "id": "mzPI0puL",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-tooltip\",[],[[\"@isLight\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR); // then

                  assert.ok(tooltipContentElement.classList.toString().includes(LIGHT_CLASS));

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('tooltip inline display', function () {
      var INLINE_CLASS = 'pix-tooltip__content--inline';
      (0, _qunit.test)('it can render in multiple lines', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var tooltipContentElement, tooltipContentClasses;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixTooltip>
                          </PixTooltip>
                        
                  */
                  {
                    "id": "A8/DAHzo",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-tooltip\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
                  tooltipContentClasses = tooltipContentElement.classList.toString().trim(); // then

                  assert.equal(tooltipContentClasses.includes(INLINE_CLASS), false);

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it can render inline', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          var tooltipContentElement;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixTooltip @isInline={{true}}>
                          </PixTooltip>
                        
                  */
                  {
                    "id": "805TLcP1",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-tooltip\",[],[[\"@isInline\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR); // then

                  assert.ok(tooltipContentElement.classList.toString().includes(INLINE_CLASS));

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('tooltip wide display', function () {
      var WIDE_CLASS = 'pix-tooltip__content--wide';
      (0, _qunit.test)('it can render not widely', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          var tooltipContentElement, tooltipContentClasses;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixTooltip>
                          </PixTooltip>
                        
                  */
                  {
                    "id": "A8/DAHzo",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-tooltip\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
                  tooltipContentClasses = tooltipContentElement.classList.toString().trim(); // then

                  assert.equal(tooltipContentClasses.includes(WIDE_CLASS), false);

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it can render widely', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          var tooltipContentElement;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)(Ember.HTMLBars.template(
                  /*
                    
                          <PixTooltip @isWide={{true}}>
                          </PixTooltip>
                        
                  */
                  {
                    "id": "AolQ7zSC",
                    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"pix-tooltip\",[],[[\"@isWide\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"hasEval\":false,\"upvars\":[]}",
                    "meta": {}
                  }));

                case 2:
                  tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR); // then

                  assert.ok(tooltipContentElement.classList.toString().includes(WIDE_CLASS));

                case 4:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dummy/tests/unit/components/pix-button-test", ["qunit", "ember-qunit", "sinon", "dummy/tests/helpers/create-glimmer-component"], function (_qunit, _emberQunit, _sinon, _createGlimmerComponent) {
  "use strict";

  (0, _qunit.module)('Unit | Component | pix-button', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it throws if route param is undefined or empty', function (assert) {
      // given
      var componentParams = {
        isLink: true,
        route: '  '
      };
      var expectedError = new Error('ERROR in PixButton component, @route param is not provided');
      var component = (0, _createGlimmerComponent.default)('component:pix-button', componentParams); // when & then

      assert.throws(function () {
        component.route;
      }, expectedError);
    });
    (0, _qunit.module)('#enableTriggerAction', function () {
      (0, _qunit.test)('it should return true if button type is button', function (assert) {
        // given
        var componentParams = {
          type: 'button'
        };
        var component = (0, _createGlimmerComponent.default)('component:pix-button', componentParams); // when

        var result = component.enableTriggerAction; // then

        assert.equal(result, true);
      });
      (0, _qunit.test)('it should return true if button type is submit and triggerAction is defined', function (assert) {
        // given
        var componentParams = {
          type: 'submit',
          triggerAction: _sinon.default.stub()
        };
        var component = (0, _createGlimmerComponent.default)('component:pix-button', componentParams); // when

        var result = component.enableTriggerAction; // then

        assert.equal(result, true);
      });
      (0, _qunit.test)('it should return false if button type is submit and triggerAction is not defined', function (assert) {
        // given
        var componentParams = {
          type: 'submit'
        };
        var component = (0, _createGlimmerComponent.default)('component:pix-button', componentParams); // when

        var result = component.enableTriggerAction; // then

        assert.equal(result, false);
      });
    });
  });
});
define("dummy/tests/unit/components/pix-return-to-test", ["qunit", "ember-qunit", "dummy/tests/helpers/create-glimmer-component"], function (_qunit, _emberQunit, _createGlimmerComponent) {
  "use strict";

  (0, _qunit.module)('Unit | Component | pix-return-to', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('its default color is black', function (assert) {
      // given
      var componentParams = {
        route: 'uneRoute',
        shade: 'test'
      };
      var expectedShade = 'black';
      var component = (0, _createGlimmerComponent.default)('component:pix-return-to', componentParams); // when & then

      assert.equal(component.shade, expectedShade);
    });
    (0, _qunit.test)('it can be white', function (assert) {
      // given
      var componentParams = {
        route: 'uneRoute',
        shade: 'white'
      };
      var expectedShade = 'white';
      var component = (0, _createGlimmerComponent.default)('component:pix-return-to', componentParams); // when & then

      assert.equal(component.shade, expectedShade);
    });
    (0, _qunit.test)('it throws if route param is undefined or empty', function (assert) {
      // given
      var componentParams = {
        route: '  '
      };
      var expectedError = new Error('ERROR in PixReturnTo component, @route param is not provided');
      var component = (0, _createGlimmerComponent.default)('component:pix-return-to', componentParams); // when & then

      assert.throws(function () {
        component.route;
      }, expectedError);
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
