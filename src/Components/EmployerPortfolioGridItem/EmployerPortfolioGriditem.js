import React, { Component } from 'react';
import ProjectListItem from './../ProjectListItem/ProjectListItem';
import CssFriendlyString from '../CssFriendlyString/CssFriendlyString';
import { X } from 'react-feather';

// employer-portfolio-grid-item
export default class EmployerPortfolioGridItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			selected: false,
		};
		// this.handleClick = this.handleClick.bind(this);
		this.createProjectListItem = this.createProjectListItem.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.prevScroll = null;
	}
	componentDidMount() {
		this.setState({
			loaded: true,
		});
	}
	createProjectListItem() {
		// console.log('employer test');
		return this.props.SiteData.projects.map((project, index) => {
			//console.log(project);
			return (
				<ProjectListItem
					className="project-container-item"
					ProjectData={project}
					key={CssFriendlyString(project.name) + index.toString()}
					showAllImages={this.state.selected}
				/>
			);
		});
	}
	handleCloseClick() {
		setTimeout(() => {
			if (this.prevScroll === null) {
				this.prevScroll = window.scrollY;
				window.scrollTo(0, 0);
			} else {
				window.scrollTo(0, this.prevScroll);
				this.prevScroll = null;
			}
			this.setState({
				selected: false,
			});
			if (this.state.selected) {
				// document.addEventListener('backbutton', function(event) {
				// 	alert('state selected')
				// 	// event.preventDefault();
				// 	// this.setState({
				// 	// 	selected: !this.state.selected,
				// 	// });
				// });
				// } else {
				// 	document.addEventListener('backbutton', function(event) {
				// 		alert('state not selected')
				// 		// event.preventDefault();
				// 		// this.setState({
				// 		// 	selected: !this.state.selected,
				// 		// });
				// 	});
			}
		}, 0);
	}
	handleClick() {
		// console.log('click', e);

		setTimeout(() => {
			if (this.prevScroll === null) {
				this.prevScroll = window.scrollY;
				window.scrollTo(0, 0);
			} else {
				window.scrollTo(0, this.prevScroll);
				this.prevScroll = null;
			}
			this.setState({
				selected: true,
			});
			if (this.state.selected) {
				// document.addEventListener('backbutton', function(event) {
				// 	alert('state selected')
				// 	// event.preventDefault();
				// 	// this.setState({
				// 	// 	selected: !this.state.selected,
				// 	// });
				// });
				// } else {
				// 	document.addEventListener('backbutton', function(event) {
				// 		alert('state not selected')
				// 		// event.preventDefault();
				// 		// this.setState({
				// 		// 	selected: !this.state.selected,
				// 		// });
				// 	});
			}
		}, 0);
	}

	// employer-portfolio-grid-item
	render(props) {
		// console.log('render', this.props.SiteData);

		let additional_class_names = '';
		if (this.state.selected) {
			additional_class_names += ' selected';
		}
		if (this.state.loaded) {
			additional_class_names += ' loaded';
		}
		return (
			// this.props.SiteData
			<div
				id={this.props.id}
				className={this.props.className + additional_class_names}
				onClick={this.handleClick}
				key={CssFriendlyString(this.props.SiteData.name)}
			>
				<div className="fullview-controls">
					<button onClick={this.handleCloseClick.bind(this)} className="btn-fullview-close">
						<X />
					</button>
				</div>
				<div className="thumbnail-name-display">
					<img src={this.props.SiteData.logo} alt={this.props.SiteData.name} />
					<h4 className="site-name">{this.props.SiteData.name}</h4>
				</div>
				<ul className="projects-list">{this.createProjectListItem()}</ul>
			</div>
		);
	}
}
