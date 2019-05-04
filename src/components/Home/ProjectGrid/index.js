import React from "react";
import ProjectTile from "./ProjectTile";
import projectsData from "../../../utilities/projects.json";
import "./ProjectGrid.css";

const ProjectGrid = () => {
	const projectTile = projectsData.map(item => {
		return (
			<ProjectTile
				key={item.id}
				item={item}
			/>
		);
	});
	return (
		<div className="work-container">
			<p id="header">RECENT WORK</p>
			<div className="work-content">{projectTile}</div>
		</div>
	);
}

export default ProjectGrid;