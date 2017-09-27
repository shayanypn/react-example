import { observable, computed, action } from "mobx";

export default class HelloWorldModel {
	@observable text = '';

	@computed
	get textLength() {
		return this.text.length;
	}

	@action 
	setText(_text){
		this.text = _text;
	}
}