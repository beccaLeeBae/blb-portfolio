import React, { Component } from "react";
import './Landing.css';

class Landing extends Component {
	render() {
		return (
			<div className="landing-container">
				<p>
					<span role="img" aria-label="waving-hand">👋</span> Hey, I'm <span id="hl-name">Becca</span>.
				</p>
				<p>
					I'm a NYC-based front-end engineer specializing in React. I'm
					passionate about designing and developing beautiful, intuitive
					experiences.
				</p>
			</div>
		);
	}
}
export default Landing;