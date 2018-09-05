import React, { Component } from "react";
import ToolButton from './ToolButton/ToolButton';
import './SingleProj.css';

class SingleProj extends Component {
	render() {

		const id = this.props.match.params.id;
		const p = this.props.work[id];
		const tools = p.tools.map((t, index) => {
			return (<ToolButton key={index} label={t}/>)
		})

		return (
			<div className="single-proj-container">
			<p id="proj-title">{p.title}</p>
			{p.services && (<small id="services">{(p.services).join(', ')}</small>)}
			<p id="proj-desc">{p.description}</p>
			<img src={`${p.imgLg}`}/>
			<div className="proj-tools">
			{tools}
			</div>
			<br/>
			{p.link && (<a href={p.link} target="_blank" rel="noopener noreferrer"><button id="view-proj-btn">View Site</button></a>)}
			<br/>
			<a id="back-btn" href="/">← BACK</a>
			</div>
		);
	}
}

export default SingleProj;