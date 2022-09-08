import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    size: 9,
    country: "in",
    category: "general",
  };

  static propTypes = {
    size: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsMonkey - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
      }`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.size}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let res = await data.json();
    this.setState({
      loading: false,
      articles: res.articles,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center  " style={{ marginTop: '70px' }}>Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row container">
          {!this.state.loading &&
            this.state.articles && this.state.articles.map((el) => {
              return (
                <div className="col-md-4" key={el.url}>
                  <NewsItem
                    title={el.title}
                    desc={
                      el.description
                        ? el.description
                        : "Click the button below to go to the article and read full news"
                    }
                    img={
                      el.urlToImage
                        ? el.urlToImage
                        : "https://c.ndtvimg.com/2022-08/5ltulom_nitish-kumar-pti-pic_650x400_08_August_22.jpg"
                    }
                    url={el.url}
                    author={el.author ? el.author : "unknown"}
                    date={el.publishedAt}
                    source={el.source.name}
                  />
                </div>
              );
            })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Prev
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.total / this.props.size)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
