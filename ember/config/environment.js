'use strict';

module.exports = function (environment) {
  const ENV = {
    APP: {},
  };

  if (environment === 'test') {
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  return ENV;
};
