import { setApplication } from '@ember/test-helpers';
import Application from 'dummy/app';
import config from 'dummy/config/environment';
import { start } from 'ember-qunit';
import { loadTests } from 'ember-qunit/test-loader';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

import { contains } from './helpers/contains';

setup(QUnit.assert);
setApplication(Application.create(config.APP));
loadTests();
start();

QUnit.assert.contains = contains;
