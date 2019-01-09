import React, { Component } from "react";
import ProjTools from "./ProjTools/ProjTools";
import SiteButton from "./SiteButton/SiteButton";
import "./SingleProj.css";

class SingleProj extends Component {
	componentWillMount() {
		document.title = `Becca Lee Bae | ${
			this.props.work[this.props.match.params.id].title
		}`;
		window.scrollTo(0, 0);
	}
	render() {
		const id = this.props.match.params.id;
		const p = this.props.work[id];

		return (
			<div className="single-proj-container">
				<p id="proj-title">{p.title}</p>
				<small id="services">{p.services.join(", ")}</small>
				<p id="proj-desc">{p.description}</p>
				{p.wires && <img className="img-lg-prev" src={p.wires} alt={p.title} />}
				{p.mockup && <img src={`${p.mockup}`} alt={p.title} />}
				<ProjTools p={p} />
				<br />
				{p.link && <SiteButton link={p.link} />}
				<br />
				<a id="back-btn" href="/">
					← BACK
				</a>
			</div>
		);
	}
}

export default SingleProj;