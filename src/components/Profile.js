import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../_actions/user";

import email from "../assets/img/email.svg";
import tenant from "../assets/img/dokter.svg";
import gender from "../assets/img/gender.svg";
import phone from "../assets/img/phone.svg";
import address from "../assets/img/place.svg";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getProfile(1);
  }

  render() {
    const { data: profileData, loading, error } = this.props.user;

    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <p>d</p>;
    return (
      <>
        {profileData && (
          <>
            <div className="d-flex align-items-center mb-4">
              <img
                style={{ height: 100, width: 100 }}
                className="rounded-circle mr-3"
                src={
                  "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png"
                }
                alt="..."
              />
              <div>
                <h4>{profileData.fullName}</h4>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success"
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={email} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{profileData.email}</p>
                <small>Email</small>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={tenant} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">
                  {profileData.role > 0 ? (
                    <span>Dokter</span>
                  ) : (
                    <span>Patient</span>
                  )}
                </p>
                <small>Status</small>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={gender} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{profileData.gender}</p>
                <small>Gender</small>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={phone} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{profileData.phone}</p>
                <small>Phone Number</small>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={address} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{profileData.address}</p>
                <small>Address</small>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: id => dispatch(getProfile(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
