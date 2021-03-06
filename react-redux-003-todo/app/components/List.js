import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class List extends Component {

	render() {
		return (
			<div>
				<div className="list-group">
					{this.props.todos.map( (todo,index) =>{					
						return <a href="#"
							key={index}
							onClick={() => this.props.onTodoClick(index)}
							style={{
								textDecoration: todo.completed ? 'line-through' : 'none',
								cursor: todo.completed ? 'default' : 'pointer'
							}}
							className="list-group-item list-group-item-action flex-column align-items-start"
							>
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1">{todo.text}</h5>
								<small><Moment fromNow>{todo.time}</Moment></small>
							</div>
						</a>
					})}
				</div>
			</div>
		)
	}
}

List.propTypes = {
	onTodoClick: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
};

export default List;