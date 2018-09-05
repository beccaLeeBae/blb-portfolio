import React, { Component } from 'react';
import WorkItem from './WorkItem/WorkItem';
import './Work.css';

class Work extends Component {
	render(){
		const items = this.props.work.map(item => {
			return <WorkItem key={item.id} item={item} src={item.src}/>
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