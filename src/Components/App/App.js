import React, { Component } from 'react';
// import logo from './logo.svg';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <nav>
          <div className='branding'>
            <a>zackmorgs</a>
          </div>
          <ul className='navigation-list'>
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
        <header role='banner'>
          <h1>Zack Morgenthaler</h1>
          <p>multidisciplinary web developer</p>
        </header>
        <section className='skills'>
          <h2>Focus</h2>

        </section>
        <section>
          <h2>Skills</h2>
        </section>
        <footer>
          <p>this is the footer :D</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
