import React, { Component } from 'react';
import { ResponsiveImage } from './../ResponsiveImage/ResponsiveImage';

export class GalleryImage extends Component {
	constructor(props) {
		super(props);
		console.log('GalleryImage.constructor()');
		this.state = {
			loaded: false,
			imageLoaded: false,
		};
	}
	componentWillMount() {
		setTimeout(() => {
			this.setState({
				loaded: true,
			});
		}, 0);
	}
	handleImageLoad() {
		setTimeout(() => {
			this.setState({
				imageLoaded: true,
			});
		}, 0);
	}
	render() {
		let additional_class_names = '';
		let image_additional_class_names = '';
		if (this.state.loaded) {
			additional_class_names += ' loaded';
		}
		if (this.state.imageLoaded) {
			additional_class_names += ' img-loaded';
			image_additional_class_names += ' loaded';
		}
		return (
			<div className={'gallery-img' + additional_class_names}>
				<ResponsiveImage
					imgSrc={this.props.imgSrc}
					imgAlt={this.props.imgAlt}
					onLoad={this.handleImageLoad.bind(this)}
					className={'gallery-img-container' + image_additional_class_names}
				/>
			</div>
		);
	}
}

export default GalleryImage;
