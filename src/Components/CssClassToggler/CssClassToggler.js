import React, { Component } from 'react';

export class CssClassToggler extends Component {
  constructor (props) {
    super(props);
    console.log('CssClassToggler (props)', this.props);
    this.setState = {
      isToggled: this.props.toggledOnInit
    };
    // toggleTarget='nav-list' classNameUntoggled='collapsible' classNameToggled='collapsed' toggledOnInit='true'
    // var toggleTargetName = this.props.toggleTarget;

    //console.log(document.querySelector(toggleTargetName));
    // var recursiveSearch = function (targetName, searchArea) {
    //   if ((typeof test === 'object' && test.length >= 0)) {
    //     searchArea.forEach(function (current, index, array) {
    //       if (typeof current.props !== 'undefined') {
    //         if (current.className === targetName) {
    //           return current;
    //         } else if (current.props.children) {
    //           return recursiveSearch(targetName, current.props.children);
    //         }
    //       }
    //     });
    //   }
    // };
    // this.toggleTarget = recursiveSearch(this.props.toggleTarget, this.props.children);
    // this.toggleTarget = this.props.children.find(function (Child, index, array) {
    //   console.log('Child: ', Child);
    //   console.log('Typeof', typeof Child);

    //   if (typeof Child === 'object') {
    //     if (typeof Child.props !== 'undefined') {
    //       if (Child.props.className === toggleTargetName) {
    //         return true;
    //       } else if (Child.props.children.length) {

    //       }
    //     }
    //   }
    // });
    // this.togglerHandler = this.togglerHandler.bind();
    //this.ToggleTrigger = React.createRef();
  }
  componentWillReceiveProps (nextProps) {
    console.log('CssClassToggler => componentWillReceiveProps (nextProps)', nextProps);
  }
  componentWillMount (props) {
    console.log('CssClassToggler => componentWillMount(props)', props);
  }
  componentDidMount (props) {
    console.log('CssClassToggler => componentDidMount (props)', this.props);
    document.querySelector(this.props.)
    //this.togglerHandler.bind()
  }
  togglerHandler (event) {
    console.log('CssClassToggler => togglerHandler (event)', event);
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('CssClassToggler => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
    console.log('Find Target');
    console.log('==========================')
    if (this.state.isToggled) {
      // gotta update our toggleTarget
      var toggleTarget =
        document.querySelectorAll(this.props.toggleTarget)
        .classList.toggle(this.props.classNameToggled);
      this.props.toggleTarget.classList.toggle(this.props.classNameToggled);
    }
  }

  render (props) {
    // 1. find ToggleTrigger
    // 2. ref={this.ToggleTrigger}
    // this.props.children.find()
    console.log('CssClassToggler => render(props)', this.props);
    return this.props.children;
  }
}

export default CssClassToggler;
