import React, { Component } from "react";

class SingleProj extends Component {
	render() {
		const id = this.props.match.params.id;
		const p = this.props.work[id];
		return (
			<div>
			{p.title}
			<br/>
			{p.description}
			<br/>
			{p.tools}
			<br/>
			{p.services}
			</div>
		);
	}
}

export default SingleProj;