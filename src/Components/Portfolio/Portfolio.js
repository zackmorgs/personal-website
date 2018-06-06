import React, { Component } from 'react';
import Sites from './../../json/sites_worked.json';

export class Portfolio extends Component {
  constructor (props) {
    super(props);
    console.log('Portfolio => constructor (props)', props);
    // this.PortfolioItems = this.PortfolioItems.bind();
  }

  componentWillMount () {
    // var _Sites = Sites;
    this.PortolioItems = Sites.map((Site) =>
      <PortfolioItem Name={Site.name} Url={Site.url} />
    );
  }

  render () {
    return (
      <div className='portfolio-grid'>
        {this.PortfolioItems}
      </div>
    );
  }
}

export class PortfolioItem extends Component {
  constructor (props) {
    super(props);
    console.log('PortfolioItem => constructor (props)', props);
    this.Info = {
      'Name': props.Name,
      'Url': props.Url
    };
  }

  render (props) {
    console.log('PortfolioItem => render (props)', props);
    return (
      <div className='portfolio-item'>
        <a href={this.Info.Url}><h3>{this.Info.Name}</h3></a>
      </div>
    );
  }
}

export default Portfolio;
