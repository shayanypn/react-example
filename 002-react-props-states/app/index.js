import React from 'react';
import ReactDOM from 'react-dom';
import NameComponent from './components/nameComponent';
import './styles/app.scss';


class Main extends React.Component {
  render() {
  	const isShow = true;
    return (
    <div className="container">
    	<div className="col-md-12">
			<NameComponent name="shayan" isShow={isShow} />
		</div>
    </div>);
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));