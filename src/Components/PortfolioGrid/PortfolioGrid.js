import React, { Component } from 'react';
import EmployerPortfolioGridItem from './../EmployerPortfolioGridItem/EmployerPortfolioGriditem';
import json_file_of_sites_i_worked_on from './../../JSON/sites_worked.json';
import CssFriendlyString from '../CssFriendlyString/CssFriendlyString';

export class PortfolioGrid extends Component {
	constructor(props) {
		super(props);
		this.createPortfolioItems = this.createPortfolioItems.bind(this);
	}

	render() {
		return <div className={this.props.className}>{this.createPortfolioItems(json_file_of_sites_i_worked_on)}</div>;
	}

	createPortfolioItems(sites) {
		return sites.map((site, index, sites_array) => {
			if (site.display_portfolio_view) {
				let identifier = CssFriendlyString(site.name);
				let _key = identifier + index.toString();
				return (
					<EmployerPortfolioGridItem id={identifier} className="portfolio-item" SiteData={site} key={_key} />
				);
			} else {
				return null;
			}
		});
	}
}

export default PortfolioGrid;
