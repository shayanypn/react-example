import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {

	render() {
		const { text, onText } = this.props
		return (
			<p>
				{text}
				{' '}
				<button onClick={onText} className="btn btn-primary"> Change Text </button>
			</p>
		)
	}
}

HelloWorld.propTypes = {
	text: PropTypes.string.isRequired,
	onText: PropTypes.func.isRequired
};

export default HelloWorld;