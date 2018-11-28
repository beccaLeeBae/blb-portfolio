import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		const links = this.props.links.map((l, index) => {
			return !l.href.includes("mailto") ? (
				<a href={l.href} target="_blank" rel="noopener noreferrer" key={index}>
					<div className="link-cir">
						<img src={`${l.icon}`} alt={l.title} />
					</div>
				</a>
			) : (
				<a href={l.href} key={index}>
					<div className="link-cir">
						<img src={`${l.icon}`} alt={l.title} />
					</div>
				</a>
			);
		});
		return (
			<footer>
				<div className="link-row">{links}</div>
				<br />
				<p>Copyright &copy; 2018 Becca Lee Bae. All rights reserved.</p>
			</footer>
		);
	}
}

export default Footer;