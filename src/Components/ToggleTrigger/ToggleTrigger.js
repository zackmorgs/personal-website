import React, { Component } from 'react';
export class ToggleTrigger extends Component {
  constructor (props) {
    super(props);
    console.log('constructor (props)', this.props);
    // this.state = {
    //   Toggled: true
    // };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps (nextProps)', nextProps);
    // if ('checked' in nextProps) {
    //   this.setState({checked: !!nextProps.checked});
    // }
  }
  componentWillMount (props) {
    console.log('componentWillMount(props)', this.props);
    this.props.HTMLTrigger = React.createElement(React.findDOMNode(), props, this.props.children);
    this.props.HTMLTrigger.className = 'trigger';
    if (this.props.isToggled) {
      this.props.HTMLTrigger.classList.toggle('triggered');
    }
  }

  componentDidMount (props) {
    console.log('componentDidMount()', this.props);
  }

  toggleHandler (event) {
    console.log('toggleHandler (event)', event);
    this.setState(prevState => ({
      isToggled: !prevState.collapsed
    }));
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate (prevProps, prevState)', prevProps, prevState);
    // this.state.isToggled ? (
    //   document.querySelector(this.props.target).classList.toggle(this.props.toggledClassName))
    //   : ((function () { return false; })());
  }
  render (props) {
    return (this.props.HTMLTrigger);
  }
}

export default ToggleTrigger;
