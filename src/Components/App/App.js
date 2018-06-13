import React, { Component } from 'react';
import {
  Navigation,
  NavBar,
  NavList,
  NavItem,
  NavLink,
  NavText,
  NavHamburger
} from './../Navigation/Navigation';
// import { ToggleTrigger } from './../ToggleTrigger/ToggleTrigger';
import { Portfolio } from './../Portfolio/Portfolio.js';

// class LoadingScreen extends Component {
//   constructor (props){
//     super(props);

//   }
//   componentWillUpdate() {
//     render(nextProps)
//   }
//   render (props) {
//     if (this.props.hidden) {
//       return (null);
//     }
//     return (this.Loading);
//   }
// }

// import logo from './logo.svg';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('App => constructor (this.props)', this.props);
  }
  componentDidMount() {
    console.log('App =>componentDidMount () ');
    // console.log(this.Loading);
    document.querySelectorAll('.portfolio-item').forEach(function(item, index) {
      window.setTimeout(item.classList.toggle('loaded'), 500 + index * 30);
    });
  }
  render(props) {
    console.log('App => render (this.props)', this.props);
    return (
      <React.Fragment>
        <Navigation>
          <NavBar className="navbar">
            <a className="branding" />
            <NavHamburger />
          </NavBar>
          <NavList ref="navigationList" className="nav-list collapsible">
            <NavItem>
              <NavLink href="/">
                <NavText>{'home'}</NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                <NavText>{'about'}</NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
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
