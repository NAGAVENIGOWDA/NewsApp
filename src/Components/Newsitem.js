import React  from "react";
export function NewsItem(props) {
 
    let { title, description, imageUrl, url, publishedAt, author, source } =
      props;
    return (
      <div>
        <div className="card ">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://newsdata.io/images/home/live-feeds.png"
            }
            alt="..."
            height={161}
          />
          <h6>
            Source : <span className="badge bg-secondary">{source}</span>
          </h6>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on {publishedAt}{" "}
              </small>
            </p>
            <a href={url} target="_new" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
