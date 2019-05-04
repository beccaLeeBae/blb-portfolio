import React, { Component } from "react";
import emailIcon from "../../assets/email.png";
import linkedInIcon from "../../assets/linkedin.png";
import "./Footer.css";

class Footer extends Component {
	render() {
		const links = [
        {
          href: "mailto:beccaleebae@gmail.com",
          icon: emailIcon,
          title: "Email"
        },
        {
          href: "https://www.linkedin.com/in/beccaleebae/",
          icon: linkedInIcon,
          title: "LinkedIn"
        }
    ];

		const renderLinks = links.map((l, index) => {
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
				<div className="link-row">{renderLinks}</div>
				<br />
				<p>Copyright &copy; {new Date().getFullYear()} Becca Lee Bae. All rights reserved.</p>
			</footer>
		);
	}
}

export default Footer;