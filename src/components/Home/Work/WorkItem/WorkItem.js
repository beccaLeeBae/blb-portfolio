import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WorkItem.css";

class WorkItem extends Component {
	render() {
		let id = this.props.item.id;
		return (
			<div
				className="proj-tile"
				onMouseEnter={() => this.props.handleMouseEnter(id)}
				onMouseLeave={() => this.props.handleMouseLeave(id)}
			>
				<Link to={{ pathname: `/${id}` }}>
					
					<div
						className="tile-text"
						style={{ display: this.props.item.hovering ? "block" : "none" }}
					>
						{this.props.item.title}
					</div>
					<img src={`${this.props.imgSm}`} alt={this.props.item.title}/>
				</Link>
			</div>
		);
	}
}

export default WorkItem;