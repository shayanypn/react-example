import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

	render() {
		const { number, onIncrease, onDecrease } = this.props
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"><br /></div>
					<div className="col-md-6 text-center">
						<div className="jumbotron">
							<h2>{number}</h2>
							<div className="btn-group">
								<button onClick={onDecrease} className="btn btn-secondary">-</button>
								<button onClick={onIncrease} className="btn btn-secondary">+</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Counter.propTypes = {
	number: PropTypes.number.isRequired,
	onDecrease: PropTypes.func.isRequired,
	onIncrease: PropTypes.func.isRequired
};

export default Counter;