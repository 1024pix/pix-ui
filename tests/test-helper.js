import Application from 'dummy/app';
import config from 'dummy/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import QUnit from 'qunit';
import { contains } from './helpers/contains';

setApplication(Application.create(config.APP));

start();

QUnit.assert.contains = contains;
