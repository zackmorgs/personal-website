import React, { Component } from 'react';
import { Navigation } from './../Navigation/Navigation';
// import logo from './logo.svg';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navigation />
        <header role='banner'>
          <h1>Zack Morgenthaler</h1>
          <p>multidisciplinary web developer</p>
        </header>
        <main>
          <div id='about collapsible collapsed'>
            <section id='focus' className=''>
              <div className='card'>
                <h2>Focus</h2>
                <ul className='experience-list'>
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
              <div>
                <h2>Skills</h2>

              </div>
            </section>
          </div>
        </main>

        <footer>
          <p>this is the footer :D</p>
        </footer>

      </React.Fragment>
    );
  }
}

export default App;
