import React from 'react';

class Todo extends React.Component {
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
				<p className="lead">{this.props.isShow?this.state.text:''}</p>
			</div>);
	}
}
Todo.propTypes = {
   isShow: React.PropTypes.bool.isRequired,
   name: React.PropTypes.string,
   // propArray: React.PropTypes.array.isRequired,
   // propFunc: React.PropTypes.func,
   // propNumber: React.PropTypes.number,
   // propObject: React.PropTypes.object
};
Todo.defaultProps = {
	name: 'Alex'
};
export default Todo;