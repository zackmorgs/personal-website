import React, { Component } from 'react';
import { CssClassToggler } from './../CssClassToggler/CssClassToggler';
import { ToggleTrigger } from './../ToggleTrigger/ToggleTrigger';
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

  render () {
    // var CollapsibleClassList = 'nav-list collapsible collapsed';
    // var CollapsibleClassList = DOMTokenList.prototype();
    return (
      <nav>
        <div className='navbar'>
          {
            console.log('test')
          }
          <ToggleTrigger htmlTagName='button'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <line x1='3' y1='12' x2='21' y2='12' />
              <line x1='3' y1='6' x2='21' y2='6' />
              <line x1='3' y1='18' x2='21' y2='18' />
            </svg>
          </ToggleTrigger>
        </div>
        {/* nav-list collapsible collapsed */}
        <CssClassToggler initiallyToggled='false' toggledClassName='collapsed'>
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
