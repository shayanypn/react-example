'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOGIN, LOGOUT } from '../actions';

import Form from './../components/Form';

class App extends Component {
	render() {

		const { dispatch } = this.props;

		let loginHtml = <div  className="row">
				<div className="col-md-3"><br /></div>
				<div className="col-md-6 text-center">
					<div className="jumbotron" style={{padding:'5px',margin:0}} >
						<Form
							onLogin={ data => dispatch({ type: LOGIN, data }) }
							/>
					</div>
				</div>
			</div>;

		return (
			<div className="container">
				{this.props.isAuthenticate?'USER LOG IN':loginHtml}
			</div>
		)

	}
}


function isAuthenticate( token ){

	return token.isAuthenticate ? true : false;
}

function select(state) {

	return {
		token: state.token,
		isAuthenticate: isAuthenticate(state.token)
	};
}

export default connect(select)(App);