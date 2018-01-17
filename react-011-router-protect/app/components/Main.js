import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export default class Main extends React.Component {
	render() {
		let hasAccess = this.props.hasAccess;

		return (
		<main>
			<Switch>
				<Route exact path='/' render={ ()=> ( <Home getAccess={this.props.getAccess} hasAccess={hasAccess}  />) } />
				<Route path='/page-one' render={ () => ( hasAccess ? <PageOne /> : <Redirect to="/" /> )} />
				<Route path='/page-two' render={ () => ( hasAccess ? <PageTwo /> : <Redirect to="/" /> )} />
				<Route path='/page-three' render={ () => ( hasAccess ? <PageThree /> : <Redirect to="/" /> )} />
			</Switch>
		</main>
		)
	}
}
