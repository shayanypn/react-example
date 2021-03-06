import React from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Form extends React.Component {

	onSubmit(e){
		e.preventDefault();

		let task = ReactDOM.findDOMNode(this.refs.task).value;
		ReactDOM.findDOMNode(this.refs.task).value = '';

		this.props.store.addTodo( task );
	}


	onKeyUp(e){

		if (e.target.keyCode == 13) {
			this.onSubmit();
		};
	}

	render() {

		let btnWide = {
			width: '100%'
		};

		return (
			<form className="form-horizontal form-todo" onSubmit={this.onSubmit.bind(this)}>
				<div className="form-row">
					<div className="col-sm-8">
						<input type="text" className="form-control" ref="task" onKeyUp={this.onKeyUp.bind(this)}  placeholder="Task ... " />
					</div>
					<div className="col-sm-4">
						<button type="submit" onClick={this.onSubmit.bind(this)} style={btnWide} className="btn btn-success">ADD</button>
					</div>
				</div>
			</form>
		);
	}
}

export default Form;