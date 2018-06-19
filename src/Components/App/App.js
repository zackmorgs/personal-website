import React, { Component } from 'react';
import { Navigation, NavBar, NavList, NavItem, NavLink, NavText, NavHamburger } from './../Navigation/Navigation';
import Main from './../Main/Main.js';
// import { ToggleTrigger } from './../ToggleTrigger/ToggleTrigger';
import { PortfolioGrid } from '../PortfolioGrid/PortfolioGrid';
import LoadingScreen from './../LoadingScreen/LoadingScreen.js';
import { Github, Linkedin, Home, Info, Mail, Facebook } from 'react-feather';
// import SiteMap from '/JSON/SiteMap.json';

// import { Icon } from './../Icon/Icon.js';

// import logo from './logo.svg';
class App extends Component {
	constructor(props) {
		super(props);
		console.log('App => constructor (this.props)', this.props);
		this.state = {
			loading: true,
		};
	}
	Header() {
		const HeaderContents = () => {
			return (
				<React.Fragment>
					<hgroup className="hero">
						<img alt="zackmorgs" src="img/zackmorgs/zackmorgs.profile.jpg" className="profile-picture" />
						<h1>zack morgenthaler</h1>
						<h1 className="subtitle">full-stack web developer</h1>
					</hgroup>
					<p>I'm a web developer with a passion for programming and design.</p>
				</React.Fragment>
			);
		};
		if (this.state.loading) {
			return (
				<header id="about" className="overlay hidden">
					{HeaderContents()}
				</header>
			);
		} else {
			return (
				<header id="about" className="overlay">
					{HeaderContents()}
				</header>
			);
		}
	}
	MainNavigation() {
		return (
			<Navigation>
				<NavBar className="navbar">
					<a className="branding" src="/">
						Zack Morgenthaler
					</a>
					<NavHamburger />
				</NavBar>
				<NavList ref="navigationList" className="nav-list">
					<NavItem>
						<NavLink href="/">
							<NavText>
								{'home'}
								<Home />
							</NavText>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/about">
							<NavText>
								{'about'}
								<Info />
							</NavText>
						</NavLink>
					</NavItem>
				</NavList>
				<NavList className="social">
					<NavItem>
						<NavLink>
							<NavText>
								<Github />
							</NavText>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<NavText>
								<Linkedin />
							</NavText>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<NavText>
								<Facebook />
							</NavText>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/contact">
							<NavText>
								<Mail />
							</NavText>
						</NavLink>
					</NavItem>
				</NavList>
			</Navigation>
		);
	}
	MainLoadingScreen() {
		return <LoadingScreen />;
	}
	MainPortfolio() {
		return <PortfolioGrid className="portfolio-grid" />;
	}
	Footer() {
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
				{/* {this.MainLoadingScreen()} */}
				{this.MainNavigation()}
				{this.Header()}
				<Main>{this.MainPortfolio()}</Main>
				{this.Footer()}
			</React.Fragment>
		);
	}
}

export default App;
