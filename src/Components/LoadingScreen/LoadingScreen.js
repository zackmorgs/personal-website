import React, { Component } from 'react';

export class LoadingScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: this.props.loading,
		};
	}
	componentWillUpdate() {
		window.setTimeout(function() {
			this.setState = (this.prevState,
			{
				loading: this.props.loading,
			});
		}, 1000);
		console.log('yes that worked');
	}
	componentDidMount() {}
	render() {
		this.state = {
			loading: this.props.loading,
		};
		if (this.state.loading) {
			return <p>Loading</p>;
		} else {
			return <p>Loaded</p>;
		}
	}
}

export default LoadingScreen;
