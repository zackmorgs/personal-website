import React, { Component } from 'react';
import {
  Navigation,
  NavBar,
  NavList,
  NavItem,
  NavLink,
  NavText
} from './../Navigation/Navigation';
import { ToggleTrigger } from './../ToggleTrigger/ToggleTrigger';
import { Portfolio } from './../Portfolio/Portfolio.js';

// import logo from './logo.svg';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('App => constructor (this.props)', this.props);
  }
  render(props) {
    console.log('App => render (this.props)', this.props);
    return (
      <React.Fragment>
        <Navigation>
          <NavBar className="navbar">
            {/* <a className='branding'>test</a> */}
            <ToggleTrigger
              ref="navigationTrigger"
              className="toggle"
              classNameOnToggled="toggled"
              toggleTargetClassName="nav-list"
              targetClassNameUntoggled="collapsible"
              targetClassNameToggled="collapsed"
              toggledOnInit="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="0" y1="6" x2="24" y2="6" transform="rotate(0)" />
                <line x1="0" y1="12" x2="24" y2="12" opacity="1.0" />
                <line x1="0" y1="18" x2="24" y2="18" transform="rotate(0)" />
              </svg>
            </ToggleTrigger>
          </NavBar>
          <NavList ref="navigationList" className="nav-list collapsible">
            <NavItem>
              <NavLink href="/">
                <NavText>{'home'}</NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/test">
                <NavText>{'about'}</NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/test">
                <NavText>{'contact'}</NavText>
              </NavLink>
            </NavItem>
          </NavList>
        </Navigation>
        <main>
          <header id="about" className="overlay hidden">
            <hgroup className="hero">
              <h1>zack morgenthaler</h1>
              <h1 className="subtitle">full-stack web developer</h1>
            </hgroup>
            <p className="lead">Hi! I'm Zack.</p>
            <p>
              I'm a web developer with a passion for programming and design.
            </p>
          </header>
          <Portfolio />
        </main>
        <footer>
          <p>this is the footer :D</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
