import React, { Component } from 'react';
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';

/*
<GalleryItem
  imgSrc={media.graphic}
  imgAlt={media.caption}
  captionText={media.caption}
  key={index}
/>
*/

export default class GalleryItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loaded: true,
			});
		}, 1000);
	}
	render() {
		let additional_class_names = '';
		if (this.state.loaded) {
			additional_class_names += ' loaded';
		}
		return (
			<li className={'gallery-item' + additional_class_names}>
				<ResponsiveImage imgSrc={this.props.imgSrc} imgAlt={this.props.imgAlt} />
				<div className="gallery-caption">
					<p>{this.props.captionText}</p>
				</div>
			</li>
		);
	}
}
