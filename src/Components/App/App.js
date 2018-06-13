import React, { Component } from 'react';
import { Navigation, NavBar, NavList, NavItem, NavLink, NavText, NavHamburger } from './../Navigation/Navigation';
import Main from './../Main/Main.js';
// import { ToggleTrigger } from './../ToggleTrigger/ToggleTrigger';
import { Portfolio } from './../Portfolio/Portfolio.js';
import LoadingScreen from './../LoadingScreen/LoadingScreen.js';

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
  Header() {
    return (
      <header id="about" className="overlay hidden">
        <hgroup className="hero">
          <h1>zack morgenthaler</h1>
          <h1 className="subtitle">full-stack web developer</h1>
        </hgroup>
        <p className="lead">Hi! I'm Zack.</p>
        <p>I'm a web developer with a passion for programming and design.</p>
      </header>
    );
  }
  MainNavigation () {
    return (
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
    );
  }
  MainLoadingScreen() {
    return <LoadingScreen />;
  }
  MainPortfolio(){
    return (
      <Portfolio />
    );
  }
  Footer (){
    return (
      <footer>
        <p>2018. Zack Morgenthaler</p>
      </footer>
    );
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
        {this.MainLoadingScreen()}
        {this.MainNavigation()}
        {this.Header()}
        <Main>
          {this.MainPortfolio()}
        </Main>
        {this.Footer()}
      </React.Fragment>
    );
  }
}

export default App;
