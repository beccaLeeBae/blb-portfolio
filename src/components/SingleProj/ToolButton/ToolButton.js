import React, { Component } from "react";
import './ToolButton.css';

class ToolButton extends Component {
	render() {
		return (
			<button className="tool-btn">{this.props.label}</button>
		);
	}
}

export default ToolButton;