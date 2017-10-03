'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_TODO, COMPLETE_TODO } from '../actions';

import Form from './../components/Form';
import List from './../components/List';
import Footer from './../components/Footer';

class App extends Component {
	render() {

		const { dispatch, todos } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"><br /></div>
					<div className="col-md-6 text-center">
						<div className="jumbotron" style={{padding:'5px',margin:0}} >
							<Form
								onAddTodo={ text => dispatch({ type: ADD_TODO, text }) }
								/>
							<List
								onTodoClick={index => dispatch({ type: COMPLETE_TODO, index })}
								todos={todos}
								/>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		)
	}
}



function select(state) {
	return {
		todos: state
	};
}

export default connect(select)(App);