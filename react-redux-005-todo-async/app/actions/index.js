'use strict';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {

	return (dispatch) => {
		fetch('http://94.130.117.194:8001/api/')
		.then( response => {
			dispatch({
				type: ADD_TODO,
				text
			});
		})
	}
}

export function completeTodo(index) {
	return {
		type: COMPLETE_TODO,
		index
	};
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	};
}