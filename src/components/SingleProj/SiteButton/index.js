import React from "react";
import "./SiteButton.css";

const SiteButton = props => {
	return (
		<a href={props.link} target="_blank" rel="noopener noreferrer">
			<button id="view-proj-btn">View Site</button>
		</a>
	);
}

export default SiteButton;