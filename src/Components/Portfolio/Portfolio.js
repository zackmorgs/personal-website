import React, { Component } from 'react';
import AllSites from './../../json/sites_worked.json';
// import Filepaths from './../../json/public.json';
import Icon from './../Icon/Icon';
import CssFriendlyString from '../CssFriendlyString/CssFriendlyString';

export class Portfolio extends Component {
  constructor (props) {
    super(props);
    console.log('Portfolio => constructor (props)', props);
    // this.PortfolioItems = this.PortfolioItems.bind();
  }
  render () {
    // var PortfolioItemListing = function () {
    // };
    var SitesDisplayed = [];
    AllSites.forEach(function (Site) {
      if (Site.display_portfolio_view) {
        SitesDisplayed.push(Site);
      }
    });
    // Sites.splice(SitesDisplayed);
    const PorfolioListing = SitesDisplayed.map((Site, Index) =>
      <PortfolioItem Site={Site} key={Index} />
    );
    return (
      <div className='portfolio-grid'>
        {PorfolioListing}
      </div>
    );
  }
}
export class Thumbnail extends Component {
  constructor (props) {
    super(props);
    console.log('Thumbnail => constructor (props)', props);
    // this.media = props.media;
    // this.name = props.name;
  }
  render () {
    // we need to hide the other images initially.
    var thumbnailClassName = 'thumb';

    thumbnailClassName += ' ' + this.props.media.content_type;

    if (this.props.index === 0) {
      return (
        <li className={thumbnailClassName}>
          <div className='graphic'>
            <img src={this.props.media.graphic} alt={this.props.media.caption} />
          </div>
          <div className='caption-container hidden'>
            <p>{this.props.media.caption}</p>
          </div>
        </li>
      );
    } else {
      return (
        <li className={thumbnailClassName + ' hidden'}>
          <div className='graphic hidden'><img src={this.props.media.graphic} alt={this.props.Site.name} /></div>
          <div className='caption-container hidden'>{this.props.media.caption}</div>
        </li>
      );
    }
  }
}
export class PortfolioItem extends Component {
  constructor (props) {
    super(props);
    console.log('PortfolioItem => constructor (props)', props);
  }

  render (props) {
    console.log('PortfolioItem => render (props)', props);
    var Site = this.props.Site;

    const Languages = Site.technology.languages.map((language) => {
      return (<li className='lang'><Icon IconName={language} /></li>);
    });

    var Medias = Site.projects[0].media.map((media, index) => {
      return <Thumbnail media={media} index={index} Site={Site} />;
    }
    );
    console.log(Site);

    return (
      <div id={CssFriendlyString(Site.name)} className='portfolio-item'>
        {/* <PortfolioThumnnail DataSource={Site} /> */}
        <div className='portfolio-thumbnail'>
          {/* <img src={this.props.Site.projects[0]} />> */}
          <ul className='thumbs'>
            {Medias}
          </ul>
          {/* <img src='http://via.placeholder.com/600x600' /> */}
        </div>
        <div className='site-info hidden'>
          <div className='site-logo'>
            <img src={Site.logo} alt={Site.name} />
          </div>
          <div className='info-work'>
            <span className='site-name'>{Site.name}</span>
            <span className='site-years-worked'>{Site.year}</span>
            <ul className='language-list'>
              {Languages}
            </ul>
          </div>
          {/* <a href={Site.url}>[link]</a> */}
        </div>
      </div>
    );
  }
}

// export class PortfolioMedia extends Component {
//   constructor (props){
//     super(props);

//   }
//   render(){
//     return (

//     )
//   }
// }

export class PortfolioThumnnail extends Component {
  constructor (props) {
    super(props);
    console.log('PortfolioThumnail => constructor (props)', props);
  }

  // console.log(this.props.Sources);
  // console.log(JSON.stringify(this.props.Sources));

  render (props) {
    return (
      <span>{JSON.stringify(this.props.DataSource)}</span>
    );
  }
}

export default Portfolio;
