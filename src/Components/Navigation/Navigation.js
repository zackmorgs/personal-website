import React, { Component } from 'react';
// import { CssClassToggler } from './../CssClassToggler/CssClassToggler';
// import { ToggleTrigger } from './../ToggleTrigger/ToggleTrigger';

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
export class NavigationBar extends Component {
  constructor (props) {
    super(props);
    console.log('NavigationBar => constructor (props)', props);
  }
  componentDidMount (props) {
    console.log('NavigationBar => componentDidMount(props)', props);
    // document.
  }
  componentDidUpdate (props) {
    console.log('NavigationBar => componentDidUpdate(props)', props);
  }
  render (props) {
    // var CollapsibleClassList = 'nav-list collapsible collapsed';
    // var CollapsibleClassList = DOMTokenList.prototype();
    console.log('NavigationBar => render(props)', props);
    return (<div className={this.props.className}>{ this.props.children }</div>);
  }
}
export class NavigationList extends Component {
  // private NavigationItemsList
  constructor (props) {
    super(props);
    console.log('NavigationList => constructor (props)', this.props);
  }
  componentWillReceiveProps (nextProps) {
    console.log('NavigationList => componentWillReceiveProps (nextProps)', nextProps);
  }
  componentWillMount (props) {
    console.log('NavigationList => componentWillMount(props)', this.props);
  }
  componentDidMount (props) {
    console.log('NavigationList => componentDidMount (props)', this.props);
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('NavigationList => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
  }
  render (props) {
    console.log('NavigationList => render (props)', this.props);
    return (<ul class={this.props.className}>{ this.props.children }</ul>);
  }
}
export class NavigationItem extends Component {
  constructor (props) {
    super(props);
    console.log('NavigationItem => constructor (props)', this.props);
  }
  componentWillReceiveProps (nextProps) {
    console.log('NavigationItem => componentWillReceiveProps (nextProps)', nextProps);
  }
  componentWillMount (props) {
    console.log('NavigationItem => componentWillMount(props)', this.props);
  }
  componentDidMount (props) {
    console.log('NavigationItem => componentDidMount (props)', this.props);
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('NavigationItem => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
  }
  render (props) {
    console.log('NavigationItem => render (props)', this.props);
    return (<li class={this.props.className}>{ this.props.children }</li>);
  }
}
export class NavigationItemLink extends Component {
  constructor (props) {
    super(props);
    console.log('NavigationItemLink => constructor (props)', this.props);
  }
  componentWillReceiveProps (nextProps) {
    console.log('NavigationItemLink => componentWillReceiveProps (nextProps)', nextProps);
  }
  componentWillMount (props) {
    console.log('NavigationItemLink => componentWillMount(props)', this.props);
  }
  componentDidMount (props) {
    console.log('NavigationItemLink => componentDidMount (props)', this.props);
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('NavigationItemLink => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
  }
  render (props) {
    console.log('NavigationItemLink => render (props)', this.props);
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
export class NavigationLinkText extends Component {
  constructor (props) {
    super(props);
    console.log('NavigationLinkText => constructor (props)', this.props);
  }
  componentWillReceiveProps (nextProps) {
    console.log('NavigationLinkText => componentWillReceiveProps (nextProps)', nextProps);
  }
  componentWillMount (props) {
    console.log('NavigationLinkText => componentWillMount(props)', this.props);
  }
  componentDidMount (props) {
    console.log('NavigationLinkText => componentDidMount (props)', this.props);
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('NavigationLinkText => componentDidUpdate (prevProps, prevState)', prevProps, prevState);
  }
  render (props) {
    // return this.props.LinkText;
    // if (this.props.LinkText )
    return this.props.children;
  }
}
export default Navigation;
// export {
//   NavigationList, NavigationItem, NavigationItemLink, NavigationLinkIcon, NavigationLinkText
// }
