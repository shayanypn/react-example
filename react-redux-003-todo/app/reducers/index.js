import { ADD_TODO, COMPLETE_TODO } from '../actions';


function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					time: (new Date()).getTime(),
					completed: false
				}
			];
		case COMPLETE_TODO:
			return [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], {
					completed: !state[action.index].completed
				}),
				...state.slice(action.index + 1)
			];
		default:
			return state
	}
}

export default todos;