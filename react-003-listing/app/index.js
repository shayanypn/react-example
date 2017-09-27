import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './components/listView';
import ListGroup from './components/listGroup';
import './styles/app.scss';


class Main extends React.Component {
	render() {

		let names = ["Shawn", "Ryan", "Alex", "Sophia", "Max", "Sara"],
		groups = [
			{
				key: 1,
				title: 'List group item heading One',
				time: '3 days ago',
				text: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
				name: 'Donec id elit non mi porta.'
			},{
				key: 2,
				title: 'List group item heading Two',
				time: '1 hour ago',
				text: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
				name: 'Donec id elit non mi porta.'
			},{
				key: 3,
				title: 'List group item heading Three',
				time: '45 minutes ago',
				text: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
				name: 'Donec id elit non mi porta.'
			}
		];


	return (
	<div className="container">
		<div className="col-md-12">
			<div className="row">
				<ListView names={names} />
				<ListGroup groups={groups} />
			</div>
		</div>
	</div>);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));