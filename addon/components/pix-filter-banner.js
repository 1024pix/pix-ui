import Component from '@glimmer/component';

export default class PixFilterBanner extends Component {
  get displayTitle() {
    return Boolean(this.args.title);
  }

  get displayDetails() {
    return Boolean(this.args.details);
  }

  get displayClearFilters() {
    return Boolean(this.args.clearFiltersLabel);
  }

  get displayActionMenu() {
    return this.displayClearFilters || this.displayDetails;
  }
}
