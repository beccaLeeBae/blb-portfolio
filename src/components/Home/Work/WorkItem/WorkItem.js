import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./WorkItem.css";

class WorkItem extends Component {
	render() {
		return (
			<Link to={{ pathname: `/${this.props.item.id}`}}>
			<div
				className="w-item-container"
				style={{
					background: `no-repeat top center url(${this.props.src})`,
					backgroundSize: "cover"
				}}
			/>
			</Link>
		);
	}
}

export default WorkItem;