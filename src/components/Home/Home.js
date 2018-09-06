import React, { Component } from "react";
import Landing from "./Landing/Landing";
import Work from "./Work/Work";

class Home extends Component {
	render() {
		return (
			<div>
				<Landing scrollToContent={this.props.scrollToContent}/>
				<Work
					work={this.props.work}
					handleMouseEnter={this.props.handleMouseEnter}
					handleMouseLeave={this.props.handleMouseLeave}
				/>
			</div>
		);
	}
}

export default Home;