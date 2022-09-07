import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      totalResults: 0
    };
    document.title = `NewsMonkey - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
      }`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d271f60c35646a69586f58d4157034c&page=${this.state.page}&pageSize=${this.props.size}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let res = await data.json();
    this.setState({
      loading: false,
      articles: res.articles,
      totalResults: data.totalResults,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d271f60c35646a69586f58d4157034c&page=${this.state.page + 1}&pageSize=${this.props.size}`;
    let data = await fetch(url);
    let res = await data.json();
    this.setState({
      articles: this.state.articles.concat(res.articles),
      totalResults: data.totalResults,
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row container">
            {
              this.state.articles.map((el) => {
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
          </div>
        </InfiniteScroll>

      </div>
    );
  }
}
