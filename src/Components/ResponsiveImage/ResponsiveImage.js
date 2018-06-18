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
	componentDidMount(props) {
		this.setState(prevState, {
			loaded: true,
		});
	}
}

export default ResponsiveImage;
