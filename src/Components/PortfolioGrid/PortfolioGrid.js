import React, { Component } from 'react';
import AllSites from './../../JSON/sites_worked.json';
// import Filepaths from './../../json/public.json';
import Icon from './../Icon/Icon';
import CssFriendlyString from '../CssFriendlyString/CssFriendlyString';
import ResponsiveImage from './../ResponsiveImage/ResponsiveImage';

export class PortfolioGrid extends Component {
	constructor(props) {
		super(props);
		console.log('Portfolio => constructor (props)', props);
		var SitesDisplayed = [];
		var SitesNotDisplayed = [];
		AllSites.forEach(function(Site) {
			if (Site.display_portfolio_view) {
				SitesDisplayed.push(Site);
			} else {
				// maybe useful later?
				SitesNotDisplayed.push(Site);
			}
		});
		this.SitesDisplayed = SitesDisplayed;
		this.SitesNotDisplayed = SitesNotDisplayed;
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(wat) {
		console.log(wat);
	}
	render() {
		return this.makePortfolio();
	}
	PortfolioListing() {
		return this.SitesDisplayed.map((Site, Index) => <PortfolioItem Site={Site} key={Index} />);
	}
	makePortfolio() {
		return <div className="portfolio-grid">{this.PortfolioListing()}</div>;
	}
}
export class Thumbnail extends Component {
	constructor(props) {
		super(props);
		console.log('Thumbnail constructor(props)', props);
	}
	makeCaption() {
		return (
			<div className="caption-container hidden">
				<p>{this.props.media.caption}</p>
			</div>
		);
	}
	makeGraphic() {
		// var resolved_image_path = this.props.media.graphic;
		// console.log(resolved_image_path);
		// let el = lqip(resolved_image_path);
		// var image = <img className='placeholder' src={} alt={this.props.name} />;
		// image
		return (
			<div className="graphic">
				<ResponsiveImage src={this.props.media.graphic} alt={this.props.name} />
			</div>
		);
	}
	renderThumbContents() {
		return (
			<React.Fragment>
				{this.makeGraphic()}
				{this.makeCaption()}
			</React.Fragment>
		);
	}
	renderThumbnail() {
		var thumbnailClassName = 'thumb';
		thumbnailClassName += ' ' + this.props.media.content_type;
		return (
			<li className={thumbnailClassName} key={this.props.index}>
				{this.renderThumbContents()}
			</li>
		);
	}
	render() {
		if (typeof this.props.media !== 'undefined') {
			// we need to hide the other images initially.
			if (this.props.index === 0) {
				// var image = require(this.this.props.media.graphic);
				return this.renderThumbnail();
			} else {
				return this.renderThumbnail();
			}
		} else {
			console.log('Undefined Thumbnail', this.props);
			return null;
		}
	}
}
export class PortfolioItem extends Component {
	constructor(props) {
		super(props);
		//console.log('PortfolioItem => constructor (props)', props);
		this.handlePortfolioItemClick = this.handlePortfolioItemClick.bind(this);
		this.state = {
			opened: false,
		};
	}
	componentDidMount() {}
	handlePortfolioItemClick(id, event) {
		console.log('id', id);
		var item = document.getElementById(id);
		item.classList.toggle('opened');
		console.log('event', event.target);
		this.setState({
			opened: !this.state.opened,
		});
		console.log('state', this.state.opened);
	}
	render(props) {
		var Site = this.props.Site;

		const Languages = Site.technology.languages.map(language => {
			return (
				<li className="lang">
					<Icon IconName={language} />
				</li>
			);
		});
		this.Medias = Site.projects[0].media.map((media, index) => {
			// console.log(media);
			return <Thumbnail media={media} index={index} Site={Site} key={index} />;
		});
		// todo turn into structured component
		var p_className = '';
		// if (this.state.opened) {
		// 	p_className = 'portfolio-item opened loaded';
		// } else {
		// 	p_className = 'portfolio-item';
		// }
		p_className = 'portfolio-item';
		return (
			<div
				id={CssFriendlyString(Site.name)}
				className={p_className}
				onClick={e => this.handlePortfolioItemClick(CssFriendlyString(Site.name), e)}
			>
				{/* <PortfolioThumbnail DataSource={Site} /> */}
				<div className="portfolio-thumbnail">
					{/* <img src={this.props.Site.projects[0]} />> */}
					<ul className="thumbs">{this.Medias}</ul>
					{/* <img src='http://via.placeholder.com/600x600' /> */}
				</div>
				<div className="site-info hidden">
					<div className="site-logo">
						<img src={Site.logo} alt={Site.name} />
					</div>
					<div className="info-work">
						<span className="site-name">{Site.name}</span>
						<span className="site-years-worked">{Site.year}</span>
						<ul className="language-list">{Languages}</ul>
					</div>
					{/* <a href={Site.url}>[link]</a> */}
				</div>
			</div>
		);
	}
}
export class PortfolioThumbnail extends Component {
	constructor(props) {
		super(props);
		//console.log('PortfolioThumnail => constructor (props)', props);
	}

	// //console.log(this.props.Sources);
	// //console.log(JSON.stringify(this.props.Sources));

	render(props) {
		return <span>{JSON.stringify(this.props.DataSource)}</span>;
	}
}

export default PortfolioGrid;
