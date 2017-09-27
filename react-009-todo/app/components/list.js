import React from 'react';

export default class List extends React.Component {

	onDelete(todo){
		this.props.onDelete(todo);
	}

	onDone(todo){
		this.props.onComplete(todo);
	}


	render() {
		let listNode = this.props.todosList.map( (todo, i) => {
			let inStyle = {
				textDecoration: todo.isDone ? 'line-through' : 'none'
			};

			return <a key={i} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1" style={inStyle}>
						<input type="checkbox" checked={todo.isDone} onClick={()=> this.onDone(todo)}  />
						<span className="pl-2" >{todo.title}</span>
					</h5>
					<small onClick={()=>this.onDelete(todo)} className="bg-danger text-light pl-2 pr-2">delete</small>
				</div>
			</a>
		});

		return ( 
			<div className="list-group">
				{listNode}
			</div>
		);
	}
}