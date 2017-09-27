import React from 'react';
import ReactDOM from 'react-dom';

export default class FindNode extends React.Component {

	onClick(){
		var myDiv = document.getElementById('myDiv');
		ReactDOM.findDOMNode(myDiv).innerHTML = 'This node change text!';
	}

	render() {

		return (
			<div className="col-sm-4">
				<div className="jumbotron">
					<h2> FindDOMNode </h2>
					<button onClick={this.onClick.bind(this)} className="btn btn-success"> Add </button>
					<div id="myDiv">NODE</div>
				</div>
			</div>
		);
	}
}