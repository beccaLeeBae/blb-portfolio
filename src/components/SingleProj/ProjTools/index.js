import React from "react";
import ToolButton from './ToolButton';
import './ProjTools.css';

const ProjTools = props => {
	const tools = (props.p).tools.map((t, index) => {
		return <ToolButton key={index} label={t} />;
	});
	return (
		<div className="proj-tools">{tools}</div>
	);
}

export default ProjTools;