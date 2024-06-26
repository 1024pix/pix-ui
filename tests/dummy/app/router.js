import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('hello', { path: '/hello-world' });
  this.route('bye', { path: '/bye/:id' });
  this.route('modal-page', { path: '/modal' });
  this.route('select-page', { path: '/select' });
  this.route('sidebar-page', { path: '/sidebar' });
  this.route('tabs-page', { path: '/tabs' });
  this.route('tooltip-page', { path: '/tooltip' });
});
