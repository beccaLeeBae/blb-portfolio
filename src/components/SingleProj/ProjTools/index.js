import React, { Component } from "react";
import ToolButton from '../ToolButton';

class ProjTools extends Component {
	render() {
		const tools = (this.props.p).tools.map((t, index) => {
			return <ToolButton key={index} label={t} />;
		});
		return (
			<div className="proj-tools">{tools}</div>
		);
	}
}

export default ProjTools;