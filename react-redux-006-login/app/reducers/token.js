import { LOGIN, LOGOUT } from '../actions';



function token(state = {}, action ) {
	switch (action.type) {
		case LOGIN:

			let isAuthenticate = false;
			if ( action.data.username == 'admin') {
				isAuthenticate = true;
			}else{
				isAuthenticate = false;
			}

			return {
				isAuthenticate: isAuthenticate
			}
			break;
		case LOGOUT:

			return {
				isAuthenticate: false
			}
		default:
			return state
	}
}

export default token;