import React, { Component } from "react";
import './ToolButton.css';

class ToolButton extends Component {
	render() {
		return (
			<div className="tool-btn">{this.props.label}</div>
		);
	}
}

export default ToolButton;