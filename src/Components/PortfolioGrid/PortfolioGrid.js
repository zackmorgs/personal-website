import React, { Component } from 'react';
import EmployerPortfolioGridItem from './../EmployerPortfolioGridItem/EmployerPortfolioGriditem';
import json_file_of_sites_i_worked_on from './../../JSON/sites_worked.json';
import CssFriendlyString from '../CssFriendlyString/CssFriendlyString';

export class PortfolioGrid extends Component {
	constructor(props) {
		super(props);
		this.createPortfolioItems = this.createPortfolioItems.bind(this);
		this.state = {
			isLoading: true,
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false,
			});
		}, 0);
	}
	render() {
		if (this.state.isLoading) {
			return (
				<div className={this.props.className}>{this.createPortfolioItems(json_file_of_sites_i_worked_on)}</div>
			);
		} else {
			return (
				<div className={this.props.className + ' loaded'}>
					{this.createPortfolioItems(json_file_of_sites_i_worked_on)}
				</div>
			);
		}
	}
	handleClick() {
		console.log('test');
	}
	createPortfolioItems(json_file_of_sites_i_worked_on) {
		return json_file_of_sites_i_worked_on.map((site, index, sites_array) => {
			if (site.display_portfolio_view) {
				let identifier = CssFriendlyString(site.name);
				let _key = identifier + index.toString();
				return (
					<EmployerPortfolioGridItem
						id={identifier}
						className="employer-portfolio-grid-item"
						SiteData={site}
						key={_key}
						onClick={this.handleClick.bind(this)}
					/>
				);
			} else {
				return null;
			}
		});
	}
}

export default PortfolioGrid;
