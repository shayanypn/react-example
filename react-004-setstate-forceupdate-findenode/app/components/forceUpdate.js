import React from 'react';

export default class SetState extends React.Component {

	onClick(){
		this.forceUpdate();
	}

	render() {

		return (
			<div className="col-sm-4">
				<div className="jumbotron">
					<h2> forceUpdate </h2>
					<button onClick={this.onClick.bind(this)} className="btn btn-success"> Add </button>
					<p>Random number: {Math.random()}</p>
				</div>
			</div>
		);
	}
}