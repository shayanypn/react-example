import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'


class PageA extends React.Component {
	render(){
		return (<div>A</div>)
	}
}
class PageB extends React.Component {
	render(){
		return (<div>B</div>)
	}
}
class PageC extends React.Component {
	render(){
		return (<div>C</div>)
	}
}

export default class PageOne extends React.Component {



	render(){
		return (
			<div>
				<h1>Welcome Page One <small>static nesting</small></h1>
			    <ul>
			      <li><Link to="/page-one/a">A</Link></li>
			      <li><Link to="/page-one/b">B</Link></li>
			      <li><Link to="/page-one/c">C</Link></li>
			    </ul>
			    <div>---------------</div>	
				<Switch>
					<Route path='/page-one/a' component={PageA}/>
					<Route path='/page-one/b' component={PageB}/>
					<Route path='/page-one/c' component={PageC}/>
				</Switch>
			</div>
		)
	}
}
