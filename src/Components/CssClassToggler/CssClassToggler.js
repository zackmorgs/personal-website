import React, { Component } from 'react';

export class CssClassToggler extends Component {
  constructor (props) {
    super(props);
    console.log('constructor (props)', this.props);
    this.setState = {
      isToggled: this.props.toggledOnInit
    };
    this.togglerHandler = this.togglerHandler.bind(this);
    this.ToggleTrigger = React.createRef();
  }
  componentWillReceiveProps (nextProps) {
    console.log('CssClassToggler => componentWillReceiveProps (nextProps)', nextProps);
    // if ('checked' in nextProps) {
    //   this.setState({checked: !!nextProps.checked});
    // }
  }
  componentWillMount (props) {
    console.log('CssClassToggler => componentWillMount(props)', props);
    // Object.keys(this.props.children);
    // React.clone()
    // this.props.HTMLToggleTarget =
    //   React.cloneElement(
    //     this.props.childToggleTarget,
    //     this.props,
    //     this.props.children
    //   );
  }
  componentDidMount (props) {
    console.log('CssClassToggler => componentDidMount (props)', this.props);
    window.ZacksProps = this.props;
    this.props.children.find(function (child) {
      // console.log('type: ', type(child.props));
      console.log('New Child: --- ');
      console.log('Child: ', child.props.children);
      // console.log('child.props.children.length:', child.props.children.length);
      // console.log('Object.keys(child.props.children)', Object.keys(child.props.children));
      // child.props.children.forEach(function(superKid){

      // })
    });
    // this.props.children.forEach(function (child) {
    //   console.log('Child:', child);
    //   console.log('Child.props.children:', child.props.)
    //   // if (child.props.children.type.name === 'ToggleTrigger') {
    //   //   child.onClick=this.togglerHandler;
    //   // } else if (child.props.type.name === 'NavigationList') {
    //   //   this.props.HTMLToggleTarget
    //   // }
    // });
  }
  togglerHandler (event) {
    console.log('CssClassToggler => togglerHandler (event)', event);
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('CssClassToggler => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
    if (this.state.isToggled) {
    }
    // this.state.Toggled ? (
    //   document.querySelector(this.props.target).classList.toggle(this.props.toggledClassName)
    // ) : (
    //   (function () { return false; })()
    // );
  }
  render (props) {
    // 1. find ToggleTrigger
    // 2. ref={this.ToggleTrigger}
    // this.props.children.find()
    console.log('CssClassToggler => render(props)', this.props);
    // return this.props.HTMLToggleTarget;
    return this.props.children;
  }
}

export default CssClassToggler;
