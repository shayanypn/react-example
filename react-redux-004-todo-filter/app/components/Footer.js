import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

	render() {
		return (
			<div style={{marginTop:'10px'}}>
				<div className="btn-group btn-group-sm">
					<button type="button" onClick={()=> this.props.onFilterClick('SHOW_ALL')} className="btn btn-outline-secondary">All</button>
					<button type="button" onClick={()=> this.props.onFilterClick('SHOW_COMPLETED')} className="btn btn-outline-secondary">Complete</button>
					<button type="button" onClick={()=> this.props.onFilterClick('SHOW_ACTIVE')} className="btn btn-outline-secondary">Active</button>
				</div>
			</div>
		)
	}
}

export default Footer;