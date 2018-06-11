import React, { Component } from 'react';
// import { CssClassToggler } from './../CssClassToggler/CssClassToggler';
// import { ToggleTrigger } from './../ToggleTrigger/ToggleTrigger';

// someday ill learn how to do this, make it validate my stuff for me.
// class NavigationComponent extends Component {
//   constructor (props) {
//     super(props);
//   }
// }
export class Navigation extends Component {
  constructor(props) {
    super(props);
    console.log('Navigation => constructor (props)', props);
    this.state = {
      isToggled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(prevState) {
    // document.querySelector('nav').className = 'opened';
  }
  render(props) {
    console.log('Navigation => render(props)', props);
    return <nav>{this.props.children}</nav>;
  }
}
export class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log('NavBar => constructor (props)', this.props);
  }
  render(props) {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
export class NavList extends Component {
  constructor(props) {
    super(props);
    console.log('NavList => constructor (props)', this.props);
    // this.navList = this.navList.createRef();
  }
  render() {
    // return (<ul ref={this.navList} class={this.props.className}>{ this.props.children }</ul>);
    return (
      <ul ref={this.navList} className={this.props.className}>
        {this.props.children}
      </ul>
    );
  }
}
export class NavItem extends Component {
  constructor(props) {
    super(props);
    console.log('NavItem => constructor (props)', this.props);
  }
  render(props) {
    console.log('NavItem => render (props)', this.props);
    if (typeof this.props.className === 'undefined') {
      return <li className="nav-item">{this.props.children}</li>;
    } else {
      return <li className={this.props.className}>{this.props.children}</li>;
    }
  }
}
export class NavLink extends Component {
  constructor(props) {
    super(props);
    console.log('NavLink => constructor (props)', this.props);
  }
  render(props) {
    return (
      <a href={this.props.href} className={this.props.className}>
        {this.props.children}
      </a>
    );
  }
}
export class NavText extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render(props) {
    // return this.props.LinkText;
    // if (this.props.LinkText )
    return <span>{this.props.children}</span>;
  }
}
export default Navigation;
// export {
//   NavList, NavItem, NavLink, NavigationLinkIcon, NavText
// }
