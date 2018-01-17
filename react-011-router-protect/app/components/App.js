import React from 'react'
import Header from './Header'
import Main from './Main'

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hasAccess: false
		};
	}

	getAccess(){
		this.setState({
			hasAccess: !this.state.hasAccess
		});
	}


	render() {
		return (
			<div>
				<Header />
				<Main
					getAccess={this.getAccess.bind(this)}
					hasAccess={this.state.hasAccess}
				/>
			</div>
		)
	}
}
