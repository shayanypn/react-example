import React from 'react';

export default class Clock extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			time: 0.0
		};

	}

	componentDidMount() {
		this.timer = setInterval(()=>{
			this.tick();
		} , 1000);
	}


	componentWillUnmount() {
		clearInterval( this.timer );
	}
	
	tick(){
		this.setState({
			time: Math.round( ((new Date()).getTime() - this.props.start) / 1000 ).toFixed(1)
		});
	}

	render() {
		return ( <div>
				<h3>Time: <span>{this.state.time}</span> </h3>
			</div>
		);
	}
}