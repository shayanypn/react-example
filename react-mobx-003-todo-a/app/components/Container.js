import React from 'react';
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Form from './Form';
import List from './List';

@observer
class Conatiner extends React.Component {


	render() {

		this.props.store.addTodo('hello1');
		this.props.store.addTodo('hello2');
		this.props.store.addTodo('hello3');
		this.props.store.addTodo('hello4');

		return (
			<div className="row">
				<div className="col-md-4"><br /></div>
				<div className="col-md-4">
					<Form store={this.props.store} />
					<List store={this.props.store} />
				</div>
			</div>
		);
	}
}


export default Conatiner;