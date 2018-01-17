import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

class Counter extends Component {


	onIncrease(){
		this.props.dispatch({ type: 'INCREASE' });
	}
	onDecrease(){
		this.props.dispatch({ type: 'DECREASE' });
	}

	render() {
		const { number, dispatch } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"><br /></div>
					<div className="col-md-6 text-center">
						<div className="jumbotron">
							<h2>{number}</h2>
							<div className="btn-group">
								<button onClick={this.onDecrease.bind(this)} className="btn btn-secondary">-</button>
								<button onClick={this.onIncrease.bind(this)} className="btn btn-secondary">+</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function getSore(state){

	return {
		number: state
	}
}
export default connect(getSore)(Counter);