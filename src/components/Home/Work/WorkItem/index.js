import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WorkItem.css";

class WorkItem extends Component {
	render() {
		let id = this.props.item.id;
		return (
			<div
				className={this.props.item.visible ? "proj-tile vis" : "proj-tile in-vis"}
				style={{transitionDelay: `${0.25 * id}s`}}
				id={`el-010${id}`}
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
					<img src={`${this.props.tileIcon}`} alt={this.props.item.title}/>
				</Link>
			</div>
		);
	}
}

export default WorkItem;