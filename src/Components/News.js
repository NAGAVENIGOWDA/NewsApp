import React, { useState, useEffect } from "react";
import NewsItem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export function News(props) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [totalResults, setTotalResults] = useState(0);

  

  useEffect(() => {
    document.title = `BuzzFeed-${props.category[0].toUpperCase()}${props.category.slice(1)}`;
    const fetchData = async () => {
      props.setprogress(10);
      let newsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=16`;

      setLoading(true);
      let data = await fetch(newsUrl);
      let parsedData = await data.json();
      props.setprogress(50);
      setData(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setprogress(100);
    };

    fetchData();
  }, []);

  async function handlePreviousClick() {
    props.setprogress(10);
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page - 1
    }&pageSize=16`;
    setLoading(true);
    let data = await fetch(newsUrl);
    let parsedData = await data.json();
    props.setprogress(50);
    setData(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(page - 1);
    props.setprogress(100);
  }

  async function handleNextClick() {
    if (!(Math.ceil(totalResults / 16) < page + 1)) {
      props.setprogress(10);
      let newsUrl = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${
        page + 1
      }&pageSize=16`;
      setLoading(true);
      let data = await fetch(newsUrl);
      let parsedData = await data.json();
      props.setprogress(50);
      setData(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setPage(page + 1);
      props.setprogress(100);
    }
  }

  let newsItems = data.map((element) => {
    return (
      <div className="col-md-3 my-3 " key={element.url}>
        <NewsItem
          title={element.title.slice(0, 60)}
          description={
            element.description
              ? element.description.slice(0, 80)
              : element.title.slice(0, 80)
          }
          imageUrl={element.urlToImage}
          url={element.url}
          publishedAt={new Date(element.publishedAt).toUTCString()}
          author={element.author}
          source={element.source.name}
        />
      </div>
    );
  });
  return (
    <div>
      <div className=" header conatiner d-flex justify-content-center  ">
        <h1>
          BuzzFeed - The Latest {props.category[0].toUpperCase()}
          {props.category.slice(1)} Headlines{" "}
        </h1>
      </div>
      <div
        className="container my-3
        d-flex flex-column justify-content-center align-items-center"
      >
        {loading && <Spinner />}
      </div>

      {!loading && (
        <div className="container">
          <div className="row">{newsItems}</div>
        </div>
      )}
      <div className=" conatiner d-flex justify-content-between my-5">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark  mx-5"
          onClick={handlePreviousClick}
        >
          &larr;Previous
        </button>
        <button
          type="button"
          className="btn btn-dark mx-5"
          disabled={Math.ceil(totalResults / 16) < page + 1 ? true : false}
          onClick={handleNextClick}
        >
          Next&rarr;
        </button>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  category: "general",
};
News.proptype = {
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
