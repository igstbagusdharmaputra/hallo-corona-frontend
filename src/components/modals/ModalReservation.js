import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Detail extends Component {
  state = {
    data: {}
  };

  handleChange = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({ ...data, reply: value });
  };

  render() {
    const { data: consulData, loading, error } = this.props.consul;

    if (error) return <>Error</>;
    if (loading)
      return (
        <>
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </>
      );

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dispatch="true"
      >
        {consulData && (
          <div className="pt-3 p-2 mb-3">
            <div className="px-3">
              <div className="d-flex justify-content-between align-items-top">
                <div className="pt-3">
                  <h4>{consulData.subject}</h4>
                  <p>{consulData.description}</p>
                </div>
                <div>
                  <div className="p-3 timeline-wrapper">
                    <ul className="StepProgress">
                      <li className="StepProgress-item is-done">
                        <div className="d-flex">
                          <div className="mr-4">
                            <div className="bold">Date of Complaint</div>
                            <div>{consulData.createdAt}</div>
                          </div>
                        </div>
                      </li>
                      <li className="StepProgress-item is-done">
                        <div className="d-flex">
                          <div className="mr-4">
                            <div className="bold">LIVE Consultation</div>
                            <div>{consulData.liveConsul}</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <table className="table table-striped table-bordered table-sm">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>FullNAme</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>age</th>
                    <th>height</th>
                    <th>weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{consulData.fullName}</td>
                    <td>{consulData.gender}</td>
                    <td>{consulData.phone}</td>
                    <td>{consulData.age}</td>
                    <td>{consulData.height}</td>
                    <td>{consulData.weight}</td>
                  </tr>
                </tbody>
              </table>
              <div className="form-group">
                <label
                  htmlFor="description"
                  className="form-control-label bold"
                >
                  Give Response
                </label>
                <textarea
                  required
                  autoComplete="off"
                  value={this.state.data.reply}
                  onChange={this.handleChange}
                  name="description"
                  id="description"
                  className="textareas"
                />
              </div>
              <div className="float-right d-flex">
                <Button
                  variant="danger"
                  className="mr-2 btn-sm bold"
                  onClick={this.props.onHide}
                >
                  Cancel
                </Button>
                <Button
                  variant="success"
                  className="bold"
                  onClick={this.props.onHide}
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    consul: state.consultationId
  };
};

export default connect(mapStateToProps)(Detail);
