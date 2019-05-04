import React from "react";
import './ToolButton.css';

const ToolButton = props => {
	return (
		<div className="tool-btn">{props.label}</div>
	);
}

export default ToolButton;