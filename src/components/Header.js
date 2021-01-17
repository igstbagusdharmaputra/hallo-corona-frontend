import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignIn from "./modals/SignIn";
import Jumbotron from "react-bootstrap/Jumbotron";
import konsul from "../assets/img/konsultasi.svg";
import covid from "../assets/headerimg/covid.svg";
import mata from "../assets/headerimg/mata.svg";
import ramai from "../assets/headerimg/ramai.svg";
import rumah from "../assets/headerimg/rumah.svg";
import tangan from "../assets/headerimg/tangan.svg";

class Header extends Component {
  state = {
    auth: false,
    open: false,
    redir: false
  };

  componentDidMount() {
    const auth = localStorage.getItem("auth");
    this.setState({ auth });
  }

  handleClick = () => {
    if (this.state.auth) {
      this.setState({ redir: true });
    } else {
      this.setState({ open: !this.state.open });
    }
  };

  render() {
    if (this.state.redir) return <Redirect to="/reservation" />;

    return (
      <div style={{ marginTop: 50 }}>
        <SignIn
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />
        <Jumbotron>
          <div className="container py-5 d-flex align-items-top justify-content-between">
            <div>
              <div className="d-flex align-items-top">
                <img src={covid} className="covid" alt="..." />
                <div style={{ marginLeft: 70 }}>
                  <h1 className="text-white">Cegah Covid-19</h1>
                  <h3 className="text-white">dengan melakukan:</h3>
                </div>
              </div>
              <p className="mt-3" style={{ marginLeft: 0 }}>
                <button
                  onClick={this.handleClick}
                  className="btn btn-light"
                  style={{ color: "#ff6185" }}
                >
                  <img
                    style={{ height: 40 }}
                    className="mr-3"
                    alt=".."
                    src={konsul}
                  />
                  Konsultasi Dengan Dokter
                </button>
              </p>
            </div>
            <div className="d-flex" style={{ maxWidth: "620px" }}>
              <div className="text-center">
                <img src={ramai} alt="..." className="" />
                <p className="bold text-white mt-3">
                  Tidak mendatangi tempat ramai
                </p>
              </div>

              <div className="text-center">
                <img src={tangan} alt="..." className="" />
                <p className="bold text-white mt-3">
                  Hindari untuk berjabat tangan
                </p>
              </div>

              <div className="text-center">
                <img src={mata} alt="..." className="" />
                <p className="bold text-white mt-3">
                  Hindari menyentuh mata secara langsung
                </p>
              </div>

              <div className="text-center">
                <img src={rumah} alt="..." className="" />
                <p className="bold text-white mt-3">
                  Tetap dirumah sampai pandemi selesai
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
