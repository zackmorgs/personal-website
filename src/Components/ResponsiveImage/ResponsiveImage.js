import React, { Component } from 'react';

export class ResponsiveImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			imageLoaded: false,
			images: {
				mobile: false,
				tablet: false,
				desktop: false,
			},
		};
		// if () {

		// }
	}
	componentDidMount(props) {
		window.setTimeout(() => {
			this.setState({
				loaded: true,
			});
			this.props.onLoad();
		}, 0);
	}
	handleImageLoad() {
		console.log('test');
		window.setTimeout(() => {
			this.setState({
				imageLoaded: true,
			});
		}, 0);
	}
	render() {
		// return <img ></img>
		if (this.state.loaded && this.state.imageLoaded) {
			return (
				<div className={this.props.className}>
					<img
						className={'gallery-img loaded'}
						src={this.props.imgSrc}
						alt={this.props.imgAlt}
						onLoad={this.handleImageLoad.bind(this)}
					/>
				</div>
			);
		} else {
			return (
				<div className={this.props.className}>
					<div className="loader">Loading...</div>
					<img
						className="gallery-img"
						src={this.props.imgSrc}
						alt={this.props.imgAlt}
						onLoad={this.handleImageLoad.bind(this)}
					/>
				</div>
			);
		}
	}
}

export default ResponsiveImage;
