import React from 'react'

const Newsitem =(props)=>{
    let { title, description, imgUrl, newUrl, author, date,source } = props;
    return (
      <div>
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>
            {source}
          </span>
          <img src={!imgUrl ? "https://www.kindpng.com/picc/m/396-3969430_news-icon-icon-news-logo-hd-png-download.png" : imgUrl} className="card-img-top" alt="..." />
          < div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newUrl} target="_blank" className="btn btn-dark">Read more</a>
          </div>
        </div>

      </div>
    )
  }
export default Newsitem;