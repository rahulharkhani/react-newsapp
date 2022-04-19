import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    let img = "https://i.guim.co.uk/img/media/3056fa462b5f591c6f6f806ae4d411bf43fc6497/0_371_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f1c2359d97fc2da111d311ca70a74611";
    const handleImgError = e => {
      e.target.src = "https://thumbs.dreamstime.com/b/website-error-forbidden-vector-artwork-depicts-funny-humorous-scenario-human-stick-figure-http-request-85523056.jpg";
    }

    return (
      <>
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1" }}>
            {source}
          </span>
          <img src={imageUrl?imageUrl:img} className="card-img-top" alt="..." onError={handleImgError} />
          <div className="card-body">
            <h5 className="card-title" title={title}>{title.slice(0,40)+'...'}</h5>
            <p className="card-text">{description.slice(0,80)+'...'}</p>
            <p className="card-text"><small className="text-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
        </div> 
      </>
    )
  }
}

export default NewsItem
