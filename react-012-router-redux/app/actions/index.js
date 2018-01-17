'use strict';
export const ADD_MODEL = 'ADD_MODEL';

export function addModel(text) {

	return (dispatch) => {
		fetch('http://94.130.117.194:8001/api/')
		.then( response => {
			dispatch({
				type: ADD_MODEL,
				text
			});
		})

		// // or you can do with out sync
		// dispatch({
		// 	type: ADD_MODEL,
		// 	text
		// });
	}
}
