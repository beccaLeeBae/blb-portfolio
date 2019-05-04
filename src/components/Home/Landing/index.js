import React, { Component } from "react";
import './Landing.css';

class Landing extends Component {
	scrollToContent() {
    document.querySelector(".work-container").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
	render() {
		return (
			<div className="landing-container">
				<p>
					<span role="img" aria-label="waving-hand">👋</span> 
					Hey, I'm <span id="name">Becca</span>.
				</p>
				<p>
					I'm a NYC-based front-end engineer specializing in React. I'm
					passionate about designing and developing beautiful, intuitive
					experiences.
				</p>
				<p id="scroll-down" onClick={() => this.scrollToContent()}>&#42780;</p>
			</div>
		);
	}
}
export default Landing;