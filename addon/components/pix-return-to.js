import Component from '@glimmer/component';

export default class PixReturnTo extends Component {
  text = 'pix-return-to';
  availableShade = ['black', 'white', 'blue'];
  defaultModel = [];

  get route() {
    const routeParam = this.args.route;
    if(routeParam == undefined || routeParam.trim() == '') {
      throw new Error('ERROR in PixReturnTo component, @route param is not provided');
    }
    return routeParam;
  }

  get shade() {
    const shadeParam = this.args.shade;
    return this.availableShade.includes(shadeParam) ? shadeParam : this.availableShade[0];
  }
}
