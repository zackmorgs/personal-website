import React, { Component } from 'react';
// import ResponsiveImage from './../ResponsiveImage/ResponsiveImage';
import LoadingScreen from './../LoadingScreen/LoadingScreen';
import GalleryItem from './../GalleryItem/GalleryItem';

//.project-container-item
export default class ProjectListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			selected: false,
		};

		this.createProjects = this.createProjects.bind(this);
		console.log('projectlistitem', this.props.ProjectData);

		this.project = {
			gallery: {
				className: 'project-gallery',
			},
			information_display: {
				className: 'project-information',
			},
		};
		// this.show_all_images = false;
		// this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		console.log('ProjectListItem.componentDidMount()');
		setTimeout(() => {
			this.setState({
				loaded: true,
			});
		}, 2000);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, prevState, snapshot);
		console.log('ProjectListItem.componentDidUpdate()');
	}

	createProjects() {
		// console.log(this.props.ProjectData);
		if (typeof this.props.ProjectData.media !== 'undefined') {
			return this.props.ProjectData.media.map((media, index) => {
				// index must be 0
				let show_image = !index || this.show_all_images;

				if (show_image) {
					return (
						<GalleryItem
							imgSrc={media.graphic}
							imgAlt={media.caption}
							captionText={media.caption}
							key={index}
						/>
					);
				} else {
					return null;
				}
			});
		} else {
			return null;
		}
	}
	handleGalleryLoad() {
		setTimeout(() => {
			this.project.gallery.className += ' loaded';
		}, 2000);
	}
	handleClick() {
		console.log('click');
		setTimeout(() => {
			this.setState({ selected: !this.prevState });
		}, 0);
		// this.setState(this.prevState, {
		// 	selected: true,
		// });
	}
	// .project-container-item
	render(props) {
		// console.log('render()', 'loaded:', this.state.loaded);
		let additional_class_names = '';
		if (this.state.loaded) {
			additional_class_names += ' loaded';
		}
		return (
			<li className={this.props.className + additional_class_names} key={this.key}>
				<LoadingScreen isLoaded={this.state.loaded} />
				<div className={this.project.information_display.className}>
					<h5>{this.props.ProjectData.name}</h5>
				</div>
				<ul className={this.project.gallery.className} onLoad={this.handleGalleryLoad.bind(this)}>
					{this.createProjects()}
				</ul>
			</li>
		);

		// if (this.state.loaded) {
		// 	return (
		// 		<li className={this.props.className + ' loaded'} key={this.key}>
		// 			<LoadingScreen isLoaded={this.state.loaded} />
		// 			<div className={this.project.information_display.className}>
		// 				<h4>{this.props.ProjectData.name}</h4>
		// 			</div>
		// 			<ul className={this.project.gallery.className} onLoad={this.handleGalleryLoad.bind(this)}>
		// 				{this.createProjects()}
		// 			</ul>
		// 		</li>
		// 	);
		// } else {
		// 	return (
		// 		<li className={this.props.className} onClick={this.handleClick} key={this.key}>
		// 			<LoadingScreen isLoaded={this.state.loaded} />
		// 			<div className={this.project.information_display.className}>
		// 				<h4>{this.props.ProjectData.name}</h4>
		// 			</div>
		// 			<ul className={this.project.gallery.className} onLoad={this.handleGalleryLoad.bind(this)}>
		// 				{this.createProjects()}
		// 			</ul>
		// 		</li>
		// 	);
		// }
	}
}
