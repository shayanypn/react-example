import React from 'react';

export default class List extends React.Component {

	onClick(todo){

		this.props.onDelete(todo);
	}

	render() {
		let listNode = this.props.todosList.map( (todo, i) => {
			return <a key={i} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">
						<input type="checkbox"  />
						<span className="pl-2" >{todo.title}</span>
					</h5>
					<small onClick={()=>this.onClick(todo)} className="bg-danger text-light pl-2 pr-2">delete</small>
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