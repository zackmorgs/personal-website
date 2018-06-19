import React, { Component } from 'react';
import ResponsiveImage from './../ResponsiveImage/ResponsiveImage';

export default class ProjectListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
		this.handleLoad = this.handleLoad.bind(this);
	}
	componentDidMount() {
		this.handleLoad();
	}
	handleLoad() {
		this.setState(this.prevProps, {
			loaded: true,
		});
		this.props.className = this.props.className + ' loaded';
	}

	render() {
		return (
			<li className={this.props.className}>
				<ul />
			</li>
		);
	}
}
