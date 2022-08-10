import React, { Component } from 'react'

export default class Newsitem extends Component {

    
  render() {
    let {title, description, imgUrl, newUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imgUrl?"https://www.kindpng.com/picc/m/396-3969430_news-icon-icon-news-logo-hd-png-download.png":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newUrl} target="_blank"className="btn btn-dark">Read more</a>
            </div>
            </div>

      </div>
    )
  }
}
