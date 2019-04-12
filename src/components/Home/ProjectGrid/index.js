import React, { Component } from "react";
import WorkItem from "./WorkItem";
import "./ProjectGrid.css";

export default class ProjectGrid extends Component {
	render() {
		let items = this.props.projectsData.map(item => {
			return (
				<WorkItem
					key={item.id}
					item={item}
				/>
			);
		});
		return (
			<div className="work-container">
				<p id="header">RECENT WORK</p>
				<div className="work-content">{items}</div>
			</div>
		);
	}
}