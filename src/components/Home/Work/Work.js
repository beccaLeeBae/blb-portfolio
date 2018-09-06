import React, { Component } from 'react';
import WorkItem from './WorkItem/WorkItem';
import './Work.css';

class Work extends Component {
	render(){
		const items = this.props.work.map(item => {
			return <WorkItem key={item.id} item={item} imgSm={item.imgSm} handleMouseEnter={this.props.handleMouseEnter} handleMouseLeave={this.props.handleMouseLeave}/>
		})
		return (
			<div className="work-container">
			<p id="header">RECENT WORK</p>
			<div className="work-content">
				{items}
			</div>
			</div>
			)
	}
}

export default Work;