import React, { Component } from 'react';

export class ToggleTrigger extends Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   Toggled: true
    // };
    this.props.isToggled = this.props.isToggled.bind(this);
  }
  componentWillMount (props) {
    console.log('componentWillMount(props)', this.props);
    this.props.HTMLTrigger = React.createElement(this.props.htmlTagName, props, this.props.children);
    this.props.HTMLTrigger.className = 'trigger';
    if (this.props.isToggled) {
      this.props.HTMLTrigger.classList.toggle('triggered');
    }
  }

  componentDidMount (props) {
    console.log('componentDidMount()', this.props);
  }

  toggle () {
    this.setState(prevState => ({
      isToggled: !prevState.collapsed
    }));
  }
  componentDidUpdate (prevProps, prevState) {
    // this.state.isToggled ? (
    //   document.querySelector(this.props.target).classList.toggle(this.props.toggledClassName))
    //   : ((function () { return false; })());
  }
  render (props) {
    return (this.props.HTMLTrigger);
  }
}

export class CssClasToggler extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Toggled: false
    };
    console.log('CssClasToggler constructor()', 'props: ', this.props);
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  componentWillMount (props) {
    Object.keys(this.props.children);
    // React.clone()
    this.props.HTMLToggleTarget = React.cloneElement(this.props.childToggleTarget, this.props, this.props.children);
  }
  toggleHandler () {
    this.setState(prevState => ({
      toggled: !prevState.collapsed
    }));
  }
  componentDidUpdate (prevProps, prevState) {
    // this.state.Toggled ? (
    //   document.querySelector(this.props.target).classList.toggle(this.props.toggledClassName)
    // ) : (
    //   (function () { return false; })()
    // );
  }
  render (props) {
    console.log('render(props)', this.props);
    return this.props.HTMLToggleTarget(this.props.)}
  }
}

export default CssClassToggler;
