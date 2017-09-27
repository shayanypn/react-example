import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
	render() {



		return (
			<div>
				<div className="list-group">
					{this.props.todos.map( (todo,index) =>{					
						<a href="#" key={index} className="list-group-item list-group-item-action flex-column align-items-start">
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1">{todo.text}</h5>
								<small>3 days ago</small>
							</div>
						</a>
					})}
				</div>
			</div>
		)
	}
}

List.propTypes = {
	// onTodoClick: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
};

export default List;