import React, { Component } from 'react';
import ReactLoading from 'react-loading';
export class ResponsiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    console.log('Responsive Image Initialized.');
    this.cssClass = 'placeholder placeholder-loading';
    this.loaderCssClass = 'loader-box';
    // this.Loading = <ReactLoading type='spin' color='#222' />
  }

  handleImageLoaded(prevState) {
    console.log('handleImageLoaded()');
    this.cssClass = 'placeholder placeholder-loaded';
    this.loaderCssClass = 'hidden';
    this.setState({ loaded: !prevState.loaded });
    // this.Loading = null;
  }

  componentDidMount() {
    console.log('Responsive Image mounted.');
    this.setState({
      loaded: true
    });
  }

  render() {
    console.log('Responsive Image rendered.');

    return (
      <div className={this.cssClass}>
        <div className={this.loaderCssClass}>
          <div className="loader" />
          <div className="loader-text">Loading...</div>
        </div>
        <img
          alt={this.props.alt}
          src={this.props.src}
          onLoad={this.handleImageLoaded.bind(this)}
        />
      </div>
    );
  }
}

export default ResponsiveImage;
