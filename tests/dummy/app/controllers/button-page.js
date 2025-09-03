import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class ButtonPage extends Controller {
	@action
	onClick() {
		console.log("CLICKED");
	}
}
