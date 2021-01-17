import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

import { connect } from "react-redux";
import { getArticle } from "../_actions/article";

class Articles extends Component {
  componentDidMount() {
    this.props.getArticle();
  }

  render() {
    const { data: article, loading, error } = this.props.article;

    if (error) return <>error</>;
    if (loading) return <p>s</p>;

    return (
      <div className="container margin-top pb-5">
        <div className="row">
          {article &&
            article.length > 0 &&
            article.map((blog, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <Link to={`/article/${blog.id}`}>
                  <div className="card mb-4" style={{minHeight: 330}}>
                    <img
                      className="card-img-top"
                      src="https://m.ayosemarang.com/images-semarang/post/articles/2020/04/28/56097/57330-virus-corona.jpg"
                      alt="..."
                    />
                    <div className="card-body p-3">
                      <h5 className="card-title ellipsis-title">
                        {blog.title}
                      </h5>
                      <div className="card-title ellipsis-desc">
                        {parse(blog.description)}
                      </div>
                      <div className="d-flex mt-3">
                        {blog.tags.map((tag, i) => (
                          <div
                            key={i}
                            className="badge badge-outline-danger badge-pill mr-2"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { article: state.article };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticle: () => dispatch(getArticle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
