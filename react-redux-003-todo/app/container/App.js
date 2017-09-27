'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters,
  ADD_TODO,
  COMPLETE_TODO
} from '../actions';

import Form from './../components/Form';
import List from './../components/List';
import Footer from './../components/Footer';

class App extends Component {
	render() {

		const { dispatch, visibleTodos, visibilityFilter } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"><br /></div>
					<div className="col-md-6 text-center">
						<div className="jumbotron" style={{padding:'5px',margin:0}} >
							<Form
								onAddTodo={ text => dispatch({ type: ADD_TODO, text }) }
								/>
							<List
								onTodoClick={index => dispatch({ type: COMPLETE_TODO, index })}
								todos={visibleTodos}
								/>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		)
	}
}



App.propTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})),
	visibilityFilter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
};


function selectTodos(todos, filter) {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);
	}
}

// 这里的 state 是 Connect 的组件的
function select(state) {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	};
}

export default connect(select)(App);