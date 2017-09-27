import React from 'react';
import Item from './item';

export default class ListView extends React.Component {
	render() {

		let List = this.props.names.map( (name, index) =>{
			return <Item name={name} key={index} />
		});

		return (
			<div className="col-sm-4">
				<h2> Names </h2>
				<ul className="list-group">{List}</ul>
			</div>
		);
	}
}