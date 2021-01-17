import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import SignIn from "./modals/SignIn";
import SignUp from "./modals/SignUp";
import DropdownPatient from "./dropdown/dropdownPatient";
import DropdownDokter from "./dropdown/dropdownDokter";
import logo from "../assets/img/logo.svg";

export default class Header extends Component {
  state = {
    signin: false,
    opens: false,
    open: false
  };

  componentDidMount() {
    const status = localStorage.getItem("login");
    const owner = localStorage.getItem("owner");
    this.setState({ signin: status, owner: owner });
  }

  modal = () => {
    const paid = localStorage.getItem("paid");
    this.setState({ opens: !this.state.show });
    if (paid > 0) {
      this.setState({ paid: true });
    }
  };

  signUp = () => {
    const paid = localStorage.getItem("paid");
    this.setState({ open: !this.state.show });
    if (paid > 0) {
      this.setState({ paid: true });
    }
  };

  render() {
    const auth = localStorage.getItem("auth");
    const stats = localStorage.getItem("role");

    return (
      <Navbar
        bg="white"
        expand="lg"
        className="shadows py-2 fixed-top px-2"
      >
        <SignIn
          show={this.state.opens}
          onHide={() => this.setState({ opens: !this.state.opens })}
        />

        <SignUp
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />

        <div className="container py-0">
          <Link to="/">
            <img style={{ height: "42px" }} src={logo} alt=".." />
          </Link>

          {auth ? (
            stats === "1" ? (
              <DropdownDokter />
            ) : (
              <DropdownPatient />
            )
          ) : (
            <>
              <div className="d-flex">
                <button
                  onClick={this.modal}
                  className="btn-sign btn mr-3 font-weight-bold"
                >
                  SignIn
                </button>
                <button
                  onClick={this.signUp}
                  className="btn-sign btn btn-light font-weight-bold"
                >
                  SignUp
                </button>
              </div>
            </>
          )}
        </div>
      </Navbar>
    );
  }
}
