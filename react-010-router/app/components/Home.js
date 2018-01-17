import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to the Home!</h1>

				<Link to='/page-one'>One</Link>
			</div>
		)
	}
}
