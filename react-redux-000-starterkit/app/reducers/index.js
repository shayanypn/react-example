
export default (state = 'Hello World!', action) => {
	switch (action.type) {
		case 'ONTEXT':
			return "Hello Redux!";
		default:
			return state
	}
}