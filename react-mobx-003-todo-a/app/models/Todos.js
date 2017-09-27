import { observable, computed, action } from "mobx";

class Todos {
	@observable todos = [];

	@action
	addTodo(title){

		if (title === '') {return;};

		this.todos.push({
			id: Date.now(),
			title: title,
			isDone: false
		});
	}

	@action
	deleteTodo(id){

		let todos = []

		this.todos.forEach( item => {
			if ( id !== item.id) {
				todos.push(item);
			};
		});
		this.todos = todos;
	}
}

export default new Todos();