import React from 'react'

export default class Home extends React.Component {

	onClick(){
		this.props.getAccess();
	}

	render() {
		return (
			<div>
				<h1>Welcome to the Home!</h1>
				<p>You should click below button to get access to other pages</p>
				<button onClick={this.onClick.bind(this)} > {this.props.hasAccess?'Disable Access':'Get Access'} </button>
			</div>
		)
	}
}
