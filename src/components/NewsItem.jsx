import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, desc, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl ? imageUrl : "https://imgs.search.brave.com/Mfl-BYmqlh-JM35wdorm3yvpz3SVBwVj1l5YUSfU3ik/rs:fit:617:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/ZVZrT3hJZV9NUHh4/cU9NM3FpVTFnSGFG/cyZwaWQ9QXBp"} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
                            {source}
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem