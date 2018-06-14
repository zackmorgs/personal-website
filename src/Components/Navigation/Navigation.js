import React, { Component } from 'react';
// navigation css is stored in /src/Styles/Global/global.scss
// future todo: componentize this.

export class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    //console.log('Navigation => render(props)', props);
    return React.createElement('nav', this.props);
  }
}
export class NavBar extends Component {
  constructor(props) {
    super(props);
    //console.log('NavBar => constructor (props)', this.props);
  }
  render(props) {
    // return <div className={this.props.className}>{this.props.children}</div>;
    return React.createElement('div', this.props);
  }
}
export class NavList extends Component {
  constructor(props) {
    super(props);
    //console.log('NavList => constructor (props)', this.props);
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
    //console.log('NavItem => constructor (props)', this.props);
  }
  render(props) {
    //console.log('NavItem => render (props)', this.props);
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
    //console.log('NavLink => constructor (props)', this.props);
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

export class NavHamburger extends Component {
  constructor(props) {
    super(props);
    // this.clickHandlerHamburger = this.clickHandlerHamburger.bind(this);
    // this.setState({
    //   toggled: false
    // }, function () {
    //   console.log('mysterious setState callback. where does it go?')
    // });
    this.clickHandle = this.clickHandle.bind();
  }
  clickHandle() {
    var defaults = function() {
      window.document.body.classList.toggle('navigation-open');
      window.quick_storage.nav_toggle.classList.toggle('is-active');
    };
    if (typeof window.quick_storage === 'undefined') {
      window.quick_storage = {};
      window.quick_storage.nav_toggle = document.querySelector('.toggle');
      window.quick_storage.nav_list = document.querySelector('.nav-list');
    }
    defaults();
    document.querySelector('.nav-list');
  }
  // componentWillMount () {
  //   console.log('componentWillMount','');
  // }
  // componentDidMount () {
  //   console.log('componentDidMount','');
  // }
  // componentWillUpdate () {
  //   console.log('componentWillUpdate','');
  //   // https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/tapping_into_componentwillupdate.html

  // }
  // componentDidUpdate (prevState,prevProps) {
  //   console.log('componentDidUpdate (prevState, prevProps)',prevState, prevProps);
  //   console.log('prevState.toggled', prevState.toggled);
  //   console.log('this.state.toggled',this.state.toggled);
  // }
  // clickHandlerHamburger (prevState) {
  //   console.log('clickHandlerHamburger (prevState) ', prevState);
  //   var is_toggled = prevState.toggled;
  //   this.setState({ toggled : is_toggled }, function () {
  //     if (is_toggled) {
  //       return (
  //         <button className='toggle hamburger hamburger--collapse is-active' onClick={ this.clickHandlerHamburger }>
  //           <span className='hamburger-box'>
  //             <span className='hamburger-inner'></span>
  //           </span>
  //         </button>
  //       );
  //     } else {
  //       return (
  //         <button className='toggle hamburger hamburger--collapse' onClick={ this.clickHandlerHamburger }>
  //           <span className='hamburger-box'>
  //             <span className='hamburger-inner'></span>
  //           </span>
  //         </button>
  //       );
  //     }
  //   });
  // }
  render() {
    return (
      <button
        className="toggle"
        onClick={this.clickHandle}
        type="button"
        ref="navigation_hamburger"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    );
  }
}

export default Navigation;
// export {
//   NavList, NavItem, NavLink, NavigationLinkIcon, NavText
// }
