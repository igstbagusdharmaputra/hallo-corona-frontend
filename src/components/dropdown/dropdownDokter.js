import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import profile from "../../assets/img/user.svg";
import article from "../../assets/img/article.svg";
import logout from "../../assets/img/logout.svg";

export default class Owner extends Component {
  state = {
    logout: false
  };

  handleSignOut = () => {
    localStorage.clear();
    this.setState({ logout: !this.state.logout });
  };

  render() {
    if (this.state.logout) {
      window.location.href = "/";
    }

    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle
            className="nav-link dropdown-toggle p-0 mr-0"
            style={{ borderRadius: "45px" }}
          >
            <img
              src="https://www.eastriseaviation.com/wp-content/uploads/2015/11/blank-profile-picture-200x200.png"
              className="avatar"
              style={{ height: "35px", width: "35px", borderRadius: "45px" }}
              alt="Avatar"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-right mt-3">
            <Link to="/profile" className="dropdown-item">
              <img className="dropdown-icon" src={profile} alt=".." />
              Profile
            </Link>
            <Link to="/add" className="dropdown-item">
              <img className="dropdown-icon" src={article} alt=".." />
              Add Article
            </Link>
            <div className="divider"></div>
            <div
              style={{ cursor: "pointer" }}
              onClick={this.handleSignOut}
              className="dropdown-item"
            >
              <img className="dropdown-icon" src={logout} alt=".." />
              Logout
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}