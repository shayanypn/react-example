import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import List from './list';

export default class Todo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{id:1,title:'task 1', isDone: false},
				{id:2,title:'task 2', isDone: false},
				{id:3,title:'task 3', isDone: false}
			]
		}
	}


	onAddTodo(new_task){
		let todos = this.state.todos,
		id = todos[ todos.length - 1 ];

		todos.unshift({
			id: id,
			title: new_task,
			isDone: false
		});

		this.setState({
			todos: todos
		});
	}
	onDeleteTodo(todo){
		let todos = [];

		this.state.todos.forEach( item => {
			if ( item.id !== todo.id) {
				todos.push(item);
			};
		});

		this.setState({
			todos: todos
		});
	}

	onComplete(todo){
		let todos = this.state.todos.map( item =>{
			item['isDone'] = (item.id === todo.id) ? !item.isDone : item.isDone;
			return item;
		});

		this.setState({
			todos: todos
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-3"><br /></div>
					<div className="col-sm-6">
						<div className="jumbotron">
							<Form onAdd={this.onAddTodo.bind(this)} />
							<List
								todosList={this.state.todos}
								onDelete={this.onDeleteTodo.bind(this)}
								onComplete={this.onComplete.bind(this)}
								/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}