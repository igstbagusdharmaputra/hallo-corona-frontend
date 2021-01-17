import React, { Component } from "react";
import { connect } from "react-redux";
import { getConsultation } from "../_actions/consultation";

class Consultation extends Component {
  componentDidMount() {
    this.props.getConsultation();
  }

  render() {
    const { data: consul, loading, error } = this.props.consul;

    if (error) return <>error</>;
    if (loading) return <>Loading</>;

    return (
      <>
        {consul &&
          consul.length > 0 &&
          consul.map((index, i) => (
            <div className="card p-3 mb-3">
              <div className="d-flex align-items-top mb-3">
                <div className="mr-3">
                  <img
                    src="https://www.eastriseaviation.com/wp-content/uploads/2015/11/blank-profile-picture-200x200.png"
                    alt="..."
                    className="avatar"
                    style={{ height: 60, width: 60, borderRadius: 45 }}
                  />
                </div>
                <div className="d-flex w-100 justify-content-between align-content-top">
                  <div>
                    <h5 className="mb-0">{index.subject}</h5>
                    <small>{index.createdAt}</small>
                    <br />
                    <small>{index.description}</small>
                  </div>
                  <div>
                    <small className="bold">{index.createdAt}</small>
                  </div>
                </div>
              </div>
              <div className="border-top">
                <div className="text-center mt-3">
                  <h5>Waiting For Reply</h5>
                </div>
                {/**

                <div
                  style={{ marginLeft: 70 }}
                  className="d-flex align-items-center mt-3"
                >
                  <div className="mr-3">
                    <img
                      src="https://www.eastriseaviation.com/wp-content/uploads/2015/11/blank-profile-picture-200x200.png"
                      alt="..."
                      className="avatar"
                      style={{ height: 60, width: 60, borderRadius: 45 }}
                    />
                  </div>
                  <div>
                    <div>
                      <small>Keluhan: Dok saya ganteng</small>
                      <br />
                      <small>Dr Anto</small>
                    </div>
                  </div>
                </div>

                 */}
              </div>
            </div>
          ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { consul: state.consultation };
};

const mapDispatchToProps = dispatch => {
  return {
    getConsultation: () => dispatch(getConsultation())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Consultation);
