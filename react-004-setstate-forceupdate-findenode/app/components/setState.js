import React from 'react';

export default class SetState extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			data: ['item 0']
		};
	}

	onClick(){
		let oldArray = this.state.data;

		oldArray.push(', item ' + ( oldArray.length + 1 ));


		this.setState({
			data:oldArray
		});
	}

	render() {

		return (
			<div className="col-sm-4">
				<div className="jumbotron">
					<h2> setState </h2>
					<button onClick={this.onClick.bind(this)} className="btn btn-success"> Add </button>
					<p>State Array: {this.state.data}</p>
					<ul>
					</ul>
				</div>
			</div>
		);
	}
}