import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Counter extends React.Component {

	onIncrease(){
		this.props.store.increase();
	}
	onDecrease(){
		this.props.store.decrease();		
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-4"><br /></div>
				<div className="col-md-4">
					<div className="jumbotron">
						<div className="row">
							<div className="col-sm-4"><button onClick={this.onDecrease.bind(this)} className="btn btn-primary">Decrease</button></div>
							<div className="col-sm-4 text-center">{this.props.store.num}</div>
							<div className="col-sm-4"><button onClick={this.onIncrease.bind(this)} className="btn btn-primary">Increase</button></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Counter;
