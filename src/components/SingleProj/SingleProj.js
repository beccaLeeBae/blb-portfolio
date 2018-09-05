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
			<br/>
			<p id="proj-desc">{p.description}</p>
			<br/>
			<img src={`${p.src}`}/>
			</div>
		);
	}
}

export default SingleProj;