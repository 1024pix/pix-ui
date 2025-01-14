import { warn } from '@ember/debug';
import Component from '@glimmer/component';

export default class PixReturnTo extends Component {
  text = 'pix-return-to';
  availableShades = ['neutral-dark', 'neutral-light'];
  defaultModel = [];

  get route() {
    const routeParam = this.args.route;
    warn('PixReturnTo: @route param is not provided', routeParam !== undefined, {
      id: 'pix-ui.returnTo.route.required',
    });
    return routeParam;
  }

  get shade() {
    const shadeParam = this.args.shade;
    return this.availableShades.includes(shadeParam) ? shadeParam : this.availableShades[0];
  }
}
