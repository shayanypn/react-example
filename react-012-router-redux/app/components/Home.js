import React from 'react'
import { connect } from 'react-redux';

import { addModel } from '../actions';

class Home extends React.Component {

	onClick(){

		this.props.dispatch(addModel('new Item'));
	}
	render() {
		
		const { models } = this.props;

		return (
			<div>
				<h1>Welcome to the Home!</h1>
				<ul>
				{models.map( (item, index) => {
					return <li key={index} > {item.text}</li>
				})}
				</ul>
				<button onClick={this.onClick.bind(this)}>Click Me</button>
			</div>
		)
	}
}



function getState(state){
	return state;
}

export default connect(getState)(Home);