import React, { Component } from "react";
import Articles from "../components/Articles";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div className="container margin-top pb-5 mainhead">
          <div className="text-center mb-5">
            <h2>Artikel Today!</h2>
          </div>
          <Articles />
        </div>
      </>
    );
  }
}

export default Home;
