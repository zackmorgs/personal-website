import React, { Component } from 'react';
import { Navigation, NavBar, NavList, NavItem, NavLink, NavText } from './../Navigation/Navigation';
// import { CssClassToggler } from './../CssClassToggler/CssClassToggler';
import { ToggleTrigger } from './../ToggleTrigger/ToggleTrigger';
// import logo from './logo.svg';

class App extends Component {
  constructor (props) {
    super(props);
    console.log('App => constructor (this.props)', this.props);
  }
  render (props) {
    console.log('App => render (this.props)', this.props);
    return (
      <React.Fragment>
        <Navigation>
          <NavBar className='navbar'>
            {/* <a className='branding'>zackmorgs</a> */}
            <ToggleTrigger
              className='toggle'
              classNameOnToggled='toggled'
              toggleTargetClassName='nav-list'
              targetClassNameUntoggled='collapsible'
              targetClassNameToggled='collapsed'
              toggledOnInit='true'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='18' x2='21' y2='18' />
              </svg>
            </ToggleTrigger>
          </NavBar>
          <NavList className='nav-list collapsible'>
            <NavItem>
              <NavLink href='/'>
                <NavText>
                  {'home'}
                </NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/test'>
                <NavText>
                  {'about'}
                </NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/test'>
                <NavText>
                  {'projects'}
                </NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/test'>
                <NavText>
                  {'contact'}
                </NavText>
              </NavLink>
            </NavItem>
          </NavList>
        </Navigation>
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
