import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleSubmit(e){
		e.preventDefault();

		let props = this.props,
		data = {
			username: ReactDOM.findDOMNode(this.refs.username).value,
			password: ReactDOM.findDOMNode(this.refs.password).value
		};

		fetch('http://94.130.117.194:8001/api/')
		.then(response => {
			props.onLogin( data );
		})
	}


	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.username).focus();
	}


	render() {


		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} >
				<div className="form-group">
					<h1 className="text-center">Login </h1>	
				</div>
				<div className="form-group">
					<label> </label>
					<input type="text"
						ref="username"
						className="form-control"
						/>
				</div>
				<div className="form-group">
					<label> </label>
					<input type="text"
						ref="password"
						className="form-control"
						/>
				</div>
				<div className="form-group">
					<button className="btn btn-success" style={{width:'100%'}} >Submit</button>
				</div>
			</form>
		)
	}
}

export default Form;