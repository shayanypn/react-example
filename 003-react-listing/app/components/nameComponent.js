import React from 'react';

export default class Todo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur debitis tempore reprehenderit assumenda sed quod enim maxime hic, nisi, aut nobis, neque repudiandae totam natus, sunt odio commodi sint. Vero."
		};
	}

	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-3">My name is `{this.props.name}`</h1>
				<p className="lead">{this.state.text}</p>
			</div>);
	}
}