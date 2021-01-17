import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Consultation from "../components/Consultation";

class Profil extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container margin-top pb-5">
          <nav aria-label="breadcrumb" role="navigation">
            <ol className="breadcrumb bg-white pl-0">
              <li className="breadcrumb-item active" aria-current="page">
                Profile
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <Profile />
            </div>
            <div className="col">
              <h5>Consultation</h5>
              <Consultation />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profil;