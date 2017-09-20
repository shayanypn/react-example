import React from 'react';
import ReactDOM from 'react-dom';
import SetState from './components/setState';
import ForceUpdate from './components/forceUpdate';
import FindNode from './components/findNode';
import './styles/app.scss';


class Main extends React.Component {
	render() {

	return (
	<div className="container">
		<div className="col-md-12">
			<div className="row">
				<SetState />
				<ForceUpdate />
				<FindNode />
			</div>
		</div>
	</div>);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));