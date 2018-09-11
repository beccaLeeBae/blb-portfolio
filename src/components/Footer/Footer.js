import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		const links = this.props.links.map((l, index) => {
			return !l.href.includes("mailto") ? (
				<a href={l.href} target="_blank" rel="noopener noreferrer" key={index}>
					<img src={`${l.icon}`} alt={l.title} />
				</a>
			) : (
				<a href={l.href} key={index}>
					<img src={`${l.icon}`} alt={l.title} />
				</a>
			);
		});
		return (
			<footer>
				<div>{links}</div>
				<br />
				<p>&copy; Becca Lee Bae. All rights reserved.</p>
			</footer>
		);
	}
}

export default Footer;