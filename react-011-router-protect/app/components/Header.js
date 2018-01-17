import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export default class Header extends React.Component {
	render(){
		return (
			<header>
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/page-one'>Protect One</Link></li>
						<li><Link to='/page-two'>Protect Two</Link></li>
						<li><Link to='/page-three'>Protect Three</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
}