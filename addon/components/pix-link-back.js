import Component from '@glimmer/component';

export default class PixLinkBack extends Component {
  text = 'pix-link-back';
  availableShade = ['black', 'white', 'blue'];

  get route() {
    const routeParam = this.args.route;
    if(routeParam == undefined || routeParam.trim() == '') {
      throw new Error('ERROR in PixLinkBack component, @route param is not provided');
    }
    return routeParam;
  }

  get shade() {
    const shadeParam = this.args.shade;
    return this.availableShade.includes(shadeParam) ? shadeParam : this.availableShade[0];
  }
}
