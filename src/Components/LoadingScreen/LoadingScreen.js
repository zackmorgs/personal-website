import React, { Component } from 'react';

export class LoadingScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingScreenLoaded: false,
			loading: this.props.isLoaded,
		};
	}
	componentDidMount() {
		this.setState({
			loadingScreenLoaded: true,
		});
	}
	render() {
		if (this.state.loadingScreenLoaded) {
			if (this.state.loading) {
				return;
			} else {
				return <p>{}</p>;
			}
		} else {
			return <p>{}</p>;
		}
	}
}

export default LoadingScreen;
