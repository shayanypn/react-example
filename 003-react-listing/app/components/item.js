import React from 'react';

export default class Item extends React.Component {
	render() {

		return (
			<li className="list-group-item">
				{this.props.name}
			</li>
		);
	}
}