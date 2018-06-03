import React, { Component } from 'react';

export class ToggleTrigger extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Toggled: true
    };
    console.log('toggle constructed. props: ', this.props);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount () {
    console.log('componentDidMount');
  }
  toggle () {
    this.setState(prevState => ({
      toggled: !prevState.collapsed
    }));
  }
  componentDidUpdate (prevProps, prevState) {
    this.state.Toggled ? (
      document.querySelector(this.props.target).classList.toggle(this.props.toggledClassName)
      // document.querySelector(this.id)
    ) : (
      (function () { return false; })()
    );
  }

  render (props) {
    console.log(this.props);
    console.log(this.props.children);
    const OutputHtmlTag =
      React.createElement(this.props.htmlTag, { displayName: '', className: 'trigger' }, this.props.children);
    return ({ OutputHtmlTag });
  }
}

export class CssClassToggler extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isToggled: false
    };
    // this.props.toggledClassName
    console.log('ToggleTrigger constructor()', 'props: ', this.props);
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  componentWillMount (props) {
    if (this.isToggled) {
      this.children.forEach(function (Element, Elements, ElementIndex) {
        if (Element.classList.contains(this.props.toggledClassName)) {
          Element.classList.Toggle(this.props.toggledClassName);
        }
      });
    }
  }
  toggleHandler () {
    this.setState(prevState => ({
      isToggled: !prevState.collapsed
    }));
  }
  componentDidUpdate (prevProps, prevState) {
    // this.state.Toggled ? (
      // document.querySelector(this.props.target).classList.toggle(this.props.toggledClassName)
    // ) : ((function () { return false; })());

  }
  render (props) {
    return this.props.children;
  }
}

export default CssClassToggler;
