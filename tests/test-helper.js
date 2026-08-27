import { setApplication } from '@ember/test-helpers';
import Application from 'dummy/app';
import config from 'dummy/config/environment';
import { start } from 'ember-qunit';
import { loadTests } from 'ember-qunit/test-loader';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import sinon from 'sinon';

import { contains } from './helpers/contains';
// Restore all sinon stubs after each test to avoid side-effects
QUnit.hooks.afterEach(function () {
  sinon.restore();
});

setup(QUnit.assert);
setApplication(Application.create(config.APP));
loadTests();
start();

QUnit.assert.contains = contains;
