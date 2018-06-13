import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

export class ToggleTrigger extends Component {
  constructor(props) {
    super(props);
    console.log('ToggleTrigger (props)', this.props);
    this.state = {
      Toggled: this.props.toggledOnInit
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  componentDidMount(props) {
    console.log('ToggleTrigger => componentDidMount()', this.props);
  }
  toggleHandler(event) {
    console.log('ToggleTrigger => toggleHandler (event)', event);
    // className='toggle', classNameOnToggled='toggled' toggleTarget='nav-list', targetClassNameToggled='collapsed'
    // give our toggle the correct class
    console.log('.' + this.props.className);
    document.querySelector('.toggle').classList.toggle('toggled');

    // give our target the correct class
    console.log('.' + this.props.toggleTarget);
    // document.querySelector('.toggle').classList.toggle('')
    document.querySelector('.nav-list').classList.toggle('collapsed');
    document.body.classList.toggle('navigation-open');
    // document.querySelector('main').classList.toggle('blur');
  }
  componentDidUpdate(prevProps, prevState) {
    this.setState(prevState => ({
      isToggled: !prevState.collapsed
    }));
  }
  render(props) {
    console.log('ToggleTrigger => render (props)', this.props);
    // className='toggle'
    // classNameOnToggled='toggled'
    // toggleTarget='nav-list'
    // targetClassNameInit='collapsible'
    // targetClassNameToggled='collapsed'
    // toggledOnInit='true'
    var toggleClassName = this.props.className;
    if (this.isToggled || !Boolean(this.props.toggledOnInit)) {
      // is toggled.
      toggleClassName += ' ' + this.props.classNameOnToggled;
    }
    return (
      <button className={toggleClassName} onClick={this.toggleHandler}>
        {this.props.children}
      </button>
    );
  }
}

export default ToggleTrigger;
