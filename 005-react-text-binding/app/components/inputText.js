import React from 'react';
import ReactDOM from 'react-dom';

export default class Todo extends React.Component {

	constructor(props){
		super(props);
		this.handleKeyPress = this.handleKeyPress.bind(this);

		this.state = {
			text: ""
		};
	}
	handleKeyPress(e){
		this.setState({
			text: e.target.value
		});
	}
	componentDidMount(){
		ReactDOM.findDOMNode(this.refs.textInput).focus();
	}
	render() {
		return (
		<form>
			<div className="form-group mx-sm-3">
				<label className="sr-only">Text</label>
				<input
					type="text"
					className="form-control"
					placeholder="Type your name ..."
					ref="textInput"
					onKeyUp={this.handleKeyPress}
					/>
			</div>
			<div className="col-md-4">
				<strong>
					{this.state.text} said: Hello World
				</strong>
			</div>
		</form>);
	}
}