import React, { Component } from "react";
import Landing from "./Landing";
import Work from "./Work";

class Home extends Component {
	componentDidMount(){
		window.addEventListener('scroll', this.props.checkIfInView);
	}
	componentWillUnmount(){
		window.removeEventListener('scroll', this.props.checkIfInView);
	}
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