import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
    	<div className="jumbotron">
			<h1 className="display-3">Hello, world!</h1>
			<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg">Learn more</a>
			</p>
		</div>);
  }
}