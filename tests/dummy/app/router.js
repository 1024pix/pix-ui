import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('hello', { path: '/hello-world' });
  this.route('bye', { path: '/bye/:id' });
});
