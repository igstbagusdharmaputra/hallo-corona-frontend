import React from "react";
import Navbar from "../components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { postConsultation } from "../_actions/consultation";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false
    };
  }

  liveConsul = date => {
    const { data } = this.state;
    this.setState({
      data: { ...data, liveConsul: date }
    });
  };

  bornDate = date => {
    const { data } = this.state;
    this.setState({
      data: { ...data, bornDate: date }
    });
  };

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

  handleSubmit = () => {
    this.props.postConsultation(this.state.data);
  };

  render() {
    const { data } = this.state;

    const { data: consul ,success, loading, error } = this.props.consul;

    if (loading) return <h1>Loading</h1>;
    if (success) return <Redirect to="/profile" />;

    return (
      <>
        <Navbar />
        <div className="container margin-top pb-5" style={{ marginTop: 100 }}>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-control-label bold">
                        Full Name
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.fullName || ""}
                        name="fullName"
                        className="forms"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="phone"
                        className="form-control-label bold"
                      >
                        Phone
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.phone || ""}
                        name="phone"
                        className="forms"
                        type="phone"
                        id="phone"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="bold">Born Date</label>
                          <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="date-box w-100"
                            selected={data.bornDate}
                            onChange={this.bornDate}
                            name="bornDate"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label
                            htmlFor="age"
                            className="form-control-label bold"
                          >
                            Age
                          </label>
                          <input
                            required
                            autoComplete="off"
                            onChange={this.handleChange}
                            value={data.age || ""}
                            name="age"
                            className="forms"
                            type="number"
                            id="age"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label
                            htmlFor="height"
                            className="form-control-label bold"
                          >
                            Height
                          </label>
                          <input
                            required
                            autoComplete="off"
                            onChange={this.handleChange}
                            value={data.height || ""}
                            name="height"
                            className="forms"
                            type="number"
                            id="height"
                          />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label
                            htmlFor="weight"
                            className="form-control-label bold"
                          >
                            Weight
                          </label>
                          <input
                            required
                            onChange={this.handleChange}
                            value={data.weight || ""}
                            name="weight"
                            autoComplete="off"
                            className="forms"
                            type="number"
                            id="weight"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="gender"
                        className="form-control-label bold"
                      >
                        Gender
                      </label>
                      <select
                        onChange={this.handleSelect}
                        defaultValue={"select"}
                        name="gender"
                        id="gender"
                        className="forms"
                      >
                        <option value="select" disabled>
                          Select Type
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="subject"
                        className="form-control-label bold"
                      >
                        Subject
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.subject || ""}
                        name="subject"
                        className="forms"
                        type="text"
                        id="subject"
                      />
                    </div>

                    <div className="form-group">
                      <label className="bold">Live Consultation Date</label>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        className="date-box w-100"
                        selected={data.liveConsul}
                        onChange={this.liveConsul}
                        minDate={new Date()}
                        name="liveConsul"
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="form-control-label bold"
                      >
                        Description
                      </label>
                      <textarea
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.description || ""}
                        name="description"
                        id="description"
                        className="textareas"
                      />
                    </div>

                    <div className="mt-3 float-right d-flex">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading && <div className="btn-loader"></div>}
                        {!loading && <span>Send</span>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { consul: state.consultation };
};

const mapDispatchToProps = dispatch => {
  return {
    postConsultation: data => dispatch(postConsultation(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
