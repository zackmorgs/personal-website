import React, { Component } from 'react';

export class LoadingScreen extends Component {
  constructor (props) {
    super(props);
    console.log('LoadingScreen');
    this.state = {
      loading: true
    };
    this.LoadingScreenHTML = function () {
      return (
        <div class='loading-screen'>
          Loading...
        </div>
      );
    }
  }
  componentDidMount() {
    // window.setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 1000); // simulates an async action, and hides the spinner
  }
  render() {
    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (this.LoadingScreenHTML);
  }
}

export default LoadingScreen;