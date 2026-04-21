import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('hello', { path: '/hello-world' });
  this.route('bye', { path: '/bye/:id' });
  this.route('modal-page', { path: '/modal' });
  this.route('select-page', { path: '/select' });
  this.route('sidebar-page', { path: '/sidebar' });
  this.route('tooltip-page', { path: '/tooltip' });
  this.route('table-page', { path: '/table' });
  this.route('gauge-page', { path: '/gauge' });
  this.route('button-page', { path: '/button' });
  this.route('stepper-page', { path: '/stepper' });
  this.route('layout-page', { path: '/layout' });
});
