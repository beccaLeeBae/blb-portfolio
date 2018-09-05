import React, { Component } from "react";
import Landing from './Landing/Landing';
import Work from './Work/Work';

class Home extends Component {
	render() {
		return (
			<div>
			<Landing/>
			<Work work={this.props.work}/>
			</div>
		);
	}
}

export default Home;