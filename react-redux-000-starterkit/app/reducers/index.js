
export default (state = 'Hello World!', action) => {
	switch (action.type) {
		case 'ONTEXT':
			return "Hello Redux!";
		case 'ONANOTHERTEXT':
			return "Another Hello Redux!";
		default:
			return state
	}
}