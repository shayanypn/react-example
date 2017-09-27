import React from 'react';
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class List extends React.Component {

	render() {

		const store = this.props.store;

		let listNode = store.todos.map( (todo, i) => {
			let inStyle = {
				textDecoration: todo.isDone ? 'line-through' : 'none'
			};
			return <a key={i} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1" style={inStyle}>
						<input
							type="checkbox"
							checked={todo.isDone}
							onClick={()=> todo.isDone = !todo.isDone }
							/>
						<span className="pl-2" >{todo.title}</span>
					</h5>
					<small onClick={()=>store.deleteTodo(todo.id)} className="bg-danger text-light pl-2 pr-2">delete</small>
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
export default List;