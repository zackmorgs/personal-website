import React, { Component } from 'react';

export class CssClassToggler extends Component {
  constructor (props) {
    super(props);
    console.log('constructor (props)', this.props);
    this.setState = {
      isToggled: false
    };
    this.togglerHandler = this.togglerHandler.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps (nextProps)', nextProps);
    // if ('checked' in nextProps) {
    //   this.setState({checked: !!nextProps.checked});
    // }
  }

  componentWillMount (props) {
    console.log('componentWillMount(props)', props);
    Object.keys(this.props.children);
    // React.clone()
    this.props.HTMLToggleTarget =
      React.cloneElement(
        this.props.childToggleTarget,
        this.props,
        this.props.children
      );
  }
  togglerHandler (event) {
    console.log('togglerHandler (event)', event);
    this.setState(prevState => ({
      toggled: !prevState.isToggled
    }));
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate (prevProps, prevState)', prevProps, prevState);
    if (this.state.isToggled) {
    }
    // this.state.Toggled ? (
    //   document.querySelector(this.props.target).classList.toggle(this.props.toggledClassName)
    // ) : (
    //   (function () { return false; })()
    // );
  }
  render (props) {
    console.log('render(props)', this.props);
    return this.props.HTMLToggleTarget;
  }
}

export default CssClassToggler;
