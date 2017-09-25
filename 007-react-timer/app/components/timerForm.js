import React from 'react';
import ReactDOM from 'react-dom';

export default class timerForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			seconds : 0,
			timer: 0,
		}
	}

	onClick(){
		let seconds = document.getElementById('seconds').value;
		this.setState({
			seconds: seconds,
			timer: seconds
		});

		this.onStartTimer();
	}


	onStartTimer(){



		setTimeout( ()=>{

			if ( this.state.timer === 0 ) {
				return;
			};

			this.setState({
				timer: this.state.timer-1
			});

			this.onStartTimer();
		} , 1000 )
	}

	onSubmit(e){
		e.preventDefault();
	}

	render() {
		return (
			<div className="jumbotron">
				<div className="row">
					<div className="col-md-6">
						<form className="form-inline" onSubmit={this.onSubmit.bind(this)}>
							<div className="form-group">
								<label htmlFor="staticEmail2" className="sr-only">Seconds</label>
								<input type="text" className="form-control-plaintext" id="seconds" />
							</div>
							<button type="submit" onClick={this.onClick.bind(this)} className="btn btn-primary">Start Timer</button>
						</form>
					</div>
					<div className="col-md-6">
						{this.state.timer}
					</div>
				</div>
			</div>
		);
	}
}