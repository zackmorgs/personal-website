import React, { Component } from 'react';
import AllSites from './../../json/sites_worked.json';
// import Filepaths from './../../json/public.json';
import './../Global/portfolio.css';
import Icon from './../Icon/Icon';
import String from './../String/String';


export class Portfolio extends Component {
  constructor (props) {
    super(props);
    console.log('Portfolio => constructor (props)', props);
    // this.PortfolioItems = this.PortfolioItems.bind();
  }

  // componentWillMount () {
  //   // var _Sites = Sites;
  //   this.PortolioItems = Sites.map((Site) =>
  //     <PortfolioItem Name={Site.name} Url={Site.url} />
  //   );
  // }

  render () {
    // var PortfolioItemListing = function () {

    // };

    var Sites = [];
    AllSites.forEach(function (Site) {
      if (Site.display_portfolio_view) {
        Sites.push(Site);
      }
    });
    // Sites.splice(SitesDisplayed);
    const PorfolioListing = Sites.map((Site, Index) =>
      <PortfolioItem Site={Site} key={Index}/>
    );
    return (
      <div className='portfolio-grid'>
        {PorfolioListing}
      </div>
    );
  }
}
export class Thumnail extends Component {
  constructor (props) {
    super(props);
    console.log('Thumnail => constructor (props)', props);
    // this.media = props.media;
    // this.name = props.name;
  }
  render () {
    return (
      <li className='thumb hidden'>
        <div className='graphic'><img src={this.props.media.graphic} alt={this.props.name} /></div>
        <div className='caption'>{this.props.media.caption}</div>
      </li>
    );
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

    const Languages = Site.technology.languages.map((language) =>{
      return (<li className='lang'><Icon IconName={language} /></li>)
    });

    var Medias = Site.projects[0].media.map((media,index) =>
    {
      if (index === 0) {
        return (
          <li className='thumb'>
            <div className='graphic'>
              <img src={media.graphic} alt={media.caption} />
            </div>
            <div>{media.caption}</div>
          </li>
        );
      } else {
        return (
          <li className='thumb hidden'>
            <div className='graphic'><img src={media.graphic} alt={Site.name} /></div>
            <div className='caption'>{media.caption}</div>
          </li>
        );
      }
    }
    );
    console.log(Site);

    return (
      <div id={Site.name.replaceAll(' ','_').replaceAll('.','_dot_').replaceAll(',','').replaceAll('-','_')} className='portfolio-item'>
        {/* <PortfolioThumnnail DataSource={Site} /> */}
        <div className='portfolio-thumbnail'>
          <ul className='thumbs'>
            {Medias}
          </ul>
          {/* <img src='http://via.placeholder.com/600x600' /> */}
        </div>
        <div className='site-info'>
          <div className='site-logo'>
            <img src={Site.logo} alt={Site.name}/>
          </div>
          <div className='info-work'>
            <span className='site-name' className=''>{Site.name}</span>
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

  componentWillMount (props) {
    console.log('PortolfioThumbnail => componentWillMount (props)');
    // console.log(this.props.Sources);
    // console.log(JSON.stringify(this.props.Sources));
  }

  render (props) {
    return (
      <span>{JSON.stringify(this.props.DataSource)}</span>
    );
  }
}

export default Portfolio;
