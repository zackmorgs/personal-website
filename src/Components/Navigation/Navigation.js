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
  constructor (props) {
    super(props);
    console.log('Navigation => constructor (props)', props);
  }
  componentDidMount (props) {
    console.log('Navigation => componentDidMount(props)', props);
    // document.
  }
  componentDidUpdate (props) {
    console.log('Navigation => componentDidUpdate(props)', props);
  }
  render (props) {
    // var CollapsibleClassList = 'nav-list collapsible collapsed';
    // var CollapsibleClassList = DOMTokenList.prototype();
    console.log('Navigation => render(props)', props);
    return (
      <nav className={this.props.className}>{ this.props.children }</nav>
    );
  }
}
export class NavBar extends Component {
  constructor (props) {
    super(props);
    console.log('NavBar => constructor (props)', props);
  }
  componentDidMount (props) {
    console.log('NavBar => componentDidMount(props)', props);
    // document.
  }
  componentDidUpdate (props) {
    console.log('NavBar => componentDidUpdate(props)', props);
  }
  render (props) {
    // var CollapsibleClassList = 'nav-list collapsible collapsed';
    // var CollapsibleClassList = DOMTokenList.prototype();
    console.log('NavBar => render(props)', props);
    return (<div className={this.props.className}>{ this.props.children }</div>);
  }
}
export class NavList extends Component {
  constructor (props) {
    super(props);
    console.log('NavList => render (props)', this.props);
  }
  render () {
    return (<ul class={this.props.className}>{ this.props.children }</ul>);
  }
}
export class NavItem extends Component {
  constructor (props) {
    super(props);
    console.log('NavItem => constructor (props)', this.props);
  }
  componentWillReceiveProps (nextProps) {
    console.log('NavItem => componentWillReceiveProps (nextProps)', nextProps);
  }
  componentWillMount (props) {
    console.log('NavItem => componentWillMount(props)', this.props);
  }
  componentDidMount (props) {
    console.log('NavItem => componentDidMount (props)', this.props);
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('NavItem => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
  }
  render (props) {
    console.log('NavItem => render (props)', this.props);
    return (<li class={this.props.className}>{ this.props.children }</li>);
  }
}
export class NavLink extends Component {
  constructor (props) {
    super(props);
    console.log('NavLink => constructor (props)', this.props);
    // if (typeof this.props.className === 'undefined' || this.props.className.length === 0) {
    //   this.props.className = 'nav-item-link';
    // }
  }
  componentWillReceiveProps (nextProps) {
    console.log('NavLink => componentWillReceiveProps (nextProps)', nextProps);
  }
  componentWillMount (props) {
    console.log('NavLink => componentWillMount(props)', this.props);
  }
  componentDidMount (props) {
    console.log('NavLink => componentDidMount (props)', this.props);
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('NavLink => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
  }
  render (props) {
    console.log('NavLink => render (props)', this.props);

    return (<a href={this.props.href} class={this.props.className}>{ this.props.children }</a>);
  }
}
// export class NavigationLinkIcon extends Component {
//   constructor (props) {
//     super(props);
//     console.log('NavigationLinkIcon => constructor (props)', this.props);
//   }
//   componentWillReceiveProps (nextProps) {
//     console.log('NavigationLinkIcon => componentWillReceiveProps (nextProps)', nextProps);
//   }
//   componentWillMount (props) {
//     console.log('NavigationLinkIcon => componentWillMount(props)', this.props);
//   }
//   componentDidMount (props) {
//     console.log('NavigationLinkIcon => componentDidMount (props)', this.props);
//   }
//   componentDidUpdate (prevProps, prevState) {
//     console.log('NavigationLinkIcon => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
//   }
//   render (props) {
//     console.log('NavigationLinkIcon => render (props)', this.props);
//     var Icon = React.createElement(this.props.IconContainer, this.props, this.props.children);
//     Icon.className = this.props.className;
//     return (this.props.Icon);
//   }
// }
export class NavText extends Component {
  constructor (props) {
    super(props);
    console.log('NavText => constructor (props)', this.props);
    // if (this.props.className.length === 0) {
    //   this.props.className = 'nav-list-item-link';
    // }
  }
  componentWillReceiveProps (nextProps) {
    console.log('NavText => componentWillReceiveProps (nextProps)', nextProps);
  }
  componentWillMount (props) {
    console.log('NavText => componentWillMount(props)', this.props);
  }
  componentDidMount (props) {
    console.log('NavText => componentDidMount (props)', this.props);
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('NavText => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
  }
  render (props) {
    // return this.props.LinkText;
    // if (this.props.LinkText )
    return (<span>{this.props.children}</span>);
  }
}
export default Navigation;
// export {
//   NavList, NavItem, NavLink, NavigationLinkIcon, NavText
// }
