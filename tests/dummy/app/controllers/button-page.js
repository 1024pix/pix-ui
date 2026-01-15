import Controller from "@ember/controller";
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class ButtonPage extends Controller {
  @tracked toggleSegmentedControl = false;

	@action
	onClick() {
		console.log("CLICKED");
	}

  @action
	onChangeSegmentedControl() {
    this.toggleSegmentedControl = !this.toggleSegmentedControl;
    console.log("toggleSegmentedControl", this.toggleSegmentedControl);
	}

  get toggleSegmentedControlValue() {
    return this.toggleSegmentedControl
  }
}
