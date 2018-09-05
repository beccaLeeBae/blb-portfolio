import React, { Component } from "react";

class SingleProj extends Component {
	render() {
		const id = this.props.match.params.id;
		const p = this.props.work[id];
		return (
			<div>
			{p.title}
			</div>
		);
	}
}

export default SingleProj;