import React, { Component } from 'react';
import ProjectListItem from './../ProjectListItem/ProjectListItem';

export default class EmployerPortfolioGridItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			show_fullview: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.createProjectListItem = this.createProjectListItem.bind(this);
	}

	createProjectListItem() {
		this.props.SiteData.projects.map(project => {
			return <ProjectListItem ProjectData={project} />;
		});
	}

	handleClick() {}

	render() {
		return (
			// this.props.SiteData
			<div id={this.props.id} className={this.props.className} key={this.props.key}>
				<div className="thumbnail-name-display">
					<img src={this.props.SiteData.logo} />
					<h4 className="site-name">{this.props.SiteData.name}</h4>
				</div>
				<ul>{this.createProjectListItem(this.props.SiteData.projects)}</ul>
			</div>
		);
	}
}
