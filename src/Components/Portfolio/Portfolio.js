import React, { Component } from 'react';
import Sites from './../../json/sites_worked.json';
// import Filepaths from './../../json/public.json';
import './../Global/portfolio.css';


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
    const PorfolioListing = Sites.map((Site) =>
      <PortfolioItem Site={Site} />
    );
    return (
      <div className='portfolio-grid'>
        {PorfolioListing}
      </div>
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

    const Languages = Site.technology.languages.map((language) =>
      {
        if (language === 'HTML') {
          return (<li>{language}</li>)
        } else if (language === 'CSS') {
          return (<li className='lang-css'></li>)
        } else if (language === 'JavaScript') {
          return (<li className='lang-js'></li>)
        }
      }
    );

    var Medias = Site.projects[0].media.map((media,index) =>
    {
      if (index === 0) {
        return (
          <li className='thumb'>
          <div className='graphic'><img src={media.graphic} /></div>
          <div>{media.caption}</div>
        </li>
        )
      } else {
        return (
          <li className='thumb hidden'>
          <div className='graphic'><img src={media.graphic} alt={Site.name}/></div>
          <div>{media.caption}</div>
        </li>
        )
      }
    }
    );
    console.log(Site);
    return (
      <div className='portfolio-item'>
        {/* <PortfolioThumnnail DataSource={Site} /> */}
        <div className='portfolio-thumbnail'>
          <ul className='thumbs'>
            {Medias}
          </ul>
          {/* <img src='http://via.placeholder.com/600x600' /> */}
        </div>
        <div className='site-info'>
          {/* <a href={Site.url}> */}
          <a>
            <div className='site-logo' style={
              {'backgroundImage': 'url(' + Site.logo + ')'}
            } />
            <div className='site-name'>
              <span className=''>{Site.name}</span>
              <span className=''>{Site.year}</span>
              <span />
              {/* <a href={Site.url}>[link]</a> */}
              <ul className='language-list'>
                {Languages}
              </ul>
            </div>
          </a>
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
