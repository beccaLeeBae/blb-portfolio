import React, { Component } from "react";
import "./SiteButton.css";

class SiteButton extends Component {
	render() {
		return (
			<a href={this.props.link} target="_blank" rel="noopener noreferrer">
				<button id="view-proj-btn">View Site</button>
			</a>
		);
	}
}

export default SiteButton;