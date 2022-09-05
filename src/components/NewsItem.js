import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, img, url, author, date, source } = this.props;
    return (
      <div className="card my-3">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString().slice(0, 17)}
            </small>
          </p>
          <div className="d-flex justify-content-between">
            <span className="badge text-bg-warning mt-2">{source}</span>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
