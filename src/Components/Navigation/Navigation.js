import React, { Component } from 'react';
import { CssClassToggler, ToggleTrigger } from './../CssClassToggler/CssClassToggler';
export class Navigation extends Component {
  constructor (props) {
    super(props);
    this.state = {
      'toggled': true
    };
  }
  componentDidMount () {
    // console.log('Navigation:', 'componentDidMount()');
    // document.
  }
  componentDidUpdate () {
    console.log('Navigation:', 'componentDidUpdate()');
  }
  // toggle () {
  //   console.log('aye it triggered');
  //   this.classList.toggle('collapsed');
  // }
  render () {
    // var CollapsibleClassList = 'nav-list collapsible collapsed';
    // var CollapsibleClassList = DOMTokenList.prototype();
    return (
      <nav>
        <div className='navbar'>
          {/* React.createElement(CssClassToggler, ) */}
          {/* <ToggleTrigger htmlTagName='button' target='.nav-list' toggledClassName='collapsed'> */}
          {/* const ToggleTrigger = React.forwardRef(({ htmlTagName: 'button', target: {}, toggledClassName: 'collapsed'}, ref) => ( */}
            {/* React.createElement (this.props.htmlTagName, { displayName: '', className: 'trigger' },  */}
          {/* var _props = { htmlTagName: 'button', target: {}, toggledClassName: 'collapsed' }; */}
          {/* var toggleTriggerProps = { htmlTagName: 'button', toggledClassName: 'collapsed' }; */}

          {/* const ToggleTrigger = React.forwardRef((props, ref) => (

          )); */}
          const ToggleTrigger = React.forwardRef((props, ref) => (
            React.createElement (this.props.htmlTagName, props, props.children)
          ));
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <line x1='3' y1='12' x2='21' y2='12' />
            <line x1='3' y1='6' x2='21' y2='6' />
            <line x1='3' y1='18' x2='21' y2='18' />
          </svg>
          {/* <ToggleTrigger >

          </ToggleTrigger>
          {
            var navigationTrigger = React.Create
          } */}
        </div>
        {/* nav-list collapsible collapsed */}
        <CssClassToggler toggleTrigger=''>
          <ul className='nav-list collapsible collapsed'>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </CssClassToggler>
      </nav>
    );
  }
}
export default Navigation;
