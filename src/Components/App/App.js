import React, { Component } from 'react';
// import logo from './logo.svg';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <nav>
          <div class='navbar'>

            <div className='nav-toggle'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-menu' data-reactid='752'><line x1='3' y1='12' x2='21' y2='12' /><line x1='3' y1='6' x2='21' y2='6' /><line x1='3' y1='18' x2='21' y2='18' /></svg>
            </div>
          </div>
          <ul className='nav-list nav-closed'>
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
        <section id='focus' className=''>
          <div className='card'>
            <h2>Focus</h2>
            <ul class='experience-list'>
              <li>
                {/* <i class="experience_item" data-feather="smartphone" style="color: #42A5F5;"></i> */}
                <span>Mobile-First Responsive Web Development</span>
              </li>
              <li>
                {/* <i class="experience_item" data-feather="code" style="color:#AB47BC"></i> */}
                <span>Front-End UI Development</span>
              </li>
              <li>
                {/* <i class="experience_item" data-feather="bar-chart" style="color:#D4E157"></i> */}
                <span>A/B/n &amp; Mlitivariate Design Testing</span>
              </li>
              <li>
                {/* <i class="experience_item" data-feather="shopping-cart" style="color:#78909C"></i> */}
                <span>E-Commerce Front-End Development</span>
              </li>
              <li>
                {/* <i class="experience_item" data-feather="check-square" style="color:#4CAF50"></i> */}
                <span>"Pixel-Perfect" CSS</span>
              </li>
              <li>
                {/* <i class="experience_item" data-feather="globe" style="color:#3F51B5"></i> */}
                <span>Legacy Cross-Browser Support</span>
              </li>
            </ul>
          </div>

        </section>
        <section id='skills' className=''>
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
