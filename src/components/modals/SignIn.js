import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, FormGroup } from "react-bootstrap";
import { API } from "../../config/api";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false
    };
  }
  
  select = e => {
    const val = e.target.value;
    localStorage.setItem("owner", val);
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value, auth: null });
  };

  handleSubmit = e => {
    this.setState({ loading: true });

    API.post("/signin", {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        const token = res.data.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("auth", true);
        localStorage.setItem("role", res.data.data.role);
        window.location.href = "/";
      })

    e.preventDefault();
  };

  render() {
    return (
      <>
        <Modal
          centered
          size="sm"
          {...this.props}
          className="custom-map-modal"
        >
          <div className="text-center p-3">
            <h3 className="pt-3">Sign In</h3>
          </div>
          {this.state.auth && (
            <div className="text-center">
              <small className="text-danger">
                Invalid Username or Password
              </small>
            </div>
          )}

          <div className="px-4 pt-0 pb-4">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <label className="bold" htmlFor="#username">
                  Username
                </label>
                <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.value}
                  required
                  autoComplete="off"
                  className="forms"
                  id="#username"
                  name="username"
                />
              </FormGroup>
              <FormGroup>
                <label className="bold" htmlFor="#password">
                  Password
                </label>
                <br />
                <input
                  onChange={this.handleChange}
                  value={this.state.value}
                  required
                  className="forms"
                  type="password"
                  id="#password"
                  name="password"
                  autoComplete="off"
                />
              </FormGroup>
              <button
                type="submit"
                className="btn-modal"
                disabled={this.state.loading}
              >
                {this.state.loading && <div className="btn-loader"></div>}
                {!this.state.loading && <span>Sign In</span>}
              </button>
            </Form>
            <div className="text-center mt-3">
              <small>Don't have account? </small>
              <Link to="/register" onClick={this.toggle}>
                <small className="bold">Click Here</small>
              </Link>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
