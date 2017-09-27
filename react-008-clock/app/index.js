import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';
import './styles/app.scss';


class Main extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="col-md-12">
					<Clock start={Date.now()} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));