import React, { Component } from 'react';
import ResponsiveImage from './../ResponsiveImage/ResponsiveImage';

export class PortfolioGrid extends Component {
	constructor(props) {
		super(props);
		this.createPortfolioItems = this.createPortfolioItems.bind(this);
	}
	render() {
		import json_file_of_sites_i_worked_on from './../../JSON/sites_worked.json';
		return <div className={this.props.className}>{this.createPortfolioItems(json_file_of_sites_i_worked_on)}</div>;
	}
	createPortfolioItems(sites) {
		import CssFriendlyString from '../CssFriendlyString/CssFriendlyString';
		return sites.map((site, index, sites_array) => {
			let identifier = CssFriendlyString(site.name);
			let _key = identifier + index.toString();
			return <EmployerPortfolioGridItem id={identifier} SiteData={site} key={_key} />;
		});
	}
}

class EmployerPortfolioGridItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			show_fullview: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.createThumbnails = this.createThumbnails.bind(this);
	}

	createThumbnails() {
		this.props.SiteData.projects.map(project => {
			return <Thumbnail />;
		});
	}

	handleClick() {}

	render() {
		return (
			// this.props.SiteData
			<div>
				<div className="thumbnail-name-display">
					<h4 className="site-name">{this.props.SiteData.name}</h4>
				</div>
				<ul>{this.createThumbnails(this)}</ul>
			</div>
		);
	}
}

export default PortfolioGrid;
