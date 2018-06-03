import React, { Component } from 'react';
// import logo from './logo.svg';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <nav>
          <ul className='navigation-items'>
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
        </nav>
        <header>
          <h1>Zack Morgenthaler</h1>
          <p>multidisciplinary web developer</p>
        </header>
        <section>

        </section>
      </React.Fragment>
    );
  }
}

export default App;
