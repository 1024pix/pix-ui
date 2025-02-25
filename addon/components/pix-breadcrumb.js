import Component from '@glimmer/component';

export default class PixBreadcrumb extends Component {
  defaultModel = [];

  get links() {
    return this.args.links.map((link) => ({
      ...link,
      label: link.label.trim(),
    }));
  }
}
