import React, { Component } from "react";
import { Modal, Form, FormGroup } from "react-bootstrap";
import { API } from "../../config/api";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false
    };
  }

  handleSelect = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };

  handleChange = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };

  handleSubmit = e => {
    this.setState({loading: true})
    API.post("signup", this.state.data).then(res => {
      const token = res.data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("auth", true);
      localStorage.setItem("role", res.data.data.role);
      window.location.href = "/";
    });
    e.preventDefault();
  };

  render() {
    return (
      <Modal size="sm" centered className="custom-map-modal modal-sign" {...this.props}>
        <div className="text-center p-3">
          <h3 className="pt-3">Sign Up</h3>
        </div>
        <div className="px-4 pt-0 pb-4">
          <Form
            onSubmit={this.handleSubmit}
            style={{ maxHeight: "400px", overflowY: "scroll" }}
          >
            <FormGroup>
              <label className="bold" htmlFor="fullname">
                Full Name
              </label>
              <br />
              <input
                value={this.state.value}
                onChange={this.handleChange}
                required
                className="forms"
                id="fullname"
                name="fullName"
              />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="username">
                Username
              </label>
              <br />
              <input
                value={this.state.value}
                onChange={this.handleChange}
                name="username"
                required
                className="forms"
                id="username"
              />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="email">
                Email
              </label>
              <br />
              <input
                value={this.state.value}
                onChange={this.handleChange}
                name="email"
                required
                type="email"
                className="forms"
                id="email"
              />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="password">
                Password
              </label>
              <br />
              <input
                value={this.state.value}
                onChange={this.handleChange}
                autoComplete="off"
                name="password"
                required
                className="forms"
                type="password"
                id="password"
              />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="list">
                Login As
              </label>
              <br />
              <select
                onChange={this.handleSelect}
                defaultValue={"0"}
                className="forms"
                id="list"
                name="role"
              >
                <option value="tenant" disabled>
                  Select Type
                </option>
                <option value="0">Patient</option>
                <option value="1">Doctor</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="gender">
                Gender
              </label>
              <br />
              <select
                onChange={this.handleSelect}
                className="forms"
                defaultValue={"male"}
                id="gender"
                name="gender"
              >
                <option value="male" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="phone">
                Phone
              </label>
              <br />
              <input
                value={this.state.value}
                onChange={this.handleChange}
                name="phone"
                required
                className="forms"
                id="phone"
                type="number"
              />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="address">
                Address
              </label>
              <textarea
                required
                style={{ height: 100 }}
                value={this.state.value}
                onChange={this.handleChange}
                name="address"
                rows="6"
                cols="50"
                className="forms"
                id="address"
              />
            </FormGroup>
            <button type="submit" className="btn-modal mb-4" disabled={this.state.loading}>
              {this.state.loading && <div className="btn-loader"></div>}
              {!this.state.loading && <span>Sign Up</span>}
            </button>
          </Form>
        </div>
      </Modal>
    );
  }
}
