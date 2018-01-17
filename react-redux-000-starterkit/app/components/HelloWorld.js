import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {

	render() {
		const { text, onText, onAnotherText } = this.props
		return (
			<p>
				{text}
				{' '}
				<button onClick={onText} className="btn btn-primary"> Change Text </button>
				<button onClick={onAnotherText} className="btn btn-primary"> Change Another Text </button>
			</p>
		)
	}
}

HelloWorld.propTypes = {
	text: PropTypes.string.isRequired,
	onText: PropTypes.func.isRequired
};

export default HelloWorld;