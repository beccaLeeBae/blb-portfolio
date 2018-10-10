import React, { Component } from "react";
import ProjTools from "./ProjTools/ProjTools";
import SiteButton from "./SiteButton/SiteButton";
import "./SingleProj.css";

class SingleProj extends Component {
	componentDidMount() {
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
				{p.imgLgPrev && <img className="img-lg-prev" src={p.imgLgPrev} alt={p.title}/>}
				<img src={`${p.imgLg}`} alt={p.title}/>
				<ProjTools p={p}/>
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