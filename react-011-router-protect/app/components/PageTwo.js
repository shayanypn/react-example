import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'



class PageInner extends React.Component {
	render(){

		return (<div> inner page {this.props.match.params.name}</div>)
	}
}

export default class PageTwo extends React.Component {


	render(){

		let list = ['A', 'B', 'C'];

		return (
			<div>
				<h1>Welcome Page Two <small>dynamic nesting</small></h1>
			    <ul>
				{list.map( (item, index) =>{
					return <li key={index}><Link to={`/page-two/${item}`} >{item}</Link></li>
				})}
			    </ul>
			    <div>---------------</div>
			    <Route path={`/page-two/:name`}
		            render={ (props) => <PageInner  {...props} />}/>
			</div>
		)
	}
}
