import { observable, computed, action } from "mobx";

export default class Counter {
	@observable num = 0;

	@action
	increase(){this.num++;}

	@action
	decrease(){this.num--;}

}