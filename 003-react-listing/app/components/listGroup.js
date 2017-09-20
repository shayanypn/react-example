import React from 'react';

export default class ListGroup extends React.Component {
	render() {

		let List = this.props.groups.map( item => {
			return <a key={item.key.toString()} className="list-group-item list-group-item-action flex-column align-items-start">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">List group item heading</h5>
					<small>3 days ago</small>
				</div>
				<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
				<small>Donec id elit non mi porta.</small>
			</a>
		});

		return (
			<div className="col-sm-4">
				<h2> Groups </h2>
				<div className="list-group">
				  {List}
				</div>
			</div>
		);
	}
}

