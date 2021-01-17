import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { connect } from "react-redux";
import { postArticle } from "../_actions/article";

class EditorConvertToHTML extends Component {
  state = {
    data: {},
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  handleChange = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };

  handleSubmit = () => {
    const editorState = this.state.editorState;
    const description = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    const title = this.state.data.title;
    const tags = this.state.data.tags;

    const data = {
      title: title,
      tags: tags,
      description: description
    };

    this.props.postArticle(data);
  };

  render() {
    const { data, editorState } = this.state;
    const { data: art, loading, error, success } = this.props.art;
    return (
      <>
        <Navbar />
        <div className="container margin-top pb-5">
          <div className="card p-4">
            <div className="form-group">
              <label htmlFor="title" className="form-control-label bold">
                Title
              </label>
              <input
                required
                autoComplete="off"
                onChange={this.handleChange}
                value={data.title || ""}
                name="title"
                className="forms"
                type="text"
                id="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tags" className="form-control-label bold">
                Tags
              </label>
              <input
                required
                autoComplete="off"
                onChange={this.handleChange}
                value={data.tags || ""}
                name="tags"
                className="forms"
                type="text"
                id="tag"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-light">Upload Image</button>
            </div>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
          <div className="mt-3 text-center">
            <button className="btn-apply" onClick={this.handleSubmit}>
              {loading && <div className="btn-loader"></div>}
              {!loading && <span>Post</span>}
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { art: state.article };
};

const mapDispatchToProps = dispatch => {
  return {
    postArticle: data => dispatch(postArticle(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorConvertToHTML);
