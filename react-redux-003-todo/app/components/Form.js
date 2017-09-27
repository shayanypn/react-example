import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
	}

	handleTyping(e){
		this.setState({
			task: e.target.value
		});
	}

	handleSubmit(e){
		e.preventDefault();

		this.props.onAddTodo(this.state.task);

		ReactDOM.findDOMNode(this.refs.task).value = '';
	}


	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.task).focus();		
	}

	render() {
		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} >
				<div className="form-group form-row">
					<div className="col-md-9">
						<input type="text"
							ref="task"
							onKeyUp={this.handleTyping.bind(this)}
							className="form-control"
							placeholder="type your task and press enter"
							/>
					</div>
					<div className="col-md-3" >
						<button className="btn btn-success" style={{width:'100%'}} >Add</button>
					</div>
				</div>
			</form>
		)
	}
}

export default Form;