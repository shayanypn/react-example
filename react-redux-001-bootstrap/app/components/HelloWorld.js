import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {

	render() {
		const { text, onText } = this.props
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"><br /></div>
					<div className="col-md-6 text-center">
						<div className="jumbotron">
							<h2>{text}</h2>	
							<button onClick={onText} className="btn btn-primary"> Change Text </button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

HelloWorld.propTypes = {
	text: PropTypes.string.isRequired,
	onText: PropTypes.func.isRequired
};

export default HelloWorld;