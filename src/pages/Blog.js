import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { getArticleId } from "../_actions/article";
import parse from "html-react-parser";

class Blog extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    const param = params.id;

    this.props.getArticleId(param);
  }

  render() {
    const { data: article, loading, error } = this.props.article;

    if (error) return <p>s</p>;
    if (loading) return <p>g</p>;

    return (
      <>
        <Navbar />
        <div className="container margin-top pb-5" style={{ marginTop: 70 }}>
          <div className="py-3">
            <h3>{article.title}</h3>
            <small>{article.createdAt}</small>
            <div className="mb-3">
              <small>
                <b>Author: </b>
                {article.user && article.user.fullname}
              </small>
            </div>
            <div className="d-flex mb-3">
              {article &&
                article.tags &&
                article.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="badge badge-outline-danger badge-pill mr-2"
                  >
                    {tag}
                  </div>
                ))}
            </div>
            <div className="text-center mb-4">
              <img
                className="img-fluid"
                alt=".."
                src="https://www.galamedianews.com/media/original/200319194115-psiko.png"
              />
            </div>
            <div>{parse(`${article.description}`)}</div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { article: state.article };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticleId: id => dispatch(getArticleId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
