import React from 'react'
import { Route, Redirect } from 'react-router'


export default class PageThree extends React.Component {


	onClick(){
		this.props.history.push('/page-one');
	}


	render(){

		return (<div>
				<h1>Welcome Page Three</h1>
				<button onClick={this.onClick.bind(this)}>Redirect to Page One </button>
			</div>)
	}
}