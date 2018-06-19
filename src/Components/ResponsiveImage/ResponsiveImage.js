import React, { Component } from 'react';

export class ResponsiveImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			images: {
				mobile: '',
				tablet: '',
				desktop: '',
			},
		};
		this.handleLoad = this.handleLoad.bind(this);
	}
	handleLoad() {}
	componentDidMount(props) {
		this.setState(this.prevState, {
			loaded: !this.prevState,
		});
		this.handleLoad();
	}
	render() {
		// return <img ></img>
		return null;
	}
}

export default ResponsiveImage;
