import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import './styles/app.scss';


class Main extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			data: 0
		}
		this.setNewNumber = this.setNewNumber.bind(this)
	};

	setNewNumber() {
		this.setState({data: this.state.data + 1})
	}

	render() {
		return (
			<div className="container">
				<div className="col-md-12">
					<button onClick={this.setNewNumber} className="btn btn-primary">INCREMENT</button>
					<Content myNumber={this.state.data} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));