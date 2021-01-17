import React, { Component } from "react";
import search from "../assets/img/search.svg";
import Navbar from "../components/Navbar";

import Detail from "../components/modals/ModalReservation";

import { connect } from "react-redux";
import { getConsultation } from "../_actions/consultation";
import { getConsultationId } from "../_actions/consultationId";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle = e => {
    this.props.getConsultationId(e.target.id);
    this.setState({ open: true });
  };

  componentDidMount() {
    this.props.getConsultation();
  }

  badge = id => {
    if (id === "Waiting Approve Consultation Live") {
      return "danger";
    }
    if (id === 1) {
      return "primary";
    }
    if (id === 2) {
      return "success";
    }
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
      <>
        <Navbar />
        <Detail
          data={consulData.id || " "}
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />
        <div className="container margin-top pb-5" style={{ marginTop: 100 }}>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>No</th>
                <th>User</th>
                <th>Subject</th>
                <th>Date of Complaint</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {consulData &&
                consulData.length > 0 &&
                consulData.map((order, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{order.fullName}</td>
                    <td>{order.subject}</td>
                    <td>{order.liveConsul}</td>
                    <td>
                      <div
                        className={`badge badge-${this.badge(order.status)}`}
                      >
                        {order.status}
                      </div>
                    </td>
                    <td>
                      <img
                        style={{ cursor: "pointer", width: 17 }}
                        id={order.id}
                        onClick={this.toggle}
                        src={search}
                        alt=".."
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    consul: state.consultation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getConsultation: () => dispatch(getConsultation()),
    getConsultationId: id => dispatch(getConsultationId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
