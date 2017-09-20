import React from 'react';
import ReactDOM from 'react-dom';
import InputText from './components/inputText';
import './styles/app.scss';


class Main extends React.Component {
  render() {
    return (
    <div className="container">
    	<div className="col-md-12">
			<InputText />
		</div>
    </div>);
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));